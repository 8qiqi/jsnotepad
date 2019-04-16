/*exported $dlgAbout*/
var $dlgAbout = (function(){
  var DOM=''
    +'<div class="notepad-about-dlg">'
    +'  <div class="dialogbox">'
    +'    <div class="titlebar">'
    +'      <p class="title">关于JSnotepad</p>'
    +'      <span class="btn-close">×</span>'
    +'    </div>'
    +'    <div class="content">'
    +'      <h1>JSnotepad</h1>'
    +'      <hr/>'
    +'      <img src="https://raw.githubusercontent.com/wangding/jsnotepad/master/images/notepad-icon-32.png"/>'
    +'      <p>作者:77</p>'
    +'      <p>邮箱:3510363360@qq.com</p>'
    +'      <p>Github:<a href="https://github.com/8qiqi">https://github.com/8qiqi</a></p>'
    +'      <input type="button" value="确定" class="btn-confirm"/>'
    +'    </div>'
    +'  </div>'
    +'</div>';
  
  var $dlg = $(DOM),
      $btnConfirm = $dlg.find('.btn-confirm'),
      $btnClose = $dlg.find('.btn-close');

  function show(){
    $('body').append($dlg);
   
    $dlg.find('.dialogbox').draggable({handle:$dlg.find('.titlebar')});
    $btnConfirm.click(function(){$dlg.remove();});
    $btnClose.click(function(){$dlg.remove();});
  }
  return {show:show};

}());
