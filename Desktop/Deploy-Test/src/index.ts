import express from 'express';

const app = express();

const PORT = 45000;

app.get('/api', (req, res) => {
    res.json({
        name:'Deploy test Api',
        version: '1.0.0',
        server: 'running',
});
});

app.get('/api/data', (req, res) => {
    res.json([
        {
            username: 'Akame',
            email: 'Akamecita@gmail.com',
        },
        {
            username: 'jj',
            email: 'jjjj@gmail.com',
        },
        {
            username: 'kkk',
            email: 'kkkkk@gmail.com',
        },
        {
            username: 'qqq',
            email: 'qqqqqq@gmail.com',
        },
    ]);
});
app.use('*',(req,res) => {
    res.status(404).json({ message: 'Resource not found'});
});

app.listen(PORT, () => {
    console.log('Server running on port', PORT);
});
