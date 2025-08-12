import { prisma } from "../../config/prisma";
import { CreateUser } from "../../types/user/users.types";

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
