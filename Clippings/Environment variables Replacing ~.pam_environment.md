---
title: "Environment variables: Replacing ~/.pam_environment / Newbie Corner / Arch Linux Forums"
source: "https://bbs.archlinux.org/viewtopic.php?id=278651"
author:
published:
created: 2025-02-22
description:
abstraction: 0
tags:
  - "clippings"
---
#resouce
Hello all,

after reading about the [intended deprecation](https://github.com/linux-pam/linux-pam/commit/ecd526743a27157c5210b0ce9867c43a2fa27784) of *~/.pam\_environment*, I am looking for an equally comfortable solution.

The intention is to have **one** central place to define user environment variables, which are exported regardless whether I log in through a TTY or graphical session manager. *~/.pam\_environment* covered that use case nicely, without having to rely on different script-like solutions such as *~/.profile* or *~/.bash\_profile*. To make matters more complicated, I use the fish shell which does not directly parse any profile files. (I am aware of the workaround by adding to *~/.config/fish/config.fish*, but that seems like an ugly hack.)

The discussion concerning the pull request to abandon *~/.pam\_environment* mentions [“systemd based user sessions”](https://github.com/linux-pam/linux-pam/pull/290#issuecomment-860444262). I am hitting dead ends trawling the web for an explanation how that might solve my issue, actually also how that entire concept works. Perhaps my search terms are not suitable.

What I understand is that files in *~.config/environment.d/\*.conf* are pulled in for systemd user units to provide environment variables. They show up with *systemctl --user show-environment*, thus are processed. But they are neither available after logging in through a TTY nor graphical session manager.

Can someone point me in the right direction? How do I replace *~/.pam\_environment* with a central solution to provide environment variables?