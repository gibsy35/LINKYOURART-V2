const fs = require('fs');
const content = fs.readFileSync('./src/App.tsx', 'utf8');
const lines = content.split('\n');

console.log("Searching for 'veepee' references in App.tsx:");
lines.forEach((line, index) => {
  if (line.includes('veepee')) {
    console.log(`${index + 1}: ${line.trim()}`);
  }
});
