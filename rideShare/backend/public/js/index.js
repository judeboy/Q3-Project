
$( document ).ready(function() {
    var $xhr = $.getJSON('http://localhost:5000/users');
    $xhr.done(function(data) {
        if ($xhr.status !== 200) {
            return;
        }
        console.log(data)
//login POST



//login post request testing
$('.username').on('click',function(){
    let obj = {
    //username: 'Big Baller',
    email:'weiner@aol.com',
    //phone_number:'555-333-3333',
    password: 'yoBro'
    }
    console.log(obj);
    //Ajax Delete
    $.ajax({
        url: `/login`,
        type: 'POST',
        data: obj,
        success: function (data) {
        window.location.href = '/success.html'
        console.log("success")
        }
    })
})
$('#poster').on('click',function(){
    let obj = {
        username:'judah',
        address:'colorado',
        city:'dwood',
        state:'Co',
        departing_time:'12 oclock',
        number_seats:3,
        comments:'this is going to be awesom',
        phone_number:'123-456-789',
        email:'judah@judah.com'
    }
    console.log(obj);
    //Ajax Delete
    $.ajax({
        url: `/rides`,
        type: 'POST',
        data: obj,
        success: function (data) {
        window.location.href = '/success.html'
        console.log("success")
        }
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
