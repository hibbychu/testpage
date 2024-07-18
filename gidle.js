let selectedMember = "G-IDLE";
console.log(`1`);
function getSelectedMember(){
    hideText(selectedMember);
    
    console.log(`2`);

    selectedMember = document.getElementById("member").value;
    document.getElementById("selectedMember").innerText = "Selected Member: " + selectedMember;

    console.log(selectedMember); 

    unhideText(selectedMember);
}   

function hideText(selectedMember) {
    let textToHide = document.getElementById(selectedMember);
    textToHide.style.display = "none";
}

function unhideText(selectedMember) {
    console.log(`3`);
    let textToToggle = document.getElementById(selectedMember);
    console.log(`4`);
    textToToggle.style.display = "block"; 
    console.log(`5`);
}