import { useMutation } from '@tanstack/react-query';

import { queryClient } from '@/config/query.config';

import { changeLanguage } from '../api/language.api';

export const useChangeLanguage = () => {
  return useMutation({
    mutationFn: changeLanguage,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['user-profile'] });
    },
  });
};
