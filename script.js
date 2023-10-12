var settings = {
  "async": true,
  "scrossDomain": true,
  "url": "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cdogecoin%2Cethereum&vs_currencies=usd",
  "method": "GET",
  "headers": {}
}

var btc = document.getElementById('bitcoin');
var dgc = document.getElementById('dogecoin');
var eth = document.getElementById('ethereum');

$.ajax(settings).done(function (response) {
  btc.innerHTML = response.bitcoin.usd;
  dgc.innerHTML = response.dogecoin.usd;
  eth.innerHTML = response.ethereum.usd;
});
