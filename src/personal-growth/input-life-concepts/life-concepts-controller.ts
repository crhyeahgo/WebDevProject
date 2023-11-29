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

   // return JSON.stringify(response.json());
    return 'this will eventually show something loaded from the cloud...';
  }
}