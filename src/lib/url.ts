/**
 * Base-aware internal link helper with trailingSlash "always".
 * On gently.fyi, url("practices/") -> "/practices/".
 */
export function url(path: string): string {
  const base = import.meta.env.BASE_URL; // normalized with trailing slash
  return base + path.replace(/^\//, "");
}
