export default function createInt8TypedArray(length, position, value) {
  if (position >= length){
    throw new Error('position is out of range');
  }

  const buffer = new ArrayBuffer(length);
  const int8view = new Int8Array(buffer);
  int8view[position] = value;

  return int8view;
}
