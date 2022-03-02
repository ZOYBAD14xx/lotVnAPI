const scrap = require('./api.js')

const express = require('express');
const app = express();
const PORT = 8080;

app.use(express.json());

app.use('/', async (_req, res) => {
    try {
        const result = await scrap.scrap()
        let qData = res.json(result)
        return res.status(200).send({
            qData
        })

    } catch (err) {
        console.log(err.message)
    }
})

app.listen(PORT, () => console.log(`Server started at ${PORT}.`))