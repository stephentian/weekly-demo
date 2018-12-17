/**
 * author: stephentian
 * email: stephentian@foxmail.com
 * day: 2018-12-16
 **/

window.onload = function () {
  var fdIcon = document.getElementsByClassName('free-drag-icon')[0]
  // console.log(fdIcon)
  // 使用 getElementsByClassName 返回的是数组
  // 推荐使用 querySelector

  var fdLink = document.querySelector('.free-drag-link')
  // 是否被拖拽
  var isDrag = false,
    drag,
    dX,
    dY;

  function down(e) {
    isDrag = true
    e = e || window.event
    drag = e.target

    // client 鼠标位置到当前屏幕中左上角距离（不包含滚动）
    // offset 偏移量，目标元素左上角距离 page 顶部和 左边的距离

    dX = e.clientX - e.target.offsetLeft
    dY = e.clientY - e.target.offsetTop

    // console.log(e.clientX)
    // console.log(e.clientY)
    // console.log(e.target.offsetLeft)
    // console.log(e.target.offsetTop)
  }

  function move(e) {
    if (isDrag) {
      e = e || window.event
      var left = e.clientX - dX;
      var top = e.clientY - dY;
      if (left < 0) left = 0;
      if (top < 0) top = 0

      drag.style.left = left + 'px'
      drag.style.top = top + 'px'
    }
  }

  // icon
  fdIcon.addEventListener('mousedown', function (e) {
    console.log('mousedown!')
    down()
  }, false)

  // fdIcon.onmousemove 会发生在鼠标按住时，鼠标可能会脱离 icon 范围
  document.onmousemove = function (e) {
    // console.log(drag)
    move()
  }

  // 将 onmouseup 绑定在 fdIcon 会出现鼠标在时元素外弹起鼠标按键时 drag 还被绑定的 问题
  document.onmouseup = function (e) {
    console.log('onmouseup')
    if (drag) {
      drag.style.cursor = ''
    }
    drag = null
    isDrag = false
  }

  // link
  fdLink.onmousedown = function (e) {
    down()
  }
  // document.onmouseup = function () {
  // }
}