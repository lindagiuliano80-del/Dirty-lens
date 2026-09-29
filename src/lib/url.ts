// Prefixes a site-root path ("/viaggi/molise/") with the base the site is served from,
// so the same links work at the domain root and under a sub-path such as GitHub Pages'
// "/Dirty-lens/". Full URLs are returned unchanged.
export function url(path: string): string {
  if (/^[a-z]+:\/\//i.test(path)) return path;
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return base + (path.startsWith('/') ? path : '/' + path);
}
