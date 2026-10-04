


const {PrismaClient} =require ('@prisma/client')
const prisma = new PrismaClient()


async function addUser(name){
    try{
        const newlyCreatedUser = await prisma.user.create({
            data: {
               name
            }
        })

        return newlyCreatedUser;

    }catch(e){
        console.error(e)
        throw e
    }

}

module.exports = { addUser }