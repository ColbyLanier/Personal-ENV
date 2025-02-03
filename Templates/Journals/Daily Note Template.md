<% "---" %>
<%* let aliases = await tp.system.prompt('Enter the sentence of the day:') 
tR += "aliases: " + aliases %>
id: journal-<% tp.file.title %>
tags: journal/dailynote
Mood: 
Why: 
Wakeup_Routine: 0
Morning_Routine: 0
Noon_Routine: 0
Night_Routine: 0
<%* 
let dayOfWeek = moment(tp.file.title, "YYYY-MM-DD").day();
if (dayOfWeek === 2 || dayOfWeek === 4) { // Tuesday or Thursday
    tR += "Algorithms: 0\n";
} else {
    tR += "Algorithms: -2\n";
}
if (dayOfWeek === 1 || dayOfWeek === 3 || dayOfWeek === 5) { // Monday, Wednesday, or Friday
    tR += "Gym: 0\n";
} else {
    tR += "Gym: -2\n";
} 
%>
Civic_Work: 0
Work_Block: 0
Productivity: 0
Energy: 0
banner: https://i.imgur.com/hxMd3z1.jpg
banner_icon: 📅
banner_y: 0.68
created_at: <% tp.file.creation_date() %>
modified_at: <% tp.file.last_modified_date() %>
date: <% tp.file.title %>
<% "---" %>
↑ `$=dv.pages().where(b => b.id == 'journal-<% tp.date.now("gggg-[W]ww",0, tp.file.title, "YYYY-MM-DD") %>')[0].file.link`
<-<-  [[<% tp.date.now("YYYY-MM-DD",-1, tp.file.title, "YYYY-MM-DD") %>]]  <-  <% tp.file.title %>  ->  [[<% tp.date.now("YYYY-MM-DD",+1, tp.file.title, "YYYY-MM-DD") %>]]   ->->

<% tp.web.daily_quote() %>

---
# `=this.aliases`
## Info

> [!todo]- Productivity
> ```meta-bind
>INPUT[progressBar(title('Productivity Rating'), minValue(0), maxValue(10)):Productivity]
>```

> [!info]- Energy
> ```meta-bind
> INPUT[progressBar(minValue(0), maxValue(10)):Energy]
> ```
> **Why:** `INPUT[text:Why]`
# Habit Tracker
- Wakeup Routine: `INPUT[inlineSelect(option(-1, ❌), option(0, ✅), option(1, 🌟)):Wakeup_Routine]`
- Morning Routine: `INPUT[inlineSelect(option(-1, ❌), option(0, ✅), option(1, 🌟)):Morning_Routine]`
<%* if (dayOfWeek === 2 || dayOfWeek === 4) { %>
- Algorithms: `INPUT[inlineSelect(option(-1, ❌), option(0, ✅), option(1, 🌟)):Algorithms]`
<%* } %>
<%* if (dayOfWeek === 1 || dayOfWeek === 3 || dayOfWeek === 5) { %>
- Gym: `INPUT[inlineSelect(option(-1, ❌), option(0, ✅), option(1, 🌟)):Gym]`
<%* } %> 
- Civic Work: `INPUT[inlineSelect(option(-1, ❌), option(0, ✅), option(1, 🌟)):Civic_Work]`
- Noon Routine: `INPUT[inlineSelect(option(-1, ❌), option(0, ✅), option(1, 🌟)):Noon_Routine]`
- Work Block: `INPUT[inlineSelect(option(-1, ❌), option(0, ✅), option(1, 🌟)):Work_Block]`
- Night Routine: `INPUT[inlineSelect(option(-1, ❌), option(0, ✅), option(1, 🌟)):Night_Routine]`
---
## Thoughts and Tasks:
- 

## Civic
- 
## Work Block
- 

## Distractions
- 