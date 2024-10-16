import { NextApiRequest } from "next";
import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

export async function POST(req: Request) {
  try {
    const prisma = new PrismaClient();
    const body = await req.formData();

    const title = body.get("title") as string;
    const Image = body.get("image");
    const order = parseInt(body.get("order") as string, 10);

    if (!title || !Image) {
      NextResponse.json({ message: "incomplete form data", success: false });
    }

    const newSkill = await prisma.skill.create({
      data: {
        title,
        order: order,
        image: "",
      },
    });

    if (!newSkill) {
      NextResponse.json({
        message: "unable to post in database",
        success: false,
      });
    }

    NextResponse.json({ message: "data posted successfully", success: true });
  } catch (error) {
    NextResponse.json({ message: "catch at skill post route", success: false });
  }
}
