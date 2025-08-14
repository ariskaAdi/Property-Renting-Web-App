import { transport } from "../../config/nodemailer";
import AppError from "../../errors/AppError";
import { createNewOtp } from "../../repositories/auth/auth.repository";
import {
  changePasswordUser,
  findUserById,
  getEmailById,
} from "../../repositories/user/user.respository";
import { PASSWORD_RESET_REQUEST_TEMPLATE } from "../../utils/emailTemplates";
import { generatedOtp } from "../../utils/generateOtp";
import { hashPassword } from "../../utils/hash";

export const getUserById = async (userId: string) => {
  const user = await findUserById(userId);

  if (!user) {
    throw new AppError("User not found", 404);
  }

  return user;
};

export const resetPasswordUser = async (
  userId: string,
  newPassword: string
) => {
  const newHashedPassword = await hashPassword(newPassword);
  const changePassword = await changePasswordUser(userId, newHashedPassword);

  return changePassword;
};

export const otpPasswordServices = async (userId: string) => {
  // generate otp
  const email = await getEmailById(userId);

  if (!email) {
    throw new AppError("User email not found", 404);
  }

  const verificationOtp = generatedOtp();
  const otpPassword = await createNewOtp({
    email,
    reset_password_otp: verificationOtp,
  });

  await transport.sendMail({
    from: process.env.EMAIL_USER,
    to: email,
    subject: "Reset Your Password",
    html: PASSWORD_RESET_REQUEST_TEMPLATE.replace(
      "{verificationCode}",
      verificationOtp
    ),
  });

  return otpPassword;
};
