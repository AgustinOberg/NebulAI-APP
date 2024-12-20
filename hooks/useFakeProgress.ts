import { useEffect, useState } from 'react';

const useFakeProgress = (time = 1500, delay = 0, start = true) => {
  const [progress, setProgress] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    if (!start) return;
    setIsFinished(false);
    const startProgress = () => {
      let startTime = Date.now();
      const interval = setInterval(() => {
        const elapsed = Date.now() - startTime;
        const newProgress = Math.min(elapsed / time, 1);
        setProgress(newProgress);

        if (newProgress === 1) {
          clearInterval(interval);
          setIsFinished(true);
        }
      }, 16);
      return () => clearInterval(interval);
    };

    const timeout = setTimeout(startProgress, delay);

    return () => {
      clearTimeout(timeout);
      setProgress(0);
      setIsFinished(false);
    };
  }, [time, delay, start]);

  return { progress, isFinished };
};

export default useFakeProgress;
