#Requires AutoHotkey v2.0
; #Include helper.ahk
wkspmap := Map(1, "1-Obsidian") ; etc
change_workspace(num) {
    Run('obsidian://adv-uri?vault=Personal-ENV&workspace=' wkspmap[num],,"Hide")
}

#HotIf GetKeyState("F23", "P")
1::change_workspace(1)
2::change_workspace(2)
3::change_workspace(3)
4::change_workspace(4)
5::change_workspace(5)
6::change_workspace(6)
#HotIf 