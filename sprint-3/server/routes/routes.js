const express = require('express');
const router = express.Router();
let videosData = require('../sideVidData/sideVidData');
const bodyParser = require('body-parser');
const cors = require('cors');

router.use(bodyParser.json())
router.use(cors());


router.get('/', (req, res)=> {
    res.json(videosData);
})
router.get('/:id', (req, res)=> {
    return res.status(200).json((videosData).filter(video => {
        return video.id === req.params.id;
    }))
})

module.exports = router;