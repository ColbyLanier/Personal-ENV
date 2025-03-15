#Requires AutoHotkey v2.0
#Include create\obsidian-note.ahk
#include manage\obsidian-note.ahk

; Halts input and returns the next key pressed. 

KeyWaitAny(Options:="") {
    ih := InputHook(Options) 
    if !InStr(Options, "V") 
       ih.VisibleNonText := false 
    ih.KeyOpt("{All}","E") ; End
    ih.Start() 
    ErrorLevel := ih.Wait() ; Store EndReason in ErrorLevel 
    return ih.EndKey ; Return the key name
}

KeyWaitNum(Options:="") {
    ih := InputHook(Options) 
    if !InStr(Options, "V") 
       ih.VisibleNonText := false 
    ih.KeyOpt("{Numpad1}{Numpad2}{Numpad3}{Numpad4}{Numpad5}{Numpad6}{Numpad7}{Numpad8}{Numpad9}{Numpad0}{NumpadEnter}{NumpadAdd}{NumpadDot}","E") ; End
    ih.Start() 
    ErrorLevel := ih.Wait() ; Store EndReason in ErrorLevel 
    try {
        return Integer(SubStr(ih.EndKey, -1))
    } catch {
        return ih.EndKey
    }
}

wrap_macro(input_func) {
    ToolTip("#!/bin/bash")
    SetNumLockState("On")
    input := KeyWaitAny()
    input_func(input)
    SetNumLockState("Off")
    ToolTip()
}

wrap_laptop(input_func) {
    global laptopState
    laptopState := false
    wrap_macro(input_func)
    laptopState := true
}

Create(input) {
    obs_create(input)
    ; activeWindow := WinGetProcessName("A")
    ; ToolTip("Reading " input " in " activeWindow)
    ; switch { ; Functions are in subfolder
    ;     case InStr(activeWindow, "Obsidian"):
    ;         obs_create(input)
    ;     case InStr(activeWindow, "Vivaldi"):
    ;         ; viv_create(input)
    ;     case InStr(activeWindow, "Cursor"):
    ;         ; cur_create(input)
    ; }
}

Manage(input) {
    obs_manage(input)
}

Navigate(input) {
    ; ToolTip("Navigate")
    switch (input) {
        case "Numpad1":
            Run('obsidian://advanced-uri?vault=Personal-ENV&workspace=1-Obsidian',,'Hide')
        case "Numpad2":
            Run('obsidian://advanced-uri?vault=Personal-ENV&workspace=2-Civic',, 'Hide')
        case "Numpad3":
            Run('obsidian://advanced-uri?vault=Personal-ENV&workspace=3-Algorithms',, 'Hide')
        case "Numpad4":
            Run('obsidian://advanced-uri?vault=Personal-ENV&workspace=4-Computing',, 'Hide')
        case "Numpad5":
            Run('obsidian://advanced-uri?vault=Personal-ENV&workspace=5-Personal',, 'Hide')
        case "Numpad6":
            Run('obsidian://advanced-uri?vault=Personal-ENV&workspace=0-Admin',, 'Hide')
    }
}
^+a::ToolTip(DllCall("GetSystemMetrics", "int", 86))
^+b::ToolTip(laptopState)
^+z::ToolTip()

; #HotIf !GetKeyState("NumLock", "T")
;     NumpadDiv::wrap_macro(Create)
;     NumpadMult::wrap_macro(Manage)
;     NumpadSub::wrap_macro(Navigate)
;     NumpadAdd::return
; #HotIf