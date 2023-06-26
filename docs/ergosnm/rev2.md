---
sidebar_position: 1
---

# Rev 2.x

![](https://i.imgur.com/DLbaynl.jpg)

This document for the `Rev 2.x` of the ErgoSNM keyboard, the latest is [`Rev 2.1`](https://github.com/siderakb/ergo-snm-keyboard/releases/tag/v2.1.0).

My blog post: [ErgoSNM——有軌跡球的分離式人體工學QMK鍵盤 (v2.1)](https://ziteh.github.io/posts/ergosnm-v2-1-intro/)

## Features
1. 64 keys in total, left half (with thumb cluster) 29+6 keys, right half (with trackball) 29 keys.
1. Trackball for mouse cursor and scroll wheel, powered by [PMW3360DM-T2QU](https://www.pixart.com/products-detail/10/PMW3360DM-T2QU) optical mouse sensor.
1. USB Type-C receptacle connector.
1. Support Cherry MX style key switches and hot-swap sockets.
1. Column-staggered layout.
1. Support [Vial](https://get.vial.today/), edit keymap and configuring keyboard in real time.
1. Uses the [Raspberry Pi RP2040](https://www.raspberrypi.com/products/rp2040/) ARM Cortex-M0+ MCU, with 16MB (128Mb) external flash.
1. SRV05-4 chip for USB ESD (Electrostatic discharge) protection.
1. Resettable fuse to prevent power short circuit and/or overcurrent.
1. RESET and BOOT buttons for RP2040.
1. One user/state LED.
1. Either 3.5mm TRRS/TRS or USB Type-C can be selected for two halves communication cable connector.
1. SWD and USB D+/- pads for debugging (*left half only*).
1. 500mA 3.3V LDO regulator.
1. JLCPCB's PCBA service available, no need to solder parts yourself.

## Parts List

### PCB and Electronic Parts

All electronic components required for PCBs are listed here. Each of the following PCBs requires one:
- Main boards
  - [Left](https://github.com/siderakb/ergo-snm-keyboard/tree/main/ErgoSNM_Keyboard/rev2/left)
  - [Right](https://github.com/siderakb/ergo-snm-keyboard/tree/main/ErgoSNM_Keyboard/rev2/right)
- [Thumb cluster](https://github.com/siderakb/ergo-snm-keyboard/tree/main/ErgoSNM_Keyboard/rev2/thumb_cluster)
- [Trackball board](https://github.com/siderakb/pmw3360-pcb/releases/tag/v3.1.0) (i.e. PMW3360 PCB `Rev 3.1`).

The files of *Left*, *Right* and *Thumb cluster* can be downloaded [HERE](https://github.com/siderakb/ergo-snm-keyboard/releases/tag/v2.1.0), while *Trackball board* is [HERE](https://github.com/siderakb/pmw3360-pcb/releases/tag/v3.1.0).

|Left|Right|Thumb cluster|Trackball board|
|-|-|-|-|
|[![](https://i.imgur.com/lFPIKst.png)](https://i.imgur.com/lFPIKst.png)|[![](https://i.imgur.com/YIMYJX9.png)](https://i.imgur.com/YIMYJX9.png)|[![](https://i.imgur.com/PUA9THP.png)](https://i.imgur.com/PUA9THP.png)|[![](https://i.imgur.com/OyAF7rm.jpg)](https://i.imgur.com/OyAF7rm.jpg)|

#### Main Boards

Since the parts of the left and right PCB are identical, the following table only lists the quantities required for one half, please multiple by 2 when actually manufacturing both halves.

If you use PCBA service, you don't have to prepare and solder most or even all of the following parts yourself.

| Qty | Value          | Footprint                           | Designator      | JLCPCB#    | MFR. Part#           | Basic Parts\*      |
| --- | -------------- | ----------------------------------- | --------------- | ---------- | -------------------- | ------------------ |
| 3   | 5.1k           | 0402 (1005 Metric)                  | R1,R2,R4        | C25905     | 0402WGF5101TCE       | :heavy_check_mark: |
| 3   | 1k             | 0402 (1005 Metric)                  | R3,R7,R9        | C11702     | 0402WGF1001TCE       | :heavy_check_mark: |
| 2   | 27             | 0603 (1608 Metric)                  | R5,R6           | C25190     | 0603WAF270JT5E       | :heavy_check_mark: |
| 2   | 10k            | 0402 (1005 Metric)                  | R8,R10          | C25744     | 0402WGF1002TCE       | :heavy_check_mark: |
| 4   | 1uF            | 0402 (1005 Metric)                  | C1,C2,C8,C16    | C52923     | CL05A105KA5NQNC      | :heavy_check_mark: |
| 10  | 100nF          | 0402 (1005 Metric)                  | C3,C6,C7,C9~C15 | C307331    | CL05B104KB54PNC      | :heavy_check_mark: |
| 2   | 20pF           | 0402 (1005 Metric)                  | C4,C5           | C1554      | 0402CG200J500NT      | :heavy_check_mark: |
| 1   | 500mA, 6V      | 0805 (2012 Metric)                  | F1              | C269104    | SMD0805B050TF        | :x:                |
| 1   | RT9013-33GB    | SOT-23-5                            | U1              | C47773     | RT9013-33GB          | :x:                |
| 1   | SRV05-4        | SOT-23-6                            | U2              | C85364     | SRV05-4-P-T7         | :heavy_check_mark: |
| 1   | W25Q128JVS     | SOIC-8 5.23x5.23mm P1.27mm          | U3              | C97521     | W25Q128JVSIQ         | :heavy_check_mark: |
| 1   | RP2040         | QFN-56-1EP 7x7mm P0.4mm EP3.2x3.2mm | U4              | C2040      | RP2040               | :x:                |
| 1   | 12MHz          | 3225 4Pin (3.2x2.5mm)               | Y1              | C9002      | X322512MSB4SI        | :heavy_check_mark: |
| 29  | 1N4148         | SOD-123                             | D1~D29          | C81598     | 1N4148W              | :heavy_check_mark: |
| 1   | Red LED        | 0603 (1608 Metric)                  | LD1             | C2286      | KT-0603R             | :heavy_check_mark: |
| 2   | RESET & BOOT   | SW_SPST_TL3342                      | SW1,SW2         | C318884    | TS-1187A-B-A-B       | :heavy_check_mark: |
| 29  | Switch         | Cherry MX style hot-swap socket     | KEY1~KEY29      | C2803348   | CPG151101S11         | :x:                |
| 2\* | USB Type-C 16P | HRO TYPE-C-31-M-12                  | J1,J2           | C165948    | TYPE-C-31-M-12       | :x:                |
| 1\* | 3.5mm TRRS 8P  | PJ-393 8P TRRS                      | J3              | C668609    | PJ-393 8PJ           | :x:                |
| 1   | Conn 01x08     | 0.5mm Pitch 8P FPC/FFC Connector    | J4              | C2856797   | FPC-05F-8PH20        | :x:                |

- *Basic Part* means no additional manual feeding charge for these parts when using JLCPCB's PCBA services. Parts that are not *Basic* are *Extended*.
- One of the 2 USBs is used for connecting to the computer, and the other one is used to connect the other half of the keyboard. To connect the two halves, you can choose either USB or TRRS/TRS connector:
  - If you choose to use TRRS/TRS, then each half requires 1 USB and 1 TRRS/TRS.
  - If you choose to use USB, then each half requires 2 USB and no TRRS/TRS.
- TRRS/TRS does not support hot plugging in principle.
- If you want to save some money, you can consider not using PCBA service soldering `U1`, `F1` and `J1`\~`J4` (all are *Extended* parts), there parts are not very difficult to solder by soldering iron, and cheap to buy separately.
- The above information may change over time, please refer to the actual situation.

> For `v2.0`, `J4` is JST GH1.25 8P connector (Mfr. Part No: *SM08B-GHS-TB(LF)(SN)*), please refer to the schematic for wiring sequence.

#### Thumb Cluster

I did not prepare the PCBA files (i.e. BOM and CPL) for thumb cluster, if you need, try [Bouni/kicad-jlcpcb-tools](https://github.com/Bouni/kicad-jlcpcb-tools).

| Qty | Value      | Footprint                       | Designator | JLCPCB#    | MFR. Part#           | Basic Parts        |
| --- | ---------- | ------------------------------- | ---------- | ---------- | -------------------- | ------------------ |
| 6   | 1N4148     | SOD-123                         | D1~D6      | C81598     | 1N4148W              | :heavy_check_mark: |
| 6*  | Switch     | Cherry MX style hot-swap socket | KEY1~KEY6  | C2803348   | CPG151101S11         | :x:                |
| 1   | Conn 01x08 | 0.5mm Pitch 8P FPC/FFC Connector | J1         | C2856797   | FPC-05F-8PH20        | :x:                |
| 1*  | Encoder    | Alps EC11E-Switch Vertical      | EC1        | --         | --                   | --                 |

- If you want to use encoder, only 5 switches can be insert, encoder `EC1` and `KEY3` share the same position. The two larger mounting pins on the encoder must be cliped.

> For `v2.0`, `J1` is JST GH1.25 8P connector (Mfr. Part No: *SM08B-GHS-TB(LF)(SN)*), please refer to the schematic for wiring sequence.

#### Trackball Board

For ErgoSNM `v2.1`, use [PMW3360 PCB `v3.1`](https://github.com/siderakb/pmw3360-pcb/releases/tag/v3.1.0).  
For ErgoSNM `v2.0`, use [PMW3360 PCB `v3.0`](https://github.com/siderakb/pmw3360-pcb/releases/tag/v3.0.0).

### Case and Others

| Qty | Part                                     | Description |
| --- | ---------------------------------------- | ----------- |
| 1   | Case set                                 | Left Top/Bottom Cover + Right Top/Bottom Cover + Foots |
| 1   | Plate set                                | Left + Right + Thumb cluster                           |
| 1   | Trackball                                | Diameter 40mm                                          |
| 3   | Ball transfer units (Ball rollers)       | MISUMI BCHJJ7 or BR869-7           |
| 1   | TRS/TRRS or USB Type-C cable             | For connect two halves             |
| 2   | FPC/FFC Cables                           | 0.5mm Pitch 8Pin Same Side         |
| 21  | M2 threaded inserts                      | Outer Diameter: 3.5mm, Length: 3mm |
| 21  | M2 × 5mm screws                          |             |
| 4   | M2 × 8mm screws                          | For foots   |
| 4   | M2 hex nuts                              | For foots   |

> For `v2.0`, use JST GH1.25 8P cable instead of FPC/FFC cable, please refer to the schematic for wiring sequence.

## Build Guide

Steps summary:
1. [Prepare parts](#prepare-parts)
1. [Solder](#solder)
1. [Flash firmware](#flash-firmware)
1. [Test](#test)
1. [Assemble](#assemble)
1. [Edit keymap](#edit-keymap)
1. [Complete](#complete)

Video: [ErgoSNM Rev2.1 Soldering and Assembly](https://youtu.be/1BXKdrCFn6c)

### Prepare Parts

Please refer to [Parts List](#parts-list) and prepare all the required pares.

### Solder

If you use PCBA service, most of the parts should not need to solder by yourself, but there are still some parts that need to solder manually.

The parts that need attention are diodes (1N4148) and switch hot-swap sockers.

Diodes are unidirectional, solder them in the incorrect direction will make the keyboard not work. Please note which side is anode (+) and which side is cathode (-).  
The cathode side is marked by lines on the diodes, and the other side is the anode. On the PCB, there is also a line marked on the cathode side. Please solder each diode respectively according to its polarity mark on the PCB.

![](https://i.imgur.com/CU7DXw2.jpg)
▲ Diode polarity marking.

Solder hot-swap sockets with incorrect placement will block the hole. It is recommended to solder hot-swap sockets after [Test](#test).

![](https://i.imgur.com/y9A23bO.jpg)
▲ Hot-swap sockets placement.

After solder is completed, remember to use a multimeter to test whether the power supply (3.3V and GND) or USB D+/- is not short-circuited.

### Flash Firmware

Pre-build `.uf2` firmware can be downloaded from [Releases](https://github.com/siderakb/ergo-snm-keyboard/releases/tag/v2.1.0) page. If you want to build/compile firmware, follow the steps:
1. Git clone [firmware repo](https://github.com/siderakb/vial-qmk), checkout to `siderakb/ergosnm` branch.
2. Open [QMK MSYS](https://msys.qmk.fm/) or your preferred terminal.
3. Build via command `make zite/ergosnm:vial`. You may need to additionally install *make*.

There are two way to flash firmware:
- Copy `.uf2` file.
  1. Prepare `.uf2` firmware file.
  2. Enter DFU mode.
  3. Copy and paste `.uf2` file to the `RPI-RP2` device.
- QMK CLI
  1. Git clone [firmware repo](https://github.com/siderakb/vial-qmk), checkout to `siderakb/ergosnm` branch.
  2. Open [QMK MSYS](https://msys.qmk.fm/) or your preferred terminal.
  3. Flash via command, e.g. `qmk flash -kb zite/ergosnm -km vial` or `make zite/ergosnm:vial:flash`.
  4. Enter DFU mode. If you have other keyboards, you can also enter DFU mode before executing the command (the keyboard in DFU mode cannot type).

Whichever way you use, you will need to enter the DFU (Bootloader) mode. You can enter DFU mode by any of the following methods:
- Connect keyboard to computer, double-tap RESET button.
- Connect keyboard to computer, holding down BOOT button, toggle RESET button, then release BOOT button.
- Disconnecting the USB cable of keyboard, holding down BOOT button, release BOOT button after connecting keyboard to computer.

If the DFU mode is entered successfully, the keyboard will appear as a USB mass storage device under the name `RPI-RP2`.

> For more infomation, please refer to [QMK: Flashing Firmware](https://docs.qmk.fm/#/newbs_flashing) and [QMK: Raspberry Pi RP2040 UF2](https://docs.qmk.fm/#/flashing?id=raspberry-pi-rp2040-uf2).

> ⚠ Please note that TRRS/TRS does not support hot plugging in principle, please plug and unplug TRRS/TRS cable after unplugging the USB cable between keyboard and computer.

### Test

Onec the firmware is flashed, the keyboard is ready to work.

Before proceeding to the next setps, you can test whether the keyboard is working properly to detect PCBs defects early.

You can use a site like [this](https://en.key-test.ru/) or [this](https://keytest.vn/) to test the keybaord. Sine the switch may not be installed on keyboard at present, you can use tweezers to act as a switch.

### Assemble

1. Use soldering iron to installing threaded inserts in keyboard case.  
2. Connect the FPC/FFC cables between main board and thumb cluster/trackball board.  
![](https://i.imgur.com/kWDrTm2.jpg)

3. Screw plates to the case.  
![](https://i.imgur.com/54kXYYD.jpg)

4. Insert switches into the plate and PCB, you can insert the corner switches first to fix. Before inserting switch into the hot-swap socket, check the switch pins are not bent, if you have bend pin, unbend the pin.  
![](https://i.imgur.com/5N0QGRi.jpg)  
![](https://i.imgur.com/Lklcmzc.jpg)  
![](https://i.imgur.com/BhxgrRT.jpg)

5. Screw bottom cover and foots.
![](https://i.imgur.com/zlm93b8.jpg)

6. Add your keycaps. Plugin the TRRS/TRS or USB cable to connect two halves.

> ⚠ Please note that TRRS/TRS does not support hot plugging in principle, please plug and unplug TRRS/TRS cable after unplugging the USB cable between keyboard and computer.

### Edit Keymap

ErgoSNM support [Vial](https://get.vial.today/), you can edit keymap in real time, please refer to [Vial: User manual](https://get.vial.today/manual/).

[![](https://i.imgur.com/0yXPjm1.png)](https://i.imgur.com/0yXPjm1.png)

### Complete

Congratulations on getting a new keyboard🎉

![](https://i.imgur.com/ovP1uKJ.jpg)

