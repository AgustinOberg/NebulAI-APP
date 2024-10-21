export abstract class Analytics {
  abstract trackEvent(
    eventName: string,
    properties?: Record<string, any>,
  ): void;
  abstract trackScreenView(
    screenName: string,
    properties?: Record<string, any>,
  ): void;
  abstract identifyUser(userId: string, properties?: Record<string, any>): void;
  abstract reset(): void;
}
