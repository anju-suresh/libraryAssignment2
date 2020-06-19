const express= require('express');
const bookRouter= express.Router();
const nav=[
    {
        link:'/author' , name:'Author'
    },
    {
        link:'/books' , name:'Books'
    },
    {
        link:'/books/addbook' , name:'Add Book'
    },
    {
        link:'/login', name:'Log Out'
    }
]

var books=[
    {
        title: 'IRRESISTIBLE',
        author:'Adam Alter',
        genr: 'Technology',
        img:"b1.jpg"
    },
    {
        title: 'What Technology Wants',
        author:'Kevin Kelly',
        genr: 'Technology',
        img:"b3.jpg"
    },
    {
        title: 'Breaking Digital Girdlock',
        author:'John Best',
        genr: 'Banking',
        img:"b2.jpg"
    }
]
// books.push(arra.arr);
// console.log(books);


bookRouter.get("/",(req,res)=>{
    res.render("books",
    {
        nav,
        books
    });
});
bookRouter.get("/addbook",(req,res)=>{    
    res.render("addbook",
    {
        nav   
    });  
});
bookRouter.get('/:id',(req,res)=>{
    const id=req.params.id
    res.render('book',{
        nav,
        book: books[id]
    });
});


module.exports=bookRouter;
