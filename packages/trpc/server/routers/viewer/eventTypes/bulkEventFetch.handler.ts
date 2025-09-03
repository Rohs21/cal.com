import { getBulkUserEventTypes } from "@calcom/lib/event-types/getBulkEventTypes";

import type { TrpcSessionUser } from "@calcom/lib/sessionUser";

type BulkEventFetchOptions = {
  ctx: {
    user: NonNullable<TrpcSessionUser>;
  };
};

export const bulkEventFetchHandler = async ({ ctx }: BulkEventFetchOptions) => {
  return getBulkUserEventTypes(ctx.user.id);
};
