const express=require("express");
const faker=require("faker");

const app=express();

class User{
    constructor(){
        this.id=faker.internet.userName();
        this.firstName=faker.name.firstName();
        this.lastName=faker.name.lastName();
        this.phoneNumber=faker.phone.phoneNumber();
        this.email=faker.internet.exampleEmail();
        this.password=faker.internet.password();
    }
}

class Company{
    constructor(){
        this.id=faker.internet.userName();
        this.name=faker.company.companyName();
        this.address=[
        this.street=faker.address.streetAddress(),
        this.city=faker.address.city(),
        this.state =faker.address.state(),
        this.zipCode=faker.address.zipCode(),
        this.country=faker.address.country(),
        ]
    }
}

const userCompany=[new User(), new Company()];

app.get("/api/users/new", (req, res)=>res.json(new User()));

app.get("/api/companies/new", (req, res)=>res.json(new Company()));

app.get("/api/user/company", (req, res)=>res.json(userCompany));

const server=app.listen(8000, ()=>console.log(`Server is lock and loaded on port ${server.address().port}!`));