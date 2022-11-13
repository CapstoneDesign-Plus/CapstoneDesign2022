#ifndef CLUSTER_H

#include <Arduino.h>

#define CLUSTER_H

typedef struct {
  char slaveId;
  String value;
} Data;

void formatToMaster(char* buffer, char id, char* value);

Data parseDataFromSlave(String value);

void formatBroadcast(char* buffer, char slaveId, bool ok);


#endif