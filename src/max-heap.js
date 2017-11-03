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
		// this.count++;

	}

pop() {
		if(!this.isEmpty()){
			this.count--;
			let detach = this.detachRoot();
			this.restoreRootFromLastInsertedNode(detach);
			this.shiftNodeDown(this.root);

			return this.root;
		}
	}

 detachRoot() {
		if(this.root.right == null){
			this.root = null;
			return this.parentNodes.shift();
		} else {
			let top = this.root;
			this.root = null;
			return top;
		}
	}
restoreRootFromLastInsertedNode(detached) {	
		if (this.parentNodes.length > 1) {
			var lastInsertedNode = this.parentNodes[this.parentNodes.length - 1];
			this.parentNodes.pop();
			this.root = lastInsertedNode;
			if (lastInsertedNode.parent === detached) {
				this.parentNodes.unshift(lastInsertedNode);
			}
			if (detached.left !== lastInsertedNode) {
				lastInsertedNode.appendChild(detached.left);
			}
			if (detached.right !== lastInsertedNode) {
				lastInsertedNode.appendChild(detached.right);
			}			
		}
		if (this.parentNodes.length === 1) {
			var lastInsertedNode = this.parentNodes[this.parentNodes.length - 1];
			this.root = lastInsertedNode;
			this.parentNodes.pop();
		}
	}

	size() {
		return this.count;
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

		
	}
	if (node.parent === null) {
		this.root = node;
	}
}

	// shiftNodeDown(node) {
	// 	let maxChild;
	// 	//Search maxChild
	// if (node !== null) {
	// 	let indexNode= this.parentNodes.indexOf(node);
	// 		if (node.left!== null && node.right!== null) {
	// 			if (node.left.priority > node.right.priority) {
	// 				maxChild = node.left
	// 			}else{maxChild = node.right}
	// 		}
	// 		if (node.left!== null && node.right === null) {
	// 			maxChild = node.left;
	// 		}
	// 		if (node.left== null && node.right !== null) {
	// 			maxChild = node.right;
	// 		}
	// 	//Swap maxChild with node
	// 	if (maxChild !== null && node.priority < maxChild.priority) {
	// 		let maxChildIndex = this.parentNodes.indexOf(maxChild);
	// 		if (indexNode >=0 && maxChildIndex>= 0) {
	// 			this.parentNodes[nodeIndex] = maxChild;
	// 			this.parentNodes[maxChildIndex] = node;
	// 		}
	// 		if (node.parent !== null) {
	// 			this.root = maxChild
	// 		}
	// 	}

	// }
// shiftNodeDown(node) {
// 		if (node !== null) {
// 			//search maxChild
// 			if (((node.left) && (node.left.priority > node.priority))
// 			 || ((node.right) && (node.right.priority > node.priority))) {
// 				var maxSon;
// 				if (node.left && node.right) {
// 					maxSon = (node.left.priority > node.right.priority)
// 					       ? node.left
// 					       : node.right;
// 				} else if (node.left) {
// 					maxSon = node.left;
// 				} else {
// 					maxSon = node.right;
// 				}
// 	// 				var maxSon;
// 	// if ((node.left !== null && node.right !== null)) {
// 	// 	if (node.left.priority > node.right.priority) {
// 	// 		maxSon = node.left
// 	// 	}
		
// 	// }
// 	// if (node.left !== null && node.right == null) {
// 	// 	maxSon = node.left
// 	// }
// 	// if (node.left === null && node.right !== null) {
// 	// 	maxSon = node.right
// 	// }
// 				if (node.left !==null && node.right!== null ) {

// 				var j = this.parentNodes.indexOf(maxSon);
// 				var i = this.parentNodes.indexOf(node);
// 				if (j !== -1){
// 					if (i !== -1){
// 						this.parentNodes[i] = maxSon;
// 						this.parentNodes[j] = node;
// 					} else {
// 						this.parentNodes[j] = node;
// 					}
// 				}
// 				if (node === this.root) {
// 					this.root = maxSon;
// 				}
// 				maxSon.swapWithParent();
// 				this.shiftNodeDown(node);
// 			}
// 		}
// 	}
	
// }
    shiftNodeDown(node) {
        if (node !== null) {
            if (node.left!== null || node.right!== null) {
            	//search maxChild
                let maxChild
                	if (node.left!== null && node.right!== null) {
                		if (node.left.priority > node.right.priority) {
                		maxChild = node.left;
                	}
                		else{
                			maxChild = node.right;
                		}
                }
                    if (node.left!== null && node.right === null) {
                        maxChild = node.left;
                    }
                    if (node.right!== null && node.left === null) {
                        maxChild = node.right;
                    }
                    //Swipe
                    let maxChildIndex = this.parentNodes.indexOf(maxChild);
                    let nodeIndex = this.parentNodes.indexOf(node);
                if (maxChild.priority > node.priority) {
                   
                    if ((nodeIndex >=0) && (maxChildIndex >= 0)) {
                        this.parentNodes[nodeIndex] = maxChild;
                        this.parentNodes[maxChildIndex] = node;
                    }
                    if ((nodeIndex < 0) && (maxChildIndex >= 0)) {
                        this.parentNodes[maxChildIndex] = node;
                    }
                    if (!node.parent) {
                        this.root = maxChild;
                    }
                    maxChild.swapWithParent();
                    this.shiftNodeDown(node);
                }
            }
        }
    }
}
module.exports = MaxHeap;
