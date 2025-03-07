async function uri(cmd)
{
   return await window.open('obsidian://adv-uri?vault=Personal-ENV&' + cmd, '_blank');
}
module.exports = uri;