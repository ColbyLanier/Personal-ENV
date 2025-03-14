
async function getmatter(file = null) {
    file = file || app.workspace.getActiveFile()
    try {
        const cache = app.metadataCache.getCache(file.path);
        console.log(cache)
        return cache?.frontmatter || {};
    } catch (error) {
        console.error("Frontmatter get error:", error);
        return {};
    }
}

module.exports = getmatter