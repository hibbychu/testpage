let memberlist = ["G-IDLE", "Soyeon", "Miyeon", "Minnie", "Yuqi", "Shuhua", "Soojin"];
let selectedMember = "G-IDLE";

// const img = document.querySelector('video')

function getSelectedMember(){
    console.log(`221`);
    for(let i = 0; i < memberlist.length; i++){
        hideText(memberlist[i]);
    }

    selectedMember = document.getElementById("member").value;
    document.getElementById("selectedMember").innerText = "Selected: " + selectedMember;

    unhideText(selectedMember);
}   

function hideText(selectedMember) {
    let textToHide = document.getElementById(selectedMember);
    textToHide.style.display = "none";
}

function unhideText(selectedMember) {
    let textToToggle = document.getElementById(selectedMember);
    textToToggle.style.display = "block"; 
}

function showLyrics(hiddenlyrics){
    console.log(`1`);
    console.log(hiddenlyrics);
    let lyricstext = document.getElementById(hiddenlyrics);
    console.log(lyricstext);
    console.log(`frappe latte`);
    // img.src='video/831.mp4';
    return lyricstext.classList.toggle("lyrics")
}