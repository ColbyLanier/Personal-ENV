---
created_at: 2025-02-17T11:54:15-05:00
modified_at: 2025-02-17T14:05:51-05:00
---
<% tp.app.workspace %>

## **1. Purpose**

To create a flexible, modular templating system in Obsidian that allows for **shared reusable components**, reducing redundancy while maintaining workspace-specific structures.

---

## **2. Core Modular Components**

### **Metadata Block** (Included in All Notes)

- Standardized **frontmatter** fields:
    
    - `noteType`
        
    - `tags`
        
    - `status`
        
    - `created_at`
        
    - Other workspace-relevant metadata
        
- Stored as `Templates/Components/MetadataBlock.md`
    
- Included dynamically using:
    
    ```
    <% tp.include("Templates/Components/MetadataBlock.md") %>
    ```
    

### **Journal Components**

- **Date Navigation Links** (`prev`, `next` links for time-based notes)
    
- **Habit Tracking Section**
    
- **Reflection Prompts**
    
- Avoid over-specialization to maintain compatibility with external journal plugin
    

### **Technical Notes Components**

- **Project Overview Block** (Used in Coding & Civic Notes)
    
    - `Problem Statement`, `Target Impact`, `Stakeholders`
        
- **Implementation Details Block**
    
    - Used across multiple technical templates for structured breakdowns
        

### **Task/Goal Components**

- **Inline Goal Linking Block**
    
    - Ensures goals are **embedded within tasks** instead of stored in a separate `001 Goals` folder
        
    - Example:
        
        ```
        - [ ] [[Goal Title]] (Progress: 50%)
        ```
        
- **Task Management Elements**
    
    - Includes **progress tracking, deadlines, priority markers**
        

---

## **3. Implementation Approach**

- **Use** `******tp.include******` **to insert modular fragments** where needed
    
- **Bind to separate hotkeys**, avoiding user selection menus
    
- **Prioritize flexibility** over rigid inheritance to balance modularity with maintainability
    

---

## **4. Next Steps**

1. Finalize which components should be workspace-specific vs. fully modular
    
2. Test `tp.include` integration in a few key templates
    
3. Move to refining the **daily note template**, ensuring it works with the broader system
    

---
