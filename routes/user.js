import express from "express";
import { v4 as uuidv4 } from "uuid";

const router = express.Router(); //

const users = [];
router.get("/", (req, res) => {
  //console.log(users);

  res.send(users);
});
router.post('/', (req, res) => {
  console.log('post request received');
  res.send('post request received');
});
// router.post("/", (req, res) => {
//   const user = req.body;
//   const userId = uuidv4();
//   const userWithId = { ...user, id: userId };

//   users.push(userWithId);

//   res.send(users);
// });
//gets the user with a given id
// router.get("/:id", (req, res) => {
//   const { id } = req.params; //haven't quite gotten this syntax
//   const foundUser = users.find((user) => user.id == id);

//   res.send(foundUser);
// });
// //route for deleting user
// router.delete("/:id", (req, res) => {
//   const { id } = req.params;

//   users = users.filter((user) => user.id == !id);
//   res.send(`user with id of ${id} has been deleted from the database`);
// });
// router.patch("/:id", (req, res) => {
//   const { id } = req.params;

//   const { firstName, lastName, age } = req.body;
//   const user = users.find((user) => user.id == id);
//   if (firstName) {
//     user.firstName = firstName;
//   }
//   if (lastName) {
//     user.lastName = lastName;
//   }

//   if (age) {
//     user.age = age;
//   }
//   res.send(`user with id of ${id} has been updated`);
// });
export default router;
