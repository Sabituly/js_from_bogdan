const post = {

    id: '12345',
    title: 'My First post'
}


const createNewPost = (post, addedPostDate = Date()) => ({

   ...post,
   addedPostDate : addedPostDate
});

console.log(createNewPost(post))