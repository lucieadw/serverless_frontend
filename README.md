# Shop Frontend for the Serverless Webshop

## Content and Purpose
This repository contains the frontend for a web shop for plants in form of a single page application developed with Vue.js 3.0. It is written in TypeScript and hosted on AWS S3 and publicly availabe under: http://lucies-webshop-frontend.s3-website.eu-central-1.amazonaws.com/#/ <br>
It utilizes the [serverless_webshop](https://github.com/lucieadw/serverless_webshop) backend which handles product data, baskets and orders.
For more information on the underlying project and thesis, see the web shop's README.md. This repository is simply for the completeness of the project and serves no deeper purpose.

### Requirements

* Node
* AWS CLI
* AWS Account

Create an S3 bucket in the AWS console with public web hosting enabled, to deploy your own version of the frontend.

### Build and deploy

```bash
npm i
npm run build
aws s3 sync ./dist s3://<your_s3_bucket_name>
```

### Run locally

```bash
npm i
npm run serve
```

Open `http://localhost:8080` in your browser.
