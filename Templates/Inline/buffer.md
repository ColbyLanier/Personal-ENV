<%* 
let selection = await tp.file.selection();
const template = await tp.file.find_tfile("Templates/Goal*Template");
if (selection) {
    const newFile = await tp.file.create_new(template, selection);
    const newFileName = newFile.basename;
    tR = `- [ ] [[${newFileName}]]`;
} else {
    await tp.file.create_new(template, "New Goal");
    tR = "";
} 
-%>

ballsnutsnutsnutsnuts