import { NextResponse } from "next/server";
import cloudinary from "@/lib/cloudinary";
import prisma from "@/lib/prisma";


export async function POST(req) {
  try {
    const formData = await req.formData();
    const file = formData.get("file");
    const title = formData.get("title") || file.name || "Untitled";

    if (!file) {
      return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
    }

    // Diconvert ke bufferr buat dikirim ke Cloudinary
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    // Upload ke Cloudinary
    const uploadResult = await new Promise((resolve, reject) => {
      const stream = cloudinary.uploader.upload_stream(
        { folder: "delynn-gallery" },
        (error, result) => {
          if (error) reject(error);
          else resolve(result);
        }
      );
      stream.end(buffer);
    });

    // Buat simpen foto ke database lewat prisma
    const newPhoto = await prisma.photo.create({
      data: {
        title,
        imageUrl: uploadResult.secure_url,
      },
    });

    return NextResponse.json(newPhoto);
  } catch (err) {
    console.error("Upload error:", err);
    return NextResponse.json({ error: "Upload failed" }, { status: 500 });
  }
}

export async function GET() {
  try {
    const photos = await prisma.photo.findMany({
      orderBy: { createdAt: "desc" },
    });
    return NextResponse.json(photos);
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Failed to load photos" }, { status: 500 });
  }
}