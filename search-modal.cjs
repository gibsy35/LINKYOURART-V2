const fs = require('fs');
const content = fs.readFileSync('./src/App.tsx', 'utf8');
const lines = content.split('\n');

console.log("Searching for selectedCreation usage in render:");
lines.forEach((line, index) => {
  if (line.includes('selectedCreation') && (line.includes('title') || line.includes('description') || line.includes('expertRemarks') || line.includes('milestones') || line.includes('pillars'))) {
    console.log(`${index + 1}: ${line.trim()}`);
  }
});
