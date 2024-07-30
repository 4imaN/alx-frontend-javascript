    export const weakMap = new WeakMap();

    export function queryAPI(endpoint) {
      if (!weakMap.get(endpoint)) weakMap.set(endpoint, 1);
      else if (weakMap.get(endpoint) >= 5) throw new Error('Endpoint load is high');
      else weakMap.set(endpoint, weakMap.get(endpoint) + 1);
    }
    const weakMap = new WeakMap();

    function queryAPI(endpoint) {
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
    
    export { weakMap, queryAPI };