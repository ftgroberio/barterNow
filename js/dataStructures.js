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
            if (current.data.name === user.name && current.data.location === user.location) {return true;}
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

// TODO: Complete list of items
var itemsList = [{ name: 'Toilet Paper', photo: '../public/images/image.jpg' },
    { name: 'Clorox', photo: 'path/to/img' },
    { name: 'Hand Sanitizer', photo: 'path/to/img' },
    { name: 'Detergent', photo: 'path/to/img' },
    { name: 'Gloves', photo: 'path/to/img' },
    { name: 'Canned beans', photo: 'path/to/img' }];


//  Initialization of Maps
var needsMap = new Map();
var hasMap = new Map();

for (let item in itemsList) {
    hasMap.set(itemsList[item].name, new LinkedList()); // Could use LL constructor here to create sentry with item data
    needsMap.set(itemsList[item].name, new LinkedList());
}

//  Add Users with inventory
hasMap.get('Toilet Paper').add({ name: 'Cam', location: 'Texas' });
hasMap.get('Clorox').add({ name: 'Cam', location: 'Texas' });
needsMap.get('Hand Sanitizer').add({ name: 'Cam', location: 'Texas' });

hasMap.get('Hand Sanitizer').add({ name: 'Felipe', location: 'Texas' });
needsMap.get('Clorox').add({ name: 'Felipe', location: 'Texas' });

hasMap.get('Detergent').add({ name: 'Lifang', location: 'Texas' });
hasMap.get('Clorox').add({ name: 'Lifang', location: 'Texas' });
needsMap.get('Toilet Paper').add({ name: 'Lifang', location: 'Texas' });

hasMap.get('Gloves').add({ name: 'Ryan', location: 'Texas' });
hasMap.get('Canned beans').add({ name: 'Ryan', location: 'Texas' });
needsMap.get('Detergent').add({ name: 'Ryan', location: 'Texas' });

function checkHas(user) {
    s = user.name + " has: ";
    for (let item in itemsList) {
        if (hasMap.get(itemsList[item].name).contains(user)){
            s = s+ itemsList[item].name + ", ";
        }
    }
    console.log(s);
}

function userNeeds(user) {
    s = user.name + " needs: ";
    
    for (let item in itemsList) {
        if (needsMap.get(itemsList[item].name).contains(user)){
            s = s+ itemsList[item].name + ", ";
        }
    }
    console.log(s);
}



checkHas({ name: 'Cam', location: 'Texas' });
userNeeds({ name: 'Cam', location: 'Texas' });
checkHas({ name: 'Lifang', location: 'Texas' });
userNeeds({ name: 'Lifang', location: 'Texas' });
checkHas({ name: 'Felipe', location: 'Texas' });
userNeeds({ name: 'Felipe', location: 'Texas' });
checkHas({ name: 'Ryan', location: 'Texas' });
userNeeds({ name: 'Ryan', location: 'Texas' });


// Exporting Objects
module.exports = {
    LinkedList: LinkedList,
    needsMap: needsMap,
    hasMap: hasMap,
    itemsList: itemsList
};