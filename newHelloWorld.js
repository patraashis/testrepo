var http = request("http");
var s = http.createServer(function(req,res){
				console.log("new request");
				res.end("Thanks for requesting");

			}
			);
s.listen(8080);
