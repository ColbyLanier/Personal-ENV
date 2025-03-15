#Requires AutoHotkey v2.0
#Include C:\Users\colby\OneDrive\Documents\Obsidian\Personal-ENV\Scripts\ahk\helper.ahk

obs_manage(input) {
    switch (input) {
        case "Numpad7": obs_workspace()
        case "Numpad8":
            ; SetTitleMatchMode "2"
            ; if WinExist("Obsidian") {
            ;     WinClose "Obsidian"
            ; }
            ; Sleep 500
            ; Send "!{Space}"
            ; Sleep 100
            ; Send ".Obsidian{Enter}"
            ; Run "C:\Users\colby\AppData\Local\Programs\obsidian\Obsidian.exe",, "Max"
        case "Numpad9":
            ToolTip("Delete?")
            if KeyWaitAny() == "Numpad9" {
                Run("obsidian://adv-uri?vault=Personal-ENV&commandid=app%3Adelete-file")
            }
            ToolTip()
    }
}

obs_workspace() {
    ToolTip("Select Workspace")
    input := KeyWaitAny()
    ; Extract last character and convert to integer
    num := Integer(SubStr(input, -1))
    if !IsInteger(num) {
        return
    }
    try {
        wksp := wkspmap[num]
    } catch as e {
        ToolTip(e.message)
        return
    }
    ToolTip(wksp)
    RunTP('user.wksp', [wksp])
    ToolTip()
}