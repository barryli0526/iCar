//var article = require('./controllers/articles');
//var category = require('./controllers/category');
//var tag = require('./controllers/tag');
//var user = require('./controllers/user');
//var admin = require('./controllers/admin/admin');
//var article_admin = require('./controllers/admin/article');
//var category_admin = require('./controllers/admin/category');
//var uploader = require('./controllers/upload');
//var feed = require('./controllers/feed');
//var chat = require('./controllers/chat');
//var demoList = require('./controllers/demoList');
//var lab = require('./controllers/lab');
//
//
//var fs = require('fs');
//var path = require('path');
//var ndir = require('ndir');
//var config = require('./config/base').config;


module.exports = function (app, client) {
  // home page
  app.get('/', function(req, res){

      res.render('index');
  })

    app.get('/index.html', function(req, res){

        res.render('index');
    })

  app.get('/blog-standard.html', function(req, res){
      res.render('blog-standard');
  })

    app.get('/blog-single-post.html', function(req, res){
        res.render('blog-single-post');
    })


    app.get('/shop-with-sidebar.html', function(req, res){
        res.render('shop-with-sidebar');
    })

    app.get('/variable-product-page.html', function(req, res){
        res.render('variable-product-page');
    })



    app.get('/single-product-page.html', function(req, res){
        res.render('variable-product-page');
    })

    app.get('/map', function(req, res){
        res.render('map');
    })

    app.get('/baoyang', function(req, res){
        res.render('zizhubaoyang');
    })

};
