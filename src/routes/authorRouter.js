const express= require('express');
const authorRouter= express.Router();
var author=[
    {
        title: 'Turning Points',
        author:'A.P.J Abdul Kalam',
        genr: 'non-fiction/Autobiography',
        img:"a31.jpg"
    },
    {
        title: 'The Alchemist',
        author:'Paulo Coelho',
        genr: 'Fiction',
        img:"a21.jpg"
    },
    {
        title: 'India Positive',
        author:'Chetan Bhagat',
        genr: 'Non-Fiction',
        img:"a11.jpg"
    }
]

authorRouter.get("/",(req,res)=>{
    res.render("author",
    {
        nav:[{link:'/author' , name:'Author'},{link:'/books' , name:'Books'},{link:'/login', name:'Log Out'}],
        author
    });
});


module.exports=authorRouter;
