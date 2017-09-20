define(['jquery','cookie'],function($){
	$('#loginbtn').click(function(){
        $.ajax({
            type:'post',
            url:'/api/login',
            data:$('#loginform').serialize(),//获取所有表单元素
            dataType:'json',
            success:function(data){
               if (data.code==200) {
                //把用户的登录信息存储在cookie中
                //实现数据的跨域共享
                $.cookie('loginInfo',JSON.stringify(data.result),{path:'/'});
                
                //登录成功跳转至主页面
                location.href='/main/index';

               };
            }

        })
     
        return false;
    });
});


 