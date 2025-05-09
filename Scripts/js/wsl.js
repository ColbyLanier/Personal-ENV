async function wsl(cmd)
{
   if (cmd == undefined) {
      cmd = `jq -r '.active' .obsidian/workspaces.json`;
   }

   // Extract and process environment variables
   const envVars = extractEnvVars(cmd);
   cmd = await preprocessEnvVars(cmd, envVars);

   const { promisify } = require('util');
   const exec = promisify(require('child_process').exec);
   
   const result = await exec(cmd, {shell: "C:\\Windows\\System32\\bash.exe", cwd: app.vault.adapter.getBasePath()});
   const log = result.stderr.trim() == "" ? result.stdout.trim() : result.stdout.trim() == "" ? result.stderr.trim() : result.stdout.trim() + "\n\n" + result.stderr.trim();
   if (cmd != `jq -r '.active' .obsidian/workspaces.json`) {
      console.log(cmd, " => ", log);
   }
   return log;
}

function extractEnvVars(cmd) {
   const envVarRegex = /\$([A-Za-z_][A-Za-z0-9_]*|\{[A-Za-z_][A-Za-z0-9_]*\})/g;
   const matches = [...cmd.matchAll(envVarRegex)];
   return matches.map(match => {
      // Remove ${} if present
      const varName = match[1].replace(/^\{|\}$/g, '');
      return {
         original: match[0],
         name: varName,
         position: match.index
      };
   });
}

async function preprocessEnvVars(cmd, envVars) {
    // If no env vars found, return original command
    if (envVars.length === 0) return cmd;
    const tp = app.plugins.plugins['templater-obsidian'].templater.current_functions_object;

    // Process each environment variable
    for (const envVar of envVars) {
        let replacement;
        
        // Handle specific environment variables
        switch (envVar.name) {
            case 'WKSP':
                replacement = await tp.user.wsl();
                break;
            case 'FILE':
                replacement = app.workspace.getActiveFile()?.path || '';
                break;
            case 'TFILE':
                const match = cmd.match(/\$TFILE \[\[(.*?)\]\]/);
                if (match) {
                    console.log(match)
                    const filename = match[1];
                    const tfile = await tp.file.find_tfile(`${filename}`);
                    cmd = cmd.replace(match[0], envVar.original)
                    replacement = tfile ? `'${tfile.path}'` : ''
                  //   replacement = tfile ? cmd[match.index - 2] == '>' ? await tp.user.wsl(`wslpath -u '${app.vault.adapter.getBasePath()}\\${tfile.path.replace('/', '\\')}'`) : `'${tfile.path}'` : '';
                } else {
                    console.log("Failed to Match TFILE")
                }
                break;
            default:
                console.log(`Unknown environment variable: ${envVar.name}`);
                replacement = envVar.original; // Keep original if unknown
                break;
        }

        // Replace the environment variable with its value
        cmd = cmd.replace(envVar.original, replacement);
        console.log(`Replaced ${envVar.name} with: ${replacement}`);
    }

    return cmd;
}

module.exports = wsl;