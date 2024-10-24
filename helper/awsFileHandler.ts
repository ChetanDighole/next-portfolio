import {
  S3Client,
  DeleteObjectCommand,
  PutObjectCommand,
} from "@aws-sdk/client-s3";
import { NextResponse } from "next/server";

const s3Client = new S3Client({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});

export const deleteFileFromAWS = async (url: string) => {
  try {
    const image = url.substring(url.lastIndexOf("/") + 1);

    const param = {
      Bucket: process.env.AWS_BUCKET_NAME,
      Key: image,
    };

    const command = new DeleteObjectCommand(param);

    await s3Client.send(command);

    return {
      message: `File ${image} deleted successfully`,
      success: true,
    };
  } catch (error) {
    return null;
  }
};

export const uploadFileToS3 = async (buffer: Buffer, filename: string) => {
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
};
