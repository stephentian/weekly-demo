/**
 * author: stephentian
 * email: stephentian@foxmail.com
 * day: 2018-12-19
 **/

var content = require('./content.js')

// 新版本不支持缩写了
// require('!style!css!./style.css')
require('!style-loader!css-loader!./style.css')

console.log('content.js: ', content)
document.write('It works(entry.js)')