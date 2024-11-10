class PriorityQueue {
    constructor() {
        this.heap = [];
    }

    enqueue(value) {
        this.heap.push(value);
        this._heapifyUp();
    }

    dequeue() {
        if (this.size() === 0) return null;
        if (this.size() === 1) return this.heap.pop();

        const root = this.heap[0];
        this.heap[0] = this.heap.pop();
        this._heapifyDown();

        return root;
    }

    size() {
        return this.heap.length;
    }

    _heapifyUp() {
        let index = this.size() - 1;
        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);
            if (this.heap[index] <= this.heap[parentIndex]) break;
            [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]];
            index = parentIndex;
        }
    }

    _heapifyDown() {
        let index = 0;
        const length = this.size();

        while (true) {
            let largest = index;
            const leftChild = 2 * index + 1;
            const rightChild = 2 * index + 2;

            if (leftChild < length && this.heap[leftChild] > this.heap[largest]) {
                largest = leftChild;
            }
            if (rightChild < length && this.heap[rightChild] > this.heap[largest]) {
                largest = rightChild;
            }
            if (largest === index) break;

            [this.heap[index], this.heap[largest]] = [this.heap[largest], this.heap[index]];
            index = largest;
        }
    }
}

window.PriorityQueue = PriorityQueue;
