---
sidebar_position: 1
---

# Rev 2.x

![](https://i.imgur.com/tddlJ7A.jpg)

This document for the `Rev 2.x` of the ErgoSNM keyboard, the latest is [`Rev 2.1`](https://github.com/siderakb/ergo-snm-keyboard/releases/tag/v2.1.0). Source files: [GitHub](https://github.com/siderakb/ergo-snm-keyboard).

My blog post: [ErgoSNM——有軌跡球的分離式人體工學QMK鍵盤 (v2.1)](https://ziteh.github.io/posts/ergosnm-v2-1-intro/)

## Features
1. 64 keys in total, left half (with thumb cluster) 29+6 keys, right half (with trackball) 29 keys.
1. Trackball for mouse cursor and scroll, powered by [PMW3360](https://www.pixart.com/products-detail/10/PMW3360DM-T2QU) optical mouse sensor.
1. USB Type-C receptacle connector, with ESD protection adn resettable fuse.
1. Support Cherry MX style key switches and hot-swap sockets.
1. Column-staggered layout.
1. Top mount.
1. Support [Vial](https://get.vial.today/), edit keymap and configuring keyboard in real time.
1. Uses the [RP2040](https://www.raspberrypi.com/products/rp2040/) ARM Cortex-M0+ MCU, with 16MB (128Mb) external flash.
1. One user configurable monochrome LED.
1. Either 3.5mm TRRS/TRS or USB Type-C can be selected for two halves communication cable connector.
1. SWD and USB D+/- pads for debugging (left half only).
1. JLCPCB's PCBA service available, no need to solder parts yourself.

## Parts List

<table>
<thead>
  <tr>
    <th colspan="2">Item</th>
    <th>Qty</th>
    <th>Description</th>
    <th>Link</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td rowspan="3">Left half</td>
    <td>Main PCB</td>
    <td>1</td>
    <td>Include <a href="#main-pcbs">electronic parts</a> and <a href="https://github.com/siderakb/ergo-snm-keyboard/tree/main/ErgoSNM_Keyboard/rev2/left">PCB</a></td>
    <td rowspan="10"><a href="https://github.com/siderakb/ergo-snm-keyboard/releases/tag/v2.1.0">GH Release Page</a> </td>
  </tr>
  <tr>
    <td> Top case</td>
    <td>1</td>
    <td>Choose one of the three holes type</td>
  </tr>
  <tr>
    <td> Bottom case</td>
    <td>1</td>
    <td> </td>
  </tr>
  <tr>
    <td rowspan="3">Right half</td>
    <td>Main PCB</td>
    <td>1</td>
    <td>Include <a href="#main-pcbs">electronic parts</a> and <a href="https://github.com/siderakb/ergo-snm-keyboard/tree/main/ErgoSNM_Keyboard/rev2/right">PCB</a></td>
  </tr>
  <tr>
    <td>Top case</td>
    <td>1</td>
    <td>Choose one of the three holes type</td>
  </tr>
  <tr>
    <td>Bottom case</td>
    <td>1</td>
    <td></td>
  </tr>
  <tr>
    <td colspan="2">Foot (1)</td>
    <td>2</td>
    <td></td>
  </tr>
  <tr>
    <td colspan="2">Main plate (1)</td>
    <td>2</td>
    <td>FR4</td>
  </tr>
  <tr>
    <td colspan="2">Thumb cluster plate</td>
    <td>1</td>
    <td>FR4</td>
  </tr>
  <tr>
    <td colspan="2">Thumb cluster PCB</td>
    <td>1</td>
    <td></td>
  </tr>
  <tr>
    <td colspan="2">Trackball board</td>
    <td>1</td>
    <td>Include <a href="https://github.com/siderakb/pmw3360-pcb/tree/v3.1.0#bom">electronic parts</a> and <a href="https://github.com/siderakb/pmw3360-pcb/tree/v3.1.0/PMW3360_PCB">PCB</a></td>
    <td><a href="https://github.com/siderakb/pmw3360-pcb/releases/tag/v3.1.0">GH Release Page</a></td>
  </tr>
  <tr>
    <td colspan="2">40mm Trackball ball</td>
    <td>1</td>
    <td></td>
    <td><a href="https://www.aliexpress.com/i/1005001632971456.html">Ref</a></td>
  </tr>
  <tr>
    <td colspan="2">Ball transfer units (BTUs, Ball rollers)</td>
    <td>3</td>
    <td>MISUMI BCHJJ7 or CheNa BR869-7 or VCN321-7</td>
    <td><a href="https://us.misumi-ec.com/vona2/detail/110300427030/?HissuCode=BCHJJ7">Ref1</a>, <a href="https://www.aliexpress.com/item/1005003081021713.html">Ref2</a></td>
  </tr>
  <tr>
    <td colspan="2">3.5mm TRS/TRRS or USB Type-C cable</td>
    <td>1</td>
    <td>For connect two halves</td>
    <td><a href="https://a.co/d/9SjkIcC">Ref</a></td>
  </tr>
  <tr>
    <td colspan="2">FPC/FFC Cables (2)</td>
    <td>2</td>
    <td>8 Pin, 0.5mm Pitch, Same side contacts</td>
    <td><a href="https://www.ebay.com/itm/155455713493?mkcid=16&mkevt=1&mkrid=711-127632-2357-0&ssspo=8fby7xizq9e&sssrc=2047675&ssuid=&widget_ver=artemis&media=COPY">Ref</a></td>
  </tr>
  <tr>
    <td colspan="2">M2 threaded inserts</td>
    <td>21</td>
    <td>Outer Diameter: 3.5mm, Length: 3mm</td>
    <td><a href="https://www.aliexpress.com/item/4000585933306.html">Ref</a></td>
  </tr>
  <tr>
    <td colspan="2">M2 × 5mm screws</td>
    <td>21</td>
    <td>For PCB, case and plate</td>
    <td><a href="https://www.aliexpress.com/item/1005004543081525.html">Ref</a></td>
  </tr>
  <tr>
    <td colspan="2">M2 × 8mm screws</td>
    <td>4</td>
    <td>For feet</td>
    <td><a href="https://www.aliexpress.com/item/1005004543081525.html">Ref</a></td>
  </tr>
  <tr>
    <td colspan="2">M2 hex nuts</td>
    <td>4</td>
    <td>For feet</td>
    <td><a href="https://www.aliexpress.com/item/4000226223259.html">Ref</a></td>
  </tr>
</tbody>
</table>

1. This part is reversible/symmetrical and can be used on both the left and right halves.
2. For `v2.0`, use JST GH1.25 8P cable instead of FPC/FFC cable, please refer to the schematic for wiring sequence.

### PCB and Electronic Parts

Here are listed all the electronic components in more detail for PCBs. 

| Left half main PCB                                                      | Right half main PCB                                                     | Thumb cluster                                                           | Trackball board                                                         |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| [![](https://i.imgur.com/lFPIKst.png)](https://i.imgur.com/lFPIKst.png) | [![](https://i.imgur.com/YIMYJX9.png)](https://i.imgur.com/YIMYJX9.png) | [![](https://i.imgur.com/PUA9THP.png)](https://i.imgur.com/PUA9THP.png) | [![](https://i.imgur.com/OyAF7rm.jpg)](https://i.imgur.com/OyAF7rm.jpg) |

#### Main PCBs

Since the left and right PCB electronic parts are identical, the following table only lists the quantities required for one half. Please multiply by 2 when manufacturing both halves.

:::note
If you use PCBA service, you don't have to prepare and solder most or even all of the following parts yourself.
:::

| Qty | Value                | Footprint                              | Designator      | JLCPCB#  | MFR. Part#      | Basic Parts *(1)*  |
| --- | -------------------- | -------------------------------------- | --------------- | -------- | --------------- | :----------------: |
| 3   | 5.1k                 | 0402 (1005 Metric)                     | R1,R2,R4        | C25905   | 0402WGF5101TCE  | :heavy_check_mark: |
| 3   | 1k                   | 0402 (1005 Metric)                     | R3,R7,R9        | C11702   | 0402WGF1001TCE  | :heavy_check_mark: |
| 2   | 27                   | 0603 (1608 Metric)                     | R5,R6           | C25190   | 0603WAF270JT5E  | :heavy_check_mark: |
| 2   | 10k                  | 0402 (1005 Metric)                     | R8,R10          | C25744   | 0402WGF1002TCE  | :heavy_check_mark: |
| 4   | 1uF                  | 0402 (1005 Metric)                     | C1,C2,C8,C16    | C52923   | CL05A105KA5NQNC | :heavy_check_mark: |
| 10  | 100nF                | 0402 (1005 Metric)                     | C3,C6,C7,C9~C15 | C307331  | CL05B104KB54PNC | :heavy_check_mark: |
| 2   | 20pF                 | 0402 (1005 Metric)                     | C4,C5           | C1554    | 0402CG200J500NT | :heavy_check_mark: |
| 1   | 500mA, 6V            | 0805 (2012 Metric)                     | F1              | C269104  | SMD0805B050TF   |        :x:         |
| 1   | RT9013-33GB          | SOT-23-5                               | U1              | C47773   | RT9013-33GB     |        :x:         |
| 1   | SRV05-4              | SOT-23-6                               | U2              | C85364   | SRV05-4-P-T7    | :heavy_check_mark: |
| 1   | W25Q128JVS           | SOIC-8 5.23x5.23mm P1.27mm             | U3              | C97521   | W25Q128JVSIQ    | :heavy_check_mark: |
| 1   | RP2040               | QFN-56-1EP 7x7mm P0.4mm EP3.2x3.2mm    | U4              | C2040    | RP2040          |        :x:         |
| 1   | 12MHz                | 3225 4Pin (3.2x2.5mm)                  | Y1              | C9002    | X322512MSB4SI   | :heavy_check_mark: |
| 29  | 1N4148               | SOD-123                                | D1~D29          | C81598   | 1N4148W         | :heavy_check_mark: |
| 1   | Red LED              | 0603 (1608 Metric)                     | LD1             | C2286    | KT-0603R        | :heavy_check_mark: |
| 2   | RESET & BOOT         | SW_SPST_TL3342                         | SW1,SW2         | C318884  | TS-1187A-B-A-B  | :heavy_check_mark: |
| 29  | Switch               | Cherry MX style hot-swap socket        | KEY1~KEY29      | C2803348 | CPG151101S11    |        :x:         |
| 2   | USB Type-C 16P *(2)* | HRO TYPE-C-31-M-12                     | J1,J2           | C165948  | TYPE-C-31-M-12  |        :x:         |
| 1   | 3.5mm TRRS 8P *(2)*  | PJ-393 8P TRRS                         | J3              | C668609  | PJ-393 8PJ      |        :x:         |
| 1   | Conn 01x08           | 0.5mm Pitch 8P FPC/FFC Connector *(3)* | J4              | C2856797 | FPC-05F-8PH20   |        :x:         |

1. *Basic Part* means no additional manual feeding charge for these parts when using JLCPCB's PCBA services. Parts that are not *Basic* are *Extended*.
2. One of the 2 USBs is used for connecting to the computer, and the other one is used to connect the other half of the keyboard. To connect the two halves, you can choose either USB or TRRS/TRS connector:
    - If you choose to use TRRS/TRS, then each half requires 1 USB and 1 TRRS/TRS.
    - If you choose to use USB, then each half requires 2 USB and no TRRS/TRS.
    - TRRS/TRS does not support hot plugging in practice.
3. For `v2.0`, `J4` is JST GH1.25 8P connector (Mfr. Part No: *SM08B-GHS-TB(LF)(SN)*), please refer to the schematic for wiring sequence.
97. If you want to save some money, you can consider not using PCBA service soldering `U1`, `F1` and `J1`\~`J4` (all are *Extended* parts), there parts are not very difficult to solder by soldering iron, and cheap to buy separately.
98. I have never used JLCPCB's PCBA service to solder `U1`, `F1`, `J1`\~`J4` and `KEY1`\~`KEY29` parts. Please check the PCBA files yourself, especially the CPL file, if you need to.
99. Please note that the above information is subject to change, so please refer to the current situation.


#### Thumb Cluster

I did not prepare the PCBA files (i.e. BOM and CPL) for thumb cluster, if you need, try [Bouni/kicad-jlcpcb-tools](https://github.com/Bouni/kicad-jlcpcb-tools).

| Qty | Value         | Footprint                              | Designator | JLCPCB#  | MFR. Part#    |    Basic Parts     |
| --- | ------------- | -------------------------------------- | ---------- | -------- | ------------- | :----------------: |
| 6   | 1N4148        | SOD-123                                | D1~D6      | C81598   | 1N4148W       | :heavy_check_mark: |
| 6   | Switch *(1)*  | Cherry MX style hot-swap socket        | KEY1~KEY6  | C2803348 | CPG151101S11  |        :x:         |
| 1   | Conn 01x08    | 0.5mm Pitch 8P FPC/FFC Connector *(2)* | J1         | C2856797 | FPC-05F-8PH20 |        :x:         |
| 1   | Encoder *(1)* | Alps EC11E-Switch Vertical             | EC1        | --       | --            |         --         |

1. If you want to use encoder, only 5 switches can be insert, encoder `EC1` and `KEY3` share the same position. The two larger mounting pins on the encoder must be cliped.
2. For `v2.0`, `J1` is JST GH1.25 8P connector (Mfr. Part No: *SM08B-GHS-TB(LF)(SN)*), please refer to the schematic for wiring sequence.

#### Trackball Board

For ErgoSNM `v2.1`, ref to PMW3360 PCB `V3.1`:
- [BOM](https://github.com/siderakb/pmw3360-pcb/tree/v3.1.0#bom)
- [Release](https://github.com/siderakb/pmw3360-pcb/releases/tag/v3.1.0)

> For ErgoSNM `v2.0`, ref to [PMW3360 PCB `v3.0`](https://github.com/siderakb/pmw3360-pcb/releases/tag/v3.0.0).

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

:::info
Before you start, make sure the parts are available, PMW3360 and BTUs are more difficult parts to buy.

Some online electronic parts stores in my country will help find and purchase rare ICs (usually from Taobao), this is how i bought PMW3360.
There are 3 different BTU models listed in the part list, and they are exact same size.

Approximate cost in USD:
- PCBA: $80
- 3D printing case: $46
- other parts: $32
:::

### Prepare Parts

Please refer to [Parts List](#parts-list) and prepare all the required pares.

The cases and feet can be produced using 3D printing (I use SLA Resin for cases, MJF Nylon for feet). The plates provides Gerber files, which are produced as PCBs.

### Solder

If you use PCBA service, most of the parts should not need to solder by yourself, but there are still some parts that need to solder manually.

If you are not very familiar with soldering, please read the [Soldering Guide](/docs/general-guide/soldering) first.
The parts that need attention are diodes and switch hot-swap sockets.

:::tip
It is recommended to solder the switches or hot-swap sockets after [Test](#test).
:::

:::caution
After soldering is completed, remember to use a multimeter to test for any short circuits between the power supply (5V, 3.3V, and GND) and USB D+/-.
:::

### Flash Firmware


There are two way to flash firmware:

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="uf2" label="UF2 file" default>
    <ol>
      <li>Download Pre-build <code>.uf2</code> firmware file from <a href="https://github.com/siderakb/vial-qmk/releases/tag/ergosnm_v2.1.0">Releases</a> page.</li>
      <li><a href="/docs/general-guide/dfu#raspberry-pi-rp2040">Enter DFU mode</a>.</li>
      <li>Copy and paste <code>.uf2</code> file to the <code>RPI-RP2</code> device.</li>
    </ol>

:::note
If you want to build/compile `.uf2`, follow the steps:
1. Git clone [firmware repo](https://github.com/siderakb/vial-qmk).
2. Open [QMK MSYS](https://msys.qmk.fm/) or your preferred terminal.
3. Navigate to the cloned repo directory and checkout to `siderakb/main` branch.
4. Build via command `make siderakb/ergosnm/rev2:vial`. You may need to additionally install *make*.
:::
  </TabItem>
  <TabItem value="cli" label="CLI">
    <ol>
      <li>Git clone <a href="https://github.com/siderakb/vial-qmk">firmware repo</a></li>
      <li>Open QMK MSYS or your preferred terminal.</li>
      <li>Navigate to the cloned repo directory and checkout to <code>siderakb/main</code> branch.</li>
      <li>Flash via command, e.g. <code>qmk flash -kb siderakb/ergosnm/rev2 -km vial</code> or <code>make siderakb/ergosnm/rev2:vial:flash</code>.</li>
      <li><a href="/docs/general-guide/dfu#raspberry-pi-rp2040">Enter DFU mode</a>. If you have other keyboards, you can also enter DFU mode before executing the command (a keyboard in DFU mode will not be able to type).</li>
    </ol>
  </TabItem>
</Tabs>

:::caution
Please note that TRRS/TRS does not support hot plugging in practice, please plug and unplug TRRS/TRS cable after unplugging the USB cable between keyboard and computer.
:::

:::info
For more infomation, please refer to [QMK: Flashing Firmware](https://docs.qmk.fm/#/newbs_flashing) and [QMK: Raspberry Pi RP2040 UF2](https://docs.qmk.fm/#/flashing?id=raspberry-pi-rp2040-uf2).
:::

### Test

Onec the firmware is flashed, the keyboard is ready to work.

Before proceeding to the next setps, you can test whether the keyboard is working properly to detect PCBs defects early.

You can use a site like [this](https://en.key-test.ru/) or [this](https://keytest.vn/) to test the keybaord. Sine the switch may not be installed on keyboard at present, you can use tweezers to act as a switch.

### Assemble

1. Use soldering iron to installing threaded inserts in keyboard case.  
:::caution
The wall of the hole at the thumb cluster is very thin, so please be careful.
:::
2. Connect the FPC/FFC cables between main board and thumb cluster/trackball board.  
![](https://i.imgur.com/kWDrTm2.jpg)

3. Screw main and thumb cluster plates to the case.  
![](https://i.imgur.com/54kXYYD.jpg)

4. Insert switches into the plate and PCB, you can insert the corner switches first to fix.
:::caution
Before inserting the switch into the hot-swap socket, check if the switch pins are bent. If you find any bent pins, please straighten them.
:::
![](https://i.imgur.com/5N0QGRi.jpg)  
![](https://i.imgur.com/Lklcmzc.jpg)  
![](https://i.imgur.com/BhxgrRT.jpg)

1. Screw bottom cover and foots.
![](https://i.imgur.com/zlm93b8.jpg)

1. Add your keycaps. Plugin the TRRS/TRS or USB cable to connect two halves.
:::caution
Please note that TRRS/TRS does not support hot plugging in practice, please plug and unplug TRRS/TRS cable after unplugging the USB cable between keyboard and computer.
:::

### Edit Keymap

ErgoSNM support [Vial](https://get.vial.today/), you can edit keymap in real time, please refer to [Vial: User manual](https://get.vial.today/manual/).

[![](https://i.imgur.com/0yXPjm1.png)](https://i.imgur.com/0yXPjm1.png)

### Complete

Congratulations on getting a new keyboard🎉

![](https://i.imgur.com/ovP1uKJ.jpg)

