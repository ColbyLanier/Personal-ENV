async function getdaily() {
    const tp = app.plugins.plugins['templater-obsidian'].templater.current_functions_object
    let contextstr = tp.user.getmatter(tp.date.now("YYYY-MM-DD",-2, tp.file.title, "YYYY-MM-DD"), "Context", '')
    let winstr =  tp.user.getmatter(tp.date.now("YYYY-MM-DD",-2, tp.file.title, "YYYY-MM-DD"), "Wins", '')
    let todaystr = tp.user.getmatter(tp.date.now("YYYY-MM-DD",-2, tp.file.title, "YYYY-MM-DD"), "Tomorrow", '')
    // contextstr = 'Context: |'.concat('\n', (await contextstr).split('\n').map(line => ` ${line}`).join('\n')).trim()
    const context = (await contextstr) == "" ? 'Context:' :  'Context: |'.concat('\n', (await contextstr)).replace(/\n/g, '\n ').trim()
    console.log(context)
    const wins = (await winstr) == [] ? 'Wins:' : 'Wins:'.concat('\n', (await winstr).map(win => getwin(win)).join('\n')).replace(/\n\n/g, '\n').trim()
    console.log(wins)
    const today = (await todaystr) == [] ? 'Today:' : 'Today:'.concat('\n', (await todaystr).map(task => ` - ${task}`).join('\n')).trim()
    console.log(today)

    return `${context}\n${wins}\n${today}`
}

function getwin(line) {
    const match = line.match(/(.+?)\s*\|\s*(\d+)/)
    console.log(match)
    if (match && --match[2] > 0) {
        return ` - ${match[1]} | ${match[2]}`
    }
    return ''
}

module.exports = getdaily