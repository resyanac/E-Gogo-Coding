const Budget = require ('./models');

app.get ('/budget', async (req, res) => {
    try {
    const budget = await Budget.find();
    res.json (budget);
    } catch (err) {
        console.log(err);
        res.status(500).json({ message : 'server error'})
    }
})