<% "---" %>
<%* let aliases = await tp.system.prompt('Enter the sentence of the day:') 
tR += "aliases: " + aliases %>
id: journal-<% tp.file.title %>
Active: 1
tags: journal/dailynote
<% await tp.user.getdaily() %>
Tomorrow: 
Workspace: Seitch Tabr
Routines: {
    Morning: {
		Teethbrush: 0,
		Armodafinil: 0,
		Movement: 0,
		Breakfast: 0,
	},
	Work: {
		CoffeeShake: 0,
		Skincare: 0
	},
	Biphasic: {
		Instameal: 0,
		Nap: 0,
		OTGmeal: 0,
		Meditation: 0
	},
	PreBed: {
		Movement: 0
	}
}
Prod: {
	Morning: {
		Focus: 0,
		Energy: 0,
		Wins:
	},
	Civic: {
		Focus: 0,
		Energy: 0,
		Wins:
	},
	Doublock: {
		Focus: 0,
		Energy: 0,
		Wins:
	},
	Class: -1,
	Gym: -1,
	Wins:
}
Streams: {
  Weight: {
    Pounds: -1,
    FatPercent: -1,
    LeanMass: -1
	},
  Sleep: {
    Rem: -1,
    Deep: -1,
    Hours: -1
    },
  Git: {
    Contributions: -1
	}
}
<% "---" %>
↑ `$=dv.pages().where(b => b.id == 'journal-<% tp.date.now("gggg-[W]ww",0, tp.file.title, "YYYY-MM-DD") %>')[0].file.link`
<-<-  [[<% tp.date.now("YYYY-MM-DD",-1, tp.file.title, "YYYY-MM-DD") %>]]  <-  <% tp.file.title %>  ->  [[<% tp.date.now("YYYY-MM-DD",+1, tp.file.title, "YYYY-MM-DD") %>]]   ->->

<% tp.web.daily_quote() %>
<%*
const dayOfWeek = new Date().getDay()
let foo = "Gym"
if (dayOfWeek === 2 || dayOfWeek === 4) {
foo = "Class"
}
-%>
---
# `=this.aliases`
# Habit Tracker

> [!todo]- **Productivity**
> ## Morning
> ```meta-bind
>INPUT[progressBar(minValue(0), maxValue(10)):Prod.Morning.Focus]
>```
>```meta-bind
>INPUT[progressBar(minValue(0), maxValue(10)):Prod.Morning.Energy]
>```
>## Civic
>```meta-bind
>INPUT[progressBar(minValue(0), maxValue(10)):Prod.Civic.Focus]
>```
>```meta-bind
>INPUT[progressBar(minValue(0), maxValue(10)):Prod.Civic.Energy]
>```
>## Doublock
>```meta-bind
>INPUT[progressBar(minValue(0), maxValue(10)):Prod.Doublock.Focus]
>```
>```meta-bind
>INPUT[progressBar(minValue(0), maxValue(10)):Prod.Doublock.Energy]
>```
>## **Energy**
> ```meta-bind
> INPUT[progressBar(minValue(0), maxValue(10)):Energy]
> ```

> [!multi-column]
>>**Pre-Morning**
>>```meta-bind
>>INPUT[multiSelect(option(Teethbrush), option(Movement), option(Breakfast)): Routines.Morning]
>>```
>
>>**Pre-Work**
>>```meta-bind
>>INPUT[multiSelect(option(Shake), option(Armodafinil), option(Skincare)): Routines.Work]
>>```
>
>>**Biphasic**
>>```meta-bind
>>INPUT[multiSelect(option(Instameal), option(Nap), option(OTGmeal), option(Meditation)): Routines.Biphasic]
>>```
>
>>**Pre-Bed**
>>```meta-bind
>>INPUT[multiSelect(option(Movement), option(Teethbrush), option(Read@8), option(Sleep@9)): Routines.Prebed]
>>```

# Temporal
> [!multi-column]
>> # Final: **<% tp.user.daysUntil("2025-05-06") %>**
>
>> # Wine and Civic Literacy: **<% tp.user.daysUntil("2025-05-04") %>**
>
>> # Move Out: **<% tp.user.daysUntil("2025-05-17") %>**
>
>> # Civic: **<% tp.user.daysUntil("2025-06-01") %>**
>
>>  # Birthday: **<% tp.user.daysUntil("2025-07-6") %>**

> [!multi-column]
>>Wins
>>```meta-bind
>>INPUT[list:Wins]
>>```
>>
>>Today Tasks
>>```meta-bind
>> INPUT[list:Today]
>>```
>>
>>Tomorrow Tasks
>>```meta-bind
>> INPUT[list:Tomorrow]
>>```
>
>>[!todo] Running Context
>>```meta-bind
>>INPUT[editor:Context]
>>```
--- 
```breadcrumbs
type:juggl
dir:down
```
