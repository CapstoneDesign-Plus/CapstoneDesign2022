#include "cluster.h"

void formatToMaster(char* buffer, char id, char* value) {
  sprintf(buffer, "%c %s", id, value);
}

Data parseDataFromSlave(String value) {
  return {
    value.charAt(0),
    value.substring(2)
  };
}

void formatBroadcast(char* buffer, char slaveId, bool ok){
  sprintf(buffer, "%c %d", slaveId, ok);
}