module.exports = async (req, res) => {
  try {
    res.setHeader('Clear-Site-Data', '"cookies"')
    res.setHeader('Location', "/")
    res.status(302).end();
  } catch (e) {
    console.log(e.message);
  }
};
