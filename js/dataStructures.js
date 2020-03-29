const itemsList = require('./itemsList.js');

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

    getAll() {
        let current = this.head;
        let userArray = [];

        while (current) {
            userArray.push(current);
            current = current.next;
        }

        return userArray;
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

function findMatches (have, need) {
    /*let results = [];

    for (let n in need) {
        let found = hasMap.get(need[n]).getAll(); // or similar get method
        results.push({item: need[n].name, matches: found});
    }

    for (let r in results) {
        results[r].matches.filter((user) => {
            for (let h in have) {
                if (needsMap.get(have[h]).contains(user)) return true;
            }
            return false;
        });
    }*/

    let possibleMatches = [];

    for (let n in need) {
        let found = hasMap.get(need[n]).getAll(); // or similar get method
        possibleMatches.push({item: need[n].name, matches: found});
    }
    /*const reducer = (haveItem, needItem) => {
        haveItem.push()
    };*/

    let results = [];

    for (let h in have) {
        let curItem = {have: have[h].name, need: []};
        for (let p in possibleMatches) {
            curItem.need.push(possibleMatches[p]);
            curItem[curItem.length - 1].matches.filter((user) => {
                return needsMap.get(have[h]).contains(user);
            });
            if (curItem.need.matches.length < 1) curItem.need.pop();
        }
        if (curItem.need.length > 0) results.push(curItem);
    }
    return results;
}

//  Initialization of Maps
var needsMap = new Map();
var hasMap = new Map();

for (let item in itemsList) {
    hasMap.set(itemsList[item].name, new LinkedList()); // Could use LL constructor here to create sentry with item data
    needsMap.set(itemsList[item].name, new LinkedList());
}

//  Add Users with inventory
hasMap.get('toilet_paper').add({ name: 'Cam', location: 'Texas' });
hasMap.get('clorox').add({ name: 'Cam', location: 'Texas' });
needsMap.get('hand_sanitizer').add({ name: 'Cam', location: 'Texas' });

hasMap.get('hand_sanitizer').add({ name: 'Felipe', location: 'Texas' });
needsMap.get('clorox').add({ name: 'Felipe', location: 'Texas' });

hasMap.get('water').add({ name: 'Lifang', location: 'Texas' });
hasMap.get('clorox').add({ name: 'Lifang', location: 'Texas' });
hasMap.get('toilet_paper').add({ name: 'Lifang', location: 'Texas' });
needsMap.get('toilet_paper').add({ name: 'Lifang', location: 'Texas' });

hasMap.get('gloves').add({ name: 'Ryan', location: 'Texas' });
hasMap.get('toilet_paper').add({ name: 'Ryan', location: 'Texas' });
hasMap.get('face_mask').add({ name: 'Ryan', location: 'Texas' });
needsMap.get('water').add({ name: 'Ryan', location: 'Texas' });

//console.log(hasMap.get(itemsList[0].name)._length);
//console.log(hasMap.get('toilet_paper').contains({name: 'Cam', location: 'Texas'}));

function displayUserArray () {
    toilletUsersArray = hasMap.get('toilet_paper').getAll();
    console.log(toilletUsersArray.pop().data.name);
    console.log(toilletUsersArray.pop().data.name);
    console.log(toilletUsersArray.pop().data.name);


}

function findTrade(item,user) {
    nUsers = hasMap.get(itemsList[item].name)._length;
    console.log(user.name + " is looking for someone that has " + itemsList[item].displayName + ":");
    cur = hasMap.get(itemsList[item].name).head;
    for (let i = 0; i < nUsers; i++) {
        console.log(cur.data.name);
        findTrade(0, cur.data);
        cur = cur.next;
    }
}

displayUserArray();

//findTrade(1, { name: 'Cam', location: 'Texas', poo: "poo" });

// Exporting Objects
module.exports = {
    LinkedList: LinkedList,
    needsMap: needsMap,
    hasMap: hasMap,
    itemsList: itemsList,
    User: User,
    findMatches: findMatches
};
