class LinkedList {
    constructor () {
        this._length = 0;
        this.head = null;
    }

    length() {
        return this._length;
    }

    add (user) {
        let node = new Node(user),
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

    remove (user) {
        let current = this.head,
            prev;

        while (current) {
            if (current.data === user) {
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

    contains (user) {
        let current = this.head;

        while (current) {
            if (current.data === user) {return true;}
            current = current.next;
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

class User {
    constructor(name, location) {
        this.name = name;
        this.location = location;
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


// Exporting Objects
module.exports = {
    LinkedList: LinkedList,

};