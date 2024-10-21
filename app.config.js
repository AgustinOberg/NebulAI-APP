import packageJson from './package.json';
export default {
  expo: {
    name: 'nebulai',
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
      supportsTablet: true,
      bundleIdentifier: 'com.agustinoberg.nebulai',
    },
    android: {
      adaptiveIcon: {
        foregroundImage: './assets/images/adaptive-icon.png',
        backgroundColor: '#2A1C5F',
      },
      package: 'com.agustinoberg.nebulai',
      versionCode: 10,
    },
    web: {
      bundler: 'metro',
      output: 'static',
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
