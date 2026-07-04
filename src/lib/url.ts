/**
 * Base-aware internal link helper (0001/0008: GitHub Pages project base,
 * trailingSlash "always"). url("practices/") -> "/nervous-system-healing/practices/"
 */
export function url(path: string): string {
  const base = import.meta.env.BASE_URL; // normalized with trailing slash
  return base + path.replace(/^\//, "");
}
