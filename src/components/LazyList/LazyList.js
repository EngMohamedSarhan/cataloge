import { useState, useEffect, useCallback, useRef } from "react";

const LazyList = ({ children }) => {
  const [renderTo, setRenderTo] = useState(
    children.length > 8 ? 8 : children.length
  );
  const childrenRef = useRef(children);

  const onScroll = useCallback(() => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      if (children.length > renderTo + 8) {
        setRenderTo(renderTo + 8);
      } else {
        setRenderTo(children.length);
      }
    }
  }, [renderTo, children.length]);

  useEffect(() => {
    if (
      document.body.offsetHeight < window.innerHeight &&
      renderTo !== children.length
    ) {
      setRenderTo(renderTo + 1);
    }

    if (childrenRef.current !== children) {
      childrenRef.current = children;

      setRenderTo(children.length > 8 ? 8 : children.length);
    }
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [onScroll, renderTo, children]);

  return <>{children.slice(0, renderTo)}</>;
};

export default LazyList;
