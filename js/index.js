// 获取菜单元素和页面元素
var menuItems = document.querySelectorAll('.menu-nav-heading a');
var pages = document.querySelectorAll('.page');
// 监听菜单项的点击事件
menuItems.forEach(function(item) {
  item.addEventListener('click', function(event) {
    event.preventDefault();
    // 获取目标页面 ID
    var target = this.dataset.target;
    // 移除所有页面的 active 类
    pages.forEach(function(page) {
      page.classList.remove('page');
    });
    
    // 添加目标页面的 active 类
    document.getElementById(target).classList.add('page');
  });
});
