#Requires AutoHotkey v2.0

; Set coordinate mode
CoordMode "Mouse", "Screen"  ; Changed to screen mode

; Global variables
normalSpeed := 15
turboSpeed := 30

; Wrapper function for Ctrl-aware hotkeys
HandleCtrlAwareHotkey(key, normalAction) {
    if GetKeyState("Ctrl", "P")
        Send "^" key
    else
        normalAction()
}

; Basic navigation
CapsLock & k::HandleCtrlAwareHotkey("k", () => Send("{Down}"))
CapsLock & j::HandleCtrlAwareHotkey("j", () => Send("{Up}"))
CapsLock & h::HandleCtrlAwareHotkey("h", () => Send("{Left}"))
CapsLock & l::HandleCtrlAwareHotkey("l", () => Send("{Right}"))
CapsLock & u::HandleCtrlAwareHotkey("u", () => Send("{PgUp}"))
CapsLock & o::HandleCtrlAwareHotkey("o", () => Send("{PgDn}"))
CapsLock & i::HandleCtrlAwareHotkey("i", () => Send("{WheelUp}"))
CapsLock & m::HandleCtrlAwareHotkey("m", () => Send("{WheelDown}"))

; Mouse clicks
CapsLock & q::HandleCtrlAwareHotkey("q", MouseClick_Hold.Bind("LButton", "q"))
CapsLock & Enter::HandleCtrlAwareHotkey("Enter", MouseClick_Hold.Bind("LButton", "Enter"))
CapsLock & e::HandleCtrlAwareHotkey("e", MouseClick_Hold.Bind("RButton", "e"))

; Helper function for mouse click and hold
MouseClick_Hold(button, key) {
    Send "{" button " down}"
    KeyWait key
    Send "{" button " up}"
}

; Mouse movement function
MouseMoveWithDiagonal(mainKey, x, y) {
    while GetKeyState(mainKey, "P") {
        speed := GetKeyState("RShift", "P") ? turboSpeed : normalSpeed
        finalX := x * speed
        finalY := y * speed
        
        ; Check for diagonal movement
        if (x = 0) { ; Vertical movement
            if GetKeyState("a", "P")
                finalX := -speed
            else if GetKeyState("d", "P")
                finalX := speed
        } else { ; Horizontal movement
            if GetKeyState("w", "P")
                finalY := -speed
            else if GetKeyState("s", "P")
                finalY := speed
        }
        
        MouseMove finalX, finalY, , "R"
        Sleep 50
    }
}

; Mouse movement - Combined directions
CapsLock & a::HandleCtrlAwareHotkey("a", () => MouseMoveWithDiagonal("a", -1, 0))
CapsLock & d::HandleCtrlAwareHotkey("d", () => MouseMoveWithDiagonal("d", 1, 0))
CapsLock & w::HandleCtrlAwareHotkey("w", () => MouseMoveWithDiagonal("w", 0, -1))
CapsLock & s::HandleCtrlAwareHotkey("s", () => MouseMoveWithDiagonal("s", 0, 1))


