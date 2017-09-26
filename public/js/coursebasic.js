define(['jquery','template','util'],function($,template,util){
	util.setMenu('/course/add');
	//获取课程ID
	var csId=util.qs('cs_id');
	//获取操作标志位
	var flag=util.qs('flag');//课程编辑时候有flag
	//编辑和添加都需要  根据课程ID查询课程相关信息
	$.ajax({
		type:'get',
		url:'/api/course/basic',
		data:{cs_id:csId},
		dataType:'json',
		success:function(data){
			//判断是编辑还是添加
			if(flag){
				//编辑时候
				data.result.operate='课程编辑';
			}else{
				data.result.operate='课程添加';
			}
			console.log(data);
			var html=template('basicTpl',data.result);
			$('#basicInfo').html(html);
		}
	})



})