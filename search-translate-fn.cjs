const fs = require('fs');
const content = fs.readFileSync('./src/App.tsx', 'utf8');
const lines = content.split('\n');

console.log("Searching for translateMilestone or translateCategory:");
lines.forEach((line, index) => {
  if (line.includes('translateMilestone') || line.includes('translateCategory') || line.includes('translate')) {
    console.log(`${index + 1}: ${line.trim()}`);
  }
});
