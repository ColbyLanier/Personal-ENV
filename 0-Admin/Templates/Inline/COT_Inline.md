<%* 
const createCOTNote = async (selection) => {
    try {
        // Store parent file reference before any operations
        const parentFile = selection ? app.workspace.getActiveFile() : tp.file.find_tfile(tp.date.now("YYYY-MM-DD"));
        if (!parentFile) throw new Error("No Daily Note")
        
        // Find template
        const template = await tp.file.find_tfile("Templates/COT_Template");
        if (!template) throw new Error("COT template not found");
        
        // Create new note
        const noteTitle = (selection || await tp.system.prompt("Initial thought?", {throw_on_cancel: true})).split('\n')[0];
        await tp.user.setmatter(parentFile, {
			"COTs": (tp.frontmatter["COTs"] != null ? `[[${noteTitle}]]`: [`[[${noteTitle}]]`])
		});
        const newFile = await tp.file.create_new(template, noteTitle, false, parentFile.path);
        tp.file.cre
        // Wait for file creation
        await new Promise(resolve => setTimeout(resolve, 200));
        
        // Update COT note frontmatter
        await tp.user.setmatter(newFile, {
            parent: `[[${parentFile.basename}]]`
        });
        
        // Open new COT note
        await app.workspace.openLinkText(newFile.basename, "", true);
        app.workspace.activeLeaf.view.editor?.focus();
        // Return empty to prevent double linking
        return "";
    } catch (error) {
        console.error("Error creating COT note:", error);
        return `Error: ${error.message}`;
    }
};

// Execute main logic
tR = await createCOTNote(await tp.file.selection());
-%>
