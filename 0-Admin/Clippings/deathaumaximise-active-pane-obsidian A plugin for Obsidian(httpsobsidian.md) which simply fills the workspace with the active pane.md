---
title: "deathau/maximise-active-pane-obsidian: A plugin for [Obsidian](https://obsidian.md) which simply fills the workspace with the active pane."
source: "https://github.com/deathau/maximise-active-pane-obsidian"
author:
  - "[[GitHub]]"
published:
created: 2025-03-04
description: "A plugin for [Obsidian](https://obsidian.md) which simply fills the workspace with the active pane. - deathau/maximise-active-pane-obsidian"
tags:
  - "clippings"
---
## Maximise Active Pane Plugin

[![GitHub release (latest SemVer)](https://camo.githubusercontent.com/a14e882f5e41b501e34d9bc18a5ba84c55f09ce66c57e5df99217eda49ef3223/68747470733a2f2f696d672e736869656c64732e696f2f6769746875622f762f72656c656173652f646561746861752f6d6178696d6973652d6163746976652d70616e652d6f6273696469616e3f7374796c653d666f722d7468652d626164676526736f72743d73656d766572)](https://github.com/deathau/maximise-active-pane-obsidian/releases/latest) [![GitHub All Releases](https://camo.githubusercontent.com/9fd73a819694b2d4f39c05a4fc20c732710d24be76a90aa8d75f567f94527482/68747470733a2f2f696d672e736869656c64732e696f2f6769746875622f646f776e6c6f6164732f646561746861752f6d6178696d6973652d6163746976652d70616e652d6f6273696469616e2f746f74616c3f7374796c653d666f722d7468652d6261646765)](https://camo.githubusercontent.com/9fd73a819694b2d4f39c05a4fc20c732710d24be76a90aa8d75f567f94527482/68747470733a2f2f696d672e736869656c64732e696f2f6769746875622f646f776e6c6f6164732f646561746861752f6d6178696d6973652d6163746976652d70616e652d6f6273696469616e2f746f74616c3f7374796c653d666f722d7468652d6261646765)

A plugin for [Obsidian](https://obsidian.md/) which simply fills the workspace with the active pane. Press `ctrl`+`shift`+`x` (by defualt) to maximise or un-maximise the currently active pane

[![Screenshot](https://github.com/deathau/maximise-active-pane-obsidian/raw/main/screenshot.gif)](https://github.com/deathau/maximise-active-pane-obsidian/raw/main/screenshot.gif)

### Compatibility

Custom plugins are only available for Obsidian v0.9.7+.

The current API of this repo targets Obsidian **v0.9.7**.

### Notes

This is all very experimental at the moment, so parts might not work, etc.

## Installation

### From within Obsidian

From Obsidian v0.9.8, you can activate this plugin within Obsidian by doing the following:

- Open Settings > Third-party plugin
- Make sure Safe mode is **off**
- Click Browse community plugins
- Search for this plugin
- Click Install
- Once installed, close the community plugins window and activate the newly installed plugin

#### Updates

You can follow the same procedure to update the plugin

### From GitHub

- Download the Latest Release from the Releases section of the GitHub Repository
- Extract the plugin folder from the zip to your vault's plugins folder: `<vault>/.obsidian/plugins/`  
Note: On some machines the `.obsidian` folder may be hidden. On MacOS you should be able to press `Command+Shift+Dot` to show the folder in Finder.
- Reload Obsidian
- If prompted about Safe Mode, you can disable safe mode and enable the plugin. Otherwise head to Settings, third-party plugins, make sure safe mode is off and enable the plugin from there.

## Security

> Third-party plugins can access files on your computer, connect to the internet, and even install additional programs.

The source code of this plugin is available on GitHub for you to audit yourself, but installing plugins into Obsidian is currently a matter of trust.

I can assure you here that I do nothing to collect your data, send information to the internet or otherwise do anything nefarious with your system. However, be aware that I *could*, and you only have my word that I don't.

## Development

This project uses Typescript to provide type checking and documentation.  
The repo depends on the latest [plugin API](https://github.com/obsidianmd/obsidian-api) in Typescript Definition format, which contains TSDoc comments describing what it does.

**Note:** The Obsidian API is still in early alpha and is subject to change at any time!

If you want to contribute to development and/or just customize it with your own tweaks, you can do the following:

- Clone this repo.
- `npm i` or `yarn` to install dependencies
- `npm run build` to compile.
- Copy `manifest.json`, `main.js` and `styles.css` to a subfolder of your plugins folder (e.g, `<vault>/.obsidian/plugins/<plugin-name>/`)
- Reload obsidian to see changes

Alternately, you can clone the repo directly into your plugins folder and once dependencies are installed use `npm run dev` to start compilation in watch mode.  
You may have to reload obsidian (`ctrl+R`) to see changes.

## Pricing

Huh? This is an open-source plugin I made *for fun*. It's completely free. However, if you absolutely *have* to send me money because you like it that much, feel free to throw some coins in my hat via the following:

[![GitHub Sponsors](https://camo.githubusercontent.com/59c8a35064e171394b0ab84d7955eeea73f3b72f74c06c55066627108467b78b/68747470733a2f2f696d672e736869656c64732e696f2f6769746875622f73706f6e736f72732f646561746861753f7374796c653d736f6369616c)](https://github.com/sponsors/deathau) [![Paypal](https://camo.githubusercontent.com/ba20d362a49034d7a9a1fce97b21470b392ff0b5a0223e493b2ad9dd2906a992/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f70617970616c2d646561746861752d79656c6c6f773f7374796c653d736f6369616c266c6f676f3d70617970616c)](https://paypal.me/deathau)

## Version History

## 0.0.3

- Fix for incompatibility with Sliding Panes (and potentially other plugins) (Thanks PJ Eby!)

## 0.0.2

- Fix for specific cases of pane not being maximised properly (Thanks AlansCodeLog!)

## 0.0.1

Initial release. Does what it says on the tin.