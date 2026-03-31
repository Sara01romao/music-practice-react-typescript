import { useEffect, useRef } from 'react';

export const useWakeLock = (): void => {
  const wakeLockRef = useRef<WakeLockSentinel | null>(null);

  const requestWakeLock = async (): Promise<void> => {
    if (document.visibilityState !== 'visible') return;

    const sentinel = await navigator.wakeLock.request('screen');
    wakeLockRef.current = sentinel;

    sentinel.addEventListener('release', () => {

      requestWakeLock();
    });
  };

  useEffect(() => {
    requestWakeLock();

    const handleVisibilityChange = (): void => {
      if (document.visibilityState === 'visible') {
        requestWakeLock();
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      if (wakeLockRef.current) {
        wakeLockRef.current.release();
        wakeLockRef.current = null;
      }
    };
  }, []);
};