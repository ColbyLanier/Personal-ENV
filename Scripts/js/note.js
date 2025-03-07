async function note(level, type, relativity, tags = []) {
    try {
        const tp = app.plugins.plugins['templater-obsidian'].templater.current_functions_object;
        const templatepath = getTemplatePath(level, type, tags);
        const template = tp.file.find_tfile(templatepath);
        console.log(templatepath)
        if (!template) {
            throw new Error(`Template not found: ${templatepath}`);
        }
        
        const { titlePrompt, bodyPrompt } = await getTypeSpecificPrompts(type, level);
        const noteTitle = await tp.system.prompt(titlePrompt, {throw_on_cancel: true});
        let noteBody = tags.includes("QUICK") ? tp.system.prompt(bodyPrompt, {throw_on_cancel: true}) : '';    
        
        const newFile = await tp.file.create_new(template, noteTitle, false);
        
        const parentFile = (relativity == "CHILD") ? await app.workspace.getActiveFile() : (level == "COT") ? await tp.file.find_tfile(tp.date.now("YYYY-MM-DD")) : null;
        const curr_workspace = await tp.user.wsl();

        if (parentFile) {
            parentmatter = {}
            parentmatter[level] = tp.user.getmatter(parentFile)[type] != null ? `[[${newFile.basename}]]` : [`[[${newFile.basename}]]`]
            await tp.user.setmatter(parentmatter, parentFile)
        }
        
        let workspace = "";
        
        switch (relativity) {
            case "CHILD":
                workspace = tp.user.getmatter(parentFile)["Workspace"];
                break;
            case "WKSP":
                workspace = curr_workspace;
                break;
            default:
                relarr = relativity.split(":");
                if (relarr[0] != "ABSO") {
                    throw new Error(`Unknown relativity: ${relativity}`);
                }
                workspace = relarr[1] == "FREMEN" ? "Sietch Tabr" : relarr[1]
        }
        let childmatter = {
            "NoteType": type,
            "NoteLevel": level
        }
        parentFile ? childmatter["Parent"] = `[[${parentFile.basename}]]` : ''
        workspace ? childmatter["Workspace"] = `[[${workspace}]]` : ''
        await tp.user.setmatter(childmatter, newFile);
        
        const parentPath = type == "COT" ? parentFile.path.substring(0, parentFile.path.lastIndexOf('/')) : workspace;
        await tp.file.move(`${parentPath}/${newFile.basename}`, newFile);
        if (tags.includes("QUICK")) {
            return;
        }
        await app.vault.append(newFile, await noteBody);
        await app.workspace.openLinkText(newFile.basename, "", true);
        app.workspace.activeLeaf.view.editor?.focus();
    } catch (error) {
        console.error("Error in note creation:", error);
        new Notice(`Error creating note: ${error.message}`);
    }
}

function getTemplatePath(level, type, tags) {
    if (type == "GOAL") {
        return "0-Admin/Templates/Goal_Template";
    } 
    // else if (type == "WILD") {
    //     return "0-Admin/Templates/Wild_Template";
    // } else if (level == "COT") { 
    //     return "0-Admin/Templates/COT_Template";
    // } else if (level == "IMP") {
    //     return "0-Admin/Templates/Implementation_Template";
    // } else if (level == "ABST") {
    //     return "0-Admin/Templates/Abstract_Template";
    // }
    
    // if (tags.includes("QUICK")) {
    //     return "0-Admin/Templates/Quick_Template";
    // }
    
    return "0-Admin/Templates/Global_Block";
}

function processTagEffects(tags, noteData) {
    let result = { ...noteData };
    
    if (tags.includes("QUICK")) {
        result.skipPrompts = true;
    }
    
    if (tags.includes("WEB")) {
        result.includeWebClipping = true;
    }
    
    return result;
}

async function getTypeSpecificPrompts(type, level) {
    let titlePrompt = "Initial thought?";
    let bodyPrompt = "Commentary";
    
    if (type === "GOAL") {
        titlePrompt = "What is your goal?";
        bodyPrompt = "What steps will you take to achieve this goal?";
    } else if (type === "WILD") {
        titlePrompt = "What's your wild idea?";
        bodyPrompt = "Elaborate on this wild idea:";
    } else if (level === "COT") {
        titlePrompt = "What are you thinking about?";
        bodyPrompt = "Develop your chain of thought:";
    } else if (level === "IMP") {
        titlePrompt = "What are you implementing?";
        bodyPrompt = "Implementation details:";
    } else if (level === "ABST") {
        titlePrompt = "What concept are you abstracting?";
        bodyPrompt = "Abstract definition:";
    }
    
    return { titlePrompt, bodyPrompt };
}

module.exports = note;