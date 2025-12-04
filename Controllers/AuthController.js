const Singup = async (req, res) => {
  res.send("hello brother")

  const { fullname, email, password } = req.body;
  if (!fullname) return res.send(" your full name is required");
  if (!email) return res.send(" your email is required");
  if (!password) return res.send(" your password is required");
};

// ..............login pAR................//

const SingIn = async (req, res) => {
  const { email, password } = req.body;
  if (!email) return res.send(" your email is required");
  if (!password) return res.send(" your password is required");
    


};

module.exports = { SingIn,Singup };
