import { env } from '@/config/env';

import { MixpanelAnalytics } from './mixpanel.analytics';

export const Analytics = new MixpanelAnalytics(env.EXPO_PUBLIC_MIXPANEL_TOKEN!);
