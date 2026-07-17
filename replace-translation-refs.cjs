const fs = require('fs');

const path = './src/App.tsx';
let content = fs.readFileSync(path, 'utf8');

// 1. Replace cre.description on the registry card
const targetCard = `                            <p className="text-sm text-gray-500 mt-3 line-clamp-2 leading-relaxed">
                              {cre.description}
                            </p>`;
const replacementCard = `                            <p className="text-sm text-gray-500 mt-3 line-clamp-2 leading-relaxed">
                              {translateCreationDesc(cre, lang)}
                            </p>`;

if (content.includes(targetCard)) {
  content = content.replace(targetCard, replacementCard);
  console.log("Replaced cre.description on registry card!");
} else {
  // Let's try a fallback single line replace
  content = content.replace('{cre.description}', '{translateCreationDesc(cre, lang)}');
  console.log("Surgically replaced {cre.description}!");
}

// 2. Replace selectedCreation.description in details modal
content = content.replace('{selectedCreation.description}', '{translateCreationDesc(selectedCreation, lang)}');
console.log("Replaced {selectedCreation.description}!");

// 3. Replace expertRemarks check and rendering
content = content.replace('{selectedCreation.expertRemarks && (', '{translateCreationExpertRemarks(selectedCreation, lang) && (');
content = content.replace('"{selectedCreation.expertRemarks}"', '"{translateCreationExpertRemarks(selectedCreation, lang)}"');
console.log("Replaced expertRemarks check and text!");

// 4. Replace mil.desc in both milestone loops
// We can do global replace for '<p className="text-gray-500 text-[11px] mt-0.5 leading-snug">{mil.desc}</p>'
const targetMil = '<p className="text-gray-500 text-[11px] mt-0.5 leading-snug">{mil.desc}</p>';
const replacementMil = '<p className="text-gray-500 text-[11px] mt-0.5 leading-snug">{translateMilestoneDesc(mil, lang)}</p>';

while (content.includes(targetMil)) {
  content = content.replace(targetMil, replacementMil);
  console.log("Replaced a milestone description!");
}

fs.writeFileSync(path, content, 'utf8');
console.log("All translation references successfully updated!");
