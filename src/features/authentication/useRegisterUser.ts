import { useMutation } from 'react-query';
import { UserEndpoints } from './user.constants';

interface RegisterData {
  username: string;
  email: string;
  password: string;
}

const useRegisterUser = () => {
  const { mutateAsync, data } = useMutation((newUserData: RegisterData) =>
    fetch(UserEndpoints.Register, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newUserData),
    }).then((res) => res.json()),
  );

  return {
    registerUser: mutateAsync,
    user: data,
  };
};

export default useRegisterUser;
