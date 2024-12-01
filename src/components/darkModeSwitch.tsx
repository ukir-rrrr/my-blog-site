"use client";

import { Lightning, LightningSlash } from "@mynaui/icons-react";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

export default function Switch() {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return null;
  }

  if (resolvedTheme === "dark") {
    return <LightningSlash size={30} onClick={() => setTheme("light")} />;
  }

  if (resolvedTheme === "light") {
    return <Lightning size={30} onClick={() => setTheme("dark")} />;
  }
}
