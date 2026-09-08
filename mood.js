function openSearchtab(){
    document.getElementById("searchTab").style.display="block"
}
function closeSearchtab(){
    document.getElementById("searchTab").style.display="none"
}
function openMCBH(){
    document.getElementById("MCBHCard").style.display="block"
    document.getElementById("MCBHCard").style.display="flex" 
    document.getElementById("bloodstreamCard").style.display="none" 
}
function openbloodstream(){
    document.getElementById("bloodstreamCard").style.display="block"
    document.getElementById("bloodstreamCard").style.display="flex" 
    document.getElementById("MCBHCard").style.display="none"
}
function MCBH() {
    document.querySelectorAll("audio").forEach(a => {
        a.pause();
        a.currentTime = 0;
    });

    document.getElementById("MCBH").play();
}

function bloodstream() {
    document.querySelectorAll("audio").forEach(a => {
        a.pause();
        a.currentTime = 0;
    });

    document.getElementById("bloodstream").play();
}