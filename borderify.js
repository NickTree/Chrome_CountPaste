
console.log("init...")

document.addEventListener( 'paste', function( event ){
	console.log("---" + exec_count_on);

	var clipboardData = event.clipboardData,
        i = 0,
        items, item, types;
    if( clipboardData ){
        items = clipboardData.items;
        if( !items ){
            return;
        }
        item = items[0];
	types = clipboardData.types || [];
	

item.getAsString(
	function (s){
      	console.log(s)
	clipboardData.setData("Text", s);  
     });

	console.log(item)
    }

});

