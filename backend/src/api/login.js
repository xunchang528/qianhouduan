function login(req, res) {
  console.log(req.body);
  res.status(200).send({
    "info": "success"
  })
}

export { login }