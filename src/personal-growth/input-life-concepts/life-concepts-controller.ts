import { GetObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { fromEnv } from "@aws-sdk/credential-provider-env";

export class LifeConceptsController  {
  saveTextToStorage(text: string) {
    // TODO
  }

  async loadTextFromStorage(): Promise<string> {
    // TODO - move this to a micro-service...?
    // Create an S3 client in the Ohio Region
   /* const s3Client = new S3Client({
      credentials: fromEnv(), // Getting process not defined error. Need to do this in node project in micro-service?
      region: "us-east-2"
    });

    // Get object from existing bucket
    const response = await s3Client.send(new GetObjectCommand({Bucket: 'hoo-webdevproject', Key: 'temp.txt'}));
    console.log(JSON.stringify(response));
    */

    // Fetch basic file from S3 (public access is enabled)
    const response = await fetch('https://hoo-webdevproject.s3.us-east-2.amazonaws.com/temp.txt');
    return response.text();
  }
}