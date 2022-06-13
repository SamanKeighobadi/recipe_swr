// import {faker} from '@faker-js/faker'
const {faker} = require('@faker-js/faker');
// const faker = require('faker');

module.exports = () =>{
    const data= {slider:[]};
    for (let i = 0; i < 3; i++) {
        data.slider.push({
            id:faker.datatype.uuid(),
            title:faker.name.firstName(),
            slug:faker.lorem.slug(),
            img:faker.image.food(),
        })    
    }
    return data;
}
