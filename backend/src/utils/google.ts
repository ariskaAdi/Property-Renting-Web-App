import { google } from "googleapis";

const isProduction = process.env.NODE_ENV === "production";

const GOOGLE_REDIRECT_URI = isProduction
  ? "https://property-renting-web-app-qogj.vercel.app/auth/google/callback"
  : "http://localhost:4000/auth/google/callback";

export const oauth2Client = new google.auth.OAuth2(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET,
  GOOGLE_REDIRECT_URI
);

export const scope = [
  "https://www.googleapis.com/auth/userinfo.email",
  "https://www.googleapis.com/auth/userinfo.profile",
];

export const authUrl = oauth2Client.generateAuthUrl({
  access_type: "offline",
  scope,
  include_granted_scopes: true,
});
