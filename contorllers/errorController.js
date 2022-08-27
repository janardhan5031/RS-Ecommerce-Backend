
exports.get404 =(req,res,next) =>{
    res.status(404).write('<h1>404 Not Found</h1>');
}