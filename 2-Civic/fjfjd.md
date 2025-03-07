<%* 
const wksp = await tp.user.wsl()
const block = `[[${wksp}-Block]]`
const path = `/${wksp}/${tp.file.title}`
-%>
<% "---" %>
created_at: <% tp.file.creation_date('YYYY-MM-DD[T]HH:mm:ssZ') %>
modified_at: <% tp.file.last_modified_date('YYYY-MM-DD[T]HH:mm:ssZ') %>
workspace: <% wksp %>
Abstraction: 5
Importance: 5
<% tp.file.include(block) %>
<% "---" %>
<% await tp.file.move(path) %>

