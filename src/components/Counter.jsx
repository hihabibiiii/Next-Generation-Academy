import { useEffect, useState } from "react";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function Counter({ value, suffix }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return undefined;
    let frame;
    const start = performance.now();
    const duration = 1300;
    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      setCount(Math.floor(progress * value));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, value]);

  return <strong ref={ref}>{count}{suffix}</strong>;
}
