
async function getmatter(file = null, key = null, e="KeyError") {
    file = file || app.workspace.getActiveFile()
    try {
        if (typeof file === 'string') {
            // Check if input is a wikilink
            if (file.match(/^\[\[(.*?)\]\]$/)) {
            //     // Extract the title from wikilink format
            //     const title = file.match(/^\[\[(.*?)\]\]$/)[1];
            //     // Find the file by its basename
            //     file = app.vault.getAbstractFileByPath(title + '.md') || 
            //            Array.from(app.vault.getFiles()).find(f => f.basename === title);
                file = app.plugins.plugins['templater-obsidian'].templater.current_functions_object.file.find_tfile(file)
            } else {
                console.log(file)
                file = app.vault.getAbstractFileByPath(file + '.md') || 
                Array.from(app.vault.getFiles()).find(f => f.basename === file);
            }
            if (!file) {
                throw new Error(`File not found: ${file}`);
            }
        }
        const cache = app.metadataCache.getCache(file.path);
        console.log(cache)
        if (key) {
            return cache?.frontmatter[key] || e
        }
        return cache?.frontmatter || {};
    } catch (error) {
        console.error("Frontmatter get error:", error);
        return {};
    }
}

module.exports = getmatter