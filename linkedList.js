/**
 * @name  linkedListGenerator
 * @description  Main Module
 * @return {Object} an object exposing methods to be used to manipulate a linked list
 */
function linkedListGenerator(){
	var head = null;
	var tail = null; 
	// test
	function getHead () {
		return head;	
	}
	function getTail() {
		return tail;
	}
	function add(value) {
		var newNode =  {};
		newNode.value = value;
		newNode.next = null;
		if(head !== null && head.value !== null && head.next === null) {
			head.next = newNode;
		}
		if(head === null) {
			head = newNode;
		}
		if (tail !== null){
			tail.next = newNode;
		}
		tail = newNode;
		return tail;
	}
	function get(number) {
		var list = getHead();
		var iterate = 0;
		for(var i=1; i <= number; i++){
			if(iterate < number) {
				list = list.next;
				iterate ++;
			} 
			if (list === null) {
				return false;
			}
		}
		return list;
	}
	function remove(number) {
		 var current = get(number);
		 var next = get(number + 1);
		 var previous = get(number-1);
		 if (current === false){
		 	return false;
		 } 
		 if(current === tail) {
		 	tail = previous;
		 	tail.next = null;
		 }
		 if(current === head) {
		 	head = next;
		 }
		 if(current !== head && current !== tail){
		 	current = previous;
		 	previous.next = next;
		 }
	}
	function insert(value, number){
		if(get(number) === false || number < 0){
			return false;
		}
		var newObj = {};
		var next = get(number);
		var current = get(number - 1);
		newObj.value = value;
		newObj.next = next;
		if(number === 0) {
			next = head;
			head = newObj;
		}
		if (number !== 0 ){
		current.next = newObj;
	}
		return head;
	}
	return {
		getHead,
		getTail,
		add,
		get,
		remove,
		insert,
	};
}


