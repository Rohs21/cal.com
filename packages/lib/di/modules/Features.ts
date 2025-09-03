import { createModule } from "@evyweb/ioctopus";

import { FeaturesRepository } from "@calcom/features/flags/features.repository";
import { DI_TOKENS } from "@calcom/lib/di/tokens";

export const featuresRepositoryModule = createModule();
const token = DI_TOKENS.FEATURES_REPOSITORY;
const moduleToken = DI_TOKENS.FEATURES_REPOSITORY_MODULE;
featuresRepositoryModule.bind(token).toClass(FeaturesRepository, [DI_TOKENS.PRISMA_CLIENT]);

export const featuresRepositoryModuleWithToken = {
  token,
  moduleToken,
  module: featuresRepositoryModule,
};
