const express = require('express');
const path = require('path');

const app = express();

const port = process.env.PORT || 8080;

app.use(express.static(__dirname + '/dist/Lab02-Angular'));


app.get('/*', function(req,res) {
    
res.sendFile(path.join(__dirname+'/dist/Lab02-Angular/index.html'));
});

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
});