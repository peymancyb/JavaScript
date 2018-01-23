//a singly-linked list is like a plain javascript object
const s_list = {
	head:{
	value:12,
	next:{
		value:20,
		next:{
			value:28,
			next:null,
			}
		}
	}
};
//so basically it look like this object where each chain is a node and connected to the next node via an only 1 link
//linked list contain of a head and at the end has null

//accessing to a value

console.log(s_list.head.next.value);

//lets make a class

class LinkedList{
	constructor(value){
		this.head = null;
		this.length = 0;
		this.addToHead(value);
		}
		addToHead(value){
			const newNode = {value};
			newNode.next = this.head;
			this.head = newNode;
			this.length++;
			return this;
		}
		removeFromHead(){
			if(this.head===0){
				return undefined;
			}
			const value = this.head.value;
			this.head = this.head.next;
			this.length--;
		}
		findItem(val){
			const thisNode = this.head;
			while(thisNode){
				if(thisNode.value === val){
					return thisNode;
				}
				thisNode = thisNode.next;
			}
			return thisNode;
		}
		removeItem(val){
			if(this.length === 0){
				return undefined;
			}
			if(this.head.value === val){
				this.removeItemFromHead();
				return this;
			}
			let previousNode = this.head;
			let thisNode = previousNode.next;

			while(thisNode){
				if(thisNode.value === val){
					break;
				}
				previousNode = thisNode;
				thisNode = thisNode.next;
			}
			if(thisNode === null){
				return undefined;
			}
			previousNode.next = thisNode.next;
			this.length--;
			return this;
		}

};
// Note that returning this allows us to chain addToHead calls. Our list looks like this.
const list = new LinkedList("first").addToHead("second").addToHead("third");

console.log(list);





//source: https://codeburst.io/js-data-structures-linked-list-3ed4d63e6571
//thanks Arnav Aggarwal
