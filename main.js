function addUser(){
    var player1Name=document.getElementById("player1_name_input").value;
    var player2Name=document.getElementById("player2_name_input").value;
    localStorage.setItem("player1Name", player1Name)
    localStorage.setItem("player2Name", player2Name)

    window.location="game_page.html"
}

