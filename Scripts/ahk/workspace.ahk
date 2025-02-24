#Requires AutoHotkey v2.0

scriptPath := A_ScriptDir . "\..\Shell\workspace-load.sh"
scriptPath := RegExReplace(scriptPath, "\\", "/")  ; Convert to forward slashes

; Function to load workspace
LoadWorkspace(workspace) {
    ; Set environment variable and run the shell script
    EnvSet("OBS_WORKSPACE", workspace)
    ;Run("wsl.exe env OBS_WORKSPACE=%workspace% %scriptPath%")
    str := "wsl.exe env OBS_WORKSPACE=" workspace " $(wslpath -a " scriptPath ")"
    ;ToolTip(str)
    Run(str,, "Hide")
}

; Hotkey mappings
CapsLock & 0::LoadWorkspace("0-Obsidian")
CapsLock & 1::LoadWorkspace("1-Main")      ; Ctrl+Alt+1
CapsLock & 2::LoadWorkspace("2-Civic")     ; Ctrl+Alt+2
CapsLock & 3::LoadWorkspace("3-Algorithms") ; Ctrl+Alt+3
CapsLock & 4::LoadWorkspace("4-Computing")  ; Ctrl+Alt+4
CapsLock & 5::LoadWorkspace("5-Personal")   ; Ctrl+Alt+5

