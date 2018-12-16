window.onload = function () {
  var fdIcon = document.getElementsByClassName('free-drag-icon')[0]
  // console.log(fdIcon)
  // 使用 getElementsByClassName 返回的是数组
  // 推荐使用 querySelector

  var fdLink = document.querySelector('.free-drag-link')

  // icon
  fdIcon.addEventListener('click', function () {
    console.log('点击了 icon!')
    console.log(fdIcon)
  }, false)

  // link
  fdLink.addEventListener('onMouseDown', function () {
    console.log('拖动了')
    console.log(fdLink)
  })
}