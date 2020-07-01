function font () {
  // 看的是设计稿，写7.5，如果你参考的是浏览器中的webapp  3.75
  document.documentElement.style.fontSize = document.documentElement.clientWidth/3.75 + 'px'
}

font()

window.onresize = font 