var express = require('express');
var router = express.Router();
const YAML = require('yaml')

const fs = require('fs')
var md = require('markdown-it')();

/* GET home page. */
router.get('/', function(req, res, next) {
  const file = fs.readFileSync('./public/data/data.yml', 'utf8')
  var data = YAML.parse(file)
  console.log(data);

  const file2 = fs.readFileSync('./public/data/quemsomos.md', 'utf8')
  var quemsomos = md.render(file2);
  console.log(quemsomos);
  res.render('index', { data, quemsomos });
});

module.exports = router;
