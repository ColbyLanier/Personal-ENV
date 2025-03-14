#Requires AutoHotkey v2.0

wkspmap := Map()
wkspmap.CaseSense := false
wkspmap.Set(0, "0-Admin",
    1, "1-Obsidian",
    2, "2-Civic",
    3, "3-Algorithms",
    4, "4-Computing",
    5, "5-Personal",
    6, "6-Scheming"
)

; RunWaitOne(command) {
;     DetectHiddenWindows(1)
;     Run(A_ComSpec,, "Hide", &pid)
;     WinWait("ahk_pid" pid)
;     DllCall("AttachConsole", "UInt", pid)
  
;     shell := ComObject("WScript.Shell")
;     exec := shell.Exec(A_ComSpec " /C " command)
  
;     DllCall("FreeConsole")
;     return exec.StdOut.ReadAll() 
; } 