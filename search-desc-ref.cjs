const fs = require('fs');
const content = fs.readFileSync('./src/App.tsx', 'utf8');
const lines = content.split('\n');

console.log("Searching for milestone desc references:");
lines.forEach((line, index) => {
  if (line.includes('.desc') && !line.includes('translateMilestoneDesc')) {
    console.log(`${index + 1}: ${line.trim()}`);
  }
});
