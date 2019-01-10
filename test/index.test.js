const MemoryDatabase  = require('../lib/index.js');
//1.first start by creating a describe of the overall function and then creat a null object which then leads into a new MemoryDatabase beforeEach null db. 
describe('creating a store', () =>{
    let db = null; //why null? because null equal nothing as to undefined is different?
    beforeEach(() => {
        db = new MemoryDatabase();
    })
    it('create an object in the the db', () =>{
        const cat = {name: 'fluffy'};
        const createdCat = db.create(cat);//because we are refferring to line 11 in index.js
        expect(createdCat.name).toEqual('fluffy')
    });
    it('can find an object by id', ()=>{
        //looks like the above it() objects are in a local scope.
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
        const cat = { name: 'fluffy'};
        const createdCat = db.creat(cat);
        const foundCat = db.findById(createdCat._id);
        const findandDelete = db.findByIdAndDelete(foundCat);
        expect(findandDelete).toEqual({ deleted: 1 });
        
    })
});