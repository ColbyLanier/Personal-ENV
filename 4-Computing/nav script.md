---
created_at: 2025-02-22T12:38:41-05:00
modified_at: 2025-02-23T17:54:35-05:00
workspace: 4-Computing
Script: "[[Autohotkey]]"
---

#ahk script to move the mouse from the keyboard

## current implementation
Hold caps lock to enter nav mode

wasd - mouse movement, hold two keys for diagonal motion

h/l - toggle cursor left and right
j/k - move cursor up and down
o/m - scroll up and down
u/o - page up and down

## ruled out options
use spacebar as a mod tap instead of caps
- seems like it would be much more convenient, less holding strain on pinky
- added mod tap latency on a key I press so often is unacceptable
	- bound right alt to capslock to allow for right handed nav access

## expansions
### Increase base speed, increase turbo speed
- faster nav, standard fair

### add slow mode key for precise menuing
- base speed is almost incremental enough, just a few edge cases where even more granular motion would be appreciated
- adding slow mode takes strain off of default speed, allowing it to be faster without compromising speed

### Quirky option
add a 'speed up' and 'speed down' key rather than dedicated modes, more variable shenanigans ahead
- double quirked up: bind speed to analogue key input strength
- have old repo for reading
- could also bind a dynamic keystroke to do four levels, would have to rebind and set cords to cover not typing a ton of shit regularly

Check out joystick inputs and detect if it would be better than porting the wootingahk script
could use fn in place of caps lock, gives back mod key to use elsewhere and can integrate with dedicated fn layer and change lighting effects
### menuing options on the nav layer

### Consider removing all numeric keys during nav mode to force me to manage swaps better

## holding caps lock while alt toggle is down bypasses and puts me back in typing mode
