"use client";
import { useSession } from "next-auth/react";

// Returns the currently authenticated user (or undefined while unauthenticated/loading)
export const useCurrentUser = () => {
  const { data } = useSession();
  return data?.user;
};
