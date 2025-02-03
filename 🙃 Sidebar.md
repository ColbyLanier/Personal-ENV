##### [[🏠 Homepage]]

### Favorites
```dataview
LIST
FROM #favorite
SORT file.mtime DESC
```

```dataviewjs
// Add button to create new quick note
const buttonDiv = dv.el("div", "", {attr: {style: "margin-bottom: 8px"}});
const button = buttonDiv.createEl("button", {text: "New Note"});
button.addEventListener("click", async () => {
    // Generate timestamp for the file name
    const timestamp = moment().format("YYYYMMDDHHmmss");
    const newNotePath = "000 Quick Notes/" + timestamp + ".md";
    
    // Create new file with default template
    await app.vault.create(newNotePath, "");
    // Open the new file
    const newFile = app.vault.getAbstractFileByPath(newNotePath);
    await app.workspace.getLeaf().openFile(newFile);
    // Apply the default template
    await app.commands.executeCommandById("templater-obsidian:insert-templater");
});
```
### Quick Notes
```dataviewjs

// Display existing quick notes
const notes = dv.pages('"000 Quick Notes"')
if (notes.length){
  dv.list(notes.file.link)
}
else{
  dv.span('- ? No Quick Notes Found')
}
```

```dataviewjs
// Get current hour and minutes
const now = new Date();
const hour = now.getHours();
const minutes = now.getMinutes();
const currentTime = hour + minutes/60;

// Check time ranges and display appropriate section
if (currentTime >= 7.5 && currentTime <= 8.5) {
  // Show Algorithms section during 7:30-8:30
  dv.header(3, "Algorithms");
  const algoNotes = dv.pages('"Inputs/Algorithms"');
  if (algoNotes.length) {
    dv.list(algoNotes.file.link);
  } else {
    dv.span('- ? No Algorithm Notes Found');
  }
} else if (currentTime >= 10 && currentTime <= 12) {
  // Show Civic section during 10:00-12:00
  dv.header(3, "Civic");
  const civicNotes = dv.pages('"Inputs/Civic"');
  if (civicNotes.length) {
    dv.list(civicNotes.file.link);
  } else {
    dv.span('- ? No Civic Notes Found');
  }
} else {
  // Show Follow Up Notes at all other times
  dv.header(3, "Follow Up Notes");
  const notes = dv.pages('#followup');
  if (notes.length) {
    dv.list(notes.file.link);
  } else {
    dv.span('- ? No FollowUp Notes Found');
  }
}
```

### Recents

#### Last Opened
```dataviewjs
dv.list(app.workspace.recentFileTracker.lastOpenFiles.map(x=>dv.fileLink(x)).slice(0, 7))
```
---
#### Last Modified
```dataview
LIST
FROM ""
SORT file.mtime DESC
LIMIT 7
```
