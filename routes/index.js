const fs = require('fs')
const express = require('express')

var app = express.Router()

function jsonFormat( req, res, next )
{
  var format = req.query.format || 'HTML'
  if (format == 'JSON' && res.locals.json )
    res.status(200).jsonp( res.locals.json )
  else
    next()
}

/*
Les routes sont en 2 ou 3 parties:

app.VERB( chemin, rendu )
app.VERB( chemin, controleur, rendu )

*/

/***************************************
* Page 1
***************************************/
app.get('/', require('./controleur.js'), (req, res)=> res.render('Chart.html')
 )

module.exports = app
