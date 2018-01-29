
$( document ).ready(function() {
    var $xhr = $.getJSON('http://localhost:3000/rides');
    $xhr.done(function(data) {
        if ($xhr.status !== 200) {
            return;
        }

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
    // Submit click event
    $( "#submit" ).on( "click", function() {
        event.preventDefault();
        const name = $( "#first" ).val()
        const message = $( "#about" ).val()
        // Log in object
        let obj = {
            name: name,
            message: message
        }
        console.log(obj)
        // Ajax post
        $.ajax({
            url: `/messages`,
            type: 'POST',
            data: obj,
            success: function (data) {
               console.log("success")
            }
        })
    })
});
