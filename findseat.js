function findSeat() {
	if (selSeat >= 0) {
		selSeat = -1;
		initSeats();
    }
    
    for (var i = 0; i < seats.length; i++) {
        if (seats[i]) {
            selSeat = i;
            document.getElementById("seat" + i).src = "seat_select.png";
            document.getElementById("seat" + i).alt = "Your seat";
        }
    }
    
    var accept = confirm("Seat " + (i + 1) + "is empty. Do you book this?");
    if (!accept) {
        selSeat = -1;
    }
}
