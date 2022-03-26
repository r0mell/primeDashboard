
const generatorId = () => {

   let id = ''

   const caracters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890'

   for (let index = 0; index < 7; index++) {
      id += caracters.charAt(Math.floor(Math.random() * caracters.length))

   }

   return id
}



export default generatorId