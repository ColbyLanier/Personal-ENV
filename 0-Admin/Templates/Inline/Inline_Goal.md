<%* 
try {
    console.log("Starting template execution");
    
    let selection = await tp.file.selection();
    console.log("Selection:", selection);
    
    const template = await tp.file.find_tfile("Templates/Goal_Template");
    console.log("Template found:", template);
    
    if (!template) {
        throw new Error("Template file not found");
    }
    
    if (selection) {
        console.log("Creating new file with selection");
        const newFile = await tp.file.create_new(template, selection);
        console.log("New file created:", newFile);
        const newFileName = newFile.basename;
        console.log("New filename:", newFileName);
        await app.workspace.openLinkText(newFileName, "", true);
        tR = `- [ ] [[${newFileName}]]`;
    } else {
        console.log("Creating new file without selection");
        const newFile = await tp.file.create_new(template, await tp.system.prompt('New Goal', { throw_on_cancel: true }));
        await app.workspace.openLinkText(newFile.basename, "");
        tR = "";
    }
    console.log("Template execution completed");
} catch (error) {
    console.error("Template error:", error);
    tR = "Error: " + error.message;
}
-%>