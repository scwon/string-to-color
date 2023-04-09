const crc32 = (str: string) => {
  let crc = 0xffffffff;
  const stringLength = str.length;

  for (let i = 0; i < stringLength; i++) {
    const c = str.charCodeAt(i);
    crc = (crc >>> 8) ^ crcTable[(crc ^ c) & 0xff];
  }

  return crc ^ 0xffffffff;
};

const crcTable = (() => {
  const table = new Uint32Array(256);
  for (let i = 0; i < 256; i++) {
    let c = i;
    for (let j = 0; j < 8; j++) {
      if (c & 1) {
        c = 0xedb88320 ^ (c >>> 1);
      } else {
        c = c >>> 1;
      }
    }
    table[i] = c;
  }
  return table;
})();

export default crc32;
