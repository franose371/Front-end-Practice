function addLoadEvent(func) {
    var oldonload = window.onload;//将现有的事件处理函数的值存入变量中
    if (typeof window.onload != 'function') {
        window.onload = func;//如果这个事件处理函数没有绑定任何函数，就把新函数添加给它
    } else {
        window.onload = function() {
            oldonload();
            func();//如果已经绑定了函数，就把新函数追加到现有指令的末尾
      }
    }
}