module.exports = routes => routes.get("/tasks",(req,res)=>{
    res.json({
        tasks:[
            {title: "Fazer compras"},
            {title: "Arrumar a casa"},
        ]
    })
})