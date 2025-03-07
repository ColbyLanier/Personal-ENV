async function note(level, type, relativity, tags) {
    tp = app.plugins.plugins['templater-obsidian'].templater.current_functions_object;
    templatepath = "0-Admin/Templates/Global_Block";
    if (type == "GOAL") {
        templatepath = "0-Admin/Templates/Goal_Template";
    } else if (level == "COT") {
        type = "COT"
    }
    const template = tp.file.find_tfile(templatepath);
    noteTitle = await tp.system.prompt("Initial thought?", {throw_on_cancel: true}).split('\n')[0]
    noteBody = tp.system.prompt("Commentary", {throw_on_cancel: true}).split('\n')[0]
    newFile = tp.file.create_new(template, noteTitle, false);
    promise1 = tp.user.setmatter(parentFile, {
        type: (tp.frontmatter[type] != null ? `[[${noteTitle}]]`: [`[[${noteTitle}]]`])
    });
    parent = "";
    workspace = "";
    curr_workspace = tp.user.wsl();
    switch (relativity) {
        case "CHILD":
            if (level == "COT"){
                parent = tp.date.now("YYYY-MM-DD");
            } else {
                parent = app.workspace.getActiveFile();
            }
            workspace = curr_workspace;
        case "WKSP": 
            parent = curr_workspace;
            workspace = curr_workspace;
        case "ABSO":
            await Promise.all([newFile, noteBody])
            tp.file.move("Sietch Tabr", newFile)
            return
    }
    await Promise.all([newFile, promise1, parent, workspace, noteBody])
    await tp.user.setmatter(newFile, {
        "parent": `[[${parent}]]`,
        "workspace": `[[${workspace}]]`
    });
    await tp.file.move(workspace, newFile)
    if ("QUICK" in tags) {
        // add prompts for simple fill
        return
    }
    await app.workspace.openLinkText(newFile.basename, "", true);
    app.workspace.activeLeaf.view.editor?.focus();
}

module.exports=note