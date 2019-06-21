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

  // 手动拖拽
  var dragBar = document.querySelector('.drag-bar')
  var dragProcess = document.querySelector('.drag .bar')
  var dragBarBox = document.querySelector('.drag .bar-wrapper')
  var dragVal = document.querySelector('.drag .bar-value')
  var isDrag = false,
    // 滑块总长 减去 按钮宽度
    dragBarWidth = dragBarBox.offsetWidth - (dragBar.offsetWidth / 2),
    dX;
  console.log(dragProcess.offsetWidth)

  function start(e) {
    if (event.touches) {
      e = event.touches[0]
    } else {
      e = e || window.event
    }
    // 目标元素
    drag = event.target
    isDrag = true
    // 鼠标初始位置
    dX = e.clientX - drag.offsetLeft
    console.log(e.client)
    console.log(drag.offsetLeft)
    console.log('开始了')
  }

  function move(e) {
    if (isDrag) {
      if (event.touches) {
        e = event.touches[0]
      } else {
        e = e || window.event
      }
      var left = e.clientX - dX;
      if (left >= dragBarWidth) {
        left = dragBarWidth
      }
      if (left < 0) left = 0;
      drag.style.left = (left - 5) + 'px'
      dragProcess.style.width = (left + (dragBar.offsetWidth / 2)) + 'px'
      dragVal.innerHTML = parseInt((left / dragBarWidth) * 100) + '%'
      console.log()
      console.log(left)
    }
    // console.log('拖动了')
  }

  function endDrag(e) {
    // console.log('鼠标抬起')
    isDrag = false
    drag = null
  }

  dragBar.addEventListener('touchstart', function (e) {
    start()
  })
  dragBar.ontouchmove = function (e) {
    move()
  }
  dragBar.ontouchend = function (e) {
    endDrag()
  }
  // PC 端
  dragBar.onmousedown = function (e) {
    start()
  }
  window.onmousemove = function (e) {
    move()
  }
  // 将 onmouseup 绑定在 fdIcon 会出现鼠标在时元素外弹起鼠标按键时 drag 还被绑定的 问题
  window.onmouseup = function (e) {
    endDrag()
  }

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
