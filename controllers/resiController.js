const resiService  = require('../services/resiService');

async function getResi(req, res)  {
  const resi = await resiService.getAllResi();

  res.status(200).json(resi);
}

async function createResi(req, res) {
  try {
    const resiId = await resiService.createResi(req.body);
    res.status(201).json({ resiId });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

async function getResiById(req,res){
  const { resiId } = req.params;
  try {
    const resi = await resiService.getResiById(resiId);
    if (!resi) {
      return res.status(404).json({ error: 'Resi not found' });
    }
    res.status(200).json({
      message: "Successfully fetched Resi",
      data: resi
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

module.exports = {getResi,createResi,getResiById}
