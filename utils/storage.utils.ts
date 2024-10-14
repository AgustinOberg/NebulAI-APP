import AsyncStorage from '@react-native-async-storage/async-storage';

export const asyncStoragePersistConfig = {
  setItem: async (key: string, value: string) =>
    await AsyncStorage.setItem(key, value),
  getItem: async (key: string) => await AsyncStorage.getItem(key),
  removeItem: async (key: string) => await AsyncStorage.removeItem(key),
};
