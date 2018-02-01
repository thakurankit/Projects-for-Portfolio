var baseList = document.getElementById("base-list");
var fetchBaseCur = document.getElementById("base-c-value");
var exchangeList = document.getElementById("exchange-list");

$(function(){
  $("#convert").click(function(){
    if(fetchBaseCur.value === ""){
      alert("Please enter a value");
    }
    else if(baseList.value === "0" || exchangeList.value === "0"){
            alert("Please select a currency");
            }
    else if(baseList.value === exchangeList.value){
      alert("Base and Exchange currency should be unique");
    }
    else{
      var link1 = "https://api.fixer.io/latest?base=";
      var base = baseList.value;
      var finalLink = link1+base;

      $.ajax({
        url: finalLink, 
        success: function(r){
          var a = r.rates;
          var b = exchangeList.value;
          var f = Math.round(fetchBaseCur.value);
          var result = (f)*(a[b]);
          $(".result").slideDown(300).css("display", "block");
          $("#converted-price").text(exchangeList.value + ": " + result.toFixed(2));
        },
        error: function() {
            $(".result").slideDown(300).css("display", "block");
            $("#converted-price").text("Something Went Wrong");
        }
      });
    }
  });
  $("#close-modal").click(function() {
    $(".result").slideUp(500);
  })
  //Close AJAX call
});