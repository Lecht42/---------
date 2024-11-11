function displayResult(message) {
    const outputDiv = document.getElementById("output");
    outputDiv.innerHTML += `<p>${message}</p>`;
}

const bst = new BinarySearchTree();
bst.insert(5, "value5");
bst.insert(3, "value3");
bst.insert(7, "value7");
bst.insert(2, "value2");
bst.insert(4, "value4");
bst.insert(6, "value6");
bst.insert(8, "value8");

displayResult(`Значення за ключем 4: ${bst.search(4)}`);
displayResult(`Значення за ключем 10: ${bst.search(10)}`); // Очікується null

bst.delete(3);
displayResult(`Обхід в глибину після видалення ключа 3: ${JSON.stringify(bst.inOrderTraversal())}`);

const minNode = bst.findMin();
const maxNode = bst.findMax();
displayResult(`Мінімальний елемент: ключ = ${minNode.key}, значення = ${minNode.value}`);
displayResult(`Максимальний елемент: ключ = ${maxNode.key}, значення = ${maxNode.value}`);

displayResult(`Обхід в глибину: ${JSON.stringify(bst.inOrderTraversal())}`);

displayResult(`Обхід в ширину: ${JSON.stringify(bst.breadthFirstTraversal())}`);

displayResult(`Висота бінарного дерева: ${bst.getHeight()}`);