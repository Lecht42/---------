class Queue {
    constructor(size = 10) {
        this.items = new Array(size);
        this.size = size;
        this.front = 0;
        this.rear = 0;
        this.count = 0;
    }

    enqueue(element) {
        if (this.isFull()) return "Черга переповнена";
        this.items[this.rear] = element;
        this.rear = (this.rear + 1) % this.size;
        this.count++;
    }

    dequeue() {
        if (this.isEmpty()) return "Черга порожня";
        const element = this.items[this.front];
        this.front = (this.front + 1) % this.size;
        this.count--;
        return element;
    }

    isFull() {
        return this.count === this.size;
    }

    isEmpty() {
        return this.count === 0;
    }

    getFront() {
        if (this.isEmpty()) return "Черга порожня";
           return this;
    }
}