var Todo = require('./models/todo');
var Object = require('./models/object');

//ADD
function getObjects(res) {
    Object.find(function(err, objects) {
       if(err) {

       } else {
           res.json(objects);
       }
    });
}

function getTodos(res) {
    Todo.find(function (err, todos) {

        // if there is an error retrieving, send the error. nothing after res.send(err) will execute
        if (err) {
            res.send(err);
        }

        res.json(todos); // return all todos in JSON format
    });
};

module.exports = function (app) {



    // ADD
    app.get('/api/objects', function (req, res) {
        getObjects(res);
    });

    // CREATE
    app.post('/api/objects', function (req, res) {
        Object.create({
            name: req.body.name,
            description: req.body.description
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


    // api ---------------------------------------------------------------------
    // get all todos
    app.get('/api/todos', function (req, res) {
        // use mongoose to get all todos in the database

        getTodos(res);
    });

    // create todo and send back all todos after creation
    app.post('/api/todos', function (req, res) {

        // create a todo, information comes from AJAX request from Angular
        Todo.create({
            text: req.body.text,
            done: false
        }, function (err, todo) {
            if (err)
                res.send(err);

            // get and return all the todos after you create another
            getTodos(res);
        });

    });

    // delete a todo
    app.delete('/api/todos/:todo_id', function (req, res) {
        Todo.remove({
            _id: req.params.todo_id
        }, function (err, todo) {
            if (err)
                res.send(err);

            getTodos(res);
        });
    });









    // application -------------------------------------------------------------
    app.get('*', function (req, res) {
        console.log(__dirname);
        res.sendFile(__dirname + '/public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
    });
};
