
console.log('it works!!')

var source   = $("#addCatTemplate").html();
var addCatTemplate = Handlebars.compile(source);
var source   = $("#catListTemplate").html();
var catListTemplate = Handlebars.compile(source);

document.addEventListener('DOMContentLoaded', function(e){
  $.get('api/v1/cats')
  .done(response => {
    $('.container').append(catListTemplate(response))

const data = [
  {name: 'Goofballs',
   age:2
 },
  {name: 'Michael',
   age:17
 },
  {name: 'Tabitha',
   age:9
  }
]

  $('#submit').on("click", event => {
    event.preventDefault()
    const input = $('#form').serializeArray()
    $.post('/api/v1/cats', input, function(res){
      // $('.resources').append(template(response))
    })
  })

  $('ul').on('click', '.cats', function (e) {
      console.log(e.target)
  })
})
