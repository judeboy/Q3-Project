import React from 'react'

const RidesPage = () => {

return (

//concert info
//rides
<div>
<Modal
	header='Modal Header'
	trigger={<Button waves='light'>OR ME!<Icon right>insert_chart</Icon></Button>}>
	<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
		incididunt ut labore et dolore magna aliqua.</p>
</Modal>
<div>


<p>Name: Matt</p>
<p>Departing From: 123 mySt</p>
<p>Departing Time: 12oclock</p>
<p>Phone Number: 333-444-5555</p>
<p>Email: ji9oo@aol.com</p>
<p>Seats Available: 2</p>

  <form>

    <Input className="riderName" type="text" name="riderName" s={10} placeholder="Name"><Icon>account_circle</Icon></Input>
    <Input className="phoneNumber" validate type='tel' name="riderPhone" s={10} placeholder="Phone Number"><Icon>account_circle</Icon></Input>
    <Input className="Email" type="email" name="riderEmail" s={12} placeholder="Email"><Icon>account_circle</Icon></Input>
    <Input className="seatsNeeded" type="number" name="seatsNeeded" s={10} placeholder="Seats Needed"><Icon>account_circle</Icon></Input>
    <Input className="Comments" type="text" name="Comments" s={10} placeholder="Comments"><Icon>account_circle</Icon></Input>


  <input type="submit" value="Submit" />
</form>
</div>
</div>




)





}
