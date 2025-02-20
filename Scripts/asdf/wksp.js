async function wksp(workspace)
{
   return await window.open(`obsidian://adv-uri?vault=Personal-ENV&workspace=${workspace}`, '_blank');
}
module.exports = wksp;