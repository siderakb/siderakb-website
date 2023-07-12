# DFU Mode

Device Firmware Update mode aka Bootloader mode.

## Raspberry Pi RP2040

You can enter DFU mode using any of the following methods:

- Connect keyboard to computer and double-tap RESET button. This method requires QMK firmware to be flashed and [Double-tap reset](https://docs.qmk.fm/#/platformdev_rp2040?id=double-tap) enabled.
- Connect the keyboard to your computer, holding down the BOOT button, toggle the RESET button, and then release the BOOT button.
- Disconnect the USB cable of the keyboard, holding down the BOOT button, and then release the BOOT button after reconnecting the keyboard to your computer.

If the DFU mode is entered successfully, the keyboard (or RP2040 MCU) will appear as a USB mass storage device under the name `RPI-RP2`.
