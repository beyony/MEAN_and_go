var Object = require('./models/object');
var Category = require('./models/category');
var ObjectDetails = require('./models/objectDetails');


function getObjects(res) {
    Object.find()
        .populate({path: 'category', select: 'name'})
        .exec(function (err, objects) {
            if (err) {
                console.log(err);
            } else {
                res.json(objects);
            }
        });
}


module.exports = function (app) {
    app.get('/api/objectDetails/getForObject/:object_id', function (req, res) {
        ObjectDetails.find({object: req.params.object_id}, function (err, data) {
            if (err) {
                //console.log(err);
            } else {
                if (data && data.length > 0) {
                    res.json(data[data.length - 1]);
                }
            }
        });
    });


    ///api/objectDetails
    app.post('/api/objectDetails', function (req, res) {
        console.log(req.body);
        ObjectDetails.create({
            sizeX: req.body.sizeX,
            sizeY: req.body.sizeY,
            sizeZ: req.body.sizeZ,
            object: req.body.object_id
        }, function (err, objectDetail) {
            if (err) {
                console.log(err);
            } else {
                Object.update(
                    {_id: req.body.object_id},
                    {objectDetails: objectDetail._id}
                );
            }
        });
    });
    // READ
    app.get('/api/categories', function (req, res) {
        Category.find(function (err, data) {
            if (err) {
                console.log(err);
            } else {
                res.json(data);
            }
        });
    });


    // READ
    app.get('/api/objects', function (req, res) {
        getObjects(res);
    });

    // CREATE
    app.post('/api/objects', function (req, res) {
        Object.create({
            name: req.body.name,
            description: req.body.description,
            category: req.body.category._id
        }, function (err, object) {
            if (err)
                res.send(err);

            // get and return all the todos after you create another
            getObjects(res);
        });
    });

    // DELETE
    app.delete('/api/objects/:object_id', function (req, res) {
        Object.remove({
            _id: req.params.object_id
        }, function (err, object) {
            if (err)
                res.send(err);

            getObjects(res);
        });
    });


    // application : AT LAST! -------------------------------------------------------------
    app.get('*', function (req, res) {
        console.log(__dirname);
        res.sendFile(__dirname + '/public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
    });

};