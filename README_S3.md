# Hosting on S3

## Create an S3 Bucket:

Log in to the AWS Management Console.
Navigate to the S3 service.
Click on "Create bucket."
Choose a unique name for your bucket (e.g., "everesst-tempo-camis-sync-ui").
Select the region for your bucket.
Click "Create."
Enable Static Website Hosting:

After creating the bucket, select it from the list.
Go to the "Properties" tab.
Scroll down to the "Static website hosting" section and click "Edit."
Choose "Use this bucket to host a website."
Enter the index document (e.g., "index.html"), which is the default page visitors will see.
Optionally, provide an error document (e.g., "error.html") to display when a resource is not found.
Click "Save changes."
Configure Bucket Permissions:

Still on the bucket properties page, go to the "Permissions" tab.
Click on "Bucket Policy."
You need to add a policy that allows public read access to the objects in the bucket. Below is a sample bucket policy for public read access:
json
Copy code
{
"Version": "2012-10-17",
"Statement": [
{
"Effect": "Allow",
"Principal": "*",
"Action": "s3:GetObject",
"Resource": "arn:aws:s3:::your-bucket-name/*"
}
]
}
Replace "your-bucket-name" with the name of your S3 bucket. This policy grants read permission to all users.

Click "Save changes."
Upload Your Website Files:

In the S3 bucket page, click on the "Upload" button.
Add your website files (e.g., HTML, CSS, JavaScript, images) to the bucket.
Ensure that the "Manage public permissions" option is checked while uploading the files to make them publicly accessible.
Configure Static Website URL:

Once the files are uploaded, go back to the "Properties" tab of the bucket.
Scroll down to the "Static website hosting" section, and you'll see the "Endpoint" URL for your static website.
Testing Your Website:

Copy the endpoint URL provided in the "Static website hosting" section.
Paste the URL into your web browser to test your static website. It should be accessible to the public now.
Set Up a Custom Domain (Optional):

If you want to use a custom domain for your static website, you can do this using Amazon Route 53 or any other domain registrar service. Follow the respective service's documentation to configure the DNS settings to point to your S3 bucket's website endpoint.
That's it! Your Amazon S3 bucket is now configured to host a static website, and it should be accessible to the public via the S3 bucket's endpoint or your custom domain, if you set one up.

Disable Block Public Access:
Go to the S3 bucket properties page.
Click on the "Permissions" tab.
Under the "Block public access" section, click on the "Edit" button.
Make sure all the checkboxes for blocking public access are unchecked.
There are four checkboxes: "Block all public access," "Block public access to buckets and objects granted through new access control lists (ACLs)," "Block public access to buckets and objects granted through any access control lists (ACLs)," and "Block public access to buckets and objects granted through new public bucket or access point policies."
Uncheck all these checkboxes to disable block public access.
Click "Save changes."
By disabling "Block public access," you allow your S3 bucket to be publicly accessible, provided you have also set appropriate permissions for the bucket and its objects, as mentioned in the previous steps. Remember that with public access, anyone with the URL can access the objects in your bucket, so it's essential to be cautious about what data you make publicly available.

## Setup user credentials
To upload contents to an Amazon S3 bucket outside of the AWS website, you need to use AWS access keys associated with an IAM (Identity and Access Management) user or role that has the necessary permissions to perform S3 operations. These access keys consist of an Access Key ID and a Secret Access Key. Here's how you can find or generate the access keys:

Access the AWS Management Console:

Go to the AWS Management Console (https://aws.amazon.com/console/) and sign in with your AWS account credentials.
Navigate to the IAM Service:

Once you are logged in, search for and select the "IAM" service from the AWS Management Console. It is usually found under the "Security, Identity & Compliance" section.
Access Users or Roles:

In the IAM dashboard, click on "Users" in the left-hand navigation pane to manage IAM users or click on "Roles" to manage IAM roles. If you don't have any existing IAM user or role with appropriate S3 permissions, you will need to create one.
Create a New IAM User (if required):

To create a new IAM user, click on the "Add user" button. `Github-Action`
Complete the user creation process.

## Setup group permissions
Add to a group `DevOps` and add the above user.
Add the Permission to this group : 


## Retrieve the Access Keys:

After creating the IAM user or identifying an existing user or role with the required S3 permissions, select the user or role from the list.
Go to the "Security credentials" tab for IAM users or "Permissions" tab for IAM roles.
Under the "Access keys" section, you can either view existing access keys or generate new ones.
Generate New Access Keys (if required):

To generate new access keys, click on the "Create access key" button.
A new Access Key ID and Secret Access Key will be displayed. Make sure to save the Secret Access Key securely as it will not be shown again.
With the Access Key ID and Secret Access Key, you can now use AWS SDKs, AWS CLI, or other third-party tools to upload contents to your S3 bucket programmatically. Be cautious with the Secret Access Key, as it provides access to your AWS resources, and you should avoid sharing it publicly or checking it into version control systems.

## Add the user credentials to your Github Repository

under EveresstTempoSyncUI/settings/secrets/actions

Add the following secrets and their values :

    AWS_ACCESS_KEY_ID
    AWS_REGION
    AWS_S3_BUCKET
    AWS_SECRET_ACCESS_KEY


## Run the Github Action 
by taking a release and check the url

    http://AWS_S3_BUCKET.s3-website.AWS_REGION.amazonaws.com