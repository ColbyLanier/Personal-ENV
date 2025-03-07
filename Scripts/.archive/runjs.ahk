#Requires AutoHotkey v2.0


RunTP(cmdName, args := []) {
    ; Construct the full path to the JS file
    tpFunc := "app.plugins.plugins['templater-obsidian'].templater.current_functions_object." cmdName
    bufSize := StrPut(tpFunc "('');", 'UTF-8')
    argBuf := []
    argRef := args
    bufCalc(str) {
        argSize := StrPut(str, 'UTF-8')
        argBuf.Push(str)
        bufSize := bufSize + argSize
    }
    for arg in args {
        if IsObject(arg) {
            for key, value in arg {
                suffix := !baseCase(key, arg, -1) ? '"' : baseCase(arg, argRef, -1) ? "`"}');" : '"}'
                prefix := !baseCase(key, arg) ? ', "' : baseCase(arg, argRef) ? "('{`"" : ", '{`""
                bufCalc(prefix key '": "' value suffix)
            }
        } else if RegExMatch(arg, "^\{.*:.*\}$") {
            content := RegExReplace(SubStr(arg, 2, StrLen(arg)-2), "[\s'`"]", "") ; remove whitespace, quotes and brackets
            pairs := StrSplit(content, ',')
            for pair in pairs
                pairbuf := pair
                prefix := !baseCase(pairbuf, pairs) ? ', "' : baseCase(arg, argRef) ? "('{`"" : ", '{`""
                suffix := !baseCase(pairbuf, pairs, -1) ? '"' : baseCase(arg, argRef, -1) ? "`"}');" : '"}'
                kv := StrSplit(pairbuf, ':')
                bufCalc(prefix kv[1] '": "' kv[2] suffix)
        } else {
            prefix := baseCase(arg, argRef) ? "('" : ", '"
            suffix := baseCase(arg, argRef -1) ? "');" : "'"
            bufCalc(prefix arg suffix)
        }
    }
    buf := Buffer(bufSize)
    for arg in argBuf {
        StrPut(arg, buf,, 'UTF-8')
    }
    try {
        Run('obsidian://advanced-uri?vault=Personal-ENV&eval=' tpFunc '(' StrGet(buf) ')',, "Hide")
    } catch as err {
        MsgBox "Error running JavaScript: " err.Message
    }
}

baseCase(arg, arr, i := 1) {
    return arg == arr[i]
}
RunTP('user.setmatter', ['{Workspace: 1-Obsidian}'])