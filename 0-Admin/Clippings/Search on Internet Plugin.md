---
title: Search on Internet Plugin
source: https://juggl.io/search-on-internet-plugin.html
author:
  - "[[Emile van Krieken]]"
published: 
created: 2025-02-28
description: docs - Juggl API
tags:
  - clippings
COTs:
  - "[[Integrate with Vivaldi automation to make workspace-aware tabs]]"
---
```yaml
aliases: []
```

## Search on Internet Plugin

## Search on Internet

Adds the option to search selected text on external websites, like Google and Wikipedia. You can add your own websites!

![](https://raw.githubusercontent.com/HEmile/obsidian-search-on-internet/master/resources/modal_demo.gif)

It also adds the search options to the file context menu to search based on the title of a note:

![](https://raw.githubusercontent.com/HEmile/obsidian-search-on-internet/master/resources/demo.gif)

You can also right-click on an internal link to perform a search on that link:

![](https://raw.githubusercontent.com/HEmile/obsidian-search-on-internet/master/resources/internal_link.png)

### Settings

By default, the plugin comes with searches on Google and Wikipedia.  
You can add your own websites to search on in the settings.

![](https://raw.githubusercontent.com/HEmile/obsidian-search-on-internet/master/resources/img.png)

For each website, fill in the following three fields:

- Name: The name of the search. This will be displayed in the search bar and the context menu.
- URL: The URL to open. `{{title}}` will be replaced by the current notes title. This is used as the 'query'.
- Tags (optional): A list of tags for notes to display the search option on.  
In the example screenshot, this is used to only add the IMDB search on notes tagged with `#actor`, `#movie` or `#director` (in Dutch!)

It's recommended to assign the command: "Search on Internet: Perform search" to a hotkey:

![](https://raw.githubusercontent.com/HEmile/obsidian-search-on-internet/master/resources/hotkey.png)