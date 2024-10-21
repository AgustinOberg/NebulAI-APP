import { useGlobalSearchParams, usePathname, useSegments } from 'expo-router';
import { useEffect } from 'react';

import { Analytics } from '../analytics/index';

const formatPathname = (pathname: string) => {
  let segments = pathname.replace(/\/?\(tabs\)|\(app\)|[()]/g, '');
  if (segments[0] !== '/') {
    segments = '/' + segments;
  }
  return segments;
};

export const useTrackScreens = () => {
  const pathname = usePathname();
  const params = useGlobalSearchParams();
  const segments = useSegments();
  useEffect(() => {
    const fullSegments = segments?.join('/');
    const formatedPathName = formatPathname(fullSegments);
    const formatedParams = typeof params.params === 'string' ? {} : params;
    Analytics.trackScreenView(formatedPathName, formatedParams);
  }, [pathname, params, segments]);
};
