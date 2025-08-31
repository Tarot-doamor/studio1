import { cn } from "@/lib/utils";
import { TrendingUp } from "lucide-react";

export function Logo({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center justify-center gap-2", className)}>
      <div className="p-2 bg-primary/10 rounded-full">
        <TrendingUp className="h-6 w-6 text-primary" />
      </div>
      <span className="font-bold text-xl text-primary font-headline">GrowthBoost</span>
    </div>
  );
}
