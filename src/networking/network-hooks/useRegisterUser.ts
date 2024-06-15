import axios from 'axios';
import { useMutation, UseMutationOptions } from '@tanstack/react-query';
import { NO_NETWORK_ERROR_MESSAGE } from '../constants';

type Data = {
  username: string;
  email: string;
  password: string;
};

export type UserResponse = {
  jwt: string;
  user: {
    id: number;
    username: string;
    email: string;
    createdAt: Date;
    updatedAt: Date;
  };
  error?: {
    status: number;
    name: string;
    message: string;
  };
};

export const mutationKey = ['RegisterUser'];

async function registerUser(url: string, data: Data): Promise<UserResponse> {
  try {
    const { data: responseData } = await axios.post<UserResponse>(url, data);
    return responseData;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    throw new Error(
      error?.response?.data?.error?.message ?? NO_NETWORK_ERROR_MESSAGE,
    );
  }
}

export const useRegisterUser = ({
  url,
  options,
}: {
  url: string;
  options?: UseMutationOptions<UserResponse, Error, Data>;
}) => {
  const mutationOptions = options ?? {};

  return useMutation({
    mutationKey,
    mutationFn: (data: Data) => registerUser(url, data),
    ...mutationOptions,
  });
};
