const {User} = require('../models/index');

module.exports = {
  async getUsers(req, res) {
    try {
      const users = await User.find()
        // .populate({ path: 'user', select: '-__v' });

      res.json(users);
    } catch (err) {
      console.error({ message: err });
      res.status(500).json(err);
    }
  },
  async getSingleUser(req, res) {
    try {
      const user = await User.findOne({ _id: req.params.userId })
        // .populate({ path: 'user', select: '-__v' });

      if (!user) {
        return res.status(404).json({ message: 'No user with that ID' });
      }

      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // create a new user
  async createUser(req, res) {
    try {
      const user = await User.create(req.body);
      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  async updateUser(req, res) {
    try {
      const users = await User.findOneAndUpdate({})
        // .populate({ path: 'user', select: '-__v' });

      res.json(users);
    } catch (err) {
      console.error({ message: err });
      res.status(500).json(err);
    }
  },
  async deleteUser(req, res) {
    try {
      const users = await User.deleteOne({})
        // .populate({ path: 'user', select: '-__v' });

      res.json(users);
    } catch (err) {
      console.error({ message: err });
      res.status(500).json(err);
    }
  },
  async addFriend(req, res) {
    try {
      const friend = await User.findByIdAndUpdate(req.params.userId, {$push:{friends:req.params.friendId}});
      res.json(friend);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  async removeFriend(req, res) {
    try {
      const friends = await User.findByIdAndDelete(req.params.userId, {$push:{friends:req.params.friendId}});
      res.json(friends);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
};