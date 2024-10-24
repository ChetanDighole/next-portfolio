import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { uploadFileToS3 } from "@/helper/awsFileHandler";

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

    const newCertification = await prisma.certification.create({
      data: {
        title,
        order: order,
        image: uploadImage.url,
      },
    });

    if (!newCertification) {
      return NextResponse.json({
        message: "unable to post in database",
        success: false,
      });
    }

    return NextResponse.json(
      {
        message: "data posted successfully",
        success: true,
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    return NextResponse.json({
      message: "catch at certification post route",
      success: false,
    });
  }
}

// GET * certification

export async function GET() {
  try {
    const prisma = new PrismaClient();
    const data = await prisma.certification.findMany({});
    return NextResponse.json({ data, success: true });
  } catch (error) {
    return NextResponse.json({
      message: "catch at get method",
      success: false,
    });
  }
}
