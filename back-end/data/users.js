import bcrypt from 'bcryptjs';
//all passwords 123456
const users = [
  {
    name: 'Admin User',
    email: 'admin@gmail.com',
    password: "$2a$10$SINNWyXooNVeXwTnMSoDRupIYgey3zRb4kdiyqyBLz9ZAbLx5v3aW",
    isAdmin: true,
  },
  {
    name: 'nawres mabrouk',
    email: 'nawressmabrouk123@gmail.com',
    password: "$2a$10$SINNWyXooNVeXwTnMSoDRupIYgey3zRb4kdiyqyBLz9ZAbLx5v3aW",
  },
  {
    name: 'Zahra gratti',
    email: 'zahra@gmail.com',
    password: "$2a$10$SINNWyXooNVeXwTnMSoDRupIYgey3zRb4kdiyqyBLz9ZAbLx5v3aW",
  },
];

export default users;
