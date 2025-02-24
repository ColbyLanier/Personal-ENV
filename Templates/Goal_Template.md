<% '---' %>
noteType: goal
tags: goal
progress: 0
target: 100
deadline:
timescale:
completed: false
parent:
taskrefs:
created_at: <% tp.file.creation_date('YYYY-MM-DD[T]HH:mm:ssZ') %>
workspace: <% tp.user.wsl() %>
<% '---' %>
>[!multi-column]
>
>>[!blank-container]
>>**Completed:** `INPUT[toggle:completed]` 
>
>>[!blank-container]
>>**Timescale:** `=this.timescale`

```meta-bind
INPUT[progressBar(title('Progress'), minValue(0), maxValue(100)):progress]
```

> [!success]- Spoils of the Conquest
> 1. 

> [!failure]- Weapons of the Adversary
> 2. 

## Sub Goals:

****
## Related:


<% await tp.file.move(`/${tp.user.wsl()}/${tp.file.title}`) %>