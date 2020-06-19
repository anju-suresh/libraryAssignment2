const express= require('express');
const signRouter= express.Router();
function router(nav){
signRouter.get("/",(req,res)=>{
    res.render("signUp",
    {
        nav
        
    });
})
return signRouter
}
module.exports=router;