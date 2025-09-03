import type { Prisma } from "@prisma/client";

import type { UserProfile } from "@calcom/types/UserProfile";

interface SessionUserOrganization {
  id: number | null;
  name?: string | null;
  slug?: string | null;
  logoUrl?: string | null;
  bannerUrl?: string | null;
  isPlatform?: boolean;
  hideBranding?: boolean;
  isOrgAdmin: boolean;
  metadata: Record<string, any> | null;
  requestedSlug: string | null;
}

type BaseSessionUser = Prisma.UserGetPayload<{
  select: {
    id: true;
    username: true;
    name: true;
    email: true;
    emailVerified: true;
    bio: true;
    avatarUrl: true;
    timeZone: true;
    weekStart: true;
    startTime: true;
    endTime: true;
    defaultScheduleId: true;
    bufferTime: true;
    theme: true;
    appTheme: true;
    createdDate: true;
    hideBranding: true;
    twoFactorEnabled: true;
    disableImpersonation: true;
    identityProvider: true;
    identityProviderId: true;
    brandColor: true;
    darkBrandColor: true;
    movedToProfileId: true;
    completedOnboarding: true;
    destinationCalendar: true;
    locale: true;
    timeFormat: true;
    trialEndsAt: true;
    metadata: true;
    role: true;
    allowDynamicBooking: true;
    allowSEOIndexing: true;
    receiveMonthlyDigestEmail: true;
    profiles: true;
    allSelectedCalendars: true;
    userLevelSelectedCalendars: true;
  };
}>;

export interface TrpcSessionUser extends BaseSessionUser {
  profile: UserProfile;
  avatar: string;
  organization: SessionUserOrganization;
  organizationId: number | null;
  defaultBookerLayouts: any | null;
}
