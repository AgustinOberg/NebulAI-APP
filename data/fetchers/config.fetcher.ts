import { useQuery } from '@tanstack/react-query';

import { getFileTypes } from '../api/config.api';

export const useAvailableFileTypes = () =>
  useQuery({
    queryFn: getFileTypes,
    queryKey: ['available-file-types'],
  });
