const http = require('http');
const TikTokScraper = require('tiktok-scraper');
const readXlsxFile = require('read-excel-file/node');

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
	

	// File path.
	readXlsxFile('./listfile.xlsx' ).then((rows) => {
	  	rows.forEach((col)=>{
	        col.forEach((data,indexkey)=>
	        {

	        	if (indexkey == 1) 
	        	{
	        		// console.log(indexkey); 
	        		// console.log(data); 

	        		var name  = data.replace('@', '');
	        		// console.log(name); 
		    		(async () => {
					    try {
					        const userMeta = await TikTokScraper.getUserProfileInfo(name, {});
					        // console.log(data); 
					        console.log(userMeta);
					    } catch (error) {
					        console.log(error);
					    }
					})();
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