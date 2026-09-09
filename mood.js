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
    document.getElementById("bloodstream_hover").style.backgroundColor="#84848400"
    document.getElementById("MCBH_hover").style.backgroundColor="#84848424"
}
function openbloodstream(){
    document.getElementById("bloodstreamCard").style.display="block"
    document.getElementById("bloodstreamCard").style.display="flex" 
    document.getElementById("MCBHCard").style.display="none"
    document.getElementById("bloodstream_hover").style.backgroundColor="#84848424"
    document.getElementById("MCBH_hover").style.backgroundColor="#84848400"
}
function MCBHh4(){
    document.getElementById("MCBH_h4").style.color="#82fc25"
    document.getElementById("bloodstream_h4").style.color="#ffffffff"
}
function bloodstreamh4(){
    document.getElementById("MCBH_h4").style.color="#ffffffff"
    document.getElementById("bloodstream_h4").style.color="#82fc25"
}
function MCBH() {
    document.querySelectorAll("audio").forEach(a => {
        a.pause();
        a.currentTime = 0;
    });

    document.getElementById("MCBH").play();
}
function pauseMCBH(){
    document.getElementById("MCBH").pause();
    document.getElementById("playMCBH").style.display="none"
    document.getElementById("pauseMCBH").style.display="block"
}
function playMCBH(){
    document.getElementById("MCBH").play();
    document.getElementById("playMCBH").style.display="block"
    document.getElementById("pauseMCBH").style.display="none"
}
function pausebloodstream(){
    document.getElementById("bloodstream").pause();
    document.getElementById("playbloodstream").style.display="none"
    document.getElementById("pausebloodstream").style.display="block"
}
function playbloodstream(){
    document.getElementById("bloodstream").play();
    document.getElementById("playbloodstream").style.display="block"
    document.getElementById("pausebloodstream").style.display="none"
}
function bloodstream() {
    document.querySelectorAll("audio").forEach(a => {
        a.pause();
        a.currentTime = 0;
    });

    document.getElementById("bloodstream").play();
}
