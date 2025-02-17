async function uri(cmd)
{
   ret = await window.open(cmd, '_blank');
   return ret;
}
module.exports = uri;