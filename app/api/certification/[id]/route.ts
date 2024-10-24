import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
import { deleteFileFromAWS } from "@/helper/awsFileHandler";

export async function DELETE(req: Request) {
  try {
    const prisma = new PrismaClient();

    const url = new URL(req.url);
    const id = url.pathname.split("/").pop();

    if (!id) {
      return NextResponse.json({ message: "no id recieved", success: false });
    }

    // find the data from db through id
    const result = await prisma.certification.findUnique({
      where: {
        id: parseInt(id),
      },
    });

    if (!result) {
      return NextResponse.json({ result, success: false });
    }

    // delete from aws
    const awsRes = await deleteFileFromAWS(result.image);

    if (!awsRes) {
      return NextResponse.json({ result: awsRes, success: false });
    }

    //delete from db
    const deleteFromDB = await prisma.certification.delete({
      where: {
        id: parseInt(id),
      },
    });

    if (!deleteFromDB) {
      return NextResponse.json({ result: deleteFromDB, success: false });
    }

    return NextResponse.json(
      { result: deleteFromDB, success: true },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({
      message: "catch at delete method of certification route",
      error,
      success: false,
    });
  }
}
