async function note(level, type, relativity, tags = []) {
    try {
        const tp = app.plugins.plugins['templater-obsidian'].templater.current_functions_object
        const templatepath = getTemplatePath(level, type, tags)
        const template = tp.file.find_tfile(templatepath)
        console.log(templatepath)
        if (!template) {
            throw new Error(`Template not found: ${templatepath}`)
        }
        
        const { titlePrompt, bodyPrompt } = await getTypeSpecificPrompts(type, level)
        const noteTitle = await tp.system.prompt(titlePrompt, {throw_on_cancel: true})
        let noteBody = tags.includes("QUICK") ? tp.system.prompt(bodyPrompt, {throw_on_cancel: true}) : ''    
        
        const newFile = await tp.file.create_new(template, noteTitle, false)
        
        
        const parentFile = (relativity == "CHILD") ? await app.workspace.getActiveFile() : (level == "COT") ? await tp.file.find_tfile(tp.date.now("YYYY-MM-DD")) : null
        let parentMatter = {}
        if (parentFile) {
            parentMatter = await tp.user.getmatter(parentFile)
        
            parentbuffer = {}
            parentbuffer[level] = parentMatter[level] != null ? `[[${newFile.basename}]]` : [`[[${newFile.basename}]]`]
            await tp.user.setmatter(parentbuffer, parentFile)
            
            console.log("parentmatter: " + parentMatter)    
        }
        
        let workspace = ""
        
        switch (relativity) {
            case "CHILD":
                workspace = parentMatter["Workspace"] && parentMatter["Workspace"] != "" ? parentMatter["Workspace"].replace(/\[\[(.*?)\]\]/g, '$1') : "Sietch Tabr"
                break
            case "WKSP":
                workspace = await tp.user.wsl()
                break
            default:
                relarr = relativity.split(":")
                if (relarr[0] != "ABSO") {
                    throw new Error(`Unknown relativity: ${relativity}`)
                }
                workspace = relarr[1] == "FREMEN" ? "Sietch Tabr" : relarr[1]
        }
        let childbuffer = {
            "NoteType": type,
            "NoteLevel": level
        }
        // parentFile ? childbuffer["Parent"] = `[[${parentFile.basename}]]` : ''
        workspace ? childbuffer["Workspace"] = `[[${workspace}]]` : ''
        await tp.user.setmatter(childbuffer, newFile)
        
        await tp.file.move(`${workspace}${level == "COT" ? '/COT/' : '/'}${newFile.basename}`, newFile) 
        const bodyText = await noteBody
        bodyText != '' ? await app.vault.append(newFile, bodyText) : ''
        if (tags.includes("QUICK")) {
            return
        }
        await app.workspace.openLinkText(newFile.basename, "", true)
        app.workspace.activeLeaf.view.editor?.focus()
    } catch (error) {
        if (newFile) {
            await app.vault.trash(newFile, true)
        }
        console.error("Error in note creation:", error)
        new Notice(`Error creating note: ${error.message}`)
    }
}

function getTemplatePath(level, type, tags) {
    if (type == "GOAL") {
        return "0-Admin/Templates/Goal_Template"
    } 
    // else if (type == "WILD") {
    //     return "0-Admin/Templates/Wild_Template"
    // } else if (level == "COT") { 
    //     return "0-Admin/Templates/COT_Template"
    // } else if (level == "IMP") {
    //     return "0-Admin/Templates/Implementation_Template"
    // } else if (level == "ABST") {
    //     return "0-Admin/Templates/Abstract_Template"
    // }
    
    // if (tags.includes("QUICK")) {
    //     return "0-Admin/Templates/Quick_Template"
    // }
    
    return "0-Admin/Templates/Global_Block"
}

function processTagEffects(tags, noteData) {
    let result = { ...noteData }
    
    if (tags.includes("QUICK")) {
        result.skipPrompts = true
    }
    
    if (tags.includes("WEB")) {
        result.includeWebClipping = true
    }
    
    return result
}

async function getTypeSpecificPrompts(type, level) {
    let titlePrompt = "Initial thought?"
    let bodyPrompt = "Commentary"
    
    if (type === "GOAL") {
        titlePrompt = "What is your goal?"
        bodyPrompt = "What steps will you take to achieve this goal?"
    } else if (type === "WILD") {
        titlePrompt = "What's your wild idea?"
        bodyPrompt = "Elaborate on this wild idea:"
    } else if (level === "COT") {
        titlePrompt = "What are you thinking about?"
        bodyPrompt = "Develop your chain of thought:"
    } else if (level === "IMP") {
        titlePrompt = "What are you implementing?"
        bodyPrompt = "Implementation details:"
    } else if (level === "ABST") {
        titlePrompt = "What concept are you abstracting?"
        bodyPrompt = "Abstract definition:"
    }
    
    return { titlePrompt, bodyPrompt }
}

module.exports = note