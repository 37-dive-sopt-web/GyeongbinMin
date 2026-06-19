import { apiClient } from '../../../shared/api';

type UserResponseData = {
  id: number;
  username: string;
  name: string;
  email: string;
  age: number;
  status: string;
};

type UserResponse = {
  success: boolean;
  code: string;
  message: string;
  data: UserResponseData | null;
};

export const getUserById = async (userId: string): Promise<UserResponse> => {
  const response = await apiClient.get<UserResponse>(`/api/v1/users/${userId}`);
  return response.data;
};

