const {PrismaClient} = require('@prisma/client')


const prisma = new PrismaClient()


async function addPost(title, postDate, userId){
    try{
        const newlyCreatedPost = await prisma.post.create({
            data: {
                title,
                postDate,
                user: {
                    connect : {id: userId}
                },
            }, include: { user: true }
        })

        return newlyCreatedPost;
        
    }catch(e){
        console.error(e)
        throw error
    }
}

async function getAllPosts(){
    try{
        const getAllPosts = await prisma.post.findMany({
            include : { user : true}
        })

        return getAllPosts;
        
    }catch(e){
        console.error(e)
        throw e;
    }
}

async function getSinglePost(id){
    try{
        const perPost = await prisma.post.findUnique({
            where: {id},
            include: {user: true}
        });

        if(!perPost){
            throw new Error(`Post with id ${id} not found`)
        }

        return perPost;

    }catch(e){
        console.error(e)
        throw e;
    }
}

async function updatePost(id, newTitle){
    try{

        // const perPost = await prisma.post.findUnique({
        //     where: {id},
        //     include: {user: true}
        // });

        // if(!perPost){
        //     throw new Error(`Post with id ${id} not found`)
        // }


        // const updatedPost = await prisma.post.update({
        // where : {id},
        // data: {
        //     title: newTitle
        // },
        // include: {
        //     user: true
        // }
        // })

        // return updatedPost;


        //using transactions


        const updatedPost = await prisma.$transaction(async (prisma)=>{
            const perPost = await prisma.post.findUnique({where: {id}});
            if(!perPost){
            throw new Error(`Post with id ${id} not found`)
        }

        return prisma.post.update({
            where: {id},
            data: {
                title: newTitle
            },
            include : {
                user : true
            }
            });
        });

        

        return updatedPost;

       

    }catch(e){
        console.error(e)
        throw e;
    }

}


async function deletePost(id){
    try{

        const deletedPost = await prisma.post.delete({
            where: {id},
            include: { user: true}
        })

    }catch(e){
        console.error(e)
        throw e;
    }
}



module.exports = { addPost, getAllPosts, getSinglePost}