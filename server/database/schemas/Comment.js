const mongoose = require('mongoose');

const { Schema } = mongoose;

const commentSchema = new Schema({
  user: { type: Schema.ObjectId, ref: 'User', required: true },
  post: { type: Schema.ObjectId, ref: 'Post', required: true },
  text: { type: String },
  completed: { type: Boolean, default: false },
  created_at: { type: Date, default: Date.now, immutable: true },
  updated_at: { type: Date },
}, { versionKey: false });

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;