const resiService  = require('../services/resiService');

async function getResi(req, res)  {
  const books = await resiService.getAllResi();

  res.status(200).json(books);
}

module.exports = {getResi}
