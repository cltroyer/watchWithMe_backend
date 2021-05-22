var express = require('express');
var router = express.Router();
const StreamChat = require('stream-chat').StreamChat;

const client = new StreamChat('w32wyynbv2x4', '3bqu44cy75b89w4584bv9j3pq3nvpx36qzt9ahtuek5qb9wbka2g4va6uv2q747u'); 

/* GET users listing. */
router.get('/:id', async function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.json(client.createToken(req.params.id));
});


module.exports = router;
