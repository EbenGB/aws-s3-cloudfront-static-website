# Static Website Hosting with S3 & CloudFront

## 📌 Project Overview
This project demonstrates how to host a **static website** on AWS using **Amazon S3** as the storage backend, **Amazon CloudFront** as the Content Delivery Network (CDN) for improved performance and global reach, and **Amazon Route 53** for custom domain management.  
The setup also integrates **AWS Certificate Manager (ACM)** for **SSL/TLS encryption**, ensuring secure HTTPS connections.

---

## 🏗 Architecture
![AWS Architecture Diagram](aws_s3_cloudfront_diagram.png)

**Workflow:**
1. **User** accesses the static website via a browser.
2. **Amazon CloudFront** delivers cached content from edge locations for low latency.
3. **Amazon S3** stores and serves the website files.
4. **AWS Certificate Manager (ACM)** provides SSL/TLS for secure HTTPS.
5. **Amazon Route 53** manages the custom domain and routes traffic to CloudFront.

---

## 🛠 Core AWS Services
- **Amazon S3** – Stores static website files.
- **Amazon CloudFront** – Delivers content via CDN.
- **Amazon Route**
