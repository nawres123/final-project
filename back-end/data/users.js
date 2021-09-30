import bcrypt from 'bcryptjs';
const users = [
  {
    name: 'Admin User',
    email: 'admin@gmail.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'nawres mabrouk',
    email: 'nawressmabrouk123@gmail.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Zahra gratti',
    email: 'zahra@gmail.com',
    password: bcrypt.hashSync('123456', 10),
  },
];

export default users;
