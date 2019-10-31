const express = require('express')
const app = express()
const port = 8080
app.get('/',(req, res) => res.send(`Selamat datang di aplikasi node js sederhana \n
    lingkungan : ${process.env.NODE_ENV}\n
    versi : ${process.env.npm_package_version}`)
    )
app.listen(port, () => console.log(`Aplikasi berjalan di port ${port}!`))
console.log("aplikasi berada di versi "+process.env.npm_package_version)
