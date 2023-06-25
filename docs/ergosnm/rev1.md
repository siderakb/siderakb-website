---
sidebar_position: 2
---

# Rev 1.x

⚠️ `Rev 1.x` is an experimental version, NOT recommended for daily use.

## Parts List
I didn't prepare the PCBA files for `Rev 1.x`, so you need to order the PCB and all the components, and solder them yourself.

Here's a table of parts needed for the build:

| Items                                                       | Spec                                 | Qty | Description                                                                                                                                                                                                                                                                   |
|-------------------------------------------------------------|--------------------------------------|-----|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| ErgoSNM keyboard PCBs                                       | Rev `1.x`                            | 2   |                                                                                                                                                                                                                                                                               |
| [Pro Micro](https://www.sparkfun.com/products/12587) boards | 3.3V/8MHz (recommended)              | 2   | Or compatible boards, e.g.  [Elite-C](https://deskthority.net/wiki/Elite-C), [Next μ](https://github.com/ziteh/next-micro), [RP Micro](https://github.com/ziteh/rp-micro), [nRFMicro](https://github.com/joric/nrfmicro) or [MDBTMicro](https://github.com/ziteh/mdbt-micro). |
| Key switches                                                | Cherry MX style                      | 70  | Mechanical keyboard switches.                                                                                                                                                                                                                                                 |
| Diodes                                                      | 1N4148, SOD-123 package              | 70  | Ghosting elimination diodes. The model number with the `W` suffix usually means SOD-123 package, i.e. 1N4148W.                                                                                                                                                                |
| 3.5mm TRRS sockets                                          | PJ-393 8P                            | 2   | Used to plug in the TRRS cable to connect two halves.                                                                                                                                                                                                                           |
| RESET buttons                                               | TL3342, aka 5.2*5.2mm tactile switch | 2   |                                                                                                                                                                                                                                                                               |
| Key switches hot-swap sockets                               | Cherry MX style                      | 70  | *Optional*                                                                                                                                                                                                                                                                    |
| Pro Micro sockets                                           | 2.54mm 1*13P pin socket              | 2   | *Optional*                                                                                                                                                                                                                                                                    |
| RESET pull-up resistors                                     | 1k\~10kΩ, 0603 package (1608 metric) | 2   | *Optional*                                                                                                                                                                                                                                                                    |
| I²C pull-up resistors                                       | 4.7kΩ, 0603 package (1608 metric)    | 2   | *Optional*                                                                                                                                                                                                                                                                    |
| Battery switches                                            | MSK-23D20-T 2P3T                     | 2   | *Optional*                                                                                                                                                                                                                                                                    |
| Battery connectors                                          | JST PH2.0 2P                         | 2   | *Optional*                                                                                                                                                                                                                                                                    |

> There are many different types of mechanical keyboard switches, such as [Cherry MX](https://deskthority.net/wiki/Cherry_MX), [Cherry MX low profile](https://deskthority.net/wiki/Cherry_MX_Low_Profile), [Kailh Choc low profile](https://deskthority.net/wiki/Alps_SKCL/SKCM_series) and [Alps](https://deskthority.net/wiki/Alps_SKCL/SKCM_series), etc. they are not completely compatible with each other. ErgoSNM `Rev 1.x` only support Cherry MX style switches and hot-swap sockets.


## Build Guide
Steps Summary
1. [Prepare parts](#1-prepare-parts)
2. [Solder components](#2-solder-components)
3. [Plug in Pro Micro board](#3-plug-in-pro-micro-board)
4. [Flash & test](#4-flash--test)
5. [Complete!](#5-complete)

`Rev 1.x` PCB is reversible, meaning it can be used as either the left- or right-hand half. Some components have footprints on both sides of the PCB, you can choose any single side for soldering.

### 1. Prepare Parts
You must prepare all the parts and tools needed.

PCB can order from JLCPCB or PCBWay.

### 2. Solder Components
The sequence of soldering is usually determined by the height of the component, lower first. Recommended is:  
1. diodes
2. RESET button
3. resistors
4. hot-swap sockets
5. TRRS connector
6. battery switch
7. battery connector
8. Pro Micro board sockets
9. key switches

First, solder all the diodes. Diodes are unidirectional, solder them in the incorrect direction will make the keyboard not work, please note which side is anode (+) and which side is cathode (-).

The cathode side is marked by lines on the diodes, and the other side is the anode. On the PCB, there is also a line marked on the cathode side. Please solder each diode respectively according to its polarity mark on the PCB.

![](https://i.imgur.com/CU7DXw2.jpg) 
▲ Diode polarity marking.

![](https://i.imgur.com/tfoMWkK.jpg) 
▲ Diodes soldered with the correct polarity.

![](https://i.imgur.com/BfJDvfF.jpg)  
▲ Note the markings of different diodes.

Next, solder RESET button (choose one side of the PCB for soldering). In general, the Pro Micro already has RESET pull-up resistor, so you do not need to solder `R1`, if you want to solder `R1`, 1k\~10kΩ should be fine.

If you want to use I²C as the split keyboard transport communication, than you need to solder `R2` and `R3` resistors on either side. If you don't known what that means, don't solder them. Default is not used I²C. For more info about this, please refer to [QMK - Split Keyboard](https://docs.qmk.fm/#/feature_split_keyboard).

Note the direction of placement when solder hot-swap sockets, the incorrect placement will block the hole.

![](https://i.imgur.com/y9A23bO.jpg)  
▲ Hot-swap sockets placement.

![](https://i.imgur.com/jvgJSLK.jpg)  
▲ Soldered diodes and hot-swap sockets.

If you want the Pro Micro removable, then solder the pin sockets on the PCB, so that the Pro Micro can be pluggeg in. If you don't need it to be removable, you can also just solder it to the PCB with pin headers.

> Note that the TRRS pin order in `Rev 1.0` is wrong, solder it on the PCB will short VCC and GND. This issue fixed in `Rev 1.1`.

### 3. Plug in Pro Micro Board
Plug the Pro Mico into the PCB.

The pin sockets of `Rev 1.0` is 1*13 pins, one more pin than Pro Micro, this is reserved for the battery pins of the board with charging circuit such as [nRFMicro](https://github.com/joric/nrfmicro) or [MDBTMicro](https://github.com/ziteh/mdbt-micro).

If your board is the same as the Pro Micro, only 12 pins on one side, or the topmost (near USB) pins is not the battery pins, align your board with the bottom edge of the socket and insert. Also make sure that the 3 pins marked with GND on the PCB match the GND of the board.

![](https://i.imgur.com/BcZsAtd.jpg)  
▲ Plug in Pro Micro board.

For the right-hand half, your board need to be solder and insert upside down.

![](https://i.imgur.com/AHmFrbP.jpg)  
▲ Right Pro Micro upside down installation.

### 4. Flash & Test
Now that the circuit board part is completed, the next step is flashing firmware.

For `Rev 1.x`, I only prepare the [QMK](https://qmk.fm/) firmware, the repo is [here](https://github.com/ziteh/ergo-snm-keyboard-qmk).

The specific steps may differ depending on the board you are using, the following is an example of Pro Micro:
1. Prepare `.hex` firmware files, left and right hands have their own files.
2. Install, open and setup firmware flashing tool, e.g. [QMK Toolbox](https://github.com/qmk/qmk_toolbox) or [AVRDUDESS](https://blog.zakkemble.net/avrdudess-a-gui-for-avrdude/). My personal preference AVRDUDESS.
3. Connect the one half of the keyboard to computer with USB.
4. Press RESET button twice quickly, Pro Micro will enter bootloader mode for 8 seconds.
5. Flash.
6. Repeat the above steps for other half.

![AVRDUDESS setup example](https://1.bp.blogspot.com/-h_kR_cbyiI0/Xu8SLCaQHQI/AAAAAAAAChU/KdGDqoghBnArI9ZTjw6yywYsBMCE1ZDmgCK4BGAsYHg/s646/AVRDUDESS-01.jpg)  
▲ AVRDUDESS setup example, "Port" and "Flash" path select according to the actual situation.

Bootloader mode only 8 secs, which makes flashing not so easy. You can open device manager (Windows), enter bootloader mode and check the COM port of Pro Micro, setup this COM port in AVRDUDESS (even if this port does not exist now), enter bootloader mode again and click "Program!" to flash.

After flashing, you can use a site like [this](https://en.key-test.ru/) or [this](https://keytest.vn/) to test the keyboard.

> For more info about bootloader/DFU of Pro Micro, please refer to [this](https://learn.sparkfun.com/tutorials/pro-micro--fio-v3-hookup-guide/troubleshooting-and-faq#ts-reset).

### 5. Complete!
The keyboard is now complete and ready to use!

