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
		if (this.parent) {
	// parentOfParent
				if (this.parent.parent !== null) {
					if (this.parent.parent.left === this.parent) {
						this.parent.parent.left = this;
					}
					if (this.parent.parent.right === this.parent){
						this.parent.parent.right= this;
					}
			}
			if(this === this.parent.left){
				this.left = this.parent;
				this.right = this.parent.right
				// if (this.parent.right) {
				// 	this.parent.right.parent = this;
				// }
			}
			else if (this === this.parent.right) {
				this.right = this.parent;
				this.left = this.parent.left;
				// if (this.parent.left) {
				// 	this.parent.left.parent = this;
				// }
			}
			 this.parent = this.parent.parent;
			 if (this.left !== null) {
			 	this.left.parent = this.parent
			 }
			  if (this.right !== null) {
			 	this.right.parent = this.parent
			 }


		}

			
	}
}

module.exports = Node;
