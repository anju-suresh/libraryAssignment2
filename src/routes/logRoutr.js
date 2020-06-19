const express= require('express');
const logRouter= express.Router();
function router(nav){
logRouter.get("/",(req,res)=>{
    res.render("login",
    {
        nav
    });
});
return logRouter;
}
module.exports=router;
