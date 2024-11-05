import packageJson from './package.json';
export default {
  expo: {
    name: 'Nebulai',
    slug: 'nebulai',
    version: packageJson.version,
    orientation: 'portrait',
    icon: './assets/images/icon.png',
    scheme: 'myapp',
    userInterfaceStyle: 'dark',
    splash: {
      image: './assets/images/splash.png',
      backgroundColor: '#2A1C5F',
      resizeMode: 'cover',
    },
    ios: {
      supportsTablet: false,
      bundleIdentifier: 'com.agustinoberg.nebulai',
      usesAppleSignIn: true,
    },
    android: {
      adaptiveIcon: {
        foregroundImage: './assets/images/adaptive-icon.png',
        backgroundColor: '#2A1C5F',
      },
      package: 'com.agustinoberg.nebulai',
      versionCode: 10,
      googleServicesFile:
        process.env.GOOGLE_SERVICES_JSON || './config/google-services.json',
    },
    plugins: [
      'expo-router',
      'expo-font',
      [
        '@react-native-google-signin/google-signin',
        {
          iosUrlScheme:
            'com.googleusercontent.apps.119729326913-3jtis94klm13tqjma8jhseeiromvfo23',
        },
      ],
      [
        '@sentry/react-native/expo',
        {
          url: 'https://sentry.io/',
          note: 'Use SENTRY_AUTH_TOKEN env to authenticate with Sentry.',
          project: 'nebulai-mobile',
          organization: 'nebulai',
        },
      ],
      'expo-localization',
      'expo-apple-authentication',
    ],
    experiments: {
      typedRoutes: true,
    },
    extra: {
      router: {
        origin: false,
      },
      eas: {
        projectId: '639936ff-ffc0-470a-b07c-30e4bc4c5dbb',
      },
    },
    owner: 'agustin.oberg',
    runtimeVersion: packageJson.version,
    updates: {
      url: 'https://u.expo.dev/639936ff-ffc0-470a-b07c-30e4bc4c5dbb',
      enabled: true,
      fallbackToCacheTimeout: 0,
      checkAutomatically: 'ON_LOAD',
    },
  },
};
