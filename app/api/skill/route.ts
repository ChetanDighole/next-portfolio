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

    const customFileName = `${title}_skill.${image.name.split(".").pop()}`;

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

    return NextResponse.json(
      {
        message: "data posted successfully",
        success: true,
      },
      {
        status: 200,
      }
    );
  } catch {
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
  } catch {
    return NextResponse.json({
      message: "catch at get method",
      success: false,
    });
  }
}
