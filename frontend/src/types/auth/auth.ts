export type User = {
  id: string;
  email: string;
  role: string;
  full_name: string;
  is_verified: boolean;
  profile_picture: string | null;
};

export type LoginResponse = {
  message: string;
  success: boolean;
  user: User;
};
