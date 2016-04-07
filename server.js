var express = require('express'),
    app = express();

app.use(express.static('public'));

app.get('/', function(req, res){
    res.sendFile('index' );
    });

app.listen(3000, function(){
    console.log('Express server started on port 3000');
});
