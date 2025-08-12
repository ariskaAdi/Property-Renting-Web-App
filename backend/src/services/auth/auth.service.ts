import { Role } from "../../../prisma/generated/client";
import { transport } from "../../config/nodemailer";
import AppError from "../../errors/AppError";
import {
  createUser,
  findUserByEmail,
} from "../../repositories/user/user.repository";
import { VERIFICATION_EMAIL_TEMPLATE } from "../../utils/emailTemplates";
import { generatedOtp } from "../../utils/generateOtp";
import { hashPassword } from "../../utils/hash";

export const registerService = async (data: any) => {
  const { full_name, email, password_hash, role } = data;
  const existingUser = await findUserByEmail(email);

  //   validasi email
  if (existingUser) {
    throw new AppError("User already exist", 400);
  }

  // validasi role
  if (!Object.values(Role).includes(role)) {
    throw new AppError("Invalid role", 400);
  }

  // generate otp
  const verificationOtp = generatedOtp();

  const newUser = await createUser({
    full_name,
    email,
    role,
    password_hash: await hashPassword(password_hash),
    is_verified: false,
    verify_otp: verificationOtp,
    verify_otp_expires_at: new Date(Date.now() + 15 * 60 * 1000),
  });

  await transport.sendMail({
    from: process.env.EMAIL_USER,
    to: email,
    subject: "Verify Your Email",
    html: VERIFICATION_EMAIL_TEMPLATE.replace(
      "{verificationCode}",
      verificationOtp
    ),
  });
  const { password_hash: _, ...userWithoutPassword } = newUser;
  return userWithoutPassword;
};
