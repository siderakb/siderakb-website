# Pro Micro Pinmap

<table>
<thead>
  <tr>
    <th rowspan="3">Pin</th>
    <th colspan="2" rowspan="2">Pro Micro</th>
    <th>Pro Micro</th>
    <th>Elite-C</th>
    <th>Next Micro</th>
    <th>nico!nano</th>
    <th>SuperMini<br />NRF52840</th>
    <th>nRFMicro</th>
    <th>RP Micro</th>
    <th>Elite-Pi</th>
  </tr>
  <tr>
    <th colspan="3">ATmega32U4</th>
    <th colspan="3">nRF52840</th>
    <th colspan="2">RP2040</th>
  </tr>
  <tr>
    <th>Function</th>
    <th>Arduino Pin</th>
    <th>DEV-12640<br />DEV-12587</th>
    <th>v4</th>
    <th>v1</th>
    <th>v2</th>
    <th>N/A</th>
    <th>v1.4</th>
    <th>v1.1</th>
    <th>v1</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>L0</td>
    <td></td>
    <td>N/A</td>
    <td colspan="2">N/A</td>
    <td>PB7</td>
    <td colspan="3">GND</td>
    <td colspan="2">N/A</td>
  </tr>
  <tr>
    <td>L1</td>
    <td>UART Tx</td>
    <td>D1</td>
    <td colspan="3">PD3</td>
    <td colspan="2">P0.06</td>
    <td>P0.06</td>
    <td colspan="2">GP0</td>
  </tr>
  <tr>
    <td>L2</td>
    <td>UART Rx</td>
    <td>D0</td>
    <td colspan="3">PD2</td>
    <td colspan="2">P0.08</td>
    <td>P0.08</td>
    <td colspan="2">GP1</td>
  </tr>
  <tr>
    <td>L3</td>
    <td></td>
    <td>GND</td>
    <td colspan="6">GND</td>
    <td colspan="2">GND/GP10</td>
  </tr>
  <tr>
    <td>L4</td>
    <td></td>
    <td>GND</td>
    <td colspan="6">GND</td>
    <td colspan="2">GND/GP11</td>
  </tr>
  <tr>
    <td>L5</td>
    <td>I2C SDA</td>
    <td>D2</td>
    <td colspan="3">PD1</td>
    <td colspan="2">P0.17</td>
    <td>P0.15</td>
    <td colspan="2">GP2</td>
  </tr>
  <tr>
    <td>L6</td>
    <td>I2C SCL</td>
    <td>D3</td>
    <td colspan="3">PD0</td>
    <td colspan="2">P0.20</td>
    <td>P0.17</td>
    <td colspan="2">GP3</td>
  </tr>
  <tr>
    <td>L7</td>
    <td>ADC8</td>
    <td>D4/A6</td>
    <td colspan="3">PD4</td>
    <td colspan="2">P0.22</td>
    <td>P0.20</td>
    <td colspan="2">GP4</td>
  </tr>
  <tr>
    <td>L8</td>
    <td></td>
    <td>D5</td>
    <td colspan="3">PC6</td>
    <td colspan="2">P0.24</td>
    <td>P0.13</td>
    <td colspan="2">GP5</td>
  </tr>
  <tr>
    <td>L9</td>
    <td>ADC10</td>
    <td>D6/A7</td>
    <td colspan="3">PD7</td>
    <td colspan="2">P1.00</td>
    <td>P0.24</td>
    <td colspan="2">GP6</td>
  </tr>
  <tr>
    <td>L10</td>
    <td></td>
    <td>D7</td>
    <td colspan="3">PE6</td>
    <td colspan="2">P0.11</td>
    <td>P0.09</td>
    <td colspan="2">GP7</td>
  </tr>
  <tr>
    <td>L11</td>
    <td>ADC11</td>
    <td>D8/A8</td>
    <td colspan="3">PB4</td>
    <td colspan="2">P1.04</td>
    <td>P0.10</td>
    <td colspan="2">GP8</td>
  </tr>
  <tr>
    <td>L12</td>
    <td>ADC12</td>
    <td>D9/A9</td>
    <td colspan="3">PB5</td>
    <td colspan="2">P1.06</td>
    <td>P1.06</td>
    <td colspan="2">GP9</td>
  </tr>
  <tr>
    <td></td>
    <td></td>
    <td></td>
    <td colspan="8"></td>
  </tr>
  <tr>
    <td>R0</td>
    <td></td>
    <td>N/A</td>
    <td>N/A</td>
    <td>RAW</td>
    <td>PB0</td>
    <td colspan="3">Battery +</td>
    <td colspan="2">N/A</td>
  </tr>
  <tr>
    <td>R1</td>
    <td></td>
    <td>RAW</td>
    <td>RAW</td>
    <td>PB0</td>
    <td colspan="6">RAW</td>
  </tr>
  <tr>
    <td>R2</td>
    <td></td>
    <td>GND</td>
    <td colspan="8">GND</td>
  </tr>
  <tr>
    <td>R3</td>
    <td></td>
    <td>Reset</td>
    <td colspan="3">Reset</td>
    <td colspan="3">Reset (P0.18)</td>
    <td colspan="2">Reset</td>
  </tr>
  <tr>
    <td>R4</td>
    <td></td>
    <td>VCC</td>
    <td colspan="8">VCC</td>
  </tr>
  <tr>
    <td>R5</td>
    <td>ADC4</td>
    <td>A3</td>
    <td colspan="3">PF4</td>
    <td colspan="2">P0.31</td>
    <td>P0.30</td>
    <td colspan="2">GP29</td>
  </tr>
  <tr>
    <td>R6</td>
    <td>ADC5</td>
    <td>A2</td>
    <td colspan="3">PF5</td>
    <td colspan="2">P0.29</td>
    <td>P0.31</td>
    <td colspan="2">GP28</td>
  </tr>
  <tr>
    <td>R7</td>
    <td>ADC6</td>
    <td>A1</td>
    <td colspan="3">PF6</td>
    <td colspan="2">P0.02</td>
    <td>P0.29</td>
    <td colspan="2">GP27</td>
  </tr>
  <tr>
    <td>R8</td>
    <td>ADC7</td>
    <td>A0</td>
    <td colspan="3">PF7</td>
    <td colspan="2">P1.15</td>
    <td>P0.02</td>
    <td colspan="2">GP26</td>
  </tr>
  <tr>
    <td>R9</td>
    <td>SPI SCLK</td>
    <td>D15</td>
    <td colspan="3">PB1</td>
    <td colspan="2">P1.13</td>
    <td>P1.13</td>
    <td colspan="2">GP22</td>
  </tr>
  <tr>
    <td>R10</td>
    <td>SPI MISO</td>
    <td>D14</td>
    <td colspan="3">PB3</td>
    <td colspan="2">P1.11</td>
    <td>P0.03</td>
    <td colspan="2">GP20</td>
  </tr>
  <tr>
    <td>R11</td>
    <td>SPI MOSI</td>
    <td>D16</td>
    <td colspan="3">PB2</td>
    <td colspan="2">P0.10</td>
    <td>P0.28</td>
    <td colspan="2">GP23</td>
  </tr>
  <tr>
    <td>R12</td>
    <td>ADC13</td>
    <td>D10/A10</td>
    <td colspan="3">PB6</td>
    <td colspan="2">P0.09</td>
    <td>P1.11</td>
    <td colspan="2">GP21</td>
  </tr>
  <tr>
    <td colspan="3"></td>
    <td colspan="8"></td>
  </tr>
  <tr>
    <td>B0</td>
    <td></td>
    <td>N/A</td>
    <td>N/A</td>
    <td>PB7</td>
    <td>PD6</td>
    <td>N/A</td>
    <td>N/A</td>
    <td>N/A</td>
    <td colspan="2">GP12</td>
  </tr>
  <tr>
    <td>B1</td>
    <td></td>
    <td>N/A</td>
    <td>N/A</td>
    <td colspan="2">PD5</td>
    <td>N/A</td>
    <td>N/A</td>
    <td>N/A</td>
    <td colspan="2">GP13</td>
  </tr>
  <tr>
    <td>B2</td>
    <td></td>
    <td>N/A</td>
    <td>N/A</td>
    <td colspan="2">PC7</td>
    <td>N/A</td>
    <td>N/A</td>
    <td>N/A</td>
    <td colspan="2">GP14</td>
  </tr>
  <tr>
    <td>B3</td>
    <td></td>
    <td>N/A</td>
    <td>N/A</td>
    <td colspan="2">PF1</td>
    <td>N/A</td>
    <td>N/A</td>
    <td>N/A</td>
    <td>GP16</td>
    <td>GP15</td>
  </tr>
  <tr>
    <td>B4</td>
    <td></td>
    <td>N/A</td>
    <td>N/A</td>
    <td colspan="2">PF0</td>
    <td>N/A</td>
    <td>N/A</td>
    <td>N/A</td>
    <td>GP17</td>
    <td>GP16</td>
  </tr>
  <tr>
    <td colspan="3"></td>
    <td colspan="8"></td>
  </tr>
  <tr>
    <td>LED</td>
    <td></td>
    <td>N/A</td>
    <td>N/A</td>
    <td>?</td>
    <td>N/A</td>
    <td colspan="2">P0.15</td>
    <td>P1.10</td>
    <td>GP25</td>
    <td>N/A</td>
  </tr>
  <tr>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td colspan="2">P1.01</td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td colspan="2">P1.02</td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td colspan="2">P1.07</td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
</tbody>
</table>