const Express = require("express");
const PORT    = process.env.PORT || 3000;
app = Express()

app.get('/api/v1/home',(req,res,next)=>{
    res.send("Home route is working")
})


app.listen(PORT, () => {
    console.log(`Server started on ${PORT}`);
});