<%*
const wrap_shell = async (selection) => {
	args = selection.split('\n')
	for (i in args) {
		if (args[i]) {
			return tp.user.wsl(args[i])
		}
	}
}
const out = await wrap_shell(await tp.file.selection())
tR = out ? '\n```shell\n' + out + '\n```\n' : ''

%>
