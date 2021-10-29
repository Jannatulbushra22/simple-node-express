const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const port = 5000;

app.get('/', (req, res) => {
    res.send('Hello from My first ever node. I am excited to learn Node with nodemon.')
});

const users = [
    { id: 0, name: "Leanne Graham", username: "Bret", email: "bret@gmail.com", phone: "01550000000" },
    { id: 1, name: "Angelina Joly", username: "Joly", email: "joly@gmail.com", phone: "01550000000" },
    { id: 2, name: "Rocky Sinchen", username: "Rock", email: "rock@gmail.com", phone: "01550000000" },
    { id: 3, name: "JW Bushhhhhhh", username: "Bush", email: "bush@gmail.com", phone: "01550000000" },
    { id: 4, name: "Linda Jsonnnn", username: "Json", email: "json@gmail.com", phone: "01550000000" },
    { id: 5, name: "Alina Dejortt", username: "Dejo", email: "dejo@gmail.com", phone: "01550000000" }
]

app.get('/users', (req, res) => {
    const search = req.query.search;

    //use query parameter
    if (search) {
        const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search));
        res.send(searchResult);
    }
    else {
        res.send(users);
    }
});

//app.METHOD
app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    console.log('hitting the post', req.body);
    // res.send(JSON.stringify(newUser))
    res.json(newUser)
})

//dynamic api
app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id];
    res.send(user)
});

app.get('/fruits', (req, res) => {
    res.send(['mango', 'orange', 'banana', 'apple'])
})

app.get('/fruits/mangoes/apple', (req, res) => {
    res.send('Yummy Yummy tok misty mangoes');
});

app.listen(port, () => {
    console.log('listening to port', port);
});