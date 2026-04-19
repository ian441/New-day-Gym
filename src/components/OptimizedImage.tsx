import { cn } from "@/lib/utils";

export type OptimizedImageProps = React.ImgHTMLAttributes<HTMLImageElement> & {
  /** When true, loads immediately with high fetch priority (hero / LCP). Default uses lazy loading. */
  priority?: boolean;
};

/**
 * Images below the fold should omit `priority` so the browser can lazy-load them.
 * Hero / LCP images should set `priority` (eager load, high fetch priority).
 */
export function OptimizedImage({ priority, loading, decoding = "async", className, alt = "", ...rest }: OptimizedImageProps) {
  return (
    <img
      alt={alt}
      loading={priority ? "eager" : loading ?? "lazy"}
      decoding={decoding}
      fetchPriority={priority ? "high" : undefined}
      className={cn("max-w-full", className)}
      {...rest}
    />
  );
}
