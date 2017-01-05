

function openModal(modal)
{
	modal.style.display = "block";
}
function closeWithSpan(modal)
{
	modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    var modal = document.getElementById('Fall2016Modal');
    var modal1 = document.getElementById('Winter2017Modal');
   
    if (event.target == modal) {
        modal.style.display = "none";
        
    }
    else if(event.target == modal1){
        modal1.style.display ="none"
    }
}
