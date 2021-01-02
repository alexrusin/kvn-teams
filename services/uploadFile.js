import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3'

const s3 = new S3Client({ region: process.env.AWS_REGION });

export default async (payload, fileName) => {
    const uploadParams = {Bucket: process.env.AWS_BUCKET, Key: fileName, Body: payload, ACL: 'public-read'}

    try {
        const data = await s3.send(new PutObjectCommand(uploadParams))
        return data
      } catch (err) {
        console.log("Error", err);
      }
    
}