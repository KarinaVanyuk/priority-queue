const MaxHeap = require('./max-heap.js');

class PriorityQueue {
	constructor(maxSize) {
		this.maxSize=maxSize || 30;
		this.heap = new MaxHeap();
	}

	  push(data, priority) {
        if (this.heap.size() < this.maxSize) {
            this.heap.push(data, priority);
        } else {
            throw new Error;
        }
    }

	 shift() {
        if (!this.heap.isEmpty()) {
            return this.heap.pop();
        } else {
            throw new Error;
        }
    }

	size() {
		return this.heap.size()
	}

	isEmpty() {
		
		return this.heap.root == null;
	}
}

module.exports = PriorityQueue;