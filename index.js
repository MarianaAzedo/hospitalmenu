const express = require('express');
const bodyParser = require('body-parser');
const users = require('./controllers/users')();
const menu = require('./controllers/menu')();
const menuroom = require('./controllers/menuroom')();
const pantries = require('./controllers/pantries')();
const rooms = require('./controllers/rooms')();
const staffuser = require('./controllers/staffuser')();
const cors = require('cors');

const port = process.env.PORT || 3000;
const hostname = '0.0.0.0';
const app = (module.export = express());

app.use(bodyParser.json()); //get all the requests and transform in Json.
app.use(cors());

app.post('/authenticate', users.Authenticate); //post user to login

app.get('/users', users.getPatients); //get all the patients.
app.get('/users/:room', users.getPatientsByRoom); //get patients by room number.

app.get('/menu', menu.getAllMenu); //get all the menu.
app.get('/menu/:description', menu.getMenuByDescription); //get menu by description
app.get('/menu/:allergens/filter', menu.getMenuByAllergens); // get menu by allergens

app.get('/menuroom/:room/:userid', menuroom.getAllMenubyRoom); //get all the menu by room and user ID
app.get('/menuroom', menuroom.getMenubyRoomDate); //get the menu by room
app.get('/menuroom', menuroom.getMenubyDate); //get the menu by date

app.post('/menuroom', menuroom.addMenu); //add Menus by room

app.get('/pantries', pantries.getAllPantries); //get all pantries

app.get('/rooms', rooms.DietList); //get Diet List

app.get('/staffuser', staffuser.AllStaffUsers); //get All the Staffs
app.get('/staffuser/:name', staffuser.OneStaffUsers); //get onde Staff by name

app.get('/', (req, res) => {
  res.send('Hospital Menu API');
});

app.listen(port, hostname, () => {
  console.log(`App listening at http://${hostname}${port}`);
});
