import { PrismaApiKeyRepository } from "@calcom/lib/server/repository/PrismaApiKeyRepository";

import type { TrpcSessionUser } from "@calcom/lib/sessionUser";

type ListOptions = {
  ctx: {
    user: NonNullable<TrpcSessionUser>;
  };
};

export const listHandler = async ({ ctx }: ListOptions) => {
  return PrismaApiKeyRepository.findApiKeysFromUserId({ userId: ctx.user.id });
};
