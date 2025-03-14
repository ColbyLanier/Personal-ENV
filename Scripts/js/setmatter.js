async function setmatter(modifications, file=null) {
    return new Promise((resolve, reject) => {
        setTimeout(async () => {
            try {
                // Set up one-time cache resolution listener
                const resolveHandler = () => {
                    app.metadataCache.off('resolved', resolveHandler);
                    resolve();
                };
                app.metadataCache.on('resolved', resolveHandler);
                console.log("File init: " + file)
                file = file || await app.workspace.getActiveFile()
                console.log(file)
                console.log("Basename: " + file.basename)
                // If modifications is a string, parse it as JSON
                if (typeof modifications === 'string') {
                    try {
                        modifications = JSON.parse(modifications);
                    } catch (error) {
                        console.error("Failed to parse modifications string as JSON:", error);
                        reject(error);
                        return;
                    }
                }
                console.log(modifications)
                // Modify frontmatter
                await app.fileManager.processFrontMatter(file, (frontmatter) => {
                    for (const [key, value] of Object.entries(modifications)) {
                        console.log(key + " > " + value)
                        try {
                            frontmatter[key].push(value);
                        } catch {
                            frontmatter[key] = value;
                        }
                    }
                });
                

                // If cache doesn't resolve within 2 seconds, resolve anyway
                setTimeout(() => {
                    app.metadataCache.off('resolved', resolveHandler);
                    resolve();
                }, 2000);

            } catch (error) {
                console.error("Setmatter error:", error);
                reject(error);
            }
        }, 200);
    });
}

module.exports = setmatter;