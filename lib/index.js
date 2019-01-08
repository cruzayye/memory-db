const shortid = require('shortid');
 
console.log(shortid.generate());



class MemoryDatabase {
    constructor() {
        this.store ={};
    }
    create(obj) {
        const _id = shortid.generate(); //shortid to find an id

        //this spread eveything from an obj to the new copiedObj and also add a _id:
        const copiedObj = { ...obj, _id };
        this.store[_id] = copiedObj;
        return copiedObj;//return can also be this.store[_id] but it would be slightly slower.



    }
    findById(_id) {
        const obj = this.store[_id]
        if(!obj) {
            //throw is used to show customized messages when something is missing.
            throw `No object with id ${_id}`;
        } else {
            return obj;
        }

    }

    
    
}

module.exports = MemoryDatabase;