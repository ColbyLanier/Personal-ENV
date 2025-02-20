---
tags:
  - graphHidden
cssclasses:
  - sidebar
noteType: page
modified_at: 2025-02-18T18:17:55-05:00
---
##### [[🏠 Homepage]]

### Favorites
```dataview
LIST
FROM #favorite
SORT file.mtime DESC
```
### Quick Notes
```dataviewjs
const notes = dv.pages('"000 Quick Notes"')
if (notes.length){
  dv.list(notes.file.link)
}
else{
  dv.span('- ? Not any Quick Notes Found')
}
```
### Follow Up Notes
```dataviewjs
const notes = dv.pages('#followup')
if (notes.length){
  dv.list(notes.file.link)
}
else{
  dv.span('- ? Not any FollowUp Notes Found')
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
