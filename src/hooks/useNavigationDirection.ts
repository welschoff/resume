import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';

export function useNavigationDirection(): 1 | -1 {
  const location = useLocation();
  const historyStack = useRef<string[]>([]);
  const [direction, setDirection] = useState<1 | -1>(1);

  useEffect(() => {
    const currentPath = location.pathname;
    const lastIndex = historyStack.current.lastIndexOf(currentPath);

    if (lastIndex !== -1) {
      historyStack.current.splice(lastIndex + 1);
      setDirection(-1);
    } else {
      historyStack.current.push(currentPath);
      setDirection(1);
    }
  }, [location.pathname]);

  return direction;
}
