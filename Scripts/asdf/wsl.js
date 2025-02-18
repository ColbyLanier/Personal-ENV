async function wsl(cmd)
{
   if (cmd == undefined) {
      const path = await wsl("wslpath " + app.vault.adapter.getBasePath().replace(/\\/g, "/"));
      cmd = `jq -r '.active' ${path}/.obsidian/workspaces.json`;
   }
   const { promisify } = require('util');
   const exec = promisify(require('child_process').exec);
   const result = await exec(`wsl ${cmd}`);
   const log = result.stderr.trim() == "" ? result.stdout.trim() : result.stderr.trim();
   console.log(cmd, " => ", log);
   return log;
}
module.exports = wsl;