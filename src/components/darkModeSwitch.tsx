"use client";

import { Lightning, LightningSlash } from "@mynaui/icons-react";
import { useSyncExternalStore } from "react";
import { useTheme } from "next-themes";

export default function Switch() {
  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );
  const { setTheme, resolvedTheme } = useTheme();
  const isDark = mounted && resolvedTheme === "dark";

  if (!mounted) {
    return <span className="inline-block size-9 shrink-0" aria-hidden />;
  }

  return (
    <button
      type="button"
      aria-label={isDark ? "ライトモードに切り替え" : "ダークモードに切り替え"}
      className="inline-flex size-9 shrink-0 items-center justify-center rounded-md text-foreground transition-colors hover:bg-accent"
      onClick={() => setTheme(isDark ? "light" : "dark")}
    >
      {isDark ? <LightningSlash size={22} /> : <Lightning size={22} />}
    </button>
  );
}
