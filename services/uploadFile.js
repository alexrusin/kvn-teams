import AWS from 'aws-sdk'

AWS.config.update({
    region: process.env.AWS_REGION,
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
})
const s3 = new AWS.S3({apiVersion: '2006-03-01'});

export default (payload, fileName) => {
    const uploadParams = {Bucket: process.env.AWS_BUCKET, Key: fileName, Body: payload}

    s3.upload (uploadParams, function (err, data) {
        if (err) {
          console.log("Error", err);
        } if (data) {
          console.log("Upload Success", data.Location);
        }
    });
}