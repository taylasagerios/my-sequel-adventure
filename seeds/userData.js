const { User } = require('../models');
const bcrypt = require('bcrypt');

const userData = [
  {
    username: 'smith',
    password: 'password',
  },
  {
    username: 'james',
    password: 'password',
  },
  {
    username: 'will',
    password: 'password',
  },
];

const seedUser = async () => {
  try {
    // Hash user passwords and create an array of hashed users
    const hashedUsers = await Promise.all(
      userData.map(async (user) => ({
        ...user,
        password: await bcrypt.hash(user.password, 10),
      })
    ));

    // Bulk create the users with hashed passwords and get the created instances
    const createdUsers = await User.bulkCreate(hashedUsers);

    return createdUsers;
  } catch (error) {
    // Handle and log any errors that occur during the seeding process
    console.error('Error seeding users:', error);
    throw error; // Rethrow the error for higher-level error handling, if needed.
  }
};

module.exports = seedUser;
