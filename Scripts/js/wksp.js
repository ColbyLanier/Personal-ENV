async function wksp(workspace, file=null)
{
   const tp = app.plugins.plugins['templater-obsidian'].templater.current_functions_object
   file = file || app.workspace.getActiveFile()
   const frontmatter = await tp.user.getmatter(file)
   console.log("FRONTMATTER: " + frontmatter)
   console.log("Setting " + frontmatter["Workspace"] + " > " + workspace)
   if (frontmatter["Workspace"] == workspace) {
      console.log("Early Return: " + file)
      return
   }
   await tp.file.move(`${workspace}/${file.basename}`, file)
   await tp.user.setmatter(`{"Workspace": "${workspace}"}`, file)
   console.log(`${workspace}/${file.basename}`)
   console.log("Workspace Set")
   try {
      for (const key in frontmatter["COT"]) {
         COT = frontmatter["COT"][key]
         COT = COT.substring(2, COT.length -2)
         console.log("Recursing: " + COT)
         tp.user.wksp(workspace, tp.file.find_tfile(COT))
      }
      // for (const [i, GOAL] of frontmatter["GOAL"]) {
      //    console.log("Recursing: " + GOAL)3
      //    tp.user.wksp(workspace, tp.file.find_tfile(GOAL))
      // }
      console.log("Ending Recursion")
   } catch(e) {
      console.log("Recursion Err: " + e)
   }
   
}
module.exports = wksp;