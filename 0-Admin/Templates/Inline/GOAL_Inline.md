<%* 
const createGOALNote = async (selection) => {
    try {
        // Store parent file reference before any operations
        const parentFile = selection ? app.workspace.getActiveFile() : tp.file.find_tfile(tp.date.now("YYYY-MM-DD"));
        if (!parentFile) throw new Error("No Daily Note")
        
        // Find template
        const template = await tp.file.find_tfile("Templates/Goal_Template");
        if (!template) throw new Error("Goal template not found");
        
        // Create new note
        const noteTitle = selection || await tp.system.prompt("Goal", {throw_on_cancel: true});
        
        tp.user.setmatter(parentFile, {
			"GOALs": (tp.frontmatter["GOALs"] ? `[[${noteTitle}]]`: [`[[${noteTitle}]]`])
		});
        const newFile = await tp.file.create_new(template, noteTitle, false, parentFile.path);
        
        // Wait for file creation
        await new Promise(resolve => setTimeout(resolve, 200));
        
        // Update COT note frontmatter
        await tp.user.setmatter(newFile, {
            parent: `[[${parentFile.basename}]]`
        });
        
        // Open new COT note
        await app.workspace.openLinkText(newFile.basename, "", true);
        
        return `- [ ] ${noteTitle}`;
    } catch (error) {
        console.error("Error creating GOAL note:", error);
        return `Error: ${error.message}`;
    }
};

// Execute main logic
tR = await createGOALNote(await tp.file.selection());
-%>
