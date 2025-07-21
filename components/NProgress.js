"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef } from "react";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

export default function NProgressProvider() {
  const pathname = usePathname();
  const firstRender = useRef(true);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }

    NProgress.start();
    const timeout = setTimeout(() => {
      NProgress.done();
    }, 100); // artificial delay for smoothness

    return () => {
      clearTimeout(timeout);
      NProgress.done();
    };
  }, [pathname]);

  return null;
}
