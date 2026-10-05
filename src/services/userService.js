


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

async function getAllUsers(){
    try{
        const getAll = await prisma.user.findMany({
            include: {posts : true}
        })
        return getAll;

    }catch(e){
        console.error(e)
        throw e
    }
}

async function deleteUser(id){
    try{
        const deletedUser = await prisma.user.delete({
            where: {id},
            include: {posts: true}
        })
        return deletedUser;

    } catch(e){
        throw new Error(e.message)
    }
}

module.exports = { addUser, getAllUsers, deleteUser}