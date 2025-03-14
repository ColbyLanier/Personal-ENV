#Requires AutoHotkey v2.0

#SingleInstance Off  ; Allow multiple scripts, but we handle uniqueness manually

^!End::Reload()

PragmaOnce(scriptPath, hwnd) {
    DetectHiddenWindows True
    SetTitleMatchMode 3
    query := scriptPath " ahk_class AutoHotkey"
    ; Check if another instance of this specific script is already running
    if existingHwnd := WinExist(query) {
        ToolTip("Balls")
        ProcessClose(WinGetPID(existingHwnd))  ; Close the existing instance
        Sleep 100  ; Give it time to close
        PragmaOnce(scriptPath, hwnd)
        ToolTip()
    } else {
        WinSetTitle scriptPath, "ahk_id " hwnd
    }
}