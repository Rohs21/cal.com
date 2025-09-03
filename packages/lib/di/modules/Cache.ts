import { createModule } from "@evyweb/ioctopus";

import type { ICacheService } from "@calcom/features/calendar-cache/lib/getShouldServeCache";
import { CacheService } from "@calcom/features/calendar-cache/lib/getShouldServeCache";

import { DI_TOKENS } from "../tokens";

export const cacheModule = createModule();
const token = DI_TOKENS.CACHE_SERVICE;
const moduleToken = DI_TOKENS.CACHE_SERVICE_MODULE;
cacheModule.bind(token).toClass(CacheService, {
  featuresRepository: DI_TOKENS.FEATURES_REPOSITORY,
} satisfies Record<keyof ICacheService, symbol>);

export const cacheModuleWithToken = {
  token,
  moduleToken,
  module: cacheModule,
};
