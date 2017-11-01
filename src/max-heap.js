const Node = require('./node');

class MaxHeap {
	constructor() {
		this.root = null;
		this.parentNodes = [];
		this.count = 0;
	}

	push(data, priority) {
		let node= new Node(data, priority);
		this.insertNode(node);
		this.shiftNodeUp(node);
		this.count++;

	}

pop() {
		if(!this.isEmpty()){
			this.count--;
			let detach = this.detachRoot();
			this.restoreRootFromLastInsertedNode(detach);
			this.shiftNodeDown(this.root);

			return detach.data;
		}
	}

	detachRoot() {
		if (this.root !== null) {
			this.parentNodes.shift;
		this.root = null;
		}
	}

	// restoreRootFromLastInsertedNode(detached) {
	// 	if (this.parentNodes.length > 0 ) {
	// 		let lastNode= this.parentNodes[this.parentNodes.length - 1];
	// 		this.root = lastNode
	// 		// if (last.node === detached.left ) {

	// 		// }
	// 	}
	// }

	size() {
		return this.count ;
	}

	isEmpty() {
		return this.root === null;
	}

	clear() {
		this.root = null;
		this.parentNodes = [];
		this.count = 0;
	}

	insertNode(node) {
		if (this.root !== null) {
			this.parentNodes[0].appendChild(node);
			this.parentNodes.push(node)
			if (this.parentNodes[0].right) {
				this.parentNodes.shift()
			}
		}
		else {
			this.root = node;
			this.parentNodes.push(node)
		}
		this.count++;

	}

	shiftNodeUp(node) {
		if (node.parent !== null && node.priority > node.parent.priority) {
			var nodeIndex = this.parentNodes.indexOf(node)
			var nodeParentIndex = this.parentNodes.indexOf(node.parent)
			if (nodeIndex >= 0 && nodeParentIndex>=0 ) {
				this.parentNodes[nodeIndex]= node.parent;
				this.parentNodes[nodeParentIndex] = node;
			}
			node.swapWithParent();
			this.shiftNodeUp(node);
		
	}}

	shiftNodeDown(node) {
		if ((node.left !== null && node.left.priority > node.priority)|| 
			(node.right !== null && node.right.priority > node.priority) ) {
			let maxchild; 
		if (node.left !== null && node. right !== null) {
			if (node.left.priority > node.right.priority) {
				maxchild= node.left
			}
			 else{
			 	maxchild= node.right
			 }
		}
		if (node.left !== null) {
maxchild= node.left
		}
		if (node.right !== null) {
			maxchild= node.right
		}
		}
		let maxchildIndex = this.parentNodes.indexOf(maxchild)
		let nodeIndex = this.parentNodes.indexOf(index)
		if (maxchildIndex >= 0 && nodeIndex >= 0 ) {
			this.parentNodes[maxchildIndex]= node;
			this.parentNodes[nodeIndex] = maxchild;
		}
		maxchild.swapWithParent();
		this.shiftNodeDown(node);
	}
}

module.exports = MaxHeap;
