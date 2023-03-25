const { faker } = require("@faker-js/faker");
const fs = require("fs");

function randomPostList(n) {
  if (n <= 0) return [];

  const postList = [];

  Array.from(new Array(n)).forEach(() => {
    const post = {
      id: faker.datatype.uuid(),
      username: faker.internet.userName(),
      imageUrl: `https://picsum.photos/id/${faker.random.numeric(3)}/615/680`,
      desc: faker.lorem.paragraph(),
      createdAt: Date.now(),
      updatedAt: Date.now(),
    };

    postList.push(post);
  });

  return postList;
}

function randomCustomerList(n) {
  if (n <= 0) return [];

  const customerList = [];

  Array.from(new Array(n)).forEach(() => {
    const customer = {
      id: faker.datatype.uuid(),
      name: faker.name.fullName(),
      sex: faker.name.sex(),
      phoneNumber: faker.phone.number(),
      country: faker.address.country(),
    };

    customerList.push(customer);
  });

  return customerList;
}

(() => {
  const postList = randomPostList(15);
  const customerList = randomCustomerList(40);

  // prepare db object
  const db = {
    posts: postList,
    customers: customerList,
    profile: {
      name: "phvntin",
    },
  };

  // write db object to db.json
  fs.writeFile("db.json", JSON.stringify(db), () => {
    console.log("Generate data successfully!");
  });
})();
