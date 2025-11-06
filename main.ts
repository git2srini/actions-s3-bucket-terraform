import { Construct } from "constructs";
import { App, TerraformStack } from "cdktf";
import { AwsProvider } from "@cdktf/provider-aws/lib/provider";
import { S3Bucket } from "@cdktf/provider-aws/lib/s3-bucket";

class MyStack extends TerraformStack {
  constructor(scope: Construct, id: string) {
    super(scope, id);

    new AwsProvider(this, "AWS", {
      region: "us-east-1",
    });

    new S3Bucket(this, "MyBucket", {
      bucket: "srini-demo-bucket212",
      acl: "private",
      tags: {
        Environment: "Dev",
        Owner: "GitHubActions",
      },
    });
  }
}

const app = new App();
new MyStack(app, "s3-bucket-stack");
app.synth();
