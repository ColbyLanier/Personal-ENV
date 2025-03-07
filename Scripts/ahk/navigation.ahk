#Requires AutoHotkey v2.0

; Set coordinate mode
CoordMode "Mouse", "Screen"

; Global variables
normalSpeed := 15
turboSpeed := 30

; Num5 (NumpadClear) as Ctrl
*NumpadClear::Send "{Ctrl down}"
*NumpadClear up::Send "{Ctrl up}"

; Mouse movement function adapted for numpad
NumMouseWithDiagonal(mainKey, x, y) {
    while GetKeyState(mainKey, "P") {
        speed := GetKeyState("NumpadAdd", "P") ? turboSpeed : normalSpeed
        finalX := x * speed
        finalY := y * speed
        
        ; Check for diagonal movement
        if (x = 0) { ; Vertical movement
            if GetKeyState("NumpadLeft", "P")
                finalX := -speed
            else if GetKeyState("NumpadRight", "P")
                finalX := speed
        } else { ; Horizontal movement
            if GetKeyState("NumpadUp", "P")
                finalY := -speed
            else if GetKeyState("NumpadDown", "P")
                finalY := speed
        }
        
        MouseMove finalX, finalY, , "R"
        Sleep 50
    }
}

MouseClick_Hold(button, key) {
    Send "{" button " down}"
    KeyWait key
    Send "{" button " up}"
}

MouseClick_Numpad() {
    key := "LButton"
    if GetKeyState("NumpadAdd", "P")
        key := "RButton"

    MouseClick_Hold(key, "NumpadClear")
}

; Mouse movement hotkeys when NumpadIns is held
#HotIf GetKeyState("NumpadIns", "P")
NumpadLeft::NumMouseWithDiagonal("NumpadLeft", -1, 0)   ; Num4
NumpadRight::NumMouseWithDiagonal("NumpadRight", 1, 0)  ; Num6
NumpadUp::NumMouseWithDiagonal("NumpadUp", 0, -1)       ; Num8
NumpadDown::NumMouseWithDiagonal("NumpadDown", 0, 1)    ; Num2
NumpadClear::MouseClick_Numpad()                        ; Num5
NumpadHome::Send "{WheelUp}"
NumpadEnd::Send "{WheelDown}"
#HotIf

F23 & q::MouseClick_Hold("LButton", "q")
F23 & e::MouseClick_Hold("RButton", "e")

#HotIf GetKeyState("CapsLock", "P")
w::Send "{Up}"
a::Send "{Left}" 
s::Send "{Down}"
d::Send "{Right}"
#HotIf 

; Make NumpadIns and NumpadAdd act as pure modifiers
NumpadIns::return    ; Num
