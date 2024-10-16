// import { z } from 'zod';

// const envSchema = z.object({
//   EXPO_PUBLIC_GOOGLE_WEB_CLIENT_ID: z.string(),
//   EXPO_PUBLIC_GOOGLE_IOS_CLIENT_ID: z.string(),
//   EXPO_PUBLIC_BACKEND_URL: z.string(),
// });

// export const env = envSchema.parse(process.env);

export const env = {
  EXPO_PUBLIC_GOOGLE_WEB_CLIENT_ID:
    process.env.EXPO_PUBLIC_GOOGLE_WEB_CLIENT_ID,
  EXPO_PUBLIC_GOOGLE_IOS_CLIENT_ID:
    process.env.EXPO_PUBLIC_GOOGLE_IOS_CLIENT_ID,
  EXPO_PUBLIC_BACKEND_URL: process.env.EXPO_PUBLIC_BACKEND_URL,
};
