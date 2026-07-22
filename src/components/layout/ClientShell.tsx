"use client";

import { ReactNode } from "react";
import dynamic from "next/dynamic";

/* Lazy-load cursor + scroll-progress so they don't block initial paint */
const CursorFollower = dynamic(() => import("@/components/3d/CursorFollower"), {
  ssr: false,
});
const ScrollProgress = dynamic(() => import("@/components/3d/ScrollProgress"), {
  ssr: false,
});

export default function ClientShell({ children }: { children: ReactNode }) {
  return (
    <>
      <ScrollProgress />
      <CursorFollower />
      {children}
    </>
  );
}
