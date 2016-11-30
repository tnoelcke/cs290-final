//sets up globals to manage user loggin
var userName = [];
var password = [];
var isLoggedIn = false;


//sets up modal when the login button is clicked.
var hiddenA = document.getElementById('login')
hiddenA.addEventListener('click',removeModal)

function removeModal()
{
    //makes modal visable
	var t = document.querySelectorAll('.hidden')
	console.log('clicked');
	for(var i = 0;i < t.length; i++)
	{
	    t[i].removeAttribute('class');
	}
    //sets up event listeners on modal buttons
	document.querySelector('.modal-close-button').addEventListener('click', hideModal);
	document.querySelector('.modal-cancel-button').addEventListener('click', hideModal);
	document.querySelector('.modal-accept-button').addEventListener('click', login);
}
	
	
	
//closes the modal and clears its contents
function hideModal()
{
document.getElementById("modal-backdrop").setAttribute('class','hidden')
document.getElementById("add-note-modal").setAttribute('class','hidden')

	//clears input of modal
	var modalIn = document.querySelectorAll('input');
	for (var i = 0; i < modalIn.length; i++)
	{
		modalIn[i].value = '';
	}
}

//sets up to send a get to the server with the userId and Password in the 
//body so the server can check and make sure that user exists and that
//the password matches
function login() {
    var element1 = document.getElementById("login-input-userid");
    var element2 = document.getElementById("login-input-password") ;
    var userId = element1.value;
    var password = element2.value;
    if (!userId)
    {
        alert("Please Enter a UserName!");
    } else if (!password) {
        alert("Please Enter a password!");
    } else {
        hideModal();
        //window.location = "/pong";
        getPongPage(userId, password);
    }

}

function getPongPage(userId, password) {
    //sets up get request
    var url = '/pong';
    var getRequest = new XMLHttpRequest();
    getRequest.open('GET', url, true, userId, password);
    //sets up data to pass back in body.
    getRequest.send();
    getRequest.addEventListener("readystatechange", function (e) {
        if (getRequst.readyState == 4 && getRequest.status == 200) {
            alert("It worked!...some how?")
        }

    }, false);

}


