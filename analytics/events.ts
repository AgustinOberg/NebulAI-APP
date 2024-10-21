export const Events = {
  Actions: {
    AUTH_BUTTON: 'auth',
  },
  Screen: {
    VIEWED: 'screen_viewed',
    ERROR: 'screen_error',
  },
  System: {
    ERROR_OCCURRED: 'system_error_occurred',
  },
} as const;

export const Prefix = {
  Actions: {
    default: 'user_action_',
    Press: 'user_action_press_',
    Button: 'user_action_press_button_',
  },
  Screen: {
    default: 'screen_viewed',
  },
  System: {
    default: 'system_action_',
  },
} as const;
