const index


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


document.addEventListener('DOMContentLoaded', function(e) {
  $.get('api/v1/cats/')
  .done(function(response){
    $('.resources').append(template(response)
  })

  $('#submit').on("click", event => {
    event.preventDefault()
    const input = $('#form').serializeArray()
    $.post('/api/v1/cats', input, funciton(res){
      $('.resources').append(template(response))
    })
  }
})
