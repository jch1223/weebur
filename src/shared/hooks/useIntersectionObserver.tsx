import { useEffect, useRef } from 'react';

interface UseIntersectionObserverProps {
  onIntersect: (entries: IntersectionObserverEntry[]) => void;
}

export const useIntersectionObserver = ({
  onIntersect,
}: UseIntersectionObserverProps) => {
  const targetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      onIntersect(entries);
    });

    const currentRef = targetRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [onIntersect]);

  return targetRef;
};
