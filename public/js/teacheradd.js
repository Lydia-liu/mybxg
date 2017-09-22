define(['jquery','template','util'],function($,template,util){
	var tcId=util.qs('tc_id');
	//console.log(tcId);
	if (tcId) {
		//编辑操作
		//
		$.ajax({
			type:'get',
			dataType:'json',
			url:'/api//teacher/edit',
			data:{tc_id:tcId},
			success:function(data){
				//解析数据 渲染页面
				data.result.oprate='编辑讲师';
				console.log(data);
				var html=template('teacherTpl',data.result);
				$('#teacherInfo').html(html);
			}

		})
	}else{
		//添加操作
		var html=template('teacherTpl',{oprate:'添加讲师'});
		$('#teacherInfo').html(html);
		
	}
});