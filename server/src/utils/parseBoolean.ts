function checkPrefix(key: string, prefix: string[]) {
  for (const pre of prefix) {
    if (key.startsWith(pre)) return true;
  }

  return false;
}

export function parseBoolean(object: any, keyPrefix: string[] = ["is", "bv"]) {
  for (const [key, value] of Object.entries(object)) {
    try {
      if (checkPrefix(key, keyPrefix))
        object[key] = JSON.parse(value as string);
    } catch {}
  }
}
