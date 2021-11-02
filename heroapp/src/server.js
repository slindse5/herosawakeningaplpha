require('dotenv').config({ path: 'variables.env' });
    
    const express = require('express');
    const bodyParser = require('body-parser');
    const cors = require('cors');
    const Pusher = require('pusher');
    
    const pusher = new Pusher({
      appId: process.env.PUSHER_APP_ID,
      key: process.env.PUSHER_APP_KEY,
      secret: process.env.PUSHER_APP_SECRET,
      cluster: process.env.PUSHER_APP_CLUSTER,
      encrypted: true,
    });
    
    const app = express();
    
    app.use(cors());
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    
    app.set('port', process.env.PORT || 7777);
    const server = app.listen(app.get('port'), () => {
      console.log(`Express running → PORT ${server.address().port}`);
    });
    app.use(bodyParser.urlencoded({ extended: true }));
    
    app.get('/leaderboard', (req, res) => {
      res.json(leaderboard);
    });