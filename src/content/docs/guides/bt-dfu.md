---
title: Bootloader & DFU
description: A guide in my new Starlight docs site.
---

## Bootloader v.s. DFU

A **Bootloader** is a special program that determines the main application to run on an MCU's startup and may also handle secure boot.

**DFU** (Device Firmware Update) is a method for updating an MCU's firmware without the need for a dedicated programmer, such as an ST-Link or J-Link.

Typically, a bootloader includes DFU functionality, for example, holding a specific button during power-up can force the MCU into DFU mode, allowing firmware updates via USB or BLE OTA.

Although a bootloader and DFU are not exactly the same, and the bootloader may not always have DFU functionality, they are often used interchangeably, so in many cases *DFU mode* and *bootloader mode* can be considered the same thing.

Some MCUs come with a built-in bootloader/DFU — for example, the `RP2040`. These MCUs have DFU functionality right out of the factory.
Other MCUs, such as the `nRF52840`, do not have a built-in bootloader. To use DFU on these MCUs, you first need to flash a bootloader that includes DFU, such as the [Adafruit nRF52 Bootloader](https://github.com/adafruit/Adafruit_nRF52_Bootloader).

## Enter DFU Mode

### Raspberry Pi RP2040

The `RP2040` has built-in support for UF2 DFU functionality. You can enter DFU mode using any of the following methods:

- Connect the development board/keyboard to computer and double-tap `RESET` button. This method requires QMK firmware to be flashed and [Double-tap reset](https://docs.qmk.fm/#/platformdev_rp2040?id=double-tap) enabled.
- Connect the development board/keyboard to computer, holding down the `BOOT` button, toggle the `RESET` button, and then release the `BOOT` button.
- Disconnect the USB cable of the development board/keyboard, holding down the `BOOT` button, and then release the `BOOT` button after reconnected USB.

If the DFU mode is entered successfully, the development board/keyboard will appear as a USB mass storage device under the name `RPI-RP2`.

### Pro Micro (ATmega32U4)

Follow these steps:

1. Connect the Pro Micro with USB.
2. Press `RESET` button (or connected the `RST` pin to `GND`) twice quickly. Pro Micro will enter DUF mode for 8 seconds.

DFU mode will only last 8 seconds, you must flashing within 8 seconds.

Note that the `ATmega32U4` does not have a built-in bootloader. However, most Pro Micro boards you buy already come pre-flashed with Caterina/SparkFun bootloader.

[SparkFun Guide](https://learn.sparkfun.com/tutorials/pro-micro--fio-v3-hookup-guide/troubleshooting-and-faq#ts-reset)
