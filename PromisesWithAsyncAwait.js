const posts = [];
let post_count=1;
//let lastActive = new Date().toUTCString();

// console.log(post2add);
function getPost()  //SHOW
{
    if(!posts.length)
    console.log('No posts to show');

    posts.forEach((post) => 
    {
        console.log(post.title);
    });
}


let a = function createPost()  // CREATE
{
    
     return new Promise((resolve,reject)=>
    {
        
        
         setTimeout(()=>
         {
             resolve(posts[posts.push({title:'post'+ post_count++})-1].title);
            
         }, 1000);
        
    });
}



let b = function updateLastUserActivityTime()   //UPDATE TIME
{
    return new Promise((resolve,reject)=>
    {
        setTimeout(()=>
        {
            const lastActive = new Date().toUTCString();
            resolve(lastActive);
        }, 2000);
        
    });
}

let c = function deletePost()  // DELETE
{
    return new Promise((resolve,reject)=>
    {
        if(posts.length>0)
        {
            resolve(posts.pop());
        }
        
    });
}

/* WITH PROMISES */




Promise.all([a(),b()]).then((values)=>
{
    
    console.log(values.reduce((m,n)=>m+"===>"+n));
});
Promise.all([a(),b()]).then((values)=>
{
    
    console.log(values.reduce((m,n)=>m+"===>"+n));
});
Promise.all([a(),b()]).then((values)=>
{
    
    console.log(values.reduce((m,n)=>m+"===>"+n));
}).then(c).then(getPost);



/* WITH ASYNC-AWAIT */

let PostDetails = async() =>
{
    console.log(await Promise.all([a(),b()]));
}

PostDetails().then(c).then(getPost);




