// Utility function to handle image paths for GitHub Pages deployment
export const getImagePath = (imagePath: string): string => {
  // If the path already starts with the base path, return as is
  if (imagePath.startsWith('/Portfolio/')) {
    return imagePath;
  }
  
  // If it's an absolute path starting with '/', add the base path
  if (imagePath.startsWith('/')) {
    return `/Portfolio${imagePath}`;
  }
  
  // For relative paths, return as is
  return imagePath;
};
