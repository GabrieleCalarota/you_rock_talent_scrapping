const http = require('http');
const TikTokScraper = require('tiktok-scraper');
const readXlsxFile = require('read-excel-file/node');
var request = require('request');


const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
	// res.statusCode = 200;
	// res.setHeader('Content-Type', 'text/plain');
	// res.end('Success');
	// (async () => {
	//     try {
	//         const userMeta = await TikTokScraper.getUserProfileInfo('alishbahanjum', {});
	//         // console.log(data); 
	//         console.log(userMeta);
	//     } catch (error) {
	//         console.log(error);
	//     }
	// })();


	
	let doitonly_once = 1;
	// File path.
	readXlsxFile('./listfile.xlsx' ).then((rows) => {
	  	rows.forEach((col)=>{
	        col.forEach((data,indexkey)=>
	        {

	        	if (indexkey == 1 && doitonly_once == 1) 
	        	{
	        		// console.log(indexkey); 
	        		// console.log(data); 

	        		var name  = data.replace('@', '');
	        		// console.log(name); 
		    		(async () => {
					    try {
					        const userMeta = await TikTokScraper.getUserProfileInfo(name, {});
					        var userId     = userMeta.userId;
					        var signature  = userMeta.signature;
					        var fans       = userMeta.fans;
					        var user_name  = userMeta.nickName;


					  //       var options = {
							// 	url: 'http://localhost/manaknight/new1/php_files/submit_file.php',
							// 	'method': 'POST',
							//  	'body': {"userId":userId, "signature" : signature, "fans" : fans}  
							// };

							request.post('http://localhost/manaknight/new1/php_files/submit_file.php',{ json: { userId: userId,signature :signature,fans: fans , user_name : user_name  } },function(error,response,body){
								//do what you want with this callback functon
								console.log(error)
								// console.log(response)
								// console.log(body)
							});


// 					        http.get("http://localhost/manaknight/new1/php_files/submit_file.php?userId="+userId+"&signature="+signature+"&fans="+fans, function(response) 
// 					        {

// 							    // alert(response.statusCode)

// 							    // get all data from the stream
// 							    response.on('data', function(data) 
// 							    {
// 							     	// console.log(data)    
// 							    });

// 							    // response.on('end', function() {
// 							    //     // all data received
// 							    //    console.log(body)
// 							    // });
// 							});

					    } catch (error) {
					        console.log(error);
					    }
					})();

					doitonly_once++;
	        	}  
	    	})
	    })
	})

	
 

  	

	// (async () => {
	//     try {
	//         const userMeta = await TikTokScraper.getUserProfileInfo('alishbahanjum', {});
	//         // console.log(userMeta);
	//     } catch (error) {
	//         console.log(error);
	//     }
	// })();

		http.get("http://localhost/manaknight/new1/php_files/submit_file.php", function(response) {

		    // alert(response.statusCode)

		    // get all data from the stream
		    response.on('data', function(data) 
		    {
		     	// console.log(data)    
		    });

		    // response.on('end', function() {
		    //     // all data received
		    //    console.log(body)
		    // });
		});

	res.statusCode = 200;
	res.setHeader('Content-Type', 'text/plain');
	res.end('Success');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});