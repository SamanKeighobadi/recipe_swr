// import {faker} from '@faker-js/faker'
const { faker } = require("@faker-js/faker");
// const faker = require('faker');

module.exports = () => {
  const data = { slider: [], newest_recipes: [], popular_recipes: [] };
  for (let i = 0; i < 3; i++) {
    data.slider.push({
      id: faker.datatype.uuid(),
      title: faker.name.firstName(),
      slug: faker.lorem.slug(),
      img: faker.image.food(),
    });
  }
  for (let i = 0; i < 15; i++) {
    data.newest_recipes.push({
      id: faker.datatype.uuid(),
      title: faker.name.firstName(),
      text: faker.lorem.text(),
      date: faker.date.weekday(),
    });
  }

  for (let i = 0; i < 10; i++) {
    data.popular_recipes.push({
      id: faker.datatype.uuid(),
      title: faker.name.firstName(),
      text: faker.lorem.text(),
      date: faker.date.weekday(),
    });
  }

  return data;
};
