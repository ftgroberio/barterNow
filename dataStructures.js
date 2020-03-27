class LinkedList {
    constructor () {
        this._length = 0;
        this.head = null;
    }

    length() {
        return this._length;
    }

    add (value) {
        let node = new Node(value),
            currentNode = this.head;

        // List empty
        if (!currentNode) {
            this.head = node;
            this._length++;

            return node;
        }

        // Non-Empty List
        while (currentNode.next) {
            currentNode = currentNode.next;
        }

        currentNode.next = node;

        this._length++;

        return node;
    }

    remove (id) {
        let current = this.head,
            prev;

        while (current) {
            if (current.data.id === id) {
                if (!prev) {
                    this.head = current.next;
                }
                else {
                    prev.next = current.next;
                }

                this._length--;

                return true;
            }
            else {
                prev = current;
                current = current.next;
            }
        }

        return false;
    }


}

class Node {
    constructor (data) {
        this.data = data;
        this.next = null;
    }
}

class Offer {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}

let mapData = new Map();

/* Haves Map of Maps*/
let haveToiletPaper = new Map();

/* Needs LinkedList*/
let needsIsopropyl = new LinkedList();

// Initializing Have's maps
mapData.set("toiletPaper", haveToiletPaper);

// Initializing Need's linked lists
mapData.get("toiletPaper").set("isopropyl", needsIsopropyl);


// Add node
mapData.get("toiletPaper").get("isopropyl").add(new Offer(123, 'Cam'));
mapData.get("toiletPaper").get("isopropyl").add(new Offer(124, 'Ryan'));

// Finding matches
function findMatch(have, need) {
    return mapData.get(have).get(need)._length >= 1;
}

//  Confirm addition
console.log(findMatch("toiletPaper", "isopropyl"));

//  Remove
mapData.get("toiletPaper").get("isopropyl").remove(123);

// Confirm second match
console.log(findMatch("toiletPaper", "isopropyl"));

// Confirm complete removal (expect false)
mapData.get("toiletPaper").get("isopropyl").remove(124);
console.log(findMatch("toiletPaper", "isopropyl"));
