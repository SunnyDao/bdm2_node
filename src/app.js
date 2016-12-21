/**
 * desc:
 */

import express from "express";
import bootstrap from "./bootstrap/index";
import favicon from "serve-favicon";

var app = express();

bootstrap(app);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

//处理请求SOA错误
app.use(function (err, req, res, next) {
  switch (err.name) {
    case "ApiError":
      return res.json(JSON.parse(err.message));
    case "RenderError":
      return res.render('error', {
        message: err.message,
        error: err
      });
    case "ModalError":
      return res.render('modalError', {
        message: err.message,
      });
  }
  next(err);
});

// development error handler
// will print stacktrace
if (app.get('stage_env') === 'dev') {
  app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
