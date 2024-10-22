import { NextApiRequest } from "next";
import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

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

    const newSkill = await prisma.skill.create({
      data: {
        title,
        order: order,
        image: "",
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
