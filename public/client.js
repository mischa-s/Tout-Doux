console.log('it works!!')

var source   = $("#addCatTemplate").html();
var addCatTemplate = Handlebars.compile(source);
var source   = $("#catListTemplate").html();
var catListTemplate = Handlebars.compile(source);

document.addEventListener('DOMContentLoaded', function(e){
  $.get('api/v1/cats')
  .done(response => {
    $('.container').append(catListTemplate(response))
  })
})
