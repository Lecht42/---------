function displayResult(message) {
    const outputDiv = document.getElementById("output");
    outputDiv.innerHTML += `<p>${message}</p>`;
}

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
displayResult(`Stack Поп: ${stack.pop()}`); 
displayResult(`Stack Топ: ${stack.peek()}`); 

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
displayResult(`Queue Дек’ю: ${queue.dequeue()}`); 
displayResult(`Queue Дек’ю: ${queue.dequeue()}`); 

const deque = new Deque();
deque.addRear(1);
deque.addRear(2);
deque.addFront(0);
displayResult(`Deque Видалити з фронту: ${deque.removeFront()}`);
displayResult(`Deque Видалити з тила: ${deque.removeRear()}`);

const set = new Set();
set.add(1);
set.add(2);
set.add(2); 
set.add(3);
displayResult(`Set Елементи множини: ${set.values().join(", ")}`);
set.delete(2);
displayResult(`Set Після видалення 2: ${set.values().join(", ")}`);
