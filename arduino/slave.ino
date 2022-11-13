#include <Arduino.h>
#include <SoftwareSerial.h>

#define GM65_RXD 4
#define GM65_TXD 5

SoftwareSerial GM65(GM65_RXD, GM65_TXD);
HardwareSerial &BL = Serial;

void setup() {
  GM65.begin(9600);
  BL.begin(9600);
}

void loop() {
  if(GM65.available()){
    String code = GM65.readStringUntil('\n');
    BL.println(code);
  }
  if(BL.available()){
    GM65.write(BL.read());
  }
}
