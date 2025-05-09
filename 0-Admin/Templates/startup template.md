<%* 
if (!tp.file.find_tfile(tp.date.now())) {
	app.commands.executeCommandById("periodic-notes:open-daily-note") 
	tp.user.setmatter({"Active": 0}, tp.file.find_tfile(tp.date.now("YYYY-MM-DD", -1)))
	if (moment(tp.file.title, "YYYY-MM-DD").day() === 1) {
		app.commands.executeCommandById("periodic-notes:open-weekly-note")
	}
}
-%>
<%* /*
// Function to set dataview links in graph in goals dashboard
let dv = DataviewAPI;
let goalNotes = dv.pages('"001 Goals"').file.path;
let goalLinks = goalNotes.map( b => '[['+b+']]')
tp.hooks.on_all_templates_executed(async () => {
  const file = tp.file.find_tfile(dv.pages().where(b => b.id == 'goal-moc')[0].file.path);
  await app.fileManager.processFrontMatter(file, (frontmatter) => {
    if(JSON.stringify(frontmatter["goals"]) != goalLinks){
		frontmatter["goals"] = goalLinks;
	}
  });
});
%>
<%*
// Function to set dataview links in graph in animes
let animeNotes = dv.pages('"Inputs/Anime"').file.path;
let animeLinks = animeNotes.map( b => '[['+b+']]')
tp.hooks.on_all_templates_executed(async () => {
  const file = tp.file.find_tfile(dv.pages().where(b => b.id == 'anime-moc')[0].file.path);
  await app.fileManager.processFrontMatter(file, (frontmatter) => {
	if(JSON.stringify(frontmatter["animes"]) != animeLinks){
		frontmatter["animes"] = animeLinks;
	}
  });
}); */
%>
