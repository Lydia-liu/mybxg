define(['jquery'],function($){
	return {
		qs:function(key){
			//获取url指定的参数值
			var param=location.search.substr(1);
			if (param) {
				var result=null;
				var ps=param.split('&');
				$.each(ps,function(index,item){
					var kv=item.split('=');
					if (kv[0]==key) {
						result=kv[1];
						return false;//终止each循环
					};
				})
			};
			return result;
		}
	}
})