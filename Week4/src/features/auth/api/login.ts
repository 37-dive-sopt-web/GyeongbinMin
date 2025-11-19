import { apiClient } from '../../../shared/api';

type LoginRequest = {
  username: string;
  password: string;
};

type LoginResponseData = {
  userId: number;
  message: string;
};

type LoginResponse = {
  success: boolean;
  code: string;
  message: string;
  data: LoginResponseData | null;
};

export const login = async (credentials: LoginRequest): Promise<LoginResponse> => {
  const response = await apiClient.post<LoginResponse>('/api/v1/auth/login', credentials);
  return response.data;
};

