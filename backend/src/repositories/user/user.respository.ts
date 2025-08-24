import { prisma } from "../../config/prisma";
import { UpdateUser } from "../../types/user/users.types";

export const findUserById = async (userId: string) => {
  return prisma.users.findUnique({
    where: { id: userId },
    include: { tenants: true },
  });
};

export const changePasswordUser = async (
  userId: string,
  newPassword: string
) => {
  return prisma.users.update({
    where: { id: userId },
    data: { password_hash: newPassword },
  });
};

export const getEmailById = async (userId: string) => {
  const user = await prisma.users.findUnique({
    where: { id: userId },
    select: { email: true },
  });
  return user?.email;
};

export const updateProfileRepository = async (
  data: UpdateUser,
  userId: string
) => {
  const user = await prisma.users.update({
    where: {
      id: userId,
    },
    data,
  });
};
