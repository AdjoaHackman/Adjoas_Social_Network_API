const { Thought } = require('../models/Thought');

module.exports = {
  async getThoughts(req, res) {
    try {
      const thoughts = await Thought.find({})
        .select('-__v');
      res.json(thoughts);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  async getSingleThought(req, res) {
    try {
      const thoughts = await Thought.findOne({ _id: req.params.thoughtId })
        .select('-__v');

      if (!thoughts) {
        return res.status(404).json({ message: 'No thoughts with that ID' });
      }

      res.json(thoughts);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // create a new tag
  async createThought(req, res) {
    try {
      const thought = await Thought.create(req.body);
      const post = await User.findOneAndUpdate(
        { _id: req.body.UserId },
        { $addToSet: { thoughts: thought._id } },
        { new: true }
      );

      if (!user) {
        return res
          .status(404)
          .json({ message: 'Thought created, but found no user with that ID' });
      }

      res.json('Created the thought 🎉');
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
};
