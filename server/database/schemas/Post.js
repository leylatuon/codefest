const mongoose = require("mongoose");
const { Schema } = mongoose;

const postSchema = new Schema(
  {
    user: { type: Schema.ObjectId, ref: "User", required: true },
    text: { type: String },
    tags: { type: String }, // Type of advice they're looking for.
    user_visibility: { type: Boolean, default: false },
    comm_visibility: { type: Boolean, default: false },
    exp_visibility: { type: Boolean, default: false },
    completed: { type: Boolean, default: false },
    created_at: { type: Date, default: Date.now, immutable: true },
    updated_at: { type: Date },
    comments: [{ type: Schema.ObjectId, ref: "Comment" }],
  },
  { versionKey: false }
);

const Post = mongoose.model("Post", postSchema);

// postSchema.virtual('url').get(function(){
//   return '/post/' + this._id
// })

module.exports = Post;
