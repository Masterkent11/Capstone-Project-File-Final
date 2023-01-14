const authRouter = require('./auth')


function routes(app){
    app.use('./api/v1/auth',authRouter)


    app.use('*',function(req,res){
        res.status(404).json({
            error:404,
            message: 'Not found'
        })
    })
}

