import express from "express"
import User from "./models/User.js"
import users from "./data/Users.js"
const router = express.Router()

router.post('/users', async (req, res)=>{
  await User.deleteMany({});
  const UserSeeder = await User.insertMany(users)
  res.send({UserSeeder})
})

export default router;