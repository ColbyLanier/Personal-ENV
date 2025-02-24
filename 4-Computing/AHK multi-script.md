---
created_at: 2025-02-23T12:14:48-05:00
modified_at: 2025-02-23T12:33:45-05:00
workspace: 4-Computing
compute: ing
---


Autohotkey is a rigid structure that is quite difficult to manage cleanly.
I spent all of this morning trying to sort out a programmatic middleground between singleinstance force and singleinstance off. I wanted each script to only contest and respace its own namespace.

pragma-once.ahk is a script that takes a script path and a pid to check if there are any other scripts running at that path and ends them. This runs recursively in the case there are multiple. After this it renames current process to the script path so it can be detected in the future. The script works, but I ran into a secondary roadblock that multiple scripts were using capslock as a modifier key, and they wouldn't work together non-blocking.

As a result, I have defaulted to having a script-compiler.ahk that simply includes each script in sequence. This accomplishes the same goal of maintaining individual script files for different purposes, but now I just run the compiler with singleinstance force. I could use pragma-once but theres no point unless I create more scripts in the future for different mod keys. In that case I'll have to think more about whether it should just go into the script-compiler for consistency or not, regardless I kept pragma-once around as an interesting learning experience and tech demo