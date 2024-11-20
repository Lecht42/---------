function displayResult(message) {
    const outputDiv = document.getElementById("output");
    outputDiv.innerHTML += `<p>${message}</p>`;
}

const hashTable = new HashTable();
hashTable.add("Alice", 25);
hashTable.add("Bob", 30);
hashTable.add("Charlie", 35);

displayResult(`Додано елементи: ${JSON.stringify(hashTable.display())}`);

const value = hashTable.get("Alice");
displayResult(`Значення для ключа "Alice": ${value}`);

hashTable.remove("Bob");
displayResult(`Після видалення ключа "Bob": ${JSON.stringify(hashTable.display())}`);

hashTable.add("David", 40);
hashTable.add("Eve", 45);
hashTable.add("Frank", 50);
hashTable.add("Grace", 55);

displayResult(`Додано більше елементів: ${JSON.stringify(hashTable.display())}`);
