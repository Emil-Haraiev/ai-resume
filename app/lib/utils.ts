import * as crypto from "node:crypto";

/**
 * Formats a file size in bytes to a human-readable string (KB, MB, GB)
 * @param bytes - The size in bytes to format
 * @returns A formatted string representing the size with appropriate unit
 */
export function formatSize(bytes: number): string {
  if (bytes === 0) return '0 Bytes';
  
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB'];
  
  // Calculate the appropriate unit index
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  
  // Format the number with the specified decimal places
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

export const generateUUID = () =>  crypto.randomUUID()