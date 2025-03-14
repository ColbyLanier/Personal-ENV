#Requires AutoHotkey v2.0
#singleInstance force

; Global variables for key history
keyPressHistory := []
MAX_HISTORY := 20
isGuiVisible := false
keyHistoryGui := 0

; Ctrl+Shift+K to toggle key history display
^+k::ToggleKeyHistory()

; Hook all keyboard input
#HotIf true
~*$::KeyPressed()

ToggleKeyHistory() {
    global isGuiVisible, keyHistoryGui
    
    if (isGuiVisible) {
        keyHistoryGui.Destroy()
        isGuiVisible := false
    } else {
        ShowKeyHistory()
        isGuiVisible := true
    }
}

KeyPressed() {
    global keyPressHistory, MAX_HISTORY
    
    ; Get info about the key that was just pressed
    thisKey := {
        name: GetKeyName(A_ThisHotkey),
        scanCode: Format("SC{:03X}", GetKeySC(A_ThisHotkey)),
        time: A_TickCount
    }
    
    ; Add to history and maintain max size
    keyPressHistory.Push(thisKey)
    if (keyPressHistory.Length > MAX_HISTORY)
        keyPressHistory.RemoveAt(1)
        
    ; Update GUI if visible
    if (isGuiVisible)
        ShowKeyHistory()
}

ShowKeyHistory() {
    global keyPressHistory, keyHistoryGui
    
    ; Create new GUI
    keyHistoryGui := Gui("+AlwaysOnTop")
    keyHistoryGui.SetFont("s10", "Consolas")
    keyHistoryGui.Add("Text",, "Key History (most recent at bottom):`n")
    
    ; Add each key event
    ; historyText := ""
    ; for key in keyPressHistory
    ;     historyText .= Format("{:-6} : {}`n", key.scanCode, key.name)
    
    keyHistoryGui.Add("Text",, keyHistory())
    keyHistoryGui.Show()
}

