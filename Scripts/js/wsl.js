async function wsl(cmd)
{
   if (cmd == undefined) {
      cmd = `jq -r '.active' .obsidian/workspaces.json`;
   }
   const { promisify } = require('util');
   const exec = promisify(require('child_process').exec);
   const result = await exec(`cd ${app.vault.adapter.getBasePath()} && wsl ${cmd}`);
   const log = result.stderr.trim() == "" ? result.stdout.trim() : result.stderr.trim();
   console.log(cmd, " => ", log);
   return log;
}
module.exports = wsl;