---
created_at: 2025-02-21T19:59:33-05:00
modified_at: 2025-02-21T20:00:13-05:00
workspace: 4-Computing
compute: ing
---
#deep_research #automation #hotkey 

# Hotkey Optimization Best Practices for Cursor, Vivaldi, and Obsidian

**Introduction:**  
Power users often customize keyboard shortcuts (hotkeys) in their tools to streamline workflows and minimize mouse use. This report compiles community-recommended practices for optimizing hotkeys in **Cursor** (a VS Code fork with AI features), the **Vivaldi** web browser, and **Obsidian** note-taking software. All three applications are highly configurable, and Windows users on QWERTY keyboards can tweak them for consistency and efficiency. Below, we outline common hotkey overlaps, conflict points and solutions, untapped key combinations suitable for custom binds, and best practices for using multi-layer shortcuts and macros across these programs. Recommendations are drawn from user forums, discussions, and configuration repositories.

## Universal and Overlapping Hotkeys across Applications

Many fundamental shortcuts carry over between Cursor/VS Code, Vivaldi, and Obsidian, creating a familiar base for users:

- **Standard Navigation & Tabs:** Common shortcuts like **New Tab/New File/New Note (Ctrl+T or Ctrl+N)**, **Close Tab/Pane (Ctrl+W)**, and **Find (Ctrl+F)** are shared or analogous across the apps. For example, Vivaldi uses **Ctrl+T** to open a new browser tab​
    
    [vivaldi.com](https://vivaldi.com/blog/10-shortcuts-you-should-try-today/#:~:text=%60Ctrl%20%2B%20B%60%20%2F%20%60,Open%20Bookmarks)
    
    , while VS Code/Cursor repurposes **Ctrl+T** for “Go to Symbol” search​
    
    [defkey.com](https://defkey.com/what-means/ctrl-t#:~:text=What%20does%20the%20Ctrl%20%2B,Show%20or%20open)
    
    . Despite that difference, **Ctrl+N**/**Ctrl+W** behave consistently (new file/note and close file/note) in code editors and Obsidian, matching browser conventions for new and close tab​
    
    [vivaldi.com](https://vivaldi.com/blog/10-shortcuts-you-should-try-today/#:~:text=,Open%20a%20new%20tab)
    
    . This overlap lets you carry muscle memory from one program to another.
    
- **Editing and Selection:** Basic text-editing hotkeys – **Copy/Paste (Ctrl+C / Ctrl+V)**, **Undo/Redo (Ctrl+Z / Ctrl+Y)**, **Select All (Ctrl+A)** – function the same in all three applications (inserting text in Obsidian, code in Cursor, webpage text in Vivaldi). Navigational combos like **Home/End**, **Ctrl+←/→** (word jump), and **Ctrl+Backspace** (delete word) also behave uniformly, which is beneficial for a seamless editing experience.
    
- **Search and Command Palettes:** Each app offers a “search everything” or command palette accessible via a hotkey. VS Code (and Cursor) default to **Ctrl+Shift+P** for the Command Palette and **Ctrl+P** for quick file/symbol open​
    
    [kineticlabs.com](https://kineticlabs.com/blog/via-mappings-for-vscode-programmers#:~:text=,Ctrl%2FCmd%20%2B%20Shift%20%2B%20N)
    
    . Obsidian similarly uses **Ctrl+P** for its command palette (with **Ctrl+O** for the quick switcher to open notes)​
    
    [forum.obsidian.md](https://forum.obsidian.md/t/obsidian-hotkeys-favorites-and-best-practices/12125#:~:text=Create%20note%20in%20new%20pane,%E2%8C%98%20%2B%20W)
    
    ​
    
    [forum.obsidian.md](https://forum.obsidian.md/t/obsidian-hotkeys-favorites-and-best-practices/12125#:~:text=Intermediate)
    
    . Vivaldi provides **Quick Commands** (a universal search bar for tabs, bookmarks, commands, etc.) by default on **F2** (or **Ctrl+E**)​
    
    [vivaldi.com](https://vivaldi.com/blog/10-shortcuts-you-should-try-today/#:~:text=,Commands%20to%20search%20for%20anything)
    
    . While the exact keys differ, the concept is the same – one shortcut summons a prompt to run any command or jump to any file/page. Power users often **align these triggers** for consistency: for example, mapping Vivaldi’s Quick Commands to **Ctrl+Shift+P** to match VS Code, or using a single global hotkey that opens the respective palette in whichever app is focused (via an automation script).
    
- **Sidebar/Panel Toggles:** All three programs have side panels or UI elements that can be shown/hidden via keyboard. VS Code’s Explorer or Sidebar toggles with **Ctrl+B** by default. In Obsidian, toggling the left or right sidebar can be custom-bound (some users choose **Ctrl+B** or **F5**, see below)​
    
    [forum.obsidian.md](https://forum.obsidian.md/t/standardise-keyboard-shortcuts-with-other-popular-programs/31262#:~:text=For%20example%2C%20I%20use%20,focus%20wants%20to%20be%20done)
    
    . In Vivaldi, the bookmarks or panels can open with **Ctrl+B** (bookmarks panel by default)​
    
    [vivaldi.com](https://vivaldi.com/blog/10-shortcuts-you-should-try-today/#:~:text=,focus%20on%20the%20Address%20field)
    
    , and there’s a dedicated **F4** to toggle the sidebar. These overlaps can be leveraged – for instance, using **Ctrl+B** in all three to show/hide a sidebar (after reassigning Obsidian’s default **Ctrl+B** bold formatting to another key to avoid conflict). Such consistency means one gesture (e.g. **Ctrl+B**) always reveals or focuses a sidebar, whether it’s the file tree in Cursor, the bookmarks in Vivaldi, or the note list in Obsidian.
    
- **Navigation History:** Navigating backward/forward is another action worth unifying. Web browsers use **Alt+← / Alt+→** to go back/forward in history, and VS Code adopts the same for navigating code editor history (e.g. after “Go to Definition”)​
    
    [forum.obsidian.md](https://forum.obsidian.md/t/standardise-keyboard-shortcuts-with-other-popular-programs/31262#:~:text=2,Ctrl%2Bshift%2Btab%20for%20switching%20between%20panes)
    
    . Obsidian doesn’t set these by default, but users often **bind Alt+Left/Right to go back/forward** between notes​
    
    [forum.obsidian.md](https://forum.obsidian.md/t/standardise-keyboard-shortcuts-with-other-popular-programs/31262#:~:text=2,Ctrl%2Bshift%2Btab%20for%20switching%20between%20panes)
    
    . Using **Alt+←/→** uniformly for “go back” in all apps (browser page, code editor, or note) is a best practice for keyboard-only workflow. It mirrors the behavior of Windows File Explorer as well, making it a universal navigation shortcut.
    

Maintaining these common shortcuts across Cursor, Vivaldi, and Obsidian reduces context-switching friction. As one forum user noted, not having to “learn different sets of keyboard shortcuts and keep them in my head” for similar actions improves efficiency​

[forum.obsidian.md](https://forum.obsidian.md/t/standardise-keyboard-shortcuts-with-other-popular-programs/31262#:~:text=Having%20to%20learn%20different%20sets,head%20is%20confusing%20and%20inefficient)

. When possible, configure each application so that ubiquitous operations (opening new tabs/files, closing them, searching, navigation) are triggered by the **same keys**. This creates a cohesive “language” of hotkeys that your muscle memory can apply everywhere.

## Key Conflict Points and Solutions

Despite many overlaps, certain default shortcuts conflict either between programs or with OS conventions. Identifying these conflict points and resolving them through remapping or workflow adjustments is crucial for a smooth multi-application setup:

- **Print vs. Command Palette (`Ctrl+P`):** A classic clash is **Ctrl+P**. In Obsidian (and VS Code), `Ctrl+P` opens the command palette or quick-open dialog​
    
    [forum.obsidian.md](https://forum.obsidian.md/t/obsidian-hotkeys-favorites-and-best-practices/12125#:~:text=Intermediate)
    
    , but in browsers `Ctrl+P` invokes Print. This can lead to accidentally printing a webpage when you intended to open a palette after switching from Obsidian to Vivaldi. **Solution:** Pick an alternate key for one of these actions. Many power users avoid `Ctrl+P` for palettes and instead use a different trigger that doesn’t conflict with Print. For example, one Obsidian user mapped the command palette to **Double-Shift** (hitting the Shift key twice) using a plugin​
    
    [forum.obsidian.md](https://forum.obsidian.md/t/obsidian-hotkeys-favorites-and-best-practices/12125#:~:text=Intermediate)
    
    , freeing `Ctrl+P` for other uses. Others might choose **Ctrl+Shift+P** as the universal “open commands” shortcut (since printing with Ctrl+Shift+P is uncommon). Vivaldi, being highly customizable, even allows disabling or changing the Print hotkey – one could reassign Print to something like `Ctrl+Shift+P` in Vivaldi and let `Ctrl+P` serve as Quick Commands or another function for consistency. The key is to ensure that a single key combo doesn’t accidentally trigger vastly different functions as you jump between apps. If you frequently hit `Ctrl+P` by habit, decide whether it should **always open a palette** or **always print** for your workflow, and remap accordingly to enforce that consistency​
    
    [forum.obsidian.md](https://forum.obsidian.md/t/standardise-keyboard-shortcuts-with-other-popular-programs/31262#:~:text=The%20sophisticated%20one%20is%2C%20you,similar%20things%20in%20different%20programs)
    
    .
    
- **“New Tab” vs. “Go to Symbol” (`Ctrl+T`):** Web browsers and many apps use **Ctrl+T** for opening a new tab/document. However, VS Code repurposes `Ctrl+T` to “Show all Symbols” in the workspace​
    
    [marketplace.visualstudio.com](https://marketplace.visualstudio.com/items?itemName=vmware.vscode-spring-boot#:~:text=Visual%20Studio%20Code,T%20%28symbols%20in%20workspace%29)
    
    (a search function), since code editors use a separate command for new files. This means that in Cursor (the VS Code fork), pressing `Ctrl+T` won’t open a new editor tab – it does a symbol search instead​
    
    [defkey.com](https://defkey.com/what-means/ctrl-t#:~:text=What%20does%20the%20Ctrl%20%2B,Show%20or%20open)
    
    . Meanwhile in Obsidian, by default `Ctrl+T` is _unassigned_ or used for a lesser function (some users map it to opening a specific dialog or template). This inconsistency can be jarring: you might press Ctrl+T in Cursor expecting a new file tab like your browser, only to trigger a search. **Solution:** If you prefer the universal meaning of “new tab”, consider remapping Cursor’s _go-to-symbol_ off of `Ctrl+T` (you could bind that search to another key like `Ctrl+Shift+O` or a function key). Then bind `Ctrl+T` to an equivalent “new document” action in all three programs (in Obsidian, you can set `Ctrl+T` to create a new note if it’s free, or even to open a new pane). Alternatively, embrace the difference: use `Ctrl+N` for new notes/files in Obsidian and Cursor (both use `Ctrl+N` naturally) and reserve `Ctrl+T` for browser tabs. The main point is to **be aware of the mismatch**; some users consciously decide that in editing contexts `Ctrl+T` will do something else (like symbol lookup) and train themselves accordingly, or they eliminate the conflict via customization. Documentation from Cursor’s developers notes this difference – Cursor (VSCode) uses `Ctrl+T` for symbol search while browsers use it for new tabs​
    
    [defkey.com](https://defkey.com/what-means/ctrl-t#:~:text=What%20does%20the%20Ctrl%20%2B,Show%20or%20open)
    
    ​
    
    [vivaldi.com](https://vivaldi.com/blog/10-shortcuts-you-should-try-today/#:~:text=%60Ctrl%20%2B%20B%60%20%2F%20%60,Open%20Bookmarks)
    
    , so plan your mappings with that in mind.
    
- **`Ctrl+L` and Other Overloaded Keys:** Several keyboard shortcuts have distinct meanings in each application, which can confuse workflow if not addressed:
    
    - **Address Bar vs. Editor Actions (`Ctrl+L`):** In browsers, `Ctrl+L` focuses the address bar (URL field)​
        
        [vivaldi.com](https://vivaldi.com/blog/10-shortcuts-you-should-try-today/#:~:text=,Commands%20to%20search%20for%20anything)
        
        . In Cursor/VS Code, `Ctrl+L` typically selects the current line or is part of multi-cursor navigation (and in the Cursor fork, `Ctrl+L` was changed to open the AI chat panel by default​
        
        [github.com](https://github.com/tjx666/vscode-classic-experience#:~:text=,I%20didn%27t%20add%20a)
        
        ). If you press `Ctrl+L` in Obsidian, nothing happens by default (it’s unassigned), though a plugin or custom hotkey could use it. This disparity means if you often use `Ctrl+L` to quickly go to the address bar in Vivaldi, doing so in a code or note editor might perform an unintended action (or nothing). **Solution:** To avoid confusion, some users remap **browser address focus** to a different key (Vivaldi allows changing `Ctrl+L` to another shortcut), or they remap the editor function. For instance, since Vivaldi also supports `F8` to focus the address field (like classic Opera browsers), you could train yourself to use `F8` in the browser and reclaim `Ctrl+L` for something universal in all apps. Conversely, you might disable or change Cursor’s `Ctrl+L` binding for AI chat (the VSCode Classic Keybindings extension for Cursor actually moves “Open Chat” off `Ctrl+L` to `Ctrl+]` to restore normal behavior​
        
        [github.com](https://github.com/tjx666/vscode-classic-experience#:~:text=,I%20didn%27t%20add%20a)
        
        ). Harmonizing `Ctrl+L` isn’t as critical as some other keys, but it’s a good example of checking **what each common shortcut does in each program** so you’re not caught off guard. A general tip from the Vivaldi team: if a particular shortcut like `Alt` or `Ctrl+L` conflicts with text editing needs, Vivaldi lets you disable its browser-specific function (e.g. toggling off “Alt = activate menu” to free up Alt combinations)​
        
        [help.vivaldi.com](https://help.vivaldi.com/desktop/shortcuts/keyboard-shortcuts/#:~:text=Pressing%20the%20,Gestures)
        
        .
        
    - **Formatting vs. UI Toggle (`Ctrl+B`):** This key illustrates a conflict of priorities. In text-centric apps (Obsidian, Word, etc.), **Ctrl+B** means “bold” formatting. In VS Code, **Ctrl+B** toggles the sidebar visibility (because bold isn’t relevant in plain-code editing). In Vivaldi, **Ctrl+B** opens the bookmarks menu or panel​
        
        [vivaldi.com](https://vivaldi.com/blog/10-shortcuts-you-should-try-today/#:~:text=,focus%20on%20the%20Address%20field)
        
        . If you use all three apps, `Ctrl+B` will do three different things in each – which might be acceptable if context makes it obvious (editing text vs. browsing). However, if you prefer uniform behavior, you have a choice: (a) **Standardize on the text-editor meaning** – e.g. make `Ctrl+B` always a text formatting hotkey, and remap sidebar toggling to another key in VS Code and Vivaldi; or (b) **Standardize on the UI toggle** – e.g. use `Ctrl+B` to universally open “Bookmarks/Sidebar/Library”, and in Obsidian assign `Ctrl+B` to toggle its left sidebar instead of bold (and find a new bold shortcut like `Ctrl+Shift+B`). There is no one right answer; the community tends to stick with context-appropriate defaults (i.e. leave **bold** on Ctrl+B in Obsidian, since notes can be formatted, and accept that in other apps that key does something else). But power users who rarely bold text in notes have repurposed that easy combo for something more useful to them (like quickly toggling panels in all apps). **Solution:** Determine what function you value more on a single-keystroke shortcut. If formatting is secondary, feel free to unbind Obsidian’s bold and use `Ctrl+B` for a global “toggle sidebar” concept across apps. Obsidian’s Hotkeys settings will warn you of conflicts if you try to assign a key that’s in use​
        
        [forum.obsidian.md](https://forum.obsidian.md/t/standardise-keyboard-shortcuts-with-other-popular-programs/31262#:~:text=For%201%20and%202%2C%20you,change%20the%20other%20command%E2%80%99s%20hotkey)
        
        , so you can safely remove the conflict. On the other hand, if you do want to keep text bold (Ctrl+B) and sidebar toggling (perhaps also Ctrl+B) separate, just be mindful of the app you’re in or use a different key for one of them. Several users report that keeping text editing shortcuts (bold, italic, etc.) on the same keys in all writing apps is helpful, and they instead map UI toggles to function keys or Alt-combos to avoid overlap.
        
    - **Multi-Purpose Keys (Esc, Enter, etc.):** Some keys like **Escape** serve as a universal “close/cancel” in almost every context (closing dialogs, exiting modes, closing Vivaldi’s Quick Commands, etc.), so they aren’t so much conflicting as _essential_ overlaps – **keep these consistent**. Another example is **Enter**: normally it’s “confirm” or new line, but in certain command palettes, Enter might execute a command. No custom mapping is needed here, just recognition that these keys have quasi-universal roles (don’t try to remap them to wild new functions). Conflicts can arise if you assign these keys for custom use – e.g. mapping _Caps Lock_ to Esc (a popular Vim trick) is fine, but don’t remove the Escape functionality entirely. Similarly, **Ctrl+Space** is sometimes used in editors for special triggers (e.g. in VSCode, it triggers IntelliSense suggestions) and in Windows it can switch input language – if you plan to use `Ctrl+Space` as a custom global hotkey, be aware of such default uses. Always check that a key you want to repurpose isn’t “silently” doing something in one of the apps or the OS.
        

**Resolving Conflicts:** The primary methods to resolve shortcut conflicts are:

- _Remap within the app:_ Each of these programs has robust keyboard settings. **Obsidian** allows rebinding any command’s hotkey and will indicate if your choice conflicts with another command​
    
    [forum.obsidian.md](https://forum.obsidian.md/t/standardise-keyboard-shortcuts-with-other-popular-programs/31262#:~:text=For%201%20and%202%2C%20you,change%20the%20other%20command%E2%80%99s%20hotkey)
    
    . **Vivaldi** not only lets you edit shortcuts (and even assign multiple shortcuts to the same action)​
    
    [help.vivaldi.com](https://help.vivaldi.com/desktop/shortcuts/keyboard-shortcuts/#:~:text=To%20add%20or%20edit%20a,keyboard%20shortcut)
    
    ​
    
    [vivaldi.com](https://vivaldi.com/blog/10-shortcuts-you-should-try-today/#:~:text=Add%20or%20edit%20shortcuts)
    
    , but also toggle whether single-key shortcuts and menu accelerators are active​
    
    [help.vivaldi.com](https://help.vivaldi.com/desktop/shortcuts/keyboard-shortcuts/#:~:text=Keyboard%20Shortcuts%20are%20enabled%20by,using%20%204%20and%20Calendar)
    
    ​
    
    [help.vivaldi.com](https://help.vivaldi.com/desktop/shortcuts/keyboard-shortcuts/#:~:text=Pressing%20the%20,Gestures)
    
    (helpful to free keys). **VS Code/Cursor** supports custom keybindings via JSON or the GUI, though as noted by Cursor users, some default AI-related shortcuts in Cursor were hard-coded and required an extension to fully change​
    
    [forum.cursor.com](https://forum.cursor.com/t/multiple-issues-with-custom-keybindings-and-hotkey-functionality/12466#:~:text=2,Bar%20and%20AI%20Chat)
    
    ​
    
    [github.com](https://github.com/tjx666/vscode-classic-experience#:~:text=,I%20didn%27t%20add%20a)
    
    . Whenever you notice a key combo doing something unexpected or conflicting with your workflow, consider reassigning it in the app’s settings to a free combination.
    
- _Adopt a mnemonic or context-based scheme:_ If true unification isn’t possible, decide on mnemonic patterns per app. For example, you might accept that in browsers `Ctrl+something` often deals with **tabs or pages**, whereas in editors `Ctrl+same thing` deals with **text**. Knowing this, you can mentally separate contexts. A community suggestion was to standardize within categories – e.g. use **Ctrl+G** for “find next” everywhere (it’s a common shortcut in browsers and Word, while Obsidian by default might not have it until you set it)​
    
    [forum.obsidian.md](https://forum.obsidian.md/t/standardise-keyboard-shortcuts-with-other-popular-programs/31262#:~:text=2,Ctrl%2Bshift%2Btab%20for%20switching%20between%20panes)
    
    . Similarly, use **F2** for “rename” across apps (VS Code uses F2 to rename symbols by default, Windows uses F2 to rename files; you could bind F2 in Obsidian to rename the current note). This way, even if the exact function differs by context, the intent remains consistent (F2 always means “rename current item” be it file, note, or bookmark).
    
- _Use automation for context-sensitive mappings:_ In the next section on multi-layer hotkeys, we discuss how tools like AutoHotkey can enforce that a shortcut only triggers in a specific app. This can resolve conflicts elegantly: for instance, you can have a single **global hotkey** (say **F5**) that does different things in each application by detecting the active window​
    
    [forum.obsidian.md](https://forum.obsidian.md/t/standardise-keyboard-shortcuts-with-other-popular-programs/31262#:~:text=The%20sophisticated%20one%20is%2C%20you,similar%20things%20in%20different%20programs)
    
    . One user’s solution was to make F5 a universal “toggle sidebar” key: in Obsidian it triggers the left sidebar (via sending Alt+E in that app) and in Vivaldi it might toggle the panel, but if another app is focused, F5 retains its normal function (e.g. refresh in browser or does nothing if not defined)​
    
    [forum.obsidian.md](https://forum.obsidian.md/t/standardise-keyboard-shortcuts-with-other-popular-programs/31262#:~:text=redirect%20in%20AHK%20your%20key,trigger)
    
    . This way you don’t have to remember multiple keys – you hit F5 in any app, and a script routes it to the correct command for that app. Such context-specific mapping is an advanced but powerful conflict solver.
    

In summary, **identify your high-frequency shortcuts** and ensure they don’t clash across your workflow. Change or disable any defaults that prove problematic (the communities for these apps heavily encourage personalization – e.g. “_you have a lot of possibilities to customize your key-bindings in Obsidian itself_”​

[forum.obsidian.md](https://forum.obsidian.md/t/standardise-keyboard-shortcuts-with-other-popular-programs/31262#:~:text=Amolip%20%20January%2029%2C%202022%2C,6%3A22pm%20%204)

). By proactively addressing known conflicts like `Ctrl+P`, `Ctrl+T`, `Ctrl+L`, `Ctrl+B`, etc., you create a more predictable and efficient multi-app environment.

## Unused but Accessible Shortcut Clusters for Custom Binds

A major advantage of these applications is the freedom to assign **custom hotkeys**. Power users often tap into less-used keys or key combinations that are easy to press but not already taken. Here we highlight some **untapped shortcut clusters** that work well for custom bindings, based on community experience:

- **Function Keys (F-keys):** The function row (F1–F12, and even higher F13–F24 on some keyboards) often has spare real estate. Many default mappings only use a few of these:
    
    - In Obsidian, F-keys are largely free (except F1 maybe opening help, and F11 toggling fullscreen). One Reddit user took advantage of this by mapping **F2** to toggle Preview/Edit mode, **F3** to insert a heading `#`, and **F4** to insert `==` for highlights​
        
        [reddit.com](https://www.reddit.com/r/ObsidianMD/comments/tq3du5/using_autohotkey_to_streamline_obsidian/#:~:text=,preview%20and%20edit%20modes)
        
        . These actions replaced awkward multi-key combos with single F-key presses, significantly speeding up formatting. They specifically noted choosing F-keys that **no other app was using**, since AutoHotkey would apply them system-wide​
        
        [reddit.com](https://www.reddit.com/r/ObsidianMD/comments/tq3du5/using_autohotkey_to_streamline_obsidian/#:~:text=AutoHotKey%20applies%20across%20all%20apps,already%20used%20by%20other%20apps)
        
        . Disabling an unused default (they even disabled F1, which they kept hitting accidentally​
        
        [reddit.com](https://www.reddit.com/r/ObsidianMD/comments/tq3du5/using_autohotkey_to_streamline_obsidian/#:~:text=,3)
        
        ) can free it for your own use.
    - In Vivaldi, common F-keys in use are F2 (Quick Commands) and F4 (Panel toggle), but others like F7, F8, F9 may not be assigned by default. You could assign F8 to something like “Mute/unmute tab” or “Focus address bar” if you prefer it over Ctrl+L.
    - In VS Code/Cursor, F2 is rename, F5 is start debug, F11 toggle fullscreen, etc. If you don’t use certain functions, those keys can be re-bound. For example, if you rarely use built-in debugging, F5 could be reassigned to a custom build task or an external script.
    - **F13–F24** (if available on your keyboard or via a secondary Fn layer) are virtually always free and can be used for global macros or app-specific hotkeys without any conflict. Even if you lack physical F13+ keys, tools like AutoHotkey can treat certain key combos as virtual F13+ keys to leverage this emptiness.
- **Unassigned Ctrl/Alt + Letter Combos:** There are many Ctrl+<key> or Alt+<key> combinations not used in defaults. For instance, **Obsidian leaves a lot of commands without hotkeys by default**​
    
    [help.obsidian.md](https://help.obsidian.md/User+interface/Hotkeys#:~:text=Obsidian%20allows%20you%20to%20customize,of%20commands%20is%20quite%20long)
    
    , expecting users to set what they need. If you notice you use a command often, assign it to a free combo that feels comfortable:
    
    - **Ctrl+Shift + Letter:** These are often available. Ex: Ctrl+Shift+U or Ctrl+Shift+I might be free (unless one is dev-tools in a browser). One user standardized **Ctrl+Shift+U** for “insert template” in Obsidian and a similar snippet in VS Code for convenience, since it wasn’t taken.
    - **Alt+Letter:** On Windows, Alt is used for menu accelerators, but only for certain letters. Letters like **Alt+W, Alt+Q, Alt+P** might correspond to menu items in some apps, but others like **Alt+H, Alt+J, Alt+K, Alt+L** often have no menu association. For example, a Vivaldi power-user set **Alt+J / Alt+K** as shortcuts to move tabs left and right​
        
        [vivaldi.com](https://vivaldi.com/blog/power-user-popogami-po-chooses-vivaldi-for-keyboard-only-browsing-and-more/#:~:text=I%20had%20already%20specified%20Alt%2BJ,to%20set%20up%20a%20custom)
        
        – by default these had no function and did not conflict with Vivaldi’s Alt-based menu (which opens with just Alt or Alt+F etc.). This proved very convenient as J and K are adjacent keys easy to reach; the user chose them inspired by Vim-style navigation keys (J/K) and because they were free to assign. In Obsidian or VS Code, Alt+J/K could be used similarly (indeed VS Code uses Alt+Down/Up for moving lines; a user mapping Alt+J/K to the same would achieve a left-hand friendly version of that). **Alt+M** or **Alt+.`** are other examples of combos that are typically unbound and easy to press.
    - **Ctrl+Alt combinations:** These two modifiers together (Ctrl+Alt+<key>) are not commonly used in these apps’ defaults, and on Windows Ctrl+Alt is equivalent to AltGr for some international layouts – but on US QWERTY, you can often use them safely. For example, **Ctrl+Alt+M** could be mapped to “toggle preview” in Obsidian or “compose email” in Vivaldi without collision. (Be careful not to conflict with any global inputs if you use multiple keyboard languages).
- **The “Hyper” Key (Caps Lock repurposing):** Some advanced users create a **dedicated modifier** by remapping Caps Lock to a combination of Ctrl+Shift+Alt (and sometimes Win) – commonly called a “Hyper” key. This opens up an entire new namespace of shortcuts because virtually nothing is bound to Ctrl+Shift+Alt+<key> by default. On macOS this is popular (Caps becomes Hyper, used for app launching, etc.)​
    
    [forum.obsidian.md](https://forum.obsidian.md/t/obsidian-hotkeys-favorites-and-best-practices/12125#:~:text=Hyper%20Key%20)
    
    . On Windows, you can achieve a similar effect with tools like AutoHotkey or keyboard firmware. For instance, you could define Caps+E to always open your code editor, Caps+W to close windows, Caps+J/K to move between tabs, etc., without fear of conflict, since no program uses that exact combo normally. One Obsidian user on Mac mapped Caps to Hyper and assigned Hyper+F for global search and Hyper+arrow keys for special actions​
    
    [forum.obsidian.md](https://forum.obsidian.md/t/obsidian-hotkeys-favorites-and-best-practices/12125#:~:text=Open%20command%20palette%20%E2%80%93%20,%E2%8C%98%20%2B%20%E2%87%A7%20%2B%20F)
    
    ​
    
    [forum.obsidian.md](https://forum.obsidian.md/t/obsidian-hotkeys-favorites-and-best-practices/12125#:~:text=Snap%20active%20Hover%20Editor%20to,Hyper%20Key%5D%20%2B%20S)
    
    . Windows users can emulate this by mapping Caps to something like Ctrl+Shift+Alt (and optionally making a tap of Caps send Esc, which is another common tweak for convenience​
    
    [forum.obsidian.md](https://forum.obsidian.md/t/obsidian-hotkeys-favorites-and-best-practices/12125#:~:text=Hyper%20Key%20)
    
    ). This **Hyper layer** can be your space for high-level macros or global shortcuts that you want available in all contexts.
    
- **Double-Tap or Sequence Shortcuts:** While not natively supported in all apps, plugins and external tools can allow sequences (like pressing two keys in a row, e.g. `Ctrl+A, then Ctrl+B`). In Obsidian, the _Key Sequence_ plugin attempts to mimic this chorded approach (like how tmux or Emacs allow multi-key chords)​
    
    [reddit.com](https://www.reddit.com/r/ObsidianMD/comments/tq3du5/using_autohotkey_to_streamline_obsidian/#:~:text=%E2%80%A2)
    
    . If you find yourself running out of single combinations, you can designate a prefix key that’s otherwise unused and create layered sequences. For example, you might decide that `Ctrl+Q` followed by another key will trigger special actions (since `Ctrl+Q` isn’t heavily used in these apps – except Vivaldi which uses it for Quit). You could map `Ctrl+Q, then N` to open a note in Obsidian, vs `Ctrl+Q, then T` to open a new browser tab, etc. This is more complex to set up (likely requiring AHK or software that supports chords), but it effectively multiplies available shortcuts.
    
- **Numeric Keys and Symbols:** Don’t overlook number keys with modifiers. **Ctrl+1..9** in browsers switch tabs​
    
    [vivaldi.com](https://vivaldi.com/blog/10-shortcuts-you-should-try-today/#:~:text=,Open%20a%20new%20tab)
    
    , but if you don’t use that feature, those could be reclaimed. Obsidian doesn’t use Ctrl+number by default (except possibly Ctrl+1..Ctrl+6 in some community setups for heading levels), so those are fair game. **Ctrl+0** is often unused (and one user bound Ctrl+0 in Obsidian to toggle between Light/Dark mode in a custom setup​
    
    [forum.obsidian.md](https://forum.obsidian.md/t/obsidian-hotkeys-favorites-and-best-practices/12125#:~:text=Color%20Schemes)
    
    ). The punctuation keys (like `Ctrl+;`, `Ctrl+'`, `Ctrl+/`) are often free and easy to reach. For instance, one Obsidian user set **Ctrl+.** to open the command palette​
    
    [forum.obsidian.md](https://forum.obsidian.md/t/obsidian-hotkeys-favorites-and-best-practices/12125#:~:text=%2A%20%60Alt%20%2C%60%20,Andy%20mode%20toggle)
    
    , and **Ctrl+/** to toggle a special “Andy Mode” panel, grouping useful shortcuts to the right-hand side of the keyboard. The rationale was that using two fingers on the same hand for frequent shortcuts is faster​
    
    [forum.obsidian.md](https://forum.obsidian.md/t/obsidian-hotkeys-favorites-and-best-practices/12125#:~:text=%2A%20%60Alt%20%2C%60%20,Andy%20mode%20toggle)
    
    . Think of clusters like **,<.>/?** or **[ ];'** near each other – assigning related actions to those can make quick combos easier (e.g. Ctrl+, for one panel, Ctrl+. for another, Ctrl+/ for another, since , . / are adjacent). As always, verify they aren’t assigned: in VS Code, for example, `Ctrl+/` already toggles comment for a line – a great shortcut to keep. So in that case, maybe you’d map a different key in Obsidian to match that behavior (ensuring you can comment/uncomment text in both VS Code and Obsidian with the same key).
    

In summary, **audit your keyboard’s “dead zones”** – keys or combos you rarely press in any app – and consider putting them to work. Community members often suggest F-keys and unusual modifier combos as a first resort because they won’t override anything important​

[reddit.com](https://www.reddit.com/r/ObsidianMD/comments/tq3du5/using_autohotkey_to_streamline_obsidian/#:~:text=AutoHotKey%20applies%20across%20all%20apps,already%20used%20by%20other%20apps)

. Also observe your own hand comfort: one person’s “easy” key (e.g. F2) might be hard to reach for another, whereas an “awkward” combo like Ctrl+Alt+Shift+U might actually be simple if you map it to a single key via your keyboard’s firmware. The goal is to find **convenient, memorable keys that are unassigned**, and map your most-used custom actions there. Document your choices (some keep a cheat sheet or use apps like KeyCombiner to practice them​

[reddit.com](https://www.reddit.com/r/vivaldibrowser/comments/ndwf8x/vivaldis_keyboard_shortcuts_in_a_table_that_can/#:~:text=Vivaldi%27s%20keyboard%20shortcuts%20in%20a,I%20added%20support%20for%20Vivaldi)

) until they become second nature.

## Multi-Layer Hotkeys, Macros, and Automation Tools

To truly streamline complex workflows, power users go beyond single-app shortcuts and employ **layers, macros, and automation utilities**. These strategies allow one keypress to perform multiple actions or adapt to different contexts. Below are best practices and popular tools for implementing multi-layer hotkeys and macros across Cursor, Vivaldi, and Obsidian:

- **AutoHotkey (AHK) for Windows:** AHK is a scripting tool that can remap keys, create shortcuts, and automate sequences at the OS level. It’s a favorite among Windows power users for unifying and extending hotkeys. Two common approaches with AHK are:
    
    1. **Context-Sensitive Hotkeys:** Use AHK to detect the active application and trigger app-specific shortcuts​
        
        [forum.obsidian.md](https://forum.obsidian.md/t/standardise-keyboard-shortcuts-with-other-popular-programs/31262#:~:text=The%20sophisticated%20one%20is%2C%20you,similar%20things%20in%20different%20programs)
        
        . For example, you can define a global hotkey (say **Win+N**) that, if Obsidian is active, sends the Obsidian shortcut for “new note”, but if Vivaldi is active, it sends the shortcut for “new browser tab”. This way **Win+N** always creates a new item, adapting to the app in focus​
        
        [forum.obsidian.md](https://forum.obsidian.md/t/standardise-keyboard-shortcuts-with-other-popular-programs/31262#:~:text=The%20sophisticated%20one%20is%2C%20you,similar%20things%20in%20different%20programs)
        
        . Similarly, one could make **F5** toggle the sidebar in whichever app is open: AHK script checks if the window title contains “Obsidian” and sends Alt+E, or if “Vivaldi” sends F4, etc.​
        
        [forum.obsidian.md](https://forum.obsidian.md/t/standardise-keyboard-shortcuts-with-other-popular-programs/31262#:~:text=For%20example%2C%20I%20use%20,focus%20wants%20to%20be%20done)
        
        ​
        
        [forum.obsidian.md](https://forum.obsidian.md/t/standardise-keyboard-shortcuts-with-other-popular-programs/31262#:~:text=F5%3A%3A%20Send%2C%20%21e%20return)
        
        . This effectively gives you **program-independent triggers** for common intents, which is incredibly efficient – you press one key and the script knows what to do in each program.
    2. **Hotkey Redirects (Simpler method):** Alternatively, you can assign a unique shortcut within each app and use AHK to map a convenient physical key to that combo when the app is in focus​
        
        [forum.obsidian.md](https://forum.obsidian.md/t/standardise-keyboard-shortcuts-with-other-popular-programs/31262#:~:text=The%20sophisticated%20one%20is%2C%20you,similar%20things%20in%20different%20programs)
        
        ​
        
        [forum.obsidian.md](https://forum.obsidian.md/t/standardise-keyboard-shortcuts-with-other-popular-programs/31262#:~:text=For%20example%2C%20I%20use%20,focus%20wants%20to%20be%20done)
        
        . For instance, assign **Alt+E** in Obsidian to “toggle sidebar” (assuming Alt+E was free) and then have AHK listen for **F5** and send Alt+E to Obsidian​
        
        [forum.obsidian.md](https://forum.obsidian.md/t/standardise-keyboard-shortcuts-with-other-popular-programs/31262#:~:text=For%20example%2C%20I%20use%20,focus%20wants%20to%20be%20done)
        
        . If Obsidian isn’t focused, F5 can either do nothing or perform a different task in another app if you set it so. This method ensures the AHK script doesn’t accidentally fire actions in the wrong context; it simply bridges a convenient keypress to each app’s dedicated shortcut. The Obsidian forum example shows exactly this: the user bound F5 (when Obsidian is active) to send `!e` (Alt+E) which is mapped to toggle the sidebar inside Obsidian​
        
        [forum.obsidian.md](https://forum.obsidian.md/t/standardise-keyboard-shortcuts-with-other-popular-programs/31262#:~:text=For%20example%2C%20I%20use%20,focus%20wants%20to%20be%20done)
        
        . The result: pressing F5 only toggles Obsidian’s sidebar and never interferes elsewhere.
    
    AHK can also create **hotstrings** (text expansions) and multi-step macros. One Redditor used AHK to expand short text like “-hm” into “Humanistic Management” in Obsidian, and to insert markup characters with single keys (e.g. F3 types a “#”)​
    
    [reddit.com](https://www.reddit.com/r/ObsidianMD/comments/tq3du5/using_autohotkey_to_streamline_obsidian/#:~:text=,preview%20and%20edit%20modes)
    
    . These expansions apply system-wide, so you could have common snippets (addresses, email templates) usable in all apps. For multi-step macros, AHK scripts can simulate a sequence: e.g. press one key to open Obsidian, create a new note, type the date, and so on. The possibilities are endless – the AHK community and documentation​
    
    [forum.obsidian.md](https://forum.obsidian.md/t/standardise-keyboard-shortcuts-with-other-popular-programs/31262#:~:text=If%20you%20are%20not%20familiar,documentation%20and%20a%20large%20community)
    
    are great resources. The key best practice is to **keep your AHK scripts organized and context-specific**: define clearly which hotkeys should work in which programs to avoid unwanted interference.
    
- **Keyboard Firmware & Layers (QMK, VIA, Wootility):** If you have a programmable mechanical keyboard (or something like the Wooting keyboard), you can offload a lot of hotkey logic to the hardware level. Firmware like **QMK** (and its GUI front-end **VIA**) allows you to define multiple layers and custom key behaviors that are active regardless of software. Some productivity tips using firmware layers:
    
    - **Dedicated Macro Keys:** You can map a single physical key to trigger a sequence of key presses. For example, with QMK/VIA you could program “Caps Lock + K” to send a series of keystrokes that performs a Git pull in VS Code​
        
        [kineticlabs.com](https://kineticlabs.com/blog/via-mappings-for-vscode-programmers#:~:text=Here%27s%20the%20thing%3A%20you%20are,pull%20code%20from%20your%20repo)
        
        . This might involve sending Ctrl+`(open terminal), then typing`git pull`, then Enter – all on one chord. That “macro” is stored in the keyboard, so pressing Caps+K does that in VS Code without any external script​
        
        [kineticlabs.com](https://kineticlabs.com/blog/via-mappings-for-vscode-programmers#:~:text=Here%27s%20the%20thing%3A%20you%20are,pull%20code%20from%20your%20repo)
        
        . In Vivaldi or Obsidian, you might use a similar approach: e.g. a key combo that outputs today’s date or opens a specific set of apps via Win+R commands. The Kinetic Labs guide recommends using VIA’s **“macros” feature** to tie multiple keys to one button for frequently used commands​
        
        [kineticlabs.com](https://kineticlabs.com/blog/via-mappings-for-vscode-programmers#:~:text=,function%20using%20the%20macron%20option)
        
        ​
        
        [kineticlabs.com](https://kineticlabs.com/blog/via-mappings-for-vscode-programmers#:~:text=You%20can%20also%20assign%20multiple,one%20using%20the%20macron%20feature)
        
        .
    - **Layers for Modes:** You can have a **“navigation layer”** where your letter keys become arrow keys or hotkeys when a modifier is held. Many QMK users set up a layer such that, for instance, holding Spacebar turns H,J,K,L into Left,Down,Up,Right arrows – letting them navigate text or browser tabs without moving hands. You could similarly define a “browser layer” where certain keys press browser shortcuts. Wootility (for Wooting keyboards) offers **DKS (Double Keystroke) and Mod Tap** features​
        
        [github.com](https://github.com/WootingKb/wootility-issues/issues/305#:~:text=Bind%20a%20pair%20of%20hotkeys,keys%20on%20the%20fn%20layer)
        
        ​
        
        [youtube.com](https://www.youtube.com/watch?v=30QC-9LlYb0#:~:text=Wootility%20,you%20toggle%20in%20every)
        
        , which allow a key to have dual functions (e.g. tap it for a letter, hold it for a modifier or layer switch). Best practice here is to assign dual roles to keys you press lightly vs hold intentionally – for example, a common trick is making the **CapsLock key a Layer trigger or Ctrl** when held, and Esc when tapped (so it’s useful both ways)​
        
        [forum.obsidian.md](https://forum.obsidian.md/t/obsidian-hotkeys-favorites-and-best-practices/12125#:~:text=Hyper%20Key%20)
        
        . This gives you an extra modifier without sacrificing a key. Another example: set the **Spacebar hold** to activate a layer where _IJKL_ become arrow keys (for site scrolling or moving cursors) – this is akin to Vim’s idea of modes, but enforced by hardware.
    - **Avoiding conflicts on hardware layers:** When implementing layers, ensure that your custom layer’s outputs don’t clash with existing OS shortcuts. For instance, if your layer makes a key output Win+D (to show desktop) or Alt+F4 (to close window), those will execute globally. That might be intentional, but just be aware. It’s wise to pick key combinations that either target a specific app or are unique enough. Some enthusiasts even dedicate one keyboard layer entirely to window management (snap windows, switch virtual desktops, etc.) and another to app-specific shortcuts. The Wootility docs highlight using per-layer colors to remember what each key does in that layer​
        
        [youtube.com](https://www.youtube.com/watch?v=fnrsmfdDSI4#:~:text=Wootility%20,Per%20Layer%20RGB%20in%20Wootility)
        
        – i.e., **visual cues** can help master multi-layer setups.
- **In-App Macro Features:** Both Vivaldi and Obsidian support internal macro-like functionality through extensions or settings:
    
    - **Vivaldi Command Chains:** Vivaldi has a powerful _Command Chains_ feature that lets you string together multiple browser commands into one shortcut​
        
        [vivaldi.com](https://vivaldi.com/blog/power-user-popogami-po-chooses-vivaldi-for-keyboard-only-browsing-and-more/#:~:text=Command%20Chains%20get%20heavy,a%20tab%20three%20places%20over)
        
        ​
        
        [vivaldi.com](https://vivaldi.com/blog/power-user-popogami-po-chooses-vivaldi-for-keyboard-only-browsing-and-more/#:~:text=I%20had%20already%20specified%20Alt%2BJ,once%20instead%20of%20three%20times)
        
        . For example, a user created a chain to move the active tab three positions to the right with one shortcut, instead of having to press the move-tab-right shortcut three times​
        
        [vivaldi.com](https://vivaldi.com/blog/power-user-popogami-po-chooses-vivaldi-for-keyboard-only-browsing-and-more/#:~:text=I%20had%20already%20specified%20Alt%2BJ,to%20set%20up%20a%20custom)
        
        . Another chain might save all open tabs as a session and then close them, or copy the current page URL and open a new tab. Command Chains can be bound to keys just like any other action in Vivaldi. Best practice is to identify repetitive multi-step tasks you do in the browser and see if a chain can automate them. The community has shared many creative chains (e.g., tile tabs then enter fullscreen for a presentation, or open a specific set of sites you check daily). Use descriptive names for your chains and assign shortcuts that hint at their function (maybe use seldom-used F8, F9 for these, or Ctrl+Alt combos). This keeps your workflow efficient and avoids manual repetition in the browser​
        
        [vivaldi.com](https://vivaldi.com/blog/power-user-popogami-po-chooses-vivaldi-for-keyboard-only-browsing-and-more/#:~:text=Command%20Chains%20get%20heavy,a%20tab%20three%20places%20over)
        
        .
    - **Obsidian Plugins (Templater, QuickAdd, etc.):** Obsidian’s plugin ecosystem offers automation. The **Templater plugin** allows scripting within notes – you can bind hotkeys to insert templates, which can include dynamic content (dates, boilerplate text, etc.)​
        
        [forum.obsidian.md](https://forum.obsidian.md/t/obsidian-hotkeys-favorites-and-best-practices/12125#:~:text=Formatting%20Intermediate)
        
        . **QuickAdd plugin** can create forms and capture workflows (for example, a hotkey that asks for input and then adds a formatted task to your Daily Note). There’s also an **Obsidian Key Sequencer** plugin (mentioned on Reddit) that can turn sequences of key presses into commands, akin to AHK’s hotstrings​
        
        [reddit.com](https://www.reddit.com/r/ObsidianMD/comments/tq3du5/using_autohotkey_to_streamline_obsidian/#:~:text=%E2%80%A2)
        
        . When using these, follow best practices like: keep your macros simple and focused (if they get too complex, external scripting might be more robust), and avoid mapping them to keys you might accidentally hit. Many users choose **Ctrl+Shift+Alt+<key>** for such custom plugin hotkeys – awkward to press manually, but you might trigger them via an AHK script or a dedicated macro key to make it easier. Essentially, treat these plugin hotkeys as “secondary” shortcuts that you either trigger via another layer or chord, so they don’t conflict with your primary shortcut scheme.
- **Cross-App Harmony:** The ultimate goal of multi-layer and macro usage is to make different applications feel like parts of a single integrated workflow. Consider a scenario: You’re researching in Vivaldi, you press a key to clip text and it automatically opens Obsidian, creates a new note with that text and the source URL, then perhaps even switches Cursor to a side-by-side view for coding notes. Achieving this requires chaining actions across apps – e.g., using AHK to detect a key and then orchestrate copy-paste and window switches. While complex, it’s doable and some users set up “boss keys” for common routines (like archive all notes and open daily plan). **Start small**: maybe use a macro key to simply launch all three apps in the morning, or a hotkey that backs up Obsidian vault then opens Vivaldi to a dashboard page. Verify each step works reliably before adding more.
    
- **Testing and Iteration:** When implementing multi-layer shortcuts, test thoroughly. If using AHK, utilize its window-specific hotkeys (`#IfWinActive` directives)​
    
    [forum.obsidian.md](https://forum.obsidian.md/t/standardise-keyboard-shortcuts-with-other-popular-programs/31262#:~:text=The%20sophisticated%20one%20is%2C%20you,similar%20things%20in%20different%20programs)
    
    or its key history tool to debug. If using QMK/VIA, use the **key tester** to ensure your layers send the correct outputs​
    
    [kineticlabs.com](https://kineticlabs.com/blog/via-mappings-for-vscode-programmers#:~:text=,Key%20Configurations)
    
    . A wise practice is to **change one thing at a time** and get used to it. For example, enable an “editor layer” on your keyboard and practice those keys for a week. Separately, try a new AHK script for unified shortcuts and see if it helps. Easing into these changes prevents overload and allows you to adjust your configurations based on real usage feedback.
    

In conclusion, combining application-specific hotkey tweaks with system-wide tools yields a potent setup. AutoHotkey scripts can unify and augment shortcuts across Cursor, Vivaldi, and Obsidian​

[forum.obsidian.md](https://forum.obsidian.md/t/standardise-keyboard-shortcuts-with-other-popular-programs/31262#:~:text=The%20sophisticated%20one%20is%2C%20you,similar%20things%20in%20different%20programs)

​

[forum.obsidian.md](https://forum.obsidian.md/t/standardise-keyboard-shortcuts-with-other-popular-programs/31262#:~:text=For%20example%2C%20I%20use%20,focus%20wants%20to%20be%20done)

, while keyboard firmware layers (QMK/VIA or vendor tools like Wootility) can give you entirely new sets of keys to play with on a whim​

[kineticlabs.com](https://kineticlabs.com/blog/via-mappings-for-vscode-programmers#:~:text=,in%20Layers)

​

[kineticlabs.com](https://kineticlabs.com/blog/via-mappings-for-vscode-programmers#:~:text=Under%20the%20configure%20option%2C%20you,just%20above%20your%20keyboard%20outline)

. The community consensus is that **investing time in a tailored hotkey scheme pays off** in speed and comfort. Whether it’s something simple like a single key to toggle dark mode everywhere, or a complex macro that updates your tasks across apps, these tools let you bend the computer to your workflow – not the other way around.

---

By leveraging overlapping hotkeys where convenient, resolving conflicts proactively, utilizing underused key combinations, and embracing macros/layers, Windows users can achieve a nearly mouseless workflow in Cursor, Vivaldi, and Obsidian. The best practices outlined above come from real power-users who have shared their configurations and tips. Start with small improvements (like aligning a few shortcuts or creating one macro), and gradually build a personalized setup. The end result is a cohesive system where common actions feel natural across different software, and custom actions are just a keypress away – dramatically boosting productivity for those who live at the keyboard.​

[vivaldi.com](https://vivaldi.com/blog/10-shortcuts-you-should-try-today/#:~:text=,Commands%20to%20search%20for%20anything)

​

[forum.obsidian.md](https://forum.obsidian.md/t/standardise-keyboard-shortcuts-with-other-popular-programs/31262#:~:text=The%20sophisticated%20one%20is%2C%20you,similar%20things%20in%20different%20programs)