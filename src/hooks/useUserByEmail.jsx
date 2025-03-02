import { useQuery } from "@tanstack/react-query";

import { useContext } from "react";

import useAxiosPublic from "./useAxiosPublic";
import { AuthContext } from "../providers/AuthProvider";

const useUserByEmail = () => {
  const { user, loading } = useContext(AuthContext);
  // console.log(user);
  const axiosPublic = useAxiosPublic();
  const {
    data: aUser = [],
    isPending: aUserLoading,
    refetch,
  } = useQuery({
    queryKey: ["aUser", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosPublic.get(`/user/${user?.email}`);
      return res.data;
    },
  });
  return [aUser, aUserLoading, refetch];
};

export default useUserByEmail;
