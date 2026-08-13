export const getMe = async (req, res) => {
  return res.status(200).json({
    loggedIn: true,
    user: {
      userId: req.user.userId,
      email: req.user.email,
      name: req.user.name,
    },
  });
};
