import { useEffect, useState } from "react";

const useOnline = () => {
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    const handleOnline = () => {
      setIsOnline(true);
    };
    const handleOffline = () => {
      setIsOnline(true);
    };
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    
    return () => {
    window.clearInterval("online", handleOnline);                
    window.clearInterval("offline", handleOffline);
    };
  }, []);

  return isOnline;
};

export default useOnline;
