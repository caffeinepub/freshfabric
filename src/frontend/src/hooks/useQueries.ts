import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import type { Signup } from "../backend.d.ts";
import { useActor } from "./useActor";

export function useGetAllSignups() {
  const { actor, isFetching } = useActor();
  return useQuery<Signup[]>({
    queryKey: ["signups"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllSignups();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useSubmitSignup() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: {
      name: string;
      city: string;
      hasFungusIssue: boolean;
      phoneNumber: string;
    }) => {
      if (!actor) throw new Error("Actor not ready");
      await actor.submitSignup(
        data.name,
        data.city,
        data.hasFungusIssue,
        data.phoneNumber,
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["signups"] });
    },
  });
}
