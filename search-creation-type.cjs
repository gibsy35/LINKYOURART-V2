const fs = require('fs');
const content = fs.readFileSync('./src/App.tsx', 'utf8');
const lines = content.split('\n');

console.log("Searching for interface Creation:");
lines.forEach((line, index) => {
  if (line.includes('interface Creation') || line.includes('type Creation =')) {
    console.log(`${index + 1}: ${line.trim()}`);
  }
});
