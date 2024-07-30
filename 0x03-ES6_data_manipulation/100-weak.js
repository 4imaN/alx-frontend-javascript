export default function createWeakMap() {
    return new WeakMap();
}
const weakMap = createWeakMap();

export default function queryAPI(endpoint) {
  if (!weakMap.has(endpoint)) {
    weakMap.set(endpoint, 1);
  } else {
    const count = weakMap.get(endpoint);
    if (count >= 5) {
      throw new Error('Endpoint load is high');
    } else {
      weakMap.set(endpoint, count + 1);
    }
  }
}

