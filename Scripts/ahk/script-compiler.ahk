#Requires AutoHotkey v2.0
#Include pragma-once.ahk
PragmaOnce(A_ScriptFullPath, A_ScriptHwnd)
^!r::Reload()
^!h::KeyHistory()
global laptopState := true
; Global Settings
SetCapsLockState "AlwaysOff"

#Include runjs.ahk
; numpad chain inputs
#Include numscripts\numroot.ahk

; navigation.ahk
#Include navigation.ahk

; stupid-brute-force.ahk
#Include stupid-brute-force.ahk

