const express = require('express');
const app = express();
const videosRoute = require('./routes/routes');
let videosData = require('./sideVidData/sideVidData');
const bodyParser = require('body-parser');
const cors = require('cors');
const { v4: uuidv4 } = require('uuid');

app.use(bodyParser.json())
app.use(cors());


app.get('/', (req, res) => {
    res.send("Hello Brave new World");
})

app.use('/videos', videosRoute);

let commentsData = [
    {
    "name": "Thufir Hawat",
    "comment": "They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of acconcert I have EVER witnessed.",
    "id": uuidv4(),
    "likes": 0,
    "timestamp": 1545162149000
    },
    {
    "name": "Paul Atreides",
    "comment": "Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!",
    "id": uuidv4(),
    "likes": 0,
    "timestamp": 1544595784046
    },
    {
    "name": "Vladimir Harkonnen",
    "comment": "How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s definitely my favorite ever!",
    "id": uuidv4(),
    "likes": 0,
    "timestamp": 1542262984046
    }
]

app.post('/videos', (req, res)=> {
    const {title, description, image} = req.body
    res.json(
        videosData.push(
            {   "id": uuidv4(),
                "title": title,
                "description": description,
                "channel": "BrainStation",
                "duration": "4:32",
                "image": image,
                "timestamp": 1545162149000,
                "views": "701,023",
                "likes": "103,985",
                "comments": commentsData
            }
        )
    )
 })

app.listen(8080, ()=> {
    console.log("Server started at 8080");
})