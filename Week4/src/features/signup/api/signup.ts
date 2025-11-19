import { apiClient } from '../../../shared/api';
import type { User } from '../../../entities/user';

type SignupRequest = Pick<User, 'username' | 'password' | 'name' | 'email' | 'age'>;

type SignupResponse = {
  id: number;
  username: string;
  name: string;
  email: string;
  age: number;
  status: string;
};

export const signup = async (userData: SignupRequest): Promise<SignupResponse> => {
  const response = await apiClient.post<SignupResponse>('/api/v1/users', userData);
  return response.data;
};

