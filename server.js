import express, { response } from 'express';
import path from 'path';
const app = express();

app.use(express.static('./dist'));

app.get('/login', (req, res) => {
    res.sendFile('index.html', { root: './dist' })
})

app.get('/registration', (req, res) => {
    res.sendFile('registration.html', { root: './dist' })
})

app.get('/chats', (req, res) => {
    res.sendFile('chats.html', { root: './dist' })
})

app.get('/settings', (req, res) => {
    res.sendFile('settings.html', { root: './dist' })
})

app.get('/500', (req, res) => {
    res.sendFile('500.html', { root: './dist' })
})

app.get('/*', (req, res) => {
    res.sendFile('404.html', { root: './dist' })
})

app.listen(3000, function () {
    console.log(`Go to http://localhost:3000/ ...`);
});