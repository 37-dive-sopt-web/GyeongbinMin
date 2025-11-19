import { apiClient } from '../../../shared/api';

type UpdateUserRequest = {
  name?: string;
  email?: string;
  age?: number;
};

type UpdateUserResponseData = {
  id: number;
  username: string;
  name: string;
  email: string;
  age: number;
  status: string;
};

type UpdateUserResponse = {
  success: boolean;
  code: string;
  message: string;
  data: UpdateUserResponseData | null;
};

export const updateUserProfile = async (
  userId: string,
  userData: UpdateUserRequest
): Promise<UpdateUserResponse> => {
  const response = await apiClient.patch<UpdateUserResponse>(`/api/v1/users/${userId}`, userData);
  return response.data;
};

