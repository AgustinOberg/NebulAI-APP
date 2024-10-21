// import {
//   Identify,
//   identify,
//   init,
//   reset as amplitudeReset,
//   setUserId,
//   track,
// } from '@amplitude/analytics-react-native';

// import { Analytics } from './analytics.base';

// class AmplitudeAnalytics extends Analytics {
//   private apiKey: string;

//   constructor(apiKey: string) {
//     super();
//     this.apiKey = apiKey;
//     this.initialize();
//   }

//   private async initialize() {
//     await init(this.apiKey);
//   }

//   trackEvent(eventName: string, properties?: Record<string, any>) {
//     track(eventName, properties);
//   }

//   trackScreenView(screenName: string, properties?: Record<string, any>) {
//     track('screen-view', { screenName, ...properties });
//   }

//   identifyUser(userId: string, properties?: Record<string, any>) {
//     setUserId(userId);

//     // Si tienes propiedades adicionales del usuario, las puedes usar con Identify
//     if (properties) {
//       const identifyObject = new Identify();
//       Object.keys(properties).forEach((key) => {
//         identifyObject.set(key, properties[key]);
//       });
//       identify(identifyObject);
//     }
//   }

//   reset() {
//     amplitudeReset();
//   }
// }

// export default AmplitudeAnalytics;
