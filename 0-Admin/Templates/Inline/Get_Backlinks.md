<%* 
let backlinks = app.metadataCache.getBacklinksForFile(app.workspace.getActiveFile());
for (const [key, value] of backlinks.data.entries()) {
	tR = key;
	break;
}
%>