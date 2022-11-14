#include <Arduino.h>
#include <SoftwareSerial.h>
#include <WiFiEsp.h>
#include "cluster.h"


#define WIFI_RXD 3
#define WIFI_TXD 4

SoftwareSerial _S_WIFI(WIFI_RXD, WIFI_TXD);
HardwareSerial &MBL = Serial;

WiFiEspClient client;
int wstatus = WL_IDLE_STATUS;

char buffer[255];
char server[] = "bapsim.kro.kr";
char ssid[] = "bapsimMaster";
char pass[] = "123456789";

void setup() {
  _S_WIFI.begin(9600);
  MBL.begin(9600);
  WiFi.init(&_S_WIFI);

  if(WiFi.status() == WL_NO_SHIELD) {
    while(true);
  }
  if(WiFi.status() == WL_CONNECTED) {
    wstatus = WiFi.begin(ssid, pass);
  }
}

void loop() {
  if(MBL.available()) {
    String slaveInput = MBL.readStringUntil('\n');
    Data d = parseDataFromSlave(slaveInput);
    
    bool success = confirmToServer(d.value);
    formatBroadcast(buffer, d.slaveId, success);
    MBL.println(buffer);
  }
}

bool confirmToServer(String value) {
  if(client.connect(server, 80)) {
    client.println("GET /api/v1/ticket/use/"+ value + " HTTP/1.1");
    client.println("Host: " + String(server));
    client.println("Connection: close");
    client.println();

    char endOfHeaders[] = "\r\n\r\n";   
    client.find(endOfHeaders);

    client.read();
    client.read();
    client.read();
    client.read();

    
  }
}