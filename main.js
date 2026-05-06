document.addEventListener("DOMContentLoaded", function () {

    const STORAGE_KEY = "skyblue_squush_users_mobile";

    function getUsers() {
        return JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
    }

    function saveUsers(users) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(users));
    }

    function getVal(id) {
        const el = document.getElementById(id);
        return el ? el.value.trim() : "";
    }

    // 🔐 REGISTER (MOBILE SAFE)
    window.registerUser = function () {

        const username = getVal("regUsername");
        const email = getVal("regEmail").toLowerCase();
        const password = getVal("regPassword");
        const confirm = getVal("regConfirm");

        if (!username || !email || !password || !confirm) {
            alert("Fill all fields");
            return;
        }

        if (password !== confirm) {
            alert("Passwords do not match");
            return;
        }

        const users = getUsers();

        const emailTaken = users.some(u => u.email === email);

        if (emailTaken) {
            alert("Email already exists");
            return;
        }

        users.push({
            username: username,
            email: email,
            password: password
        });

        saveUsers(users);

        alert("Account created successfully");
    };

    // 🔑 LOGIN (MOBILE SAFE)
    window.loginUser = function () {

        const email = getVal("loginEmail").toLowerCase();
        const password = getVal("loginPassword");

        const users = getUsers();

        const user = users.find(
            u => u.email === email && u.password === password
        );

        if (!user) {
            alert("Wrong email or password");
            return;
        }

        alert("Welcome " + user.username);
    };

});



let historyStack = [];
const ULTRA_ACTIVE = "skyblue_squush_state_page_visible_mode_ultra_active";

/* SWITCH PAGE */
function switchPage(page){

    let current = document.querySelector("." + ULTRA_ACTIVE);
    if(current){
        historyStack.push(current.id.replace("Page",""));
        current.classList.remove(ULTRA_ACTIVE);
    }

    document.querySelectorAll(".skyblue_squush_page").forEach(p =>
        p.classList.remove(ULTRA_ACTIVE)
    );

    document.getElementById(page + "Page").classList.add(ULTRA_ACTIVE);
}

/* BACK */
function goBack(){
    if(historyStack.length === 0) return;

    let prev = historyStack.pop();

    document.querySelectorAll(".skyblue_squush_page").forEach(p =>
        p.classList.remove(ULTRA_ACTIVE)
    );

    document.getElementById(prev + "Page").classList.add(ULTRA_ACTIVE);
}

/* LOADER */
function showLoader(){
    document.getElementById("loader").style.display = "flex";
}
function hideLoader(){
    document.getElementById("loader").style.display = "none";
}

/* IMAGE */
function readImage(file, cb){
    const r = new FileReader();
    r.onload = e => cb(e.target.result);
    r.readAsDataURL(file);
}

/* REGISTER */
function registerUser(){
    let user = {
        username: regUsername.value,
        email: regEmail.value,
        password: regPassword.value,
        confirm: regConfirm.value,
        image: localStorage.getItem("tempImage") || ""
    };

    if(user.password !== user.confirm){
        alert("Passwords do not match!");
        return;
    }

    localStorage.setItem("skyblue_user", JSON.stringify(user));
    alert("Account created!");
    switchPage("login");
}

/* LOGIN */
function loginWithLoader(){

    document.getElementById("mainCard").style.display = "none";
    showLoader();

    setTimeout(() => {

        hideLoader();

        let saved = JSON.parse(localStorage.getItem("skyblue_user"));

        if(!saved){
            alert("No account found!");
            document.getElementById("mainCard").style.display = "block";
            return;
        }

        if(loginUsername.value === saved.username && loginPassword.value === saved.password){
            dashName.innerText = saved.username;
            dashEmail.innerText = saved.email;
            dashPhone.innerText = loginPhone.value;
            dashImage.src = saved.image;

            switchPage("dashboard");
        } else {
            alert("Wrong credentials!");
            document.getElementById("mainCard").style.display = "block";
        }

    }, 1500);
}

/* LOGOUT */
function logoutUser(){
    document.getElementById("mainCard").style.display = "block";
    switchPage("login");
}

/* IMAGE */
function setupImage(id, preview){
    document.getElementById(id).addEventListener("change", function(){
        let file = this.files[0];
        if(file){
            readImage(file, img => {
                document.getElementById(preview).src = img;
                localStorage.setItem("tempImage", img);
            });
        }
    });
}

// SKYBLUE SQUUSH UPLOAD FIX (ROBUST VERSION)

document.addEventListener("DOMContentLoaded", function () {

    const loginInput = document.getElementById("loginFile");
    const registerInput = document.getElementById("registerFile");

    const loginPreview = document.getElementById("loginPreview");
    const registerPreview = document.getElementById("registerPreview");

    function handleImage(fileInput, previewImg) {
        const file = fileInput.files[0];
        if (!file) return;

        // check if file is image
        if (!file.type.startsWith("image/")) return;

        const reader = new FileReader();

        reader.onload = function (e) {
            previewImg.src = e.target.result;
            previewImg.style.width = "100px";
            previewImg.style.height = "100px";
            previewImg.style.borderRadius = "50%";
            previewImg.style.objectFit = "cover";
        };

        reader.readAsDataURL(file);
    }

    loginInput.addEventListener("change", function () {
        handleImage(this, loginPreview);
    });

    registerInput.addEventListener("change", function () {
        handleImage(this, registerPreview);
    });

});

setupImage("loginFile","loginPreview");
setupImage("registerFile","registerPreview");

document.addEventListener("DOMContentLoaded", function () {

    function getUsers() {
        return JSON.parse(localStorage.getItem("skyblue_squush_users") || "[]");
    }

    function saveUsers(users) {
        localStorage.setItem("skyblue_squush_users", JSON.stringify(users));
    }

    function emailExists(email) {
        return getUsers().some(user => user.email === email);
    }

    function getValue(id) {
        const el = document.getElementById(id);
        return el ? el.value.trim() : "";
    }

    // REGISTER
    function registerUser() {

        const username = getValue("regUsername");
        const email = getValue("regEmail").toLowerCase();
        const password = getValue("regPassword");
        const confirm = getValue("regConfirm");

        if (!username || !email || !password || !confirm) {
            alert("Please fill all fields");
            return;
        }

        if (password !== confirm) {
            alert("Passwords do not match");
            return;
        }

        if (emailExists(email)) {
            alert("Email already exists!");
            return;
        }

        const users = getUsers();

        users.push({
            username,
            email,
            password
        });

        saveUsers(users);

        alert("Account created successfully!");
    }

    // LOGIN
    function loginUser() {

        const email = getValue("loginEmail").toLowerCase();
        const password = getValue("loginPassword");

        const user = getUsers().find(
            u => u.email === email && u.password === password
        );

        if (!user) {
            alert("Wrong email or password");
            return;
        }

        alert("Welcome " + user.username);
    }

    // 🔥 MAKE FUNCTIONS WORK ON HTML BUTTONS (IMPORTANT FOR PHONES)
    window.registerUser = registerUser;
    window.loginUser = loginUser;

});

const data = [
    "Super Cube","My Hero Academia","Attack on Titan",
    "Demon Slayer","Jujutsu Kaisen","Never Have I Ever","Dr Stone","Dragon Ball",
    "Eminence in Shadow","Demon King Academia","Blinding Light",
    "Sunflower","Save You Tears","Ocean Eyes","Apt","Apature"," Adamson Praise",
    "Spy X Family", "Lofi Beats", "Cyberpunk","Turning Red","Your Idol","Watch Party Hub"
];
function showSuggestions() {
    let input = document.getElementById("searchInput").value.toLowerCase();
    let suggestionsBox = document.getElementById("suggestions");

    suggestionsBox.innerHTML = "";

    if (input === "") {
        suggestionsBox.style.display = "none";
        return;
    }

    let filtered = data.filter(item => item.toLowerCase().includes(input));

    if (filtered.length === 0) {
        suggestionsBox.style.display = "none";
        return;
    }

    filtered.forEach(item => {
        let div = document.createElement("div");
        div.innerText = item;

        div.onclick = () => {
            document.getElementById("searchInput").value = item;
            suggestionsBox.style.display = "none";
        };

        suggestionsBox.appendChild(div);
    });

    suggestionsBox.style.display = "block";
}

function toggleTheme() {
    document.body.classList.toggle("dark");

    let icon = document.getElementById("icon");
    if (document.body.classList.contains("dark")) {
        icon.innerText = "";
    } else {
        icon.innerText = "";
    }
}

function openModal() {
    document.getElementById("modal").style.display = "block";
    document.getElementById("overlay").style.display = "block";
}
function closeModal() {
    document.getElementById("modal").style.display = "none";
    document.getElementById("overlay").style.display = "none";
}

function openAcademia(){
     document.getElementById("myHero").style.display="block";
     document.getElementById("removeAcademia").style.display="none";
     document.getElementById("mytextHero").style.display="block";
     document.getElementById("mysectionHero").style.display="flex";
}
function openKaisen(){
     document.getElementById("myKaisen").style.display="block";
     document.getElementById("removeKaisen").style.display="none";
     document.getElementById("mytextKaisen").style.display="block";
     document.getElementById("mysectionKaisen").style.display="flex";
}
function openDragon(){
     document.getElementById("myDragon").style.display="block";
     document.getElementById("removeDragon").style.display="none";
     document.getElementById("mytextDragon").style.display="block";
     document.getElementById("mysectionDragon").style.display="flex";
}
function openDemon(){
     document.getElementById("mySlayer").style.display="block";
     document.getElementById("removeSlayer").style.display="none";
     document.getElementById("mytextSlayer").style.display="block";
     document.getElementById("mysectionSlayer").style.display="flex";
}
function openCube(){
     document.getElementById("myCube").style.display="block";
     document.getElementById("removeCube").style.display="none";
     document.getElementById("mytextCube").style.display="block";
     document.getElementById("mysectionCube").style.display="flex";
}
function openStoner(){
     document.getElementById("myStoner").style.display="block";
     document.getElementById("removeStone").style.display="none";
     document.getElementById("mytextStoner").style.display="block";
     document.getElementById("mysectionStoner").style.display="flex"; 
}
function openSolo(){
     document.getElementById("mySolo").style.display="block";
     document.getElementById("removeSolo").style.display="none";
     document.getElementById("mytextSolo").style.display="block";
     document.getElementById("mysectionSolo").style.display="flex"; 
}
function openTitans(){
     document.getElementById("myTitans").style.display="block";
     document.getElementById("removeTitans").style.display="none";
     document.getElementById("mytextTitans").style.display="block";
     document.getElementById("mysectionTitans").style.display="flex"; 
}
function openShadow(){
     document.getElementById("myShadow").style.display="block";
     document.getElementById("removeShadow").style.display="none";
     document.getElementById("mytextShadow").style.display="block";
     document.getElementById("mysectionShadow").style.display="flex"; 
}
function openKing(){
     document.getElementById("myKing").style.display="block";
     document.getElementById("removeKing").style.display="none";
     document.getElementById("mytextKing").style.display="block";
     document.getElementById("mysectionKing").style.display="flex"; 
}
function showAnimePage() {
    const mainContent = document.getElementById('main-content');
    
    mainContent.innerHTML = `
        <div class="squush-streaming-platform-anime-page-main-content-layout-wrapper-container" id="animePage">
               <div class="Top squush-anime-top">
               <h2 class="squush-anime-top-text">Squush Trends</h2>
     <i class="fa-solid fa-magnifying-glass squush-anime-search-btn"></i>
     <input type="text" 
        id="searchInput" onkeyup="showSuggestions()" class="search-box squush-anime-search" placeholder="Search...">
        <span id="icon" class="icon" onclick="toggleTheme()"><i class="fa-solid fa-chart-line move"></i></i></span>
                <span id="icon" class="icon" onclick="toggleTheme()"><i class="fa-solid  fa-download"></i></i></span>
     <i class="fa-solid fa-bell"></i>
     <button   onclick="closeAnimePage()" class="Login">Back</button>
     <i class="fa-solid fa-arrow-right"></i>
     </div>

    <div class="Background squush-anime-clip-head" id="myKaisen" style="display:none;">
     <div class="Anime-Steps-Content Kaisen">
          <div class="Anime-Steps">
               <div class="Anime-Steps-Set"> 
               <h2>Jujustu Kaisen</h2>
               <a>Itadori, The Strongest Sorcerer. Experience All Episodes In High Quality.</a>
               <p onclick="showWatchPage()"><button>▶ Watch Now</button>
               <button>Download All</button>
               </div>
          </div>
     </div>
  </div>

         <div class="Text-Content-Anime" id="mytextKaisen" style="display:none;">
          <h2>Download Now</h2>
          <h2>View all</h2>
            </div>

                   <div class="Anime-Scroll-Content" id="mysectionKaisen" style="display:none;">
          <div class="Anime-Section">
               <div>
                    <a>Jujustu Kaisen</a>
                    <a><p>Episode 01</p></a>
                    <button>Download</button>
                    <i class="fa-solid fa-download"></i>
                     </div>
                </div>
                          <div class="Anime-Section">
               <div>
                    <a>Jujustu Kaisen</a>
                    <a><p>Episode 02</p></a>
                    <button>Download</button>
                    <i class="fa-solid fa-download"></i>
                     </div>
                </div>
                                          <div class="Anime-Section">
               <div>
                    <a>Jujustu Kaisen</a>
                    <a><p>Episode 03</p></a>
                    <button>Download</button>
                    <i class="fa-solid fa-download"></i>
                     </div>
                </div>
                          <div class="Anime-Section">
               <div>
                    <a>Jujustu Kaisen</a>
                    <a><p>Episode 04</p></a>
                    <button>Download</button>
                    <i class="fa-solid fa-download"></i>
                     </div>
                </div>
                                          <div class="Anime-Section">
               <div>
                    <a>Jujustu Kaisen</a>
                    <a><p>Episode 05</p></a>
                    <button>Download</button>
                    <i class="fa-solid fa-download"></i>
                     </div>
                </div>
                                                          <div class="Anime-Section">
               <div>
                    <a>Jujustu Kaisen</a>
                    <a><p>Episode 06</p></a>
                    <button>Download</button>
                    <i class="fa-solid fa-download"></i>
                     </div>
                </div>
                                                          <div class="Anime-Section">
               <div>
                    <a>Jujustu Kaisen</a>
                    <a><p>Episode 07</p></a>
                    <button>Download</button>
                    <i class="fa-solid fa-download"></i>
                     </div>
                </div>
                                                          <div class="Anime-Section">
               <div>
                    <a>Jujustu Kaisen</a>
                    <a><p>Episode 08</p></a>
                    <button>Download</button>
                    <i class="fa-solid fa-download"></i>
                     </div>
                </div>
                                                          <div class="Anime-Section">
               <div>
                    <a>Jujustu Kaisen</a>
                    <a><p>Episode 09</p></a>
                    <button>Download</button>
                    <i class="fa-solid fa-download"></i>
                     </div>
                </div>
                                                          <div class="Anime-Section">
               <div>
                    <a>Jujustu Kaisen</a>
                    <a><p>Episode 10</p></a>
                    <button>Download</button>
                    <i class="fa-solid fa-download"></i>
                     </div>
                </div>
              </div>


            <div class="Anime-Steps-Content Xokitty" id="myHero" style="display:none;">
          <div class="Anime-Steps">
               <div class="Anime-Steps-Set"> 
               <h2>Xo Kitty</h2>
               <a>Kitty desire to find her mother's path. Experience All Episodes In High Quality.</a>
               <p><button>▶ Watch Now</button>
               <button>Download All</button>
               </div>
          </div>
     </div>

         <div class="Text-Content-Anime" id="mytextHero" style="display:none;">
          <h2>Download Now</h2>
          <h2>View all</h2>
            </div>

                   <div class="Anime-Scroll-Content" id="mysectionHero" style="display:none;">
          <div class="Anime-Section">
               <div>
                    <a>Xo-Kitty</a>
                    <a><p>Episode 01</p></a>
                    <button>Download</button>
                    <i class="fa-solid fa-download"></i>
                     </div>
                </div>
                          <div class="Anime-Section">
               <div>
                    <a>Xo-Kitty</a>
                    <a><p>Episode 02</p></a>
                    <button>Download</button>
                    <i class="fa-solid fa-download"></i>
                     </div>
                </div>
                                          <div class="Anime-Section">
               <div>
                    <a>Xo-Kitty</a>
                    <a><p>Episode 03</p></a>
                    <button>Download</button>
                    <i class="fa-solid fa-download"></i>
                     </div>
                </div>
                                                          <div class="Anime-Section">
               <div>
                    <a>Xo-Kitty</a>
                    <a><p>Episode 04</p></a>
                    <button>Download</button>
                    <i class="fa-solid fa-download"></i>
                     </div>
                </div>
                                                          <div class="Anime-Section">
               <div>
                    <a>Xo-Kitty</a>
                    <a><p>Episode 05</p></a>
                    <button>Download</button>
                    <i class="fa-solid fa-download"></i>
                     </div>
                </div>
                                                          <div class="Anime-Section">
               <div>
                    <a>Xo-Kitty</a>
                    <a><p>Episode 06</p></a>
                    <button>Download</button>
                    <i class="fa-solid fa-download"></i>
                     </div>
                </div>
                                                          <div class="Anime-Section">
               <div>
                    <a>Xo-Kitty</a>
                    <a><p>Episode 07</p></a>
                    <button>Download</button>
                    <i class="fa-solid fa-download"></i>
                     </div>
                </div>
                                                          <div class="Anime-Section">
               <div>
                    <a>Xo-Kitty</a>
                    <a><p>Episode 08</p></a>
                    <button>Download</button>
                    <i class="fa-solid fa-download"></i>
                     </div>
                </div>
                                                          <div class="Anime-Section">
               <div>
                    <a>Xo-Kitty</a>
                    <a><p>Episode 09</p></a>
                    <button>Download</button>
                    <i class="fa-solid fa-download"></i>
                     </div>
                </div>
                                                          <div class="Anime-Section">
               <div>
                    <a>Xo-Kitty</a>
                    <a><p>Episode 10</p></a>
                    <button>Download</button>
                    <i class="fa-solid fa-download"></i>
                     </div>
                </div>
                </div>

         <div class="Anime-Steps-Content Dragon-Ball" id="myDragon" style="display:none;">
          <div class="Anime-Steps">
               <div class="Anime-Steps-Set"> 
               <h2>Dragon Ball Super</h2>
               <a>Goku With The Quest Of Unlimited Power. Experience All Episodes In High Quality.</a>
               <p><button>▶ Watch Now</button>
               <button>Download All</button>
               </div>
          </div>
     </div>

       <div class="Text-Content-Anime" id="mytextDragon" style="display:none;">
          <h2>Download Now</h2>
          <h2>View all</h2>
            </div>

            
                   <div class="Anime-Scroll-Content" id="mysectionDragon" style="display:none;">
          <div class="Anime-Section">
               <div>
                    <a>Dragon Ball Super</a>
                    <a><p>Episode 01</p></a>
                    <button>Download</button>
                    <i class="fa-solid fa-download"></i>
                     </div>
                </div>
                          <div class="Anime-Section">
                          <div>
                                    <a>Dragon Ball Super</a>
                    <a><p>Episode 02</p></a>
                    <button>Download</button>
                    <i class="fa-solid fa-download"></i>
                     </div>
                </div>
                                          <div class="Anime-Section">
                          <div>
                                    <a>Dragon Ball Super</a>
                    <a><p>Episode 03</p></a>
                    <button>Download</button>
                    <i class="fa-solid fa-download"></i>
                     </div>
                </div>
                                          <div class="Anime-Section">
                          <div>
                                    <a>Dragon Ball Super</a>
                    <a><p>Episode 04</p></a>
                    <button>Download</button>
                    <i class="fa-solid fa-download"></i>
                     </div>
                </div>
                                          <div class="Anime-Section">
                          <div>
                                    <a>Dragon Ball Super</a>
                    <a><p>Episode 05</p></a>
                    <button>Download</button>
                    <i class="fa-solid fa-download"></i>
                     </div>
                </div>
                                          <div class="Anime-Section">
                          <div>
                                    <a>Dragon Ball Super</a>
                    <a><p>Episode 06</p></a>
                    <button>Download</button>
                    <i class="fa-solid fa-download"></i>
                     </div>
                </div>
                                          <div class="Anime-Section">
                          <div>
                                    <a>Dragon Ball Super</a>
                    <a><p>Episode 07</p></a>
                    <button>Download</button>
                    <i class="fa-solid fa-download"></i>
                     </div>
                </div>
                                          <div class="Anime-Section">
                          <div>
                                    <a>Dragon Ball Super</a>
                    <a><p>Episode 08</p></a>
                    <button>Download</button>
                    <i class="fa-solid fa-download"></i>
                     </div>
                </div>
                                          <div class="Anime-Section">
                          <div>
                                    <a>Dragon Ball Super</a>
                    <a><p>Episode 09</p></a>
                    <button>Download</button>
                    <i class="fa-solid fa-download"></i>
                     </div>
                </div>
                                          <div class="Anime-Section">
                          <div>
                                    <a>Dragon Ball Super</a>
                    <a><p>Episode 10</p></a>
                    <button>Download</button>
                    <i class="fa-solid fa-download"></i>
                     </div>
                </div>
                </div>

           <div class="Anime-Steps-Content Demon-Slayer" id="mySlayer" style="display:none;">
          <div class="Anime-Steps">
               <div class="Anime-Steps-Set"> 
               <h2>Demon Slayer</h2>
               <a>Tanjiro Becomes a Demon Slayer to protect his Sister. Experience All Episodes In High Quality.</a>
               <p><button>▶ Watch Now</button>
               <button>Download All</button>
               </div>
          </div>
     </div>

            <div class="Text-Content-Anime Demon-text" id="mytextSlayer" style="display:none;">
          <h2>Download Now</h2>
          <h2>View all</h2>
            </div>

                   <div class="Anime-Scroll-Content" id="mysectionSlayer" style="display:none;">
          <div class="Anime-Section">
               <div>
                    <a>Demon Slayer</a>
                    <a><p>Episode 01</p></a>
                    <button>Download</button>
                    <i class="fa-solid fa-download"></i>
                     </div>
                </div>
                          <div class="Anime-Section">
                          <div>
                                    <a>Demon Slayer</a>
                    <a><p>Episode 02</p></a>
                    <button>Download</button>
                    <i class="fa-solid fa-download"></i>
                     </div>
                </div>
                                          <div class="Anime-Section">
                          <div>
                                    <a>Demon Slayer</a>
                    <a><p>Episode 03</p></a>
                    <button>Download</button>
                    <i class="fa-solid fa-download"></i>
                     </div>
                </div>
                                          <div class="Anime-Section">
                          <div>
                                    <a>Demon Slayer</a>
                    <a><p>Episode 04</p></a>
                    <button>Download</button>
                    <i class="fa-solid fa-download"></i>
                     </div>
                </div>
                                          <div class="Anime-Section">
                          <div>
                                    <a>Demon Slayer</a>
                    <a><p>Episode 05</p></a>
                    <button>Download</button>
                    <i class="fa-solid fa-download"></i>
                     </div>
                </div>
                                          <div class="Anime-Section">
                          <div>
                                    <a>Demon Slayer</a>
                    <a><p>Episode 06</p></a>
                    <button>Download</button>
                    <i class="fa-solid fa-download"></i>
                     </div>
                </div>
                                          <div class="Anime-Section">
                          <div>
                                    <a>Demon Slayer</a>
                    <a><p>Episode 07</p></a>
                    <button>Download</button>
                    <i class="fa-solid fa-download"></i>
                     </div>
                </div>
                                          <div class="Anime-Section">
                          <div>
                                    <a>Demon Slayer</a>
                    <a><p>Episode 08</p></a>
                    <button>Download</button>
                    <i class="fa-solid fa-download"></i>
                     </div>
                </div>
                                          <div class="Anime-Section">
                          <div>
                                    <a>Demon Slayer</a>
                    <a><p>Episode 09</p></a>
                    <button>Download</button>
                    <i class="fa-solid fa-download"></i>
                     </div>
                </div>
                                          <div class="Anime-Section">
                          <div>
                                    <a>Demon Slayer</a>
                    <a><p>Episode 10</p></a>
                    <button>Download</button>
                    <i class="fa-solid fa-download"></i>
                     </div>
                </div>
                </div>

                 <div class="Anime-Steps-Content Super-Cube" id="myCube" style="display:none;">
          <div class="Anime-Steps">
               <div class="Anime-Steps-Set"> 
               <h2>Super Cube</h2>
               <a>Wang Xiaoxiu, who accidentally obtains the mysterious "Superpower Cube".Experience All Episodes In High Quality.</a>
               <p><button>▶ Watch Now</button>
               <button>Download All</button>
               </div>
          </div>
     </div>

            <div class="Text-Content-Anime Demon-text" id="mytextCube" style="display:none;">
          <h2>Download Now</h2>
          <h2>View all</h2>
            </div>

                   <div class="Anime-Scroll-Content" id="mysectionCube" style="display:none;">
          <div class="Anime-Section">
               <div>
                    <a>Super Cube</a>
                    <a><p>Episode 01</p></a>
                    <button>Download</button>
                    <i class="fa-solid fa-download"></i>
                     </div>
                </div>
                          <div class="Anime-Section">
                          <div>
                                    <a>Super Cube</a>
                    <a><p>Episode 02</p></a>
                    <button>Download</button>
                    <i class="fa-solid fa-download"></i>
                     </div>
                </div>
                                          <div class="Anime-Section">
                          <div>
                                    <a>Super Cube</a>
                    <a><p>Episode 03</p></a>
                    <button>Download</button>
                    <i class="fa-solid fa-download"></i>
                     </div>
                </div>
                                          <div class="Anime-Section">
                          <div>
                                    <a>Super Cube</a>
                    <a><p>Episode 04</p></a>
                    <button>Download</button>
                    <i class="fa-solid fa-download"></i>
                     </div>
                </div>
                                          <div class="Anime-Section">
                          <div>
                                    <a>Super Cube</a>
                    <a><p>Episode 05</p></a>
                    <button>Download</button>
                    <i class="fa-solid fa-download"></i>
                     </div>
                </div>
                                          <div class="Anime-Section">
                          <div>
                                    <a>Super Cube</a>
                    <a><p>Episode 06</p></a>
                    <button>Download</button>
                    <i class="fa-solid fa-download"></i>
                     </div>
                </div>
                                          <div class="Anime-Section">
                          <div>
                                    <a>Super Cube</a>
                    <a><p>Episode 07</p></a>
                    <button>Download</button>
                    <i class="fa-solid fa-download"></i>
                     </div>
                </div>
                                          <div class="Anime-Section">
                          <div>
                                    <a>Super Cube</a>
                    <a><p>Episode 08</p></a>
                    <button>Download</button>
                    <i class="fa-solid fa-download"></i>
                     </div>
                </div>
                                          <div class="Anime-Section">
                          <div>
                                    <a>Super Cube</a>
                    <a><p>Episode 09</p></a>
                    <button>Download</button>
                    <i class="fa-solid fa-download"></i>
                     </div>
                </div>
                                          <div class="Anime-Section">
                          <div>
                                    <a>Super Cube</a>
                    <a><p>Episode 10</p></a>
                    <button>Download</button>
                    <i class="fa-solid fa-download"></i>
                     </div>
                </div>
                </div>

          <div class="Anime-Steps-Content Dr-Stoner" id="myStoner" style="display:none;">
          <div class="Anime-Steps">
               <div class="Anime-Steps-Set"> 
               <h2>Do Revenge </h2>
               <a>Finding a purpose in high school. Experience All Episodes In High Quality.</a>
               <p><button>▶ Watch Now</button>
               <button>Download All</button>
               </div>
          </div>
     </div>

            <div class="Text-Content-Anime Demon-text" id="mytextStoner" style="display:none;">
          <h2>Download Now</h2>
          <h2>View all</h2>
            </div>

                   <div class="Anime-Scroll-Content" id="mysectionStoner" style="display:none;">
          <div class="Anime-Section">
               <div>
                    <a>Do Revenge</a>
                    <a><p>Episode 01</p></a>
                    <button>Download</button>
                    <i class="fa-solid fa-download"></i>
                     </div>
                </div>
                          <div class="Anime-Section">
                          <div>
                                    <a>Do Revenge</a>
                    <a><p>Episode 02</p></a>
                    <button>Download</button>
                    <i class="fa-solid fa-download"></i>
                     </div>
                </div>
                                          <div class="Anime-Section">
                          <div>
                                    <a>Do Revenge</a>
                    <a><p>Episode 03</p></a>
                    <button>Download</button>
                    <i class="fa-solid fa-download"></i>
                     </div>
                </div>
                                          <div class="Anime-Section">
                          <div>
                                    <a>Do Revenge</a>
                    <a><p>Episode 04</p></a>
                    <button>Download</button>
                    <i class="fa-solid fa-download"></i>
                     </div>
                </div>
                                          <div class="Anime-Section">
                          <div>
                                    <a>Do Revenge</a>
                    <a><p>Episode 05</p></a>
                    <button>Download</button>
                    <i class="fa-solid fa-download"></i>
                     </div>
                </div>
                                          <div class="Anime-Section">
                          <div>
                                    <a>Do Revenge</a>
                    <a><p>Episode 06</p></a>
                    <button>Download</button>
                    <i class="fa-solid fa-download"></i>
                     </div>
                </div>
                                          <div class="Anime-Section">
                          <div>
                                    <a>Do Revenge</a>
                    <a><p>Episode 07</p></a>
                    <button>Download</button>
                    <i class="fa-solid fa-download"></i>
                     </div>
                </div>
                                          <div class="Anime-Section">
                          <div>
                                    <a>Do Revenge</a>
                    <a><p>Episode 08</p></a>
                    <button>Download</button>
                    <i class="fa-solid fa-download"></i>
                     </div>
                </div>
                                          <div class="Anime-Section">
                          <div>
                                    <a>Do Revenge</a>
                    <a><p>Episode 09</p></a>
                    <button>Download</button>
                    <i class="fa-solid fa-download"></i>
                     </div>
                </div>
                                          <div class="Anime-Section">
                          <div>
                                    <a>Do Revenge</a>
                    <a><p>Episode 10</p></a>
                    <button>Download</button>
                    <i class="fa-solid fa-download"></i>
                     </div>
                </div>
                </div>

                   <div class="Anime-Steps-Content Solo-Level" id="mySolo" style="display:none;">
          <div class="Anime-Steps">
               <div class="Anime-Steps-Set"> 
               <h2>Never Have I Ever</h2>
               <a>Devi Having To Choose Between Two Of Her Boyfriends. Experience All Episodes In High Quality.</a>
               <p><button>▶ Watch Now</button>
               <button>Download All</button>
               </div>
          </div>
     </div>

            <div class="Text-Content-Anime Demon-text" id="mytextSolo" style="display:none;">
          <h2>Download Now</h2>
          <h2>View all</h2>
            </div>

                   <div class="Anime-Scroll-Content" id="mysectionSolo" style="display:none;">
          <div class="Anime-Section">
               <div>
                    <a>Never Have I Ever</a>
                    <a><p>Episode 01</p></a>
                    <button>Download</button>
                    <i class="fa-solid fa-download"></i>
                     </div>
                </div>
                          <div class="Anime-Section">
                          <div>
                                    <a>Never Have I Ever</a>
                    <a><p>Episode 02</p></a>
                    <button>Download</button>
                    <i class="fa-solid fa-download"></i>
                     </div>
                </div>
                                          <div class="Anime-Section">
                          <div>
                                    <a>Never Have I Ever</a>
                    <a><p>Episode 03</p></a>
                    <button>Download</button>
                    <i class="fa-solid fa-download"></i>
                     </div>
                </div>
                                          <div class="Anime-Section">
                          <div>
                                    <a>Never Have I Ever</a>
                    <a><p>Episode 04</p></a>
                    <button>Download</button>
                    <i class="fa-solid fa-download"></i>
                     </div>
                </div>
                                          <div class="Anime-Section">
                          <div>
                                    <a>Never Have I Ever</a>
                    <a><p>Episode 05</p></a>
                    <button>Download</button>
                    <i class="fa-solid fa-download"></i>
                     </div>
                </div>
                                          <div class="Anime-Section">
                          <div>
                                    <a>Never Have I Ever</a>
                    <a><p>Episode 06</p></a>
                    <button>Download</button>
                    <i class="fa-solid fa-download"></i>
                     </div>
                </div>
                                          <div class="Anime-Section">
                          <div>
                                    <a>Never Have I Ever</a>
                    <a><p>Episode 07</p></a>
                    <button>Download</button>
                    <i class="fa-solid fa-download"></i>
                     </div>
                </div>
                                          <div class="Anime-Section">
                          <div>
                                    <a>Never Have I Ever</a>
                    <a><p>Episode 08</p></a>
                    <button>Download</button>
                    <i class="fa-solid fa-download"></i>
                     </div>
                </div>
                                          <div class="Anime-Section">
                          <div>
                                    <a>Never Have I Ever</a>
                    <a><p>Episode 09</p></a>
                    <button>Download</button>
                    <i class="fa-solid fa-download"></i>
                     </div>
                </div>
                                          <div class="Anime-Section">
                          <div>
                                    <a>Never Have I Ever</a>
                    <a><p>Episode 10</p></a>
                    <button>Download</button>
                    <i class="fa-solid fa-download"></i>
                     </div>
                </div>
                </div>

                            <div class="Anime-Steps-Content On-Titans" id="myTitans" style="display:none;">
          <div class="Anime-Steps">
               <div class="Anime-Steps-Set"> 
               <h2>Attack On Titans</h2>
               <a>Fighting against the corruption of Titans. Experience All Episodes In High Quality.</a>
               <p><button>▶ Watch Now</button>
               <button>Download All</button>
               </div>
          </div>
     </div>

            <div class="Text-Content-Anime Demon-text" id="mytextTitans" style="display:none;">
          <h2>Download Now</h2>
          <h2>View all</h2>
            </div>

                   <div class="Anime-Scroll-Content" id="mysectionTitans" style="display:none;">
          <div class="Anime-Section">
               <div>
                    <a>Attack On Titans</a>
                    <a><p>Episode 01</p></a>
                    <button>Download</button>
                    <i class="fa-solid fa-download"></i>
                     </div>
                </div>
                          <div class="Anime-Section">
                          <div>
                                    <a>Attack On Titans</a>
                    <a><p>Episode 02</p></a>
                    <button>Download</button>
                    <i class="fa-solid fa-download"></i>
                     </div>
                </div>
                                          <div class="Anime-Section">
                          <div>
                                    <a>Attack On Titans</a>
                    <a><p>Episode 03</p></a>
                    <button>Download</button>
                    <i class="fa-solid fa-download"></i>
                     </div>
                </div>
                                          <div class="Anime-Section">
                          <div>
                                    <a>Attack On Titans</a>
                    <a><p>Episode 04</p></a>
                    <button>Download</button>
                    <i class="fa-solid fa-download"></i>
                     </div>
                </div>
                                          <div class="Anime-Section">
                          <div>
                                    <a>Attack On Titans</a>
                    <a><p>Episode 05</p></a>
                    <button>Download</button>
                    <i class="fa-solid fa-download"></i>
                     </div>
                </div>
                                          <div class="Anime-Section">
                          <div>
                                    <a>Attack On Titans</a>
                    <a><p>Episode 06</p></a>
                    <button>Download</button>
                    <i class="fa-solid fa-download"></i>
                     </div>
                </div>
                                          <div class="Anime-Section">
                          <div>
                                    <a>Attack On Titans</a>
                    <a><p>Episode 07</p></a>
                    <button>Download</button>
                    <i class="fa-solid fa-download"></i>
                     </div>
                </div>
                                          <div class="Anime-Section">
                          <div>
                                    <a>Attack On Titans</a>
                    <a><p>Episode 08</p></a>
                    <button>Download</button>
                    <i class="fa-solid fa-download"></i>
                     </div>
                </div>
                                          <div class="Anime-Section">
                          <div>
                                    <a>Attack On Titans</a>
                    <a><p>Episode 09</p></a>
                    <button>Download</button>
                    <i class="fa-solid fa-download"></i>
                     </div>
                </div>
                                          <div class="Anime-Section">
                          <div>
                                    <a>Attack On Titans</a>
                    <a><p>Episode 10</p></a>
                    <button>Download</button>
                    <i class="fa-solid fa-download"></i>
                     </div>
                </div>
                </div>

                             <div class="Anime-Steps-Content The-Shadow" id="myShadow" style="display:none;">
          <div class="Anime-Steps">
               <div class="Anime-Steps-Set"> 
               <h2>Wednesday</h2>
               <a>Showing Off Demon School. Experience All Episodes In High Quality.</a>
               <p><button>▶ Watch Now</button>
               <button>Download All</button>
               </div>
          </div>
     </div>

            <div class="Text-Content-Anime Demon-text" id="mytextShadow" style="display:none;">
          <h2>Download Now</h2>
          <h2>View all</h2>
            </div>

                   <div class="Anime-Scroll-Content" id="mysectionShadow" style="display:none;">
          <div class="Anime-Section">
               <div>
                    <a>Wednesday</a>
                    <a><p>Episode 01</p></a>
                    <button>Download</button>
                    <i class="fa-solid fa-download"></i>
                     </div>
                </div>
                          <div class="Anime-Section">
                          <div>
                                    <a>Wednesday</a>
                    <a><p>Episode 02</p></a>
                    <button>Download</button>
                    <i class="fa-solid fa-download"></i>
                     </div>
                </div>
                                          <div class="Anime-Section">
                          <div>
                                    <a>Wednesday</a>
                    <a><p>Episode 03</p></a>
                    <button>Download</button>
                    <i class="fa-solid fa-download"></i>
                     </div>
                </div>
                                          <div class="Anime-Section">
                          <div>
                                    <a>Wednesday</a>
                    <a><p>Episode 04</p></a>
                    <button>Download</button>
                    <i class="fa-solid fa-download"></i>
                     </div>
                </div>
                                          <div class="Anime-Section">
                          <div>
                                    <a>Wednesday</a>
                    <a><p>Episode 05</p></a>
                    <button>Download</button>
                    <i class="fa-solid fa-download"></i>
                     </div>
                </div>
                                          <div class="Anime-Section">
                          <div>
                                    <a>Wednesday</a>
                    <a><p>Episode 06</p></a>
                    <button>Download</button>
                    <i class="fa-solid fa-download"></i>
                     </div>
                </div>
                                          <div class="Anime-Section">
                          <div>
                                    <a>Wednesday</a>
                    <a><p>Episode 07</p></a>
                    <button>Download</button>
                    <i class="fa-solid fa-download"></i>
                     </div>
                </div>
                                          <div class="Anime-Section">
                          <div>
                                    <a>Wednesday</a>
                    <a><p>Episode 08</p></a>
                    <button>Download</button>
                    <i class="fa-solid fa-download"></i>
                     </div>
                </div>
                                          <div class="Anime-Section">
                          <div>
                                    <a>Wednesday</a>
                    <a><p>Episode 09</p></a>
                    <button>Download</button>
                    <i class="fa-solid fa-download"></i>
                     </div>
                </div>
                                          <div class="Anime-Section">
                          <div>
                                    <a>Wednesday</a>
                    <a><p>Episode 10</p></a>
                    <button>Download</button>
                    <i class="fa-solid fa-download"></i>
                     </div>
                </div>
                </div>

                                           <div class="Anime-Steps-Content Demon-King" id="myKing" style="display:none;">
          <div class="Anime-Steps">
               <div class="Anime-Steps-Set"> 
               <h2> Misfit of The Demon King Academia</h2>
               <a>Reclaiming his throne from a fake Demon King. Experience All Episodes In High Quality.</a>
               <p><button>▶ Watch Now</button>
               <button>Download All</button>
               </div>
          </div>
     </div>

            <div class="Text-Content-Anime Demon-text" id="mytextKing" style="display:none;">
          <h2>Download Now</h2>
          <h2>View all</h2>
            </div>

                   <div class="Anime-Scroll-Content" id="mysectionKing" style="display:none;">
          <div class="Anime-Section">
               <div>
                    <a>Demon King Academia</a>
                    <a><p>Episode 01</p></a>
                    <button>Download</button>
                    <i class="fa-solid fa-download"></i>
                     </div>
                </div>
                          <div class="Anime-Section">
                          <div>
                                    <a>Demon King Academia</a>
                    <a><p>Episode 02</p></a>
                    <button>Download</button>
                    <i class="fa-solid fa-download"></i>
                     </div>
                </div>
                                          <div class="Anime-Section">
                          <div>
                                    <a>Demon King Academia</a>
                    <a><p>Episode 03</p></a>
                    <button>Download</button>
                    <i class="fa-solid fa-download"></i>
                     </div>
                </div>
                                          <div class="Anime-Section">
                          <div>
                                    <a>Demon King Academia</a>
                    <a><p>Episode 04</p></a>
                    <button>Download</button>
                    <i class="fa-solid fa-download"></i>
                     </div>
                </div>
                                          <div class="Anime-Section">
                          <div>
                                    <a>Demon King Academia</a>
                    <a><p>Episode 05</p></a>
                    <button>Download</button>
                    <i class="fa-solid fa-download"></i>
                     </div>
                </div>
                                          <div class="Anime-Section">
                          <div>
                                    <a>Demon King Academia</a>
                    <a><p>Episode 06</p></a>
                    <button>Download</button>
                    <i class="fa-solid fa-download"></i>
                     </div>
                </div>
                                          <div class="Anime-Section">
                          <div>
                                    <a>Demon King Academia</a>
                    <a><p>Episode 07</p></a>
                    <button>Download</button>
                    <i class="fa-solid fa-download"></i>
                     </div>
                </div>
                                          <div class="Anime-Section">
                          <div>
                                    <a>Demon King Academia</a>
                    <a><p>Episode 08</p></a>
                    <button>Download</button>
                    <i class="fa-solid fa-download"></i>
                     </div>
                </div>
                                          <div class="Anime-Section">
                          <div>
                                    <a>Demon King Academia</a>
                    <a><p>Episode 09</p></a>
                    <button>Download</button>
                    <i class="fa-solid fa-download"></i>
                     </div>
                </div>
                                          <div class="Anime-Section">
                          <div>
                                    <a>Demon King Academia</a>
                    <a><p>Episode 10</p></a>
                    <button>Download</button>
                    <i class="fa-solid fa-download"></i>
                     </div>
                </div>
                </div>

                        <div class="Text-Content Squush-Scroll-Text">
          <h2>Recommended For You</h2>
          <h2>View all</h2>
  </div>


                <div class="Scroll-Content Squush-Scroll">
          <div class="Section" onclick="closeBody(),showAnimePage(),openKaisen()" id="removeKaisen">
               <div>
                    <a>Jujustu Kaisen</a>
                    <a><p>Episode 15</p></a>
                    <button>Download</button>
                    <i class="fa-solid fa-download"></i>
               </div>
          </div>
          <div class="Section" onclick="closeBody(),showAnimePage(),openAcademia()"id="removeAcademia">
               <div>
                    <a>Xo Kitty</a>
                    <a><p>Episode 19</p></a>
                    <button>Download</button>
                    <i class="fa-solid fa-download"></i>               
               </div>
          </div>
          <div class="Section" onclick="closeBody(),showAnimePage(),openCube()" id="removeCube">
               <div>
                    <a>Super Cube</a>
                    <a><p>Episode 22</p></a>
                    <button>Download</button>
                    <i class="fa-solid fa-download"></i>               
               </div>
          </div>
          <div class="Section" onclick="closeBody(),showAnimePage(),openStoner()" id="removeStone">
               <div>
                    <a>Do Revenge</a>
                    <a><p>Episode 13</p></a>
                    <button>Download</button>
                    <i class="fa-solid fa-download"></i>             
               </div>
          </div>
          <div class="Section" onclick="closeBody(),showAnimePage(),openSolo()" id="removeSolo">
               <div>
                    <a>Never Have I Ever</a>
                    <a><p>Episode 11</p></a>
                    <button>Download</button>
                    <i class="fa-solid fa-download"></i>              
               </div>
          </div>       
          <div class="Section" onclick="closeBody(),showAnimePage(),openTitans()" id="removeTitans">
               <div>
                    <a>Attack On Titans</a>
                    <a><p>Episode 82</p></a>
                    <button>Download</button>
                    <i class="fa-solid fa-download"></i>               
               </div>
          </div>
          <div class="Section" onclick="closeBody(),showAnimePage(),openDragon()" id="removeDragon">
               <div>
                    <a>Dragon Ball Super</a>
                    <a><p>Episode 73</p></a>
                    <button>Download</button>
                    <i class="fa-solid fa-download"></i>               
               </div>
          </div>
          <div class="Section" onclick="closeBody(),showAnimePage(),openDemon()" id="removeSlayer">
               <div>
                    <a>Demons Slayer</a>
                    <a><p>Episode 24</p></a>
                    <button>Download</button>
                    <i class="fa-solid fa-download"></i>        
               </div>
          </div>
          <div class="Section" onclick="closeBody(),showAnimePage(),openShadow()" id="removeShadow">
               <div>
                    <a>Wednesday</a>
                    <a><p>Episode 12</p></a>
                    <button>Download</button>
                    <i class="fa-solid fa-download"></i>               
               </div>
          </div>
          <div class="Section" onclick="closeBody(),showAnimePage(),openKing()" id="removeKing">
               <div>
                    <a>Demon King Academia</a>
                    <a><p>Episode 11</p></a>
                    <button>Download</button>
                    <i class="fa-solid fa-download"></i>               
               </div>
          </div>
  </div>

            <div class="Anime-footer">
    <div><h4>StreamingBox</h4><p>Streaming UI website.</p></div>
    <div><h4>Explore</h4><p>Trending Anime.</p></div>
    <div><h4>Developed by</h4><p>Adamson Augustine.</p></div>
  </div>
                <div class="Anime-copyrights">© 2025 Sqaush Demo</div>
        </div>
    `;
}
function closeAnimePage() {
    document.getElementById("animePage").style.display ="none";
    document.getElementById("bodyTab").style.display ="block";
    document.getElementById("footMargin").style.display="block";
}
function showMoviesPage() {
     const mainContent = document.getElementById('main-content');
     mainContent.innerHTML = `
          <div class="squush-streaming-platform-movies-page-main-content-layout-wrapper-container" id="moviesPage">
                              <div class="Top squush-anime-top">
               <h2 class="squush-anime-top-text">Squush Movies</h2>
     <i class="fa-solid fa-magnifying-glass squush-anime-search-btn"></i>
     <input type="text" 
        id="searchInput" onkeyup="showSuggestions()" class="search-box squush-anime-search" placeholder="Search...">
        <span id="icon" class="icon" onclick="toggleTheme()"><i class="fa-solid fa-moon move"></i></span>
                <span id="icon" class="icon" onclick="toggleTheme()"><i class="fa-solid fa-chart-line"></i></i></span>
     <i class="fa-solid fa-bell"></i>
     <button   onclick="closeMoviesPage()" class="Login">Back</button>
     <i class="fa-solid fa-arrow-right"></i>
     </div>

          </div>
    `;
}
function closeMoviesPage() {
    document.getElementById("moviesPage").style.display ="none";
    document.getElementById("bodyTab").style.display ="block";
     document.getElementById("footMargin").style.display="block";
}
function showAboutPage() {
     const mainContent = document.getElementById('main-content');
     mainContent.innerHTML = `
          <div class="squush-streaming-platform-movies-page-main-content-layout-wrapper-container" id="aboutPage">
                              <div class="Top squush-anime-top">
               <h2 class="squush-anime-top-text">Squush About</h2>
     <i class="fa-solid fa-magnifying-glass squush-anime-search-btn"></i>
     <input type="text" 
        id="searchInput" onkeyup="showSuggestions()" class="search-box squush-anime-search" placeholder="Search...">
        <span id="icon" class="icon" onclick="toggleTheme()"><i class="fa-solid fa-moon move"></i></span>
                <span id="icon" class="icon" onclick="toggleTheme()"><i class="fa-solid fa-star"></i></i></span>
     <i class="fa-solid fa-bell"></i>
     <button   onclick="closeAboutPage()" class="Login">Back</button>
     <i class="fa-solid fa-arrow-right"></i>
     </div>

          </div>
    `;
}
function showWatchPage() {
     const mainContent = document.getElementById('main-content');
     mainContent.innerHTML = `
          <div class="squush-streaming-platform-watch-page-main-content-layout-wrapper-container" id="closeWatchPage">
                    <div class="Video-Watch">
                         <iframe width="560" height="315" src="https://www.youtube.com/embed/9OhV3IWUsxE?si=Ds9bB__MecVY-quk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen poster="https://wallpapers.com/images/hd/jujutsu-kaisen-4k-anime-characters-hccbh0fp7rl24yd0.jpg")center/cover"></iframe>    
                    </div>
                    
         <div class="Video-Watch-Text">
          <h2>Jujustu Kaisen</h2>
          <h2 onclick="closeWatchPage(),closeBody(),showAnimePage(),openKaisen()">Back</h2>
            </div>
          </div>
    `;
}    
function closeWatchPage(){
     document.getElementById("closeWatchPage").style.display="none";
}
function closeAboutPage() {
    document.getElementById("aboutPage").style.display ="none";
    document.getElementById("bodyTab").style.display ="block";
     document.getElementById("footMargin").style.display="block";
}
function openBody(){
    document.getElementById("bodyTab").style.display ="block";
}
function closeBody() {
    document.getElementById("bodyTab").style.display = "none";
    document.getElementById("footMargin").style.display="none";
}
