"use client";

import { cn } from "@/lib/utils";
import * as React from "react";

interface AuroraBackgroundProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  showRadialGradient?: boolean;
}

export function AuroraBackground({
  className,
  children,
  showRadialGradient = true,
  ...props
}: AuroraBackgroundProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden transition-colors duration-300",
        className
      )}
      {...props}
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        <div
          className={cn(
            "aurora-bg",
            showRadialGradient && "aurora-mask"
          )}
        />
      </div>
      {children}
    </div>
  );
}
