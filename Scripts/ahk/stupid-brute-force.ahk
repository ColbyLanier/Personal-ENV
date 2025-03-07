#Requires AutoHotkey v2.0

Alt & z::{
    Send '"[[]]", {Left}{Left}{Left}{Left}{Left}'
}

!x:: {
    Send '<%  %>{Left}{Left}{Left}'
}

F19::KeyHistory()
; a::b

#HotIf GetKeyState("Numpad0", "P")
Numpad9::Send "p"
Numpad8::Send "o"
Numpad7::Send "i"
Numpad6::Send "l"
Numpad5::Send "k"
Numpad4::Send "j"
Numpad3::Send "m"
Numpad2::Send "n"
Numpad1::Send "b"
NumpadAdd::Send "{Backspace}"
#HotIf 

Numpad0::return