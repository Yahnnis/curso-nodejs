const pessoa = {
    nome: 'JC',
    sobrenome: 'Bombardelli',
    idade: 28,
    profissao: 'Reporter'
};

const myJSON = JSON.stringify(pessoa)
//console.log(myJSON)


const objectPlainText = '{"nome":"JC","sobrenome":"Bombardelli","idade":28,"profissao":"Reporter"}'
const newObjectParse = JSON.parse(objectPlainText)

console.log(newObjectParse)
