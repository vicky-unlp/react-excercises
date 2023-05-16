export function getFinalState(baseState, queue) {
    let finalState = baseState;
  
    for (let element of queue) {
        if (typeof element === 'function') {
            finalState = element(finalState);
        }
        else {
            finalState = element;
        }
    }
  
    return finalState;
  }
  