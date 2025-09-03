import { FilterSegmentRepository } from "@calcom/lib/server/repository/filterSegment";
import type { TListFilterSegmentsInputSchema } from "@calcom/lib/server/repository/filterSegment.type";
import type { TrpcSessionUser } from "@calcom/lib/sessionUser";

export const listHandler = async ({
  ctx,
  input,
}: {
  ctx: {
    user: NonNullable<TrpcSessionUser>;
  };
  input: TListFilterSegmentsInputSchema;
}) => {
  const repository = new FilterSegmentRepository();
  return await repository.get({
    userId: ctx.user.id,
    tableIdentifier: input.tableIdentifier,
  });
};
