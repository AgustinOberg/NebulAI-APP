import { Mixpanel } from 'mixpanel-react-native';

import { APP_VERSION } from '@/constants/app.constants';

import { Analytics } from './analytics.base';
import { Prefix } from './events';

export class MixpanelAnalytics extends Analytics {
  private mixpanel: Mixpanel;
  constructor(token: string) {
    super();
    this.mixpanel = new Mixpanel(token, false, false);
    this.mixpanel.init();
  }

  trackEvent(eventName: string, properties?: Record<string, any>) {
    this.mixpanel.track(eventName, properties);
  }

  trackScreenView(screenName: string, properties?: Record<string, any>) {
    this.mixpanel.track(Prefix.Screen.default, { screenName, ...properties });
  }

  identifyUser(userId: string, properties?: Record<string, any>) {
    this.mixpanel.identify(userId);
    if (properties) {
      this.mixpanel.getPeople().set({ ...properties, appVersion: APP_VERSION });
    }
  }

  reset() {
    this.mixpanel.reset();
  }
}
