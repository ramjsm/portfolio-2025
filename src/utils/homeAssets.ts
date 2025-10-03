import { getProjectsByCategory } from '../config/projects'

/**
 * Collects all image assets used in the Home page components
 * @returns Array of image URLs that need to be preloaded
 */
export function getHomePageAssets(): string[] {
  const assets: string[] = []
  
  // Static assets used in Home components
  assets.push('/codebar.png') // Used in Cocreations component
  assets.push('/about.webp')  // Used in About page (might be prefetched)
  
  // Get all cocreation projects (used in Cocreations component)
  const cocreationProjects = getProjectsByCategory('cocreation')
  cocreationProjects.forEach(project => {
    // Add thumbnail images
    assets.push(project.thumbnail.src)
    
    // Add hero images/videos (for potential prefetching)
    assets.push(project.hero.src)
  })
  
  // Get all client work projects (used in ClientWork component)
  const clientProjects = getProjectsByCategory('client')
  clientProjects.forEach(project => {
    // Add thumbnail images
    assets.push(project.thumbnail.src)
    
    // Add hero images/videos (for potential prefetching)
    assets.push(project.hero.src)
  })
  
  // Filter out video files (we only want images for texture preloading)
  const imageAssets = assets.filter(asset => {
    const extension = asset.split('.').pop()?.toLowerCase()
    return extension && ['jpg', 'jpeg', 'png', 'webp', 'gif', 'svg'].includes(extension)
  })
  
  // Remove duplicates
  return [...new Set(imageAssets)]
}

/**
 * Gets only the essential assets that are immediately visible on Home page
 * This is a subset of all assets for critical path loading
 */
export function getCriticalHomePageAssets(): string[] {
  const assets: string[] = []
  
  // Critical static assets
  assets.push('/codebar.png')
  
  // Only thumbnail images for immediate display
  const cocreationProjects = getProjectsByCategory('cocreation')
  cocreationProjects.forEach(project => {
    assets.push(project.thumbnail.src)
  })
  
  const clientProjects = getProjectsByCategory('client')
  clientProjects.forEach(project => {
    assets.push(project.thumbnail.src)
  })
  
  // Filter for images only and remove duplicates
  const imageAssets = assets.filter(asset => {
    const extension = asset.split('.').pop()?.toLowerCase()
    return extension && ['jpg', 'jpeg', 'png', 'webp', 'gif', 'svg'].includes(extension)
  })
  
  return [...new Set(imageAssets)]
}

/**
 * Gets non-critical assets that can be loaded progressively
 */
export function getNonCriticalHomePageAssets(): string[] {
  const allAssets = getHomePageAssets()
  const criticalAssets = getCriticalHomePageAssets()
  
  // Return assets that are not critical
  return allAssets.filter(asset => !criticalAssets.includes(asset))
}
