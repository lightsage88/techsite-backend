require('dotenv').config()
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser')
var mysql = require('mysql')
var upload = require('./config/multer.config')

global.__basedir = __dirname

const db = require('./config/db.config')

// db.sequelize.sync({force: true}).then(() => {
//   console.log('Drop and Resync with { force: true }')
// })



var indexRouter = require('./routes/index')
var usersRouter = require('./routes/users')
var accountRouter = require('./routes/account')
var projectsRouter = require('./routes/projects')
var fileRouter = require('./routes/file')
var techRouter = require('./routes/tech')
var svgIconsRouter = require('./routes/svg_icons')
var app = express();



// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//Database Connection
// app.use(function(req,res,next) {
//   res.locals.connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: 'Walruses8993',
//     database: 'tech_site'
//   })
//   res.locals.connection.connect()
//   next()
// })

app.use(logger('dev'));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/account', accountRouter)
app.use('/projects', projectsRouter)
app.use('/tech', techRouter)
//require('./routes/file)(app, router, upload)
app.use('/file', fileRouter)
app.use('/svg_icons', svgIconsRouter)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  console.log('the req' + req)
  console.log('the res' + res)
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});



function runServer() {
  const port = process.env.PORT || 4007
  return new Promise((resolve, reject) => {
    server = app
      .listen(port, () => {
        console.log(`Your app is listening on port ${port}`)
        resolve(server)
      })
      .on("error", err => {
        reject(err)
      })
  })
}

function closeServer() {
  return new Promise((resolve, reject) => {
    console.log("Closing Server")
    server.close(err => {
      if(err) {
        reject(err)
        return
      }
      resolve()
    })
  })
}
 
if(require.main === module) {
  runServer().catch(err => console.error(err))
}

module.exports = {app, runServer, closeServer, upload}