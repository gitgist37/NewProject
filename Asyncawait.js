
console.log('p1: shows ticket');
console.log('p2: shows ticket');

let WifeBringsTicket = new Promise((resolve,reject)=>
{
    setTimeout(()=>
    resolve('ticket'), 5000);
});

let getPopCorn = WifeBringsTicket.then((t)=>
{
    console.log('gf: I got the ticket');
    console.log('bf: we should go in');
    console.log('gf: No! I am hungry');
    return new Promise((resolve,reject)=>
    {
        setTimeout(()=>
        resolve('Popcorn'), 3000);
    });
});
let getButter = getPopCorn.then((p)=>
{
    console.log('bf: I got some popcorn');
    console.log('bf: we should go in');
    console.log('gf: No! I need butter on my popcorn');
    return new Promise((resolve,reject)=>
    {
        setTimeout(()=>
        resolve(`${p} and Butter`), 2000);
    });
});
let getColdDrinks = getButter.then((r)=>
{
    console.log('bf: I got some butter and popcorn');
    console.log('bf: we should go in');
    console.log('gf: No! I need some cold drink');
    return new Promise((resolve,reject)=>
    {
        setTimeout(()=>
        resolve(`${r} and cold drinks`), 1000);
    });

});

/* WITH PROMISE */

 getColdDrinks.then((value)=>
 {
     console.log(`bf: I got ${value}`);
 });

console.log('p4: shows ticket');
console.log('p5: shows ticket');



/* WITH ASYNC-AWAIT */

let MovieDay = async() =>
{
    //  let ticket = await WifeBringsTicket;
    //  let popcorn = await getPopCorn;
    //  let butter = await getButter;
    //  let beverage = await getColdDrinks;

     console.log(await Promise.all([WifeBringsTicket,getPopCorn,getButter,getColdDrinks]));

}

MovieDay();


