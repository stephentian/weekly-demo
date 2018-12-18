/**
 * author: stephentian
 * email: stephentian@foxmail.com
 * day: 2018-12-18
 **/

window.onload = function () {
  // 自动加载
  var autoBar = document.querySelector('.autoload .bar')
  var autoValue = document.querySelector('.autoload .bar-value')
  var value = 0;
  console.log(autoBar)
  console.log(autoValue)
  var autoload = function () {
    value++
    console.log(value)
    if (value > 100) {
      window.clearInterval(myVal)
      return
    }
    autoBar.style.width = value + '%'
    autoValue.innerHTML = autoBar.style.width
  }
  var myVal = setInterval(function () {
    autoload()
  }, 45)
}