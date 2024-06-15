import axios from 'axios';
import { useMutation, UseMutationOptions } from '@tanstack/react-query';
import { NO_NETWORK_ERROR_MESSAGE } from '../constants';

type Data = {
  identifier: string;
  password: string;
};

export type LoginResponse = {
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

async function loginUser(url: string, data: Data): Promise<LoginResponse> {
  try {
    const { data: responseData } = await axios.post<LoginResponse>(url, data);
    return responseData;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    throw new Error(
      error?.response?.data?.error?.message ?? NO_NETWORK_ERROR_MESSAGE,
    );
  }
}

export const useLoginUser = ({
  url,
  options,
}: {
  url: string;
  options?: UseMutationOptions<LoginResponse, Error, Data>;
}) => {
  const mutationOptions = options ?? {};

  return useMutation({
    mutationKey,
    mutationFn: (data: Data) => loginUser(url, data),
    ...mutationOptions,
  });
};
