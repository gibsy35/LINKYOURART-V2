const fs = require('fs');
const content = fs.readFileSync('./src/App.tsx', 'utf8');
const lines = content.split('\n');

console.log("Searching for current references:");
lines.forEach((line, index) => {
  if (line.includes('cre.description') || line.includes('selectedCreation.description') || line.includes('mil.desc') || line.includes('selectedCreation.expertRemarks')) {
    console.log(`${index + 1}: ${line.trim()}`);
  }
});
