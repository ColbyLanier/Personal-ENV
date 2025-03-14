---
title: Juggl API
source: https://juggl.io/juggl-api.html
author:
  - "[[Emile van Krieken]]"
published: 
created: 2025-02-28
description: docs - Juggl API
tags:
  - clippings
COTs:
  - "[[really cool to do my own graph management and send results via api]]"
---
```yaml
aliases: [API]
```

It is easy using [Cytoscape.js](https://juggl.io/Cytoscape.js) to create an API for other plugin developers to use, to interact with [Juggl](https://juggl.io/juggl.html). This could allow extending the graph view with eg automatically adding data from external sources, such as citation graphs, or with a different syntax for creating graphs.
## Requirements

Users of the API should be able to extend [Juggl](https://juggl.io/juggl.html) in the following ways. If something is missing, please [let me know.](https://juggl.io/discord.html)

### Add additional data

Add additional nodes and relations to the graph. This could for instance be used to [connect papers to their citations](https://forum.obsidian.md/t/show-online-literature-connections/10924) (and to papers they cite), like in [Connected Papers](https://www.connectedpapers.com/). There are many other sources of information to extract data from.

Other ideas might be extracting a graph from the Markdown, such as adding the outline of a note like in the [Mind Map plugin](https://github.com/lynchjames/obsidian-mind-map), or developing new syntax for generating graphs.

### Manipulate the Graph View

Add UI's on top of the graph view, or add ways of interacting with the visualization.  
Possible hooks:

- Initialization of the visualization
- Context menu
- Before query
- After nodes are added

### Manipulate styling of the graph

Allow plugins to further manipulate styling of the graph.