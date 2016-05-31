console.log("addon init...")
var r = /^\d+$/;
var exec_count_on = 0;
var i = 0,value,last_i = -1 ;

document.addEventListener( 'paste', function( event ){
	e = event;
	console.log("switch button ---> " + exec_count_on);
	if(exec_count_on == 0 ){
		return;
	}
	var clipboardData = event.clipboardData,
        items, item, types;
    if( clipboardData ){
        items = clipboardData.items;
        if( !items ){
            return;
        }
        item = items[0];
	types = clipboardData.types || [];
	type = types[0];
	if(type  === "text/plain"){
		e.preventDefault();
		item.getAsString(
			function (s){
      			console.log(s)
			if(r.test(s)){
				
				if(last_i != parseInt(s)){
					i = 0;
					last_i = parseInt(s);
				}
				value = parseInt(s) + i;
				i = i+ 1;
				console.log(value + "~" + i) 
				if(e.target.tagName == "INPUT" || e.target.tagName == "TEXT"){
					e.target.value = value
				}else{
					e.target.innerText = value
				}
			}
			
     		});
	}

    }

});

