define(['jquery','cookie'], function($) {
   /* NProgress.start();

    NProgress.done();*/

    $('.navs ul').prev('a').on('click', function() {
        $(this).next().slideToggle();
    });


    //退出功能
    $('#logoutBtn').click(function() {
        $.ajax({
            type: 'post',
            url: '/api/logout',
            dataType: 'json',
            success: function(data) {
                if (data.code == 200) {
                    //重新跳转到登录页
                    location.href = '/main/login';
                };
            }
        })
    });

    //验证用户是否登录
    var flag = $.cookie('PHPSESSID');
   if(!flag && location.pathname != '/main/login'){
    // 如果cookie不存在，跳转到登录页
    location.href = '/main/login';
  }


    //设置用户头像信息
    var loginInfo = $.cookie('loginInfo');
    loginInfo = loginInfo && JSON.parse(loginInfo);
    //设置
  /*  $('.aside .profile img').attr('src', loginInfo.tc_avatar);
    $('.aside .profile h4').html(loginInfo.tc_name);*/

});
