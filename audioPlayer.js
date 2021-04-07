audioPlayer();
		function audioPlayer() {
			var currentSong = 0;
			$("#audioPlayer")[0].src = $("#playlist li a")[0];
			$("#playlist li a").click(function(e){
				e.preventDefault();
				$("#audioPlayer")[0].src = this;
				$("#audioPlayer")[0].play();
				$("#playlist li").removeClass("current-song");
				currentSong = $(this).parent().index();
				$(this).parent().addClass("current-song");
			});

			$("#audioPlayer")[0].addEventListener("ended", function() {
				currentSong++;
				if (currentSong == $("#playlist li a").length)
					currentSong = 0;
				$("#playlist li").removeClass("current-song");
				$("#playlist li:eq("+currentSong+")").addClass("current-song");
				$("#audioPlayer")[0].src = $("#playlist li a")[currentSong].href;
				$("#audioPlayer")[0].play();
			});
		}


		function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
        window.onbeforeunload = function () {
  return "Hello! I am an alert box!";

 }

 alert("A chaque fois que vous rafrechisser la page, Votre lecture en cour s'annule");