const { faker } = require("@faker-js/faker");

module.exports = () => {
  const data = {
    slider: [],
    newest_recipes: [],
    popular_recipes: [],
    users: [],
    adimn: [],
  };
  // @desc slider item
  // @route /slider
  for (let i = 0; i < 3; i++) {
    data.slider.push({
      id: faker.datatype.uuid(),
      title: faker.name.firstName(),
      slug: faker.lorem.slug(),
    });
  }
  // @desc latest recipes
  // @route /newest_recipes
  for (let i = 0; i < 15; i++) {
    data.newest_recipes.push({
      id: faker.datatype.uuid(),
      title: faker.name.firstName(),
      text: faker.lorem.text(),
      date: faker.date.weekday(),
    });
  }

  // @desc popular recipes item
  //  @route /popular_recipes
  for (let i = 0; i < 10; i++) {
    data.popular_recipes.push({
      id: faker.datatype.uuid(),
      title: faker.name.firstName(),
      text: faker.lorem.text(),
      date: faker.date.weekday(),
    });
  }
  // @desc users list
  // @route /users
  for (let i = 0; i < 20; i++) {
    data.users.push({
      id: faker.datatype.number(),
      name: faker.name.firstName(),
      email: faker.internet.email(),
      address: {
        country: faker.address.country(),
        city: faker.address.city(),
      },
    });
  }

  return data;
};
