import { FilterSegmentRepository } from "@calcom/lib/server/repository/filterSegment";
import type { TCreateFilterSegmentInputSchema } from "@calcom/lib/server/repository/filterSegment.type";
import type { TrpcSessionUser } from "@calcom/lib/sessionUser";

export const createFilterSegmentHandler = async ({
  ctx,
  input,
}: {
  ctx: {
    user: NonNullable<TrpcSessionUser>;
  };
  input: TCreateFilterSegmentInputSchema;
}) => {
  const repository = new FilterSegmentRepository();
  return await repository.create({
    userId: ctx.user.id,
    input,
  });
};
