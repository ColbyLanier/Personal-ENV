#Requires AutoHotkey v2.0

CoordMode "Mouse", "Screen"

; --- CONFIGURATION ---
; (Adjust these values to suit your joystick and desired sensitivity.)
joyThreshold   := 1        ; Minimum deviation from center to trigger movement.
joyCenter      := 50         ; Center value (typical for a 0–100 scale).
speedMultiplier:= 0.5        ; Multiplier to scale movement speed.

isTimerActive := false
lastJoyInput := 0
; Check for initial joystick activity
CheckJoystickActivity()

CheckJoystickActivity() {
    global isTimerActive, lastJoyInput
    
    joyX := GetKeyState("JoyX")
    joyY := GetKeyState("JoyY")
    
    ; If joystick is moved from center
    if (Abs(joyX - joyCenter) > joyThreshold || Abs(joyY - joyCenter) > joyThreshold) {
        lastJoyInput := A_TickCount
        if (!isTimerActive) {
            SetTimer(UpdateMouseFromJoystick, 10)
            isTimerActive := true
        }
    } else if (isTimerActive && A_TickCount - lastJoyInput > 1000) {
        SetTimer(UpdateMouseFromJoystick, 0)  ; Stop timer
        isTimerActive := false
    }
    
    ; Keep checking for activity
    SetTimer(CheckJoystickActivity, 100)
}

UpdateMouseFromJoystick() {
    ; Read the current positions of the joystick axes.
    ; (These values are typically in the 0–100 range.)
    joyX := GetKeyState("JoyX")
    joyY := GetKeyState("JoyY")
    
    ; Calculate delta from the center for each axis.
    deltaX := joyX - joyCenter
    deltaY := joyY - joyCenter
    
    ; Only move the mouse if the absolute deflection exceeds the threshold.
    if Abs(deltaX) < joyThreshold
        deltaX := 0
    if Abs(deltaY) < joyThreshold
        deltaY := 0

    ; Multiply the deflection by a speed multiplier.
    moveX := deltaX * speedMultiplier
    ; Often the Y-axis on a joystick is reversed relative to mouse movement.
    moveY := deltaY * speedMultiplier

    ; If there is any movement, move the mouse relative to its current position.
    if moveX || moveY
        MouseMove(moveX, moveY, 0, "R")
}
Esc::ExitApp
