import { useStoreState } from "@/redux/index";

export const useCheckIfUser = (): boolean => {
  const user = useStoreState((state) => state.user.user);
  return !!user;
};
