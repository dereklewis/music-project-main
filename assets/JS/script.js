// var dateRange = "2021-08-11";

const settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://billboard-api2.p.rapidapi.com/hot-100?date=2021-08-11&range=1-100",
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "7da31efff8mshbe2b34b9f658331p18aaf2jsn2df62bd40cf9",
		"x-rapidapi-host": "billboard-api2.p.rapidapi.com"
	}
};

$.ajax(settings).done(function (response) {
	console.log(response);
});



