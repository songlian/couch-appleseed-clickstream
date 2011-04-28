function(head, req){
	
	var rows = [];
	// !json templates.atom
	
	Mustache = require("vendor/mustache");
	
	var dt = new Date();
	var atomView = {
		"title": "AppleSeed ClickStream",
		"language": "",
		"siteLink": "",
		"description": "AppleSeed ClickStream",
		"pubDateTime": "",
		"author": "songlian",
		"explicit": "no",
		"ownerName": "",
		"ownerEmail": ""
		}


	
	

	
	provides("rss", function(){
			
			while(row = getRow()) {
				doc = row.value;
				var item = {
					"title": doc.title,
					"articleLink": doc.url,
					"description": doc.title,
					"pubDateTime": doc.dt
				};
				rows.push(item);
			}
			atomView["items"] = rows;
			var xml = Mustache.to_html(templates.atom, atomView);
			send(xml);
	});
}