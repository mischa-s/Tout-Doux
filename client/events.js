module.exports = function (store) {

  // when a click on #submit is recieved 
  // call a method on store 


  document.addEventListener('click', (e) => {
    e.preventDefault()
    console.log('clicked', e.target)

    switch (e.target.id) {
      case 'submit': 
        console.log('you clicked submit')
         

        // fire a stor method here
        // telling the store to update
        break

    }


  })

  


}



//  $.get('api/v1/cats')
//  .done(response => {
//    $('.container').append(catListTemplate(response))
//
//
//  $('#submit').on("click", event => {
//    event.preventDefault()
//    const input = $('#form').serializeArray()
//    $.post('/api/v1/cats', input, function(res){
//      // $('.resources').append(template(response))
//    })
//  })
//
//  $('ul').on('click', '.cats', function (e) {
//      console.log(e.target)
//  })
//})
