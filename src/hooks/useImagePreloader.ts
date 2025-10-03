import { useTexture } from '@react-three/drei'

/**
 * Hook to preload multiple images using drei's useTexture
 * @param imageUrls Array of image URLs to preload
 * @returns Object with textures array, textureMap for easy access, and loading state
 */
export function useImagePreloader(imageUrls: string[]) {
  // Filter out empty URLs and duplicates
  const validUrls = [...new Set(imageUrls.filter(Boolean))]
  
  // Use drei's useTexture to preload all images
  const textures = useTexture(validUrls)
  
  // Convert single texture to array for consistency
  const textureArray = Array.isArray(textures) ? textures : [textures]
  
  // Create a map for easy access by URL
  const textureMap = new Map()
  validUrls.forEach((url, index) => {
    textureMap.set(url, textureArray[index])
  })
  
  return {
    textures: textureArray,
    textureMap,
    isLoaded: textureArray.length > 0
  }
}

/**
 * Preload function to be called outside React components
 * This allows for preloading without requiring the component to be mounted
 */
export function preloadImages(imageUrls: string[]) {
  const validUrls = [...new Set(imageUrls.filter(Boolean))]
  
  // Use drei's preload functionality for textures
  validUrls.forEach(url => {
    useTexture.preload(url)
  })
}
