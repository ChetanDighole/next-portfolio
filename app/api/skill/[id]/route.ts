import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
import { S3Client, DeleteObjectCommand } from "@aws-sdk/client-s3";

const s3Client = new S3Client({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});

// function to delete file from AWS S3
async function deleteFileFromAWS(url: string) {
  try {
    const image = url.substring(url.lastIndexOf("/") + 1);

    const param = {
      Bucket: process.env.AWS_BUCKET_NAME,
      Key: image,
    };

    const command = new DeleteObjectCommand(param);

    await s3Client.send(command);

    return NextResponse.json({
      message: `File ${image} deleted successfully`,
      success: true,
    });
  } catch (error) {
    return null;
  }
}

export async function DELETE(req: Request) {
  try {
    const prisma = new PrismaClient();

    const url = new URL(req.url);
    const id = url.pathname.split("/").pop();

    if (!id) {
      return NextResponse.json({ message: "no id recieved", success: false });
    }

    // find the data from db through id
    const result = await prisma.skill.findUnique({
      where: {
        id: parseInt(id),
      },
    });

    if (!result) {
      return NextResponse.json({ result, success: false });
    }

    // delete from awd
    const awsRes = await deleteFileFromAWS(result.image);

    if (!awsRes) {
      return NextResponse.json({ result: awsRes, success: false });
    }

    //delete from db
    const deleteFromDB = await prisma.skill.delete({
      where: {
        id: parseInt(id),
      },
    });

    if (!deleteFromDB) {
      return NextResponse.json({ result: deleteFromDB, success: false });
    }

    return NextResponse.json({ result: deleteFromDB, success: true });
  } catch (error) {
    return NextResponse.json({
      message: "catch at delete method of skill route",
      error,
      success: false,
    });
  }
}
