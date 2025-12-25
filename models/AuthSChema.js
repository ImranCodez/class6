const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const UserSchema = new mongoose.Schema(
  {
    fullname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true, // ✅ NO unique here
    },
  },
  {
    timestamps: true,
  }
);

// Pre-save middleware to hash password...........hassing part ...//
UserSchema.pre("save", async function (next) {
 const User= this

// ..........hass the password only if it's new create or modify...//
  if (!User.isModified("password")) return ;

  try {
    User.password = await bcrypt.hash(User.password, 10);
  } catch (err) {
     console.log(err)
  }
});

// Compare password method.......
UserSchema.methods.comparePassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

module.exports = mongoose.model("User", UserSchema);
