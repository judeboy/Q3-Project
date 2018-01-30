
$( document ).ready(function() {
    var $xhr = $.getJSON('http://localhost:3000/users');
    $xhr.done(function(data) {
        if ($xhr.status !== 200) {
            return;
        }
//login POST



//login post request testing
$('.username').on('click',function(){

  console.log('hello');
  $.ajax({
url: '/signup',
type: 'POST',
data: {
    username: 'lkjslkjklj',
    email:'blah@aol.com',
    phone_number:'333-333-3333',
    password: 'ooiioo9'
}

})
  .done(() => {
      console.log(data);
    })
})





        for(let i in data){
             numSeats = data[i].number_seats
            //console.log(data[i])
            $('#messDate').append(`
            <i>${data[i].id}</i>
            <i>Number of seats: ${data[i].number_seats}</i>
            <br/>
            <br/>
            `)
        }
       $( "#delete" ).on( "click", function() {
            const id = $( "#id" ).val();
            // Log in object
            let obj = {
                id: id,
            }
            console.log(obj);
            //Ajax Delete
            $.ajax({
                url: `/rides/${id}`,
                type: 'DELETE',
                data: obj,
                success: function (data) {
                console.log("success")
                }
            })
        })

        $('#update').click(function () {
            event.preventDefault();
            const id = $( "#id" ).val();
            const number_seats = $( "#first" ).val();
            console.log(name)
            let obj = {
                id:id,
                number_seats: `${numSeats}`-1,
            }
            console.log(obj)
            console.log(obj);
            //Ajax patch
            $.ajax({
                url: `/rides/${id}`,
                type: 'PATCH',
                data: obj,
                success: function (data) {
                console.log("success")
                }
            })
        });
    })
    // Sign up
    $( "#submit" ).on( "click", function() {
        event.preventDefault();
        const name = $( "#first" ).val()
        const password = $( "#about" ).val()
        // Log in object
        let obj = {
            name: name,
            message: message
        }
        console.log(obj)
        // Ajax post
        $.ajax({
            url: `/signup`,
            type: 'POST',
            data: obj,
            success: function (data) {
               console.log("success")
            }
        })
    })
});
