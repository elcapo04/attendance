const dbConnection = require('../../config/dbConnection');

module.exports = app => {
    const connection = dbConnection();
    app.get('/', (req, res) => {
        connection.query('SELECT * FROM person', (error, result) => {
            res.render('person/person', {

                person: result
            })
        })


    })

    app.post('/person', (req, res) => {
        console.log(req.body)
        const { name, surname} = req.body;
        connection.query('INSERT into person SET?', {
            name,
            surname
        }, (err, result) =>{
            res.redirect('/');
        } )
    });
}