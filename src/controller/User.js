const UserController = {
  get: (req, res) => {
    const data = { title: "단축URL서비스", message: "단축URL 서비스입니다." };
    res.render("index", data);
  },
  post: (req, res) => {
    const data = { title: "단축URL서비스", message: "단축URL 서비스입니다." };
    res.json(data);
  },
};

export default UserController;
