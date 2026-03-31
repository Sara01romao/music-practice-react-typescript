import { useEffect, useRef } from 'react';

export const useWakeLock = (active: boolean): void => {
  const wakeLockRef = useRef<WakeLockSentinel | null>(null);
  const isActiveRef = useRef(active);

  
  useEffect(() => {
    isActiveRef.current = active;
  }, [active]);

  const requestWakeLock = async () => {
    if (!active) return;                      
    if (document.visibilityState !== 'visible') return;

    try {
      const sentinel = await navigator.wakeLock.request('screen');
      wakeLockRef.current = sentinel;

      sentinel.addEventListener('release', () => {
    
        if (isActiveRef.current) {
          requestWakeLock();
        }
      });
    } catch (err) {
      console.error('Erro ao solicitar Wake Lock:', err);
      
      if (isActiveRef.current) {
        setTimeout(() => requestWakeLock(), 1000);
      }
    }
  };

  useEffect(() => {
    if (active) {
      requestWakeLock();
    } else {
     
      if (wakeLockRef.current) {
        wakeLockRef.current.release();
        wakeLockRef.current = null;
      }
    }

    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible' && active) {
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
  }, [active]);
};