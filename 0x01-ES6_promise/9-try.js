export default function guardrail(mathFunction){
    const queue = [];
    try {
        res = mathFunction();
    } catch(error) {
        res = `Error: ${error.message}`;
    }
    queue.push(res);
    queue.push(guardrail);
    return queue;

        
}