class Stack {
    constructor() {
        this.items = [];
    }

    push(element) {
        this.items.push(element);
    }

    pop() {
        if (this.isEmpty()) return "Стек порожній";
        return this.items.pop();
    }

    peek() {
        if (this.isEmpty()) return "Стек порожній";
        return this.items[this.items.length - 1];
    }

    isEmpty() {
        return this.items.length === 0;
    }

    size() {
        return this.items.length;
    }
}

window.Stack = Stack;
