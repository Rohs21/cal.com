import { createContainer } from "@evyweb/ioctopus";

import type { RegularBookingService } from "../modules/RegularBookingServiceModule";
import {
  loadDeps as loadRegularBookingServiceModuleDeps,
  regularBookingServiceModuleWithToken,
} from "../modules/RegularBookingServiceModule";

const regularBookingServiceContainer = createContainer();

regularBookingServiceContainer.load(
  regularBookingServiceModuleWithToken.moduleToken,
  regularBookingServiceModuleWithToken.module
);

export function getRegularBookingService(): RegularBookingService {
  loadRegularBookingServiceModuleDeps(regularBookingServiceContainer);

  return regularBookingServiceContainer.get<RegularBookingService>(
    regularBookingServiceModuleWithToken.token
  );
}
