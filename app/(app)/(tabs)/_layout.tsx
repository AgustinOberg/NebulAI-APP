import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

import { MiddleButton, TabButton } from '@/components/shared/tab-bar';

const _layout = () => {
  const { styles } = useStyles(stylesheet);
  return (
    <>
      <MiddleButton />

      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: '#DC00FC',
          tabBarShowLabel: false,
          tabBarStyle: styles.tabBar,
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            tabBarIcon: ({ color }) => <TabButton name="home" color={color} />,
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            tabBarIcon: ({ color }) => <TabButton name="user" color={color} />,
          }}
        />
      </Tabs>
    </>
  );
};

const stylesheet = createStyleSheet(() => ({
  tabBar: {
    backgroundColor: '#373D70',
    elevation: 0,
    borderTopWidth: 0,
    height: Platform.OS === 'android' ? 105 : 90,
  },
}));

export default _layout;
