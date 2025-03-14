import { useState, useEffect, useRef } from "react";

export default function SnackBar({ message = "" }) {
  const [isVisible, setVisibility] = useState(!!message);
  const timerRef = useRef();

  useEffect(() => {
    if (!timerRef.current) {
      timerRef.current = setTimeout(() => {
        setVisibility(!isVisible);
      }, 5000);
    } else {
      clearTimeout(timerRef.current);
    }
  }, [message]);

  return isVisible ? <div className="snack-bar">{message}</div> : null;
}
