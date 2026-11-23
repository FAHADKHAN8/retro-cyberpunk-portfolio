import { existsSync } from "node:fs";
import path from "node:path";
import Image from "next/image";

export function BlogImage({ src, alt, width, height }: { src: string; alt: string; width: number; height: number }) {
  if (!src.startsWith("/images/blog/") || src.includes("..")) throw new Error("BlogImage src must be a local /images/blog/ path");
  if (!alt.trim() || width < 1 || height < 1) throw new Error("BlogImage requires alt text and positive dimensions");
  if (!existsSync(path.join(process.cwd(), "public", src.slice(1)))) throw new Error(`BlogImage source does not exist: ${src}`);
  return <Image src={src} alt={alt} width={width} height={height} sizes="(max-width: 768px) 100vw, 760px" className="h-auto max-w-full border-2 border-electric" />;
}
