function displayResult(message) {
    const outputDiv = document.getElementById("output");
    outputDiv.innerHTML += `<p>${message}</p>`;
}

const pq = new PriorityQueue();
pq.enqueue(10);
pq.enqueue(20);
pq.enqueue(5);
pq.enqueue(30);

displayResult(`Черга з пріоритетом (деякі елементи): ${pq.heap.join(", ")}`);
displayResult(`Видалення елемента з найбільшим пріоритетом: ${pq.dequeue()}`);
displayResult(`Черга з пріоритетом після видалення: ${pq.heap.join(", ")}`);

const arr = [4, 10, 3, 5, 1];
displayResult(`Масив перед сортуванням: ${arr.join(", ")}`);
heapSort(arr);
displayResult(`Масив після пірамідального сортування: ${arr.join(", ")}`);
