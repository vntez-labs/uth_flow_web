"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import * as React from "react";
import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Button
        variant="ghost"
        size="icon-sm"
        className="rounded-full w-8 h-8 text-muted-foreground"
        aria-label="Toggle theme placeholder"
      >
        <span className="size-4" />
      </Button>
    );
  }

  const isDark = theme === "dark";

  return (
    <Button
      variant="ghost"
      size="icon-sm"
      className="rounded-full w-8 h-8 text-foreground/80 hover:text-foreground hover:bg-muted transition-all"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label="Chuyển chế độ sáng / tối"
      title={isDark ? "Chuyển sang chế độ Sáng" : "Chuyển sang chế độ Tối"}
    >
      {isDark ? (
        <Sun className="size-4 text-amber-400 transition-transform duration-300 rotate-0 scale-100" />
      ) : (
        <Moon className="size-4 text-teal-700 transition-transform duration-300 rotate-0 scale-100" />
      )}
    </Button>
  );
}
