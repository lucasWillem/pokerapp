import { useStoreState } from '@redux/typed-hooks';

export const useCheckIfUser = (): boolean => {
  const user = useStoreState((state) => state.user.user);
  return !!user;
};
