---
noteType: goal
area: 
tags: goal
progress: 
target: 100
startDate: 
deadline: 
completionDate: 
completed: false
created_at: 2025-02-20T22:17:28-05:00
---

>[!multi-column]
>
>>[!blank-container]
>>Start Date: `=this.startDate`
>
>>[!blank-container]
>>Deadline: `=this.deadline`
>
>>[!blank-container]
>>Compleione Date: `=this.completionDate`

<br>

>[!multi-column]
>
>>[!blank-container]
>>**Completed:** `INPUT[toggle:completed]` 
>
>>[!blank-container]
>>**Area:** `=this.area`

```meta-bind
INPUT[progressBar(title('Progress'), minValue(0), maxValue(100)):progress]
```

> [!info] Why is this goal important to me?
> 1. 

> [!success]- What would I gain by achieving this goal?
> 1. 

> [!failure]- What are the possible risks and obstacles?
> 1. 

## Sub Goals:
projects are pipelines that will be repeated
goals are significant tasks, inserted as inline task
- [ ] Fix inline goal template
tasks are small inline ideas that have action for query
[[what is the maximum task threshold before it becomes a goal]]
- multi line description seems clunky
test inline goal
## Related:


