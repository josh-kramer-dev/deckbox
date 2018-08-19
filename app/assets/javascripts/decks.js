$(function(){
    $("a.load_cards").on("click", function(e){
    
     $.ajax({
       method: "GET",
      url: this.href
    }).success(function(response){
       $("div.cards").html(response)
     }).error(function(notNeeded){
       alert("we broke!!!!")
     });
    
     
    Requesting HTML
    $.get(this.href).success(function(response){
    $("div.cards").html(response)
    })
    //
    Requesting JSON
    $.get(this.href).success(function(json){
    // clear the OL html (in case there were stale cards)
    var $ol = $("div.cards ol")
    $ol.html("") // emptied the OL
    
    // iterate over each card within json
    json.forEach(function(card){
    // with each card data, append an LI to the OL with the card name
    $ol.append("<li>" + card.name + "</li>");
    })
    })
    
    // load that response into the HTML of the page.
    e.preventDefault();
    })
    
    $("a.load_cards").on("click", function(e){
    $.ajax({
    url: this.href,
    dataType: 'script'
    })
    e.preventDefault();
    })
    })
    
    
    // Submit cards via AJAX - Soon to be replaced by remote true
    $(function(){
    $("#new_card").on("submit", function(e){
    // 1. we need the URL to submit the deck request too
    // 2. we need the form data.
    
    // Low level
    $.ajax({
    type: ($("input[name='_method']").val() || this.method),
    url: this.action,
    data: $(this).serialize();, // either JSON or querystring serializing
    success: function(response){
    $("#card_name").val("");
    var $ol = $("div.cards ol")
    $ol.append(response);
    }
    });
    
    // Send a deck request to the correct place that form would
    // along with the actual form data.
    
    e.preventDefault();
    })
    });