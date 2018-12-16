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
  var drag,
    dX,
    dY;

  // icon
  fdIcon.addEventListener('mousedown', function (e) {
    console.log('mousedown!')
    e = e || window.event
    drag = e.target
    dX = e.clientX - e.target.offsetLeft
    dY = e.clientY - e.target.offsetTop
    console.log(drag)
  }, false)

  fdIcon.onmousemove = function (e) {
    console.log(drag)
    if (drag) {
      e = e || window.event
      var left = e.clientX - dX;
      var top = e.clientY - dY;
      if (left < 0) left = 0;
      if (top < 0) top = 0

      drag.style.left = left + 'px'
      drag.style.top = top + 'px'
    }
  }

  fdIcon.onmouseup = function (e) {
    console.log('onmouseup')
    if (drag) {
      drag.style.cursor = ''
    }
    drag = null
  }

  // link
  // fdLink.onmousedown = function (e) {
  //   e = e || event
  //   var dX = e.clientX - e.target.offsetLeft
  //   var dY = e.clientX - e.target.offsetTop
  //   console.log(dX)
  //   document.onmousemove = function () {
  //     e.target.style.left = e.clientX - dX + 'px'
  //     e.target.style.top = e.clientY - dY + 'px'
  //   }
  // }
  // document.onmouseup = function () {

  // }
}