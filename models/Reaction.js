const { Schema, Types } = require('mongoose');
const dayjs = require('dayjs')

const reactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
   reactionBody: {
      type: String,
      required: true,
      maxlength: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: () => dayjs().format("MM/DD/YYYY")
    },
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

module.exports = reactionSchema;
