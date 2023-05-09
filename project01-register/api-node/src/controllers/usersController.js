import users from "../models/User.js";

class UserController {

  static index = (req, res) => {
    users.find()
      .then(function (users) {
        res.status(200).json(users);
      })
      .catch(function (err) {
        console.log(err);
      })
  };

  static register = (req, res) => {
    let user = new users(req.body);
    user.save()
      .then(() => {
        res.status(201).send(user.toJSON());
      })
      .catch((err) => {
        res
          .status(500)
          .send({ message: `${err.message} - error.` })
      })
  }

  static delete = async (req, res) => {
    let id = req.params.id;
    let user = await users.findByIdAndDelete(id)
    .catch((err) => res.status(500).send(err.message))
    res.status(200).send(user)
  }

  static edit = async (req, res) => {    
    const id = req.params.id;
    let user = await users.findByIdAndUpdate(id, req.body, {new: true})
    .catch((err) => res.status(500).send({ message: err.message }))
    res.status(200).send(user)
  }

  static show = async (req, res) => {    
    const id = req.params.id;
    let user = await users.findById(id)
    .catch((err) => res.status(500).send({ message: err.message }))
    res.status(200).send(user)
  }

}

export default UserController;