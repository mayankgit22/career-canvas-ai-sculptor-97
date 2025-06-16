import * as React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";
import { cn } from "@/lib/utils";
const Progress = React.forwardRef<React.ElementRef<typeof ProgressPrimitive.Root>, React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>>(({
  className,
  value,
  ...props
}, ref) => <ProgressPrimitive.Root ref={ref} className="bg-slate-400">
    <ProgressPrimitive.Indicator style={{
    transform: `translateX(-${100 - (value || 0)}%)`
  }} className="h-full w-full flex-1 transition-all bg-slate-950" />
  </ProgressPrimitive.Root>);
Progress.displayName = ProgressPrimitive.Root.displayName;
export { Progress };