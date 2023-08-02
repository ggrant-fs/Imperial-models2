const {faker} =require('@faker-js/faker')

class FakeData {
    constructor(firstName, lastName, email){
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
    }
    
    subscriber(){
        return [this.firstName, this.lastName, this.email]
    }

}

const seedData1= new FakeData(faker.name.firstName(),faker.name.lastName(),faker.internet.email());
const seedData2 = new FakeData(faker.name.firstName(),faker.name.lastName(),faker.internet.email());
const seedData3 = new FakeData(faker.name.firstName(),faker.name.lastName(),faker.internet.email());
const seedData4 = new FakeData(faker.name.firstName(),faker.name.lastName(),faker.internet.email());
const seedData5 = new FakeData(faker.name.firstName(),faker.name.lastName(),faker.internet.email());

 exports.person1 = seedData1.subscriber()
 exports.person2 = seedData2.subscriber()
 exports.person3 = seedData3.subscriber()
 exports.person4 = seedData4.subscriber()
 exports.person5 = seedData5.subscriber()




