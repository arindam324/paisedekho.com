import cloudinary from "cloudinary";

export default cloudinary.v2.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLIENT_KEY,
  api_secret: process.env.CLIENT_SECRET,
});
