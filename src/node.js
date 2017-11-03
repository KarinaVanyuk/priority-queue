class Node {
	constructor(data, priority) {
		this.data = data;
		this.priority = priority;
		this.parent=null;
		this.right=null;
		this.left=null;

	}

	appendChild(node) {
		if (this.left && this.right ) {
			return;
		}
		if (!this.left) {
			this.left = node;
			this.left.parent = this
		}
		else{
			this.right = node;
			this.right.parent = this
		}
	}

	removeChild(node) {
		if (node !=this.right && node !=this.left){
			throw new Error("Not a child");
		}
		if (this.left === node) {
			this.left.parent = null;
			this.left = null;
		}
		if (this.right === node) {
			this.right.parent = null;
			this.right = null;
		}

	}

	remove() {
		if (this.parent) {
			this.parent.removeChild(this)
		}
	}

	   	swapWithParent() {
		if (this.parent != null) {
			if (this.parent.parent !== null)
				if (this.parent.parent.left === this.parent){this.parent.parent.left = this}
				else {this.parent.parent.right = this}
			if (this.left !== null) {this.left.parent = this.parent}
			if (this.right !== null) {this.right.parent = this.parent};
			var  flag;
			if (this === this.parent.left) {
				if (this.parent.right !== null){this.parent.right.parent = this}
				this.parent.left = this.left;
				this.left = this.parent;
				flag = this.right;
				this.right = this.parent.right;
				this.parent.right = flag;
			} else  {
				if (this.parent.left !== null) {this.parent.left.parent = this}
				this.parent.right = this.right;
				this.right = this.parent;
				flag = this.left;
				this.left = this.parent.left;
				this.parent.left = flag;
			}
			flag = this.parent.parent;
			this.parent.parent = this;
			this.parent = flag;
		}
	}
}

module.exports = Node;
