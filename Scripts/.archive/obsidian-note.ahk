#Requires AutoHotkey v2.0
; #include C:\Users\colby\OneDrive\Documents\Obsidian\Personal-ENV\Scripts\ahk\runjs.ahk
; #include C:\Users\colby\OneDrive\Documents\Obsidian\Personal-ENV\Scripts\ahk\numscripts\numroot.ahk
obs_create(input) {
    switch (input) {
        case "Numpad7": Obs_Note()
    }
}

Obs_Note() {
    ToolTip("Obs Note")
    NoteType := ""
    NoteLevel := ""
    Relativity := ""
    Tags := []
    input := KeyWaitAny()
    while (input != "NumpadEnter") {
        switch (input) {
            case "Numpad7":
                NoteLevel := "COT"
            case "Numpad8":
                NoteLevel := "IMP"
            case "Numpad9":
                NoteLevel := "ABST"
    
            case "Numpad4":
                NoteType := "NOTE"
            case "Numpad5":
                NoteType := "GOAL"
            case "Numpad6":
                NoteType := "WILD"
    
            case "Numpad1":
                Relativity := "CHILD"
            case "Numpad2":
                Relativity := "WKSP"
            case "Numpad3":
                Relativity := "ABSO"
    
            case "NumpadAdd":
                Tags.Push("QUICK")
        }
        ToolTip(NoteLevel " | " NoteType " | " Relativity)
        input := KeyWaitAny()
    }
    ToolTip()
    args := [NoteLevel, NoteType, Relativity]
    for tag in Tags {
        args.Push(tag)
    }
    RunTPUser('note', args)
}


; obs_create("Numpad7")/*-+