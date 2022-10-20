const router = require('express').Router()
const client = require('../persist/redis.js')

router.route('/user')
.post((req, res) => {
    const {
        email,
        senha
    } = req.body

    if(
        !req.body ||
        !email ||
        !senha
    ) {
        return res.json({ error: "params missing" })
    }

    console.log(email, senha);

    const redis = client
    console.log('redis', redis);

    return res.json({ message: 'create user' })

})
.put(() => {
    res.json({ message: 'update user' })
})
.get(() => {
    res.json({ message: 'get all users' })
})
.delete(() => {
    res.json({ message: 'delete user' })
})

module.exports = router