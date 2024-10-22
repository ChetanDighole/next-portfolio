import { NextApiRequest } from "next";
import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";

const s3Client = new S3Client({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});

async function uploadFileToS3(buffer: Buffer, filename: string) {
  const file = buffer;

  const param = {
    Bucket: process.env.AWS_BUCKET_NAME,
    Key: `${filename}`,
    Body: file,
  };

  const command = new PutObjectCommand(param);

  try {
    const res = await s3Client.send(command);

    const data = {
      res,
      url: `https://${process.env.AWS_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/${filename}`,
    };

    return data;
  } catch (error) {
    return error;
  }
}

export async function POST(req: Request) {
  try {
    const prisma = new PrismaClient();
    const body = await req.formData();

    const title = body.get("title") as string;
    const image = body.get("image") as File;
    const order = parseInt(body.get("order") as string, 10);

    if (!title || !image) {
      return NextResponse.json({
        message: "incomplete form data",
        success: false,
      });
    }

    const buffer = Buffer.from(await image.arrayBuffer());

    const customFileName = `${title}.${image.name.split(".").pop()}`;

    const uploadImage = await uploadFileToS3(buffer, customFileName);

    const newSkill = await prisma.skill.create({
      data: {
        title,
        order: order,
        image: uploadImage.url,
      },
    });

    if (!newSkill) {
      return NextResponse.json({
        message: "unable to post in database",
        success: false,
      });
    }

    return NextResponse.json({
      message: "data posted successfully",
      success: true,
    });
  } catch (error) {
    return NextResponse.json({
      message: "catch at skill post route",
      success: false,
    });
  }
}

// GET * skills

export async function GET() {
  try {
    const prisma = new PrismaClient();
    const data = await prisma.skill.findMany({});
    return NextResponse.json({ data, success: true });
  } catch (error) {
    return NextResponse.json({
      message: "catch at get method",
      success: false,
    });
  }
}
