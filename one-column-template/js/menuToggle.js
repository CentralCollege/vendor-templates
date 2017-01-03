var menuElement = document.getElementById('mobileMenu');
var toggleStatus = false;
menuElement.addEventListener('click',function(){
  if (!toggleStatus){
    document.getElementsByClassName("primary")[0].style.display= 'block';
    toggleStatus = true;
  } else {
    document.getElementsByClassName("primary")[0].style.display= 'none';
    toggleStatus = false;
  }
});
window.onresize = function(event){
  if (window.innerWidth >= 550 && !toggleStatus){
    document.getElementsByClassName("primary")[0].style.display= 'block';
    toggleStatus = true;
  } else if (window.innerWidth < 550){
    document.getElementsByClassName("primary")[0].style.display= 'none';
    toggleStatus = false;
  }
};
