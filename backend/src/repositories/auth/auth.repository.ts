import { prisma } from "../../config/prisma";
import {
  CreateNewOtp,
  CreateUser,
  VerifyEmail,
} from "../../types/user/users.types";

export const findUserByEmail = async (email: string) => {
  return prisma.users.findUnique({
    where: { email },
  });
};

export const createUser = async (data: CreateUser) => {
  return prisma.users.create({
    data,
  });
};

export const createNewOtp = async (data: CreateNewOtp) => {
  return prisma.users.update({
    where: { email: data.email },
    data,
  });
};

export const updateStatusEmail = async (data: VerifyEmail) => {
  return prisma.users.update({
    where: { email: data.email },
    data,
  });
};
