// ************ Require's ************
const express = require("express");
const path = require("path");

// ************ express() - (don't touch) ************
const app = express();

// ************ Middlewares - (don't touch) ************
app.use(express.static(path.join(__dirname, '../public')));
app.use(express.urlencoded({ extended: false}));
app.use(express.json());

// ************ Template Engine - (don't touch) ************
app.set("view engine", "ejs");
app.set('views', path.join(__dirname, 'views'));

// ************ WRITE YOUR CODE FROM HERE ************
app.listen(3000, () => {
    console.log("Servidor corriendo en puerto 3000");
});

// ************ Route System require and use() ************
const mainRoutes = require("./routes/main");
app.use("/" , mainRoutes);

// ************ API Route System require and use() ************
const routesAPIProducts = require("./routes/api/productsAPI")
app.use("/api/products", routesAPIProducts)

// ************ DON'T TOUCH FROM HERE ************
// ************ catch 404 and forward to error handler ************

app.use((req, res, next) => next(createError(404)));

// ************ error handler ************
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.path = req.path;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error', {titulo:"¡OOPS! Página no encontrada"});
});

// ************ exports app - dont'touch ************

module.exports = app;