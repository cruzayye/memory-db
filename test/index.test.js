const MemoryDatabase  = require('../lib/index.js');

describe('creating a store', () =>{
    let db = null;
    beforeEach(() => {
        db = new MemoryDatabase();
    })
    it('create an object in the the db', () =>{
        const cat = {name: 'fluffy'};
        const createdCat = db.create(cat);
        expect(createdCat.name).toEqual('fluffy')
    });
    it('can find an object by id', ()=>{
        const cat = { name: 'fluffy' };
        const createdCat = db.create(cat);
        const foundCat = db.findById(createdCat._id);
        expect(foundCat).toEqual(createdCat);
        

    })
    it('throws an error when trying to find an object that does not exist', () =>{
        expect(() =>{
            db.findById('notArealId');
        }).toThrowError();
    })
    it('return deleted object then pass this id to findById so that error is thrown', () =>{
        
    })
});