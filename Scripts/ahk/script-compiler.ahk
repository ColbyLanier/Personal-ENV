#Requires AutoHotkey v2.0
#Include pragma-once.ahk
PragmaOnce(A_ScriptFullPath, A_ScriptHwnd)
^!r::Reload()
^!h::KeyHistory()
global laptopState := true
global laptopMode := false
; Global Settings
SetCapsLockState "AlwaysOff"
SetScrollLockState "AlwaysOff"
; a::SendInput "{Blind}{sc046}"
; z::SendInput "{Blind}{vk91}"

#Include runjs.ahk
; numpad chain inputs
#Include numscripts\numroot.ahk

; navigation.ahk
#Include navigation.ahk

; stupid-brute-force.ahk
#Include stupid-brute-force.ahk

; z::Send ']'
`::Send "^+]"
