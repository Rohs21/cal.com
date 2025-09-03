import { createModule } from "@evyweb/ioctopus";

import { bindModuleToClassOnToken } from "@calcom/lib/di/ioctopus";
import { bookingRepositoryModuleWithToken } from "@calcom/lib/di/modules/Booking";
import { cacheModuleWithToken } from "@calcom/lib/di/modules/Cache";
import { checkBookingAndDurationLimitsModuleWithToken } from "@calcom/lib/di/modules/CheckBookingAndDurationLimits";
import { checkBookingLimitsModuleWithToken } from "@calcom/lib/di/modules/CheckBookingLimits";
import { featuresRepositoryModuleWithToken } from "@calcom/lib/di/modules/Features";
import { DI_TOKENS } from "@calcom/lib/di/tokens";
import { prismaModuleWithToken } from "@calcom/prisma/prisma.module";

import { RegularBookingService } from "../../handleNewBooking";

export const regularBookingServiceModule = createModule();
const token = DI_TOKENS.REGULAR_BOOKING_SERVICE;
const moduleToken = DI_TOKENS.REGULAR_BOOKING_SERVICE_MODULE;
const loadDeps = bindModuleToClassOnToken({
  module: regularBookingServiceModule,
  token,
  classs: RegularBookingService,
  depsMap: {
    cacheService: cacheModuleWithToken,
    checkBookingAndDurationLimitsService: checkBookingAndDurationLimitsModuleWithToken,
    prismaClient: prismaModuleWithToken,
    bookingRepository: bookingRepositoryModuleWithToken,
    featuresRepository: featuresRepositoryModuleWithToken,
    checkBookingLimitsService: checkBookingLimitsModuleWithToken,
  },
});

const regularBookingServiceModuleWithToken = {
  token,
  moduleToken,
  module: regularBookingServiceModule,
};

export type { RegularBookingService };

export { loadDeps, regularBookingServiceModuleWithToken };
