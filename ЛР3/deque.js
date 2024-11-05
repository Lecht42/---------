class DequeNode {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class Deque {
    constructor() {
        this.front = null;
        this.rear = null;
    }

    addFront(value) {
        const newNode = new DequeNode(value);
        if (this.isEmpty()) {
            this.front = this.rear = newNode;
        } else {
            newNode.next = this.front;
            this.front.prev = newNode;
            this.front = newNode;
        }
    }

    addRear(value) {
        const newNode = new DequeNode(value);
        if (this.isEmpty()) {
            this.front = this.rear = newNode;
        } else {
            newNode.prev = this.rear;
            this.rear.next = newNode;
            this.rear = newNode;
        }
    }

    removeFront() {
        if (this.isEmpty()) return "Дек порожній";
        const value = this.front.value;
        this.front = this.front.next;
        if (this.front) {
            this.front.prev = null;
        } else {
            this.rear = null;
        }
        return value;
    }

    removeRear() {
        if (this.isEmpty()) return "Дек порожній";
        const value = this.rear.value;
        this.rear = this.rear.prev;
        if (this.rear) {
            this.rear.next = null;
        } else {
            this.front = null;
        }
        return value;
    }

    isEmpty() {
        return this.front === null;
    }
}

window.Deque = Deque;
