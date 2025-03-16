<%*
//get selection
noteContent = await tp.file.selection();
// Check if the selected text has one or two strings
let numberOfStrings = noteContent.split('\n').length;
let titre;
let corps;
if (numberOfStrings === 1) {
// Ingest titre only
titre = noteContent.match(/.*/g)[0];
corps = "";
} else if (numberOfStrings > 1) {
// Ingest titre and corps
titre = noteContent.match(/.*(?=\n.*)/g)[0];
corps = noteContent.match(/(?<=.*\n)(.|\n)*/g).join('\n');
}
console.log(corps);
// list callouts
const callouts = {
note: '🔵 ✏️ Note',
info: '🟢 ℹ️ Info',
todo: '🟢 ✔️ Todo',
asidecleanright: '⚪️ 💬commentaire',
tip: '🌐 🔥 Tip / Hint / Important',
abstract: '🌐 📋 Abstract / Summary / TLDR',
question: '🟡 ❓ Question / Help / FAQ',
quote: '🔘 💬 Quote / Cite',
example: '🟣 📑 Example',
success: '🟢 ✔️ Success / Check / Done',
warning: '🟠 ⚠️ Warning / Caution / Attention',
failure: '🔴 ❌ Failure / Fail / Missing',
danger: '🔴 ⚡️ Danger / Error',
resources: 'resources',
code: 'code',
code2: 'code version 2',
proof: 'transparent callout'
};
// return callout
const type = await tp.system.suggester(Object.values(callouts), Object.keys(callouts), true, 'Select callout type.');
//return fold
const fold = await tp.system.suggester(['None', 'Expanded', 'Collapsed'], ['', '+', '-'], true, 'Select callout fold option.');
//return titler
const title = await tp.system.prompt('Title:', titre , true);
//get array of lines
lines = corps.split('\n');
//make a new string with > prepended to each line
let newContent = "";
lines.forEach(l => {
newContent += '> ' + l + "\n";
})
//remove the last newline character
newContent = newContent.replace(/\n$/, "");
//define callout header
header = "> [!"+type+"]"+fold + " " + title +"\n";
// Return the complete callout block
return header + newContent;
%>