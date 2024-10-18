import { TPoster } from "../Models/TPodcast";

export const getCachedPodcasts = (key: string): TPoster[] | null => {
    const cached = localStorage.getItem(key);
    if (!cached) return null;
  
    const { podcasts, timestamp } = JSON.parse(cached);
    const savedTime = 24 * 60 * 60 * 1000;
    
    if (Date.now() - timestamp > savedTime) {
      localStorage.removeItem(key);
      return null;
    }
  
    return podcasts;
  };
  
  export const setCachedPodcasts = (key: string, data: TPoster[]): void => {
    localStorage.setItem(key, JSON.stringify({
      data,
      timestamp: Date.now(),
    }));
  };
  