const { Thought, User } = require('../models/index');
const { ObjectId } = require("mongoose");

module.exports = {
  async getThoughts(req, res) {
    try {
      const thoughts = await Thought.find({})
        .select('-__v');
      res.json(thoughts);
    } catch (err) {
      console.log(err);
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
      console.log(err);
      res.status(500).json(err);
    }
  },
  // create a new tag
  async createThought(req, res) {
    try {
      const thought = await Thought.create(req.body);
      const user = await User.findOneAndUpdate(
        { _id: req.body.userId },
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
  async updateThought(req, res) {
    try {
      const thoughts = await Thought.findOneAndUpdate({})
        .select('-__v');
      res.json(thoughts);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  async deleteThought(req, res) {
    try {
      const thoughts = await Thought.deleteOne({})
        .select('-__v');
      res.json(thoughts);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  async addReaction(req, res) {
    try {
      const reaction = await Thought.findByIdAndUpdate(req.params.thoughtId, {$push:{reactions:req.body}},{new:true})
        .select('-__v');
      res.json(reaction);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  async removeReaction(req, res) {
    try {
      const reactions = await Thought.findByIdAndDelete(req.params.thoughtId, {$push:{reactions:req.body}})
        .select('-__v');
      res.json(reactions);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
};
