---
modified_at: 2024-02-17T12:43:20+05:30
cssclasses:
  - wide-page
  - cards
tags: 
banner: https://images.unsplash.com/photo-1581574919402-5b7d733224d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNjAwOTd8MHwxfHNlYXJjaHwxfHxnb2FsfGVufDB8MHx8fDE3MDY2MTEyMTR8MA&ixlib=rb-4.0.3&q=80&w=1080
banner_y: 0.608
banner_icon: 
id: goal-moc
goals:
  - "[[001 Goals/Debloat windows.md]]"
  - "[[001 Goals/Daemon Decision.md]]"
  - "[[001 Goals/Embed console in workspace somehow.md]]"
  - "[[001 Goals/Fill Workspaces With Ideas.md]]"
  - "[[001 Goals/Earn vivaldi.md]]"
  - "[[001 Goals/fix obsidian git.md]]"
  - "[[001 Goals/Goal Root.md]]"
  - "[[001 Goals/Filter in data lake entries.md]]"
  - "[[001 Goals/hack smartwatch.md]]"
  - "[[001 Goals/fix backslide of habits.md]]"
  - "[[001 Goals/Implement Meal Plan.md]]"
  - "[[001 Goals/Investigate Note refactor.md]]"
  - "[[001 Goals/Keep Competitor.md]]"
  - "[[001 Goals/Generic Metadata.md]]"
  - "[[001 Goals/Linter Expansion.md]]"
  - "[[001 Goals/nuts.md]]"
  - "[[001 Goals/Obsidian OmniGoal.md]]"
  - "[[001 Goals/Macro pad hack.md]]"
  - "[[001 Goals/refine ngrok rest api.md]]"
  - "[[001 Goals/learn hotkeys.md]]"
  - "[[001 Goals/revise goal template.md]]"
  - "[[001 Goals/projects vs goals vs tasks.md]]"
  - "[[001 Goals/Review twitter bookmarks.md]]"
  - "[[001 Goals/Subscription Consolidation.md]]"
  - "[[001 Goals/what is the maximum task threshold before it becomes a goal.md]]"
  - "[[001 Goals/Workspaces.md]]"
---

```dataviewjs
let goals = dv.pages('"001 Goals"'); 
dv.table(["Goal", "Target", "Deadline", "Progress"],
goals.map(goal => [
`<div style="position: relative; overflow: hidden; width: 100%; height: 200px;"> <img src="${goal.banner}" alt="Banner" style="object-fit: cover; object-position: center; width: 100%; height: 100%;"> <div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></div>
</div>`, `<span style="font-size: 1.1em;">${goal.file.link}</span>`,
goal.deadline,
`<progress value="${goal.progress}" max="${goal.target}"></progress><br>${Math.round((goal.progress / goal.target) * 100)}% completed` ]) );
dv.container.classList.add("cards-align-top");
```


















