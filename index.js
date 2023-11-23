const express = require("express")
const exphbs = require("express-handlebars")

const app = express()

//configurando o handlebars como engine
app.engine('handlebars', exphbs.engine())
app.set('view engine','handlebars')

//os arquivos publicos ficarão na porta public
app.use(express.static("public"))

app.get('/',(requsicao, resposta) => {
    resposta.render('home')
})

app.listen(3000, () => {
    console.log("serevidor rodando na porta 3000")
})