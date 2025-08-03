// Simple test script for the formatSize function
// This is just for demonstration purposes and not part of the actual application

// Mock implementation of the formatSize function (same as in utils.ts)
function formatSize(bytes, decimals = 2) {
  if (bytes === 0) return '0 Bytes';
  
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB'];
  
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  
  return parseFloat((bytes / Math.pow(k, i)).toFixed(decimals)) + ' ' + sizes[i];
}

// Test cases
const testCases = [
  0,                  // 0 Bytes
  500,                // 500 Bytes
  1023,               // 1023 Bytes
  1024,               // 1 KB
  1536,               // 1.5 KB
  1048576,            // 1 MB
  1073741824,         // 1 GB
  20 * 1024 * 1024,   // 20 MB (our max file size)
  2.5 * 1024 * 1024 * 1024, // 2.5 GB
];

// Run tests
console.log('Testing formatSize function:');
console.log('---------------------------');
testCases.forEach(bytes => {
  console.log(`${bytes} bytes = ${formatSize(bytes)}`);
});
console.log('---------------------------');

// Test with different decimal places
console.log('\nTesting with different decimal places:');
console.log('---------------------------');
const sampleSize = 1048576 * 1.5; // 1.5 MB
console.log(`${sampleSize} bytes with 0 decimals = ${formatSize(sampleSize, 0)}`);
console.log(`${sampleSize} bytes with 1 decimal = ${formatSize(sampleSize, 1)}`);
console.log(`${sampleSize} bytes with 2 decimals = ${formatSize(sampleSize, 2)}`);
console.log(`${sampleSize} bytes with 3 decimals = ${formatSize(sampleSize, 3)}`);
console.log('---------------------------');

console.log('\nTest completed!');