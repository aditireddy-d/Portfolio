// Utility function to handle asset paths for both dev (/) and GitHub Pages (/Portfolio/).
export const getImagePath = (assetPath: string): string => {
  const baseUrl = (import.meta.env.BASE_URL ?? "/").replace(/\/$/, ""); // "/Portfolio" or ""

  // If already prefixed with baseUrl, return as-is
  if (baseUrl && assetPath.startsWith(`${baseUrl}/`)) {
    return assetPath;
  }

  // Absolute path: "/foo.png" -> "/Portfolio/foo.png" (prod) OR "/foo.png" (dev)
  if (assetPath.startsWith("/")) {
    return `${baseUrl}${assetPath}`;
  }

  // Relative path: "foo.png" -> "/Portfolio/foo.png" (prod) OR "/foo.png" (dev)
  return `${baseUrl}/${assetPath}`;
};
