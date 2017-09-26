define(['jquery','template','util','ckeditor'],function($,template,util,CKEDITOR){
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

			//处理二级分类下拉联动
			$('#firstType').change(function(){
				//一级分类ID
				var pid=$(this).val();
				//console.log(pid);
				//根据一级分类ID 查询二级分类id
				$.ajax({
					type:"get",
					url:'/api//category/child',
					dataType:'json',
					data:{cg_id:pid},
					success:function(data){
						console.log(data);
						//拼接二级分类
						var tpl='<option value="">请选择二级分类</option>{{each list}}<option value="{{$value.cg_id}}">{{$value.cg_name}}</option>{{/each}}';
						var html=template.render(tpl,{list:data.result});
						$('#secondForm').html(html);
					}
				})
			});
			//处理富文本
			CKEDITOR.replace('ckeditor');
			
			 
		}
	})



})