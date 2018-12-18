/**
 * author: stephentian
 * email: stephentian@foxmail.com
 * day: 2018-12-18
 **/

window.onload = function () {
  // 自动加载
  var autoBar = document.querySelector('.autoload .bar')
  var autoValue = document.querySelector('.autoload .bar-value')
  var autoloadValue = 0;
  var autoload = function () {
    autoloadValue++
    // console.log(autoloadValue)
    if (autoloadValue > 100) {
      window.clearInterval(autoVal)
      return
    }
    autoBar.style.width = autoloadValue + '%'
    autoValue.innerHTML = autoBar.style.width
  }
  var autoVal = setInterval(function () {
    autoload()
  }, 45)

  // h5 progress 标签进度条
  var h5Bar = document.getElementById('h5Progress')
  var h5Val = setInterval(function () {
    if (h5Bar.value != 100) {
      h5Bar.value++
    } else {
      window.clearInterval(h5Val)
      return
    }
  }, 100)
}