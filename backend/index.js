import express from 'express';
const app = express();

app.get('/api/jokes', (req, res) => {
    const jokes = [
        {
        id: 1,
        joke: 'Why did the scarecrow win an award? Because he was outstanding in his field.',
    }, {
        id: 2,
        joke: 'Why did the math book look sad? Because it had too many problems.',
    },
    {
        id: 3,
        joke: 'What do you call a fish wearing a crown? A king fish.',
    }, {
        id: 4,
        joke: 'Why did the tomato turn red? Because it saw the salad dressing!',
    }, {
        id: 5,
        joke: 'What do you call a fake noodle? An impasta.',
    }
];
    res.send(jokes);
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


