import { apiClient } from '../../../shared/api';

type DeleteUserResponse = {
  success: boolean;
  code: string;
  message: string;
  data: null;
};

export const deleteUser = async (userId: string): Promise<DeleteUserResponse> => {
  const response = await apiClient.delete<DeleteUserResponse>(`/api/v1/users/${userId}`);
  return response.data;
};

