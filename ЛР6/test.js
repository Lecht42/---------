function displayResult(message) {
    const outputDiv = document.getElementById("output");
    outputDiv.innerHTML += `<p>${message}</p>`;
}

const avl = new AVLTree();
avl.insert(10, "value10");
avl.insert(20, "value20");
avl.insert(30, "value30");
avl.insert(40, "value40");
avl.insert(50, "value50");
avl.insert(25, "value25");

displayResult(`Значення за ключем 20: ${avl.search(20)}`);
displayResult(`Значення за ключем 15: ${avl.search(15)}`);

const minNode = avl.findMin();
const maxNode = avl.findMax();
displayResult(`Мінімальний елемент: ключ = ${minNode.key}, значення = ${minNode.value}`);
displayResult(`Максимальний елемент: ключ = ${maxNode.key}, значення = ${maxNode.value}`);
displayResult(`Обхід в глибину: ${JSON.stringify(avl.inOrderTraversal())}`);
displayResult(`Обхід в ширину: ${JSON.stringify(avl.breadthFirstTraversal())}`);

avl.delete(30);
displayResult(`Обхід в глибину після видалення ключа 30: ${JSON.stringify(avl.inOrderTraversal())}`);
