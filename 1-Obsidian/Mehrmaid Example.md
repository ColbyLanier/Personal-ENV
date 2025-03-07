---
title: Order example
Workspace: 1-Obsidian
---
```
erDiagram
    CUSTOMER ||--o{ ORDER : places
    ORDER ||--|{ LINE-ITEM : contains
    CUSTOMER }|..|{ DELIVERY-ADDRESS : uses
```


```
flowchart LR
A --> B & C --> D --> E --> F & G
G --> F
A["![[logo.png|100]]"]
B("![[logo-old.png|100]]")
C("[[thisisalink]]")
D("$f(x)=\sum_i^\inf x^i$")
E("**Caption**
1. **Bold**
2. *Italic*
3. ==Marker==
- [ ] Point
---
Different Section")
F("#uni")
G(("$\dfrac{2}{\pi}+2$"))
```
![](https://i.imgur.com/7dkIvmu.png)
