async function uri(cmd)
{
   return await window.open(cmd, '_blank');
}
module.exports = uri;