const data = [
    "Super Cube","My Hero Academia","Attack on Titan",
    "Demon Slayer","Jujutsu Kaisen","Solo Leveling","Dr Stone","Dragon Ball",
    "Eminence in Shadow","Demon King Academia","Blinding Light",
    "Sunflower","Save You Tears","Ocean Eyes","Apt","Apature",
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
     document.getElementById("mytextHero").style.display="block";
     document.getElementById("mysectionHero").style.display="flex";
}
function openKaisen(){
     document.getElementById("myKaisen").style.display="block";
     document.getElementById("mytextKaisen").style.display="block";
     document.getElementById("mysectionKaisen").style.display="flex";
}
function openDragon(){
     document.getElementById("myDragon").style.display="block";
     document.getElementById("mytextDragon").style.display="block";
     document.getElementById("mysectionDragon").style.display="flex";
}
function openDemon(){
     document.getElementById("mySlayer").style.display="block";
     document.getElementById("mytextSlayer").style.display="block";
     document.getElementById("mysectionSlayer").style.display="flex";
}
function openCube(){
     document.getElementById("myCube").style.display="block";
     document.getElementById("mytextCube").style.display="block";
     document.getElementById("mysectionCube").style.display="flex";
}
function openStoner(){
     document.getElementById("myStoner").style.display="block";
     document.getElementById("mytextStoner").style.display="block";
     document.getElementById("mysectionStoner").style.display="flex"; 
}
function openSolo(){
     document.getElementById("mySolo").style.display="block";
     document.getElementById("mytextSolo").style.display="block";
     document.getElementById("mysectionSolo").style.display="flex"; 
}
function openTitans(){
     document.getElementById("myTitans").style.display="block";
     document.getElementById("mytextTitans").style.display="block";
     document.getElementById("mysectionTitans").style.display="flex"; 
}
function openShadow(){
     document.getElementById("myShadow").style.display="block";
     document.getElementById("mytextShadow").style.display="block";
     document.getElementById("mysectionShadow").style.display="flex"; 
}
function openKing(){
     document.getElementById("myKing").style.display="block";
     document.getElementById("mytextKing").style.display="block";
     document.getElementById("mysectionKing").style.display="flex"; 
}
function showAnimePage() {
    const mainContent = document.getElementById('main-content');
    
    mainContent.innerHTML = `
        <div class="squush-streaming-platform-anime-page-main-content-layout-wrapper-container" id="animePage">
               <div class="Top squush-anime-top">
               <h2 class="squush-anime-top-text">Squush Anime</h2>
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
     <div class="Anime-Steps-Content squush-anime-clip">
          <div class="Anime-Steps">
               <div class="Anime-Steps-Set"> 
               <h2>Jujustu Kaisen</h2>
               <a>Itadori, The Strongest Sorcerer. Experience All Episodes In High Quality.</a>
               <p><button>▶ Watch Now</button>
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


            <div class="Anime-Steps-Content Dr-Stone" id="myHero" style="display:none;">
          <div class="Anime-Steps">
               <div class="Anime-Steps-Set"> 
               <h2>My Hero Academia</h2>
               <a>Izuku Midoriya Unlocks All For One!. Experience All Episodes In High Quality.</a>
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
                    <a>My Hero Academia</a>
                    <a><p>Episode 01</p></a>
                    <button>Download</button>
                    <i class="fa-solid fa-download"></i>
                     </div>
                </div>
                          <div class="Anime-Section">
               <div>
                    <a>My Hero Academia</a>
                    <a><p>Episode 02</p></a>
                    <button>Download</button>
                    <i class="fa-solid fa-download"></i>
                     </div>
                </div>
                                          <div class="Anime-Section">
               <div>
                    <a>My Hero Academia</a>
                    <a><p>Episode 03</p></a>
                    <button>Download</button>
                    <i class="fa-solid fa-download"></i>
                     </div>
                </div>
                                                          <div class="Anime-Section">
               <div>
                    <a>My Hero Academia</a>
                    <a><p>Episode 04</p></a>
                    <button>Download</button>
                    <i class="fa-solid fa-download"></i>
                     </div>
                </div>
                                                          <div class="Anime-Section">
               <div>
                    <a>My Hero Academia</a>
                    <a><p>Episode 05</p></a>
                    <button>Download</button>
                    <i class="fa-solid fa-download"></i>
                     </div>
                </div>
                                                          <div class="Anime-Section">
               <div>
                    <a>My Hero Academia</a>
                    <a><p>Episode 06</p></a>
                    <button>Download</button>
                    <i class="fa-solid fa-download"></i>
                     </div>
                </div>
                                                          <div class="Anime-Section">
               <div>
                    <a>My Hero Academia</a>
                    <a><p>Episode 07</p></a>
                    <button>Download</button>
                    <i class="fa-solid fa-download"></i>
                     </div>
                </div>
                                                          <div class="Anime-Section">
               <div>
                    <a>My Hero Academia</a>
                    <a><p>Episode 08</p></a>
                    <button>Download</button>
                    <i class="fa-solid fa-download"></i>
                     </div>
                </div>
                                                          <div class="Anime-Section">
               <div>
                    <a>My Hero Academia</a>
                    <a><p>Episode 09</p></a>
                    <button>Download</button>
                    <i class="fa-solid fa-download"></i>
                     </div>
                </div>
                                                          <div class="Anime-Section">
               <div>
                    <a>My Hero Academia</a>
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
               <h2>Dr Stone</h2>
               <a>Senku a Scientist with the derise to revive Humanity. Experience All Episodes In High Quality.</a>
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
                    <a>Dr Stone</a>
                    <a><p>Episode 01</p></a>
                    <button>Download</button>
                    <i class="fa-solid fa-download"></i>
                     </div>
                </div>
                          <div class="Anime-Section">
                          <div>
                                    <a>Dr Stone</a>
                    <a><p>Episode 02</p></a>
                    <button>Download</button>
                    <i class="fa-solid fa-download"></i>
                     </div>
                </div>
                                          <div class="Anime-Section">
                          <div>
                                    <a>Dr Stone</a>
                    <a><p>Episode 03</p></a>
                    <button>Download</button>
                    <i class="fa-solid fa-download"></i>
                     </div>
                </div>
                                          <div class="Anime-Section">
                          <div>
                                    <a>Dr Stone</a>
                    <a><p>Episode 04</p></a>
                    <button>Download</button>
                    <i class="fa-solid fa-download"></i>
                     </div>
                </div>
                                          <div class="Anime-Section">
                          <div>
                                    <a>Dr Stone</a>
                    <a><p>Episode 05</p></a>
                    <button>Download</button>
                    <i class="fa-solid fa-download"></i>
                     </div>
                </div>
                                          <div class="Anime-Section">
                          <div>
                                    <a>Dr Stone</a>
                    <a><p>Episode 06</p></a>
                    <button>Download</button>
                    <i class="fa-solid fa-download"></i>
                     </div>
                </div>
                                          <div class="Anime-Section">
                          <div>
                                    <a>Dr Stone</a>
                    <a><p>Episode 07</p></a>
                    <button>Download</button>
                    <i class="fa-solid fa-download"></i>
                     </div>
                </div>
                                          <div class="Anime-Section">
                          <div>
                                    <a>Dr Stone</a>
                    <a><p>Episode 08</p></a>
                    <button>Download</button>
                    <i class="fa-solid fa-download"></i>
                     </div>
                </div>
                                          <div class="Anime-Section">
                          <div>
                                    <a>Dr Stone</a>
                    <a><p>Episode 09</p></a>
                    <button>Download</button>
                    <i class="fa-solid fa-download"></i>
                     </div>
                </div>
                                          <div class="Anime-Section">
                          <div>
                                    <a>Dr Stone</a>
                    <a><p>Episode 10</p></a>
                    <button>Download</button>
                    <i class="fa-solid fa-download"></i>
                     </div>
                </div>
                </div>

                   <div class="Anime-Steps-Content Solo-Level" id="mySolo" style="display:none;">
          <div class="Anime-Steps">
               <div class="Anime-Steps-Set"> 
               <h2>Solo Leveling</h2>
               <a>Jin-Woo an E-Rank Hunter, unlock unlimited power in a double dungeon after death. Experience All Episodes In High Quality.</a>
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
                    <a>Solo Leveling</a>
                    <a><p>Episode 01</p></a>
                    <button>Download</button>
                    <i class="fa-solid fa-download"></i>
                     </div>
                </div>
                          <div class="Anime-Section">
                          <div>
                                    <a>Solo Leveling</a>
                    <a><p>Episode 02</p></a>
                    <button>Download</button>
                    <i class="fa-solid fa-download"></i>
                     </div>
                </div>
                                          <div class="Anime-Section">
                          <div>
                                    <a>Solo Leveling</a>
                    <a><p>Episode 03</p></a>
                    <button>Download</button>
                    <i class="fa-solid fa-download"></i>
                     </div>
                </div>
                                          <div class="Anime-Section">
                          <div>
                                    <a>Solo Leveling</a>
                    <a><p>Episode 04</p></a>
                    <button>Download</button>
                    <i class="fa-solid fa-download"></i>
                     </div>
                </div>
                                          <div class="Anime-Section">
                          <div>
                                    <a>Solo Leveling</a>
                    <a><p>Episode 05</p></a>
                    <button>Download</button>
                    <i class="fa-solid fa-download"></i>
                     </div>
                </div>
                                          <div class="Anime-Section">
                          <div>
                                    <a>Solo Leveling</a>
                    <a><p>Episode 06</p></a>
                    <button>Download</button>
                    <i class="fa-solid fa-download"></i>
                     </div>
                </div>
                                          <div class="Anime-Section">
                          <div>
                                    <a>Solo Leveling</a>
                    <a><p>Episode 07</p></a>
                    <button>Download</button>
                    <i class="fa-solid fa-download"></i>
                     </div>
                </div>
                                          <div class="Anime-Section">
                          <div>
                                    <a>Solo Leveling</a>
                    <a><p>Episode 08</p></a>
                    <button>Download</button>
                    <i class="fa-solid fa-download"></i>
                     </div>
                </div>
                                          <div class="Anime-Section">
                          <div>
                                    <a>Solo Leveling</a>
                    <a><p>Episode 09</p></a>
                    <button>Download</button>
                    <i class="fa-solid fa-download"></i>
                     </div>
                </div>
                                          <div class="Anime-Section">
                          <div>
                                    <a>Solo Leveling</a>
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
               <h2>Eminence In The Shadow</h2>
               <a>Entering a new World as a baby with Strenght. Experience All Episodes In High Quality.</a>
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
                    <a>Eminence In Shadow</a>
                    <a><p>Episode 01</p></a>
                    <button>Download</button>
                    <i class="fa-solid fa-download"></i>
                     </div>
                </div>
                          <div class="Anime-Section">
                          <div>
                                    <a>Eminence In Shadow</a>
                    <a><p>Episode 02</p></a>
                    <button>Download</button>
                    <i class="fa-solid fa-download"></i>
                     </div>
                </div>
                                          <div class="Anime-Section">
                          <div>
                                    <a>Eminence In Shadow</a>
                    <a><p>Episode 03</p></a>
                    <button>Download</button>
                    <i class="fa-solid fa-download"></i>
                     </div>
                </div>
                                          <div class="Anime-Section">
                          <div>
                                    <a>Eminence In Shadow</a>
                    <a><p>Episode 04</p></a>
                    <button>Download</button>
                    <i class="fa-solid fa-download"></i>
                     </div>
                </div>
                                          <div class="Anime-Section">
                          <div>
                                    <a>Eminence In Shadow</a>
                    <a><p>Episode 05</p></a>
                    <button>Download</button>
                    <i class="fa-solid fa-download"></i>
                     </div>
                </div>
                                          <div class="Anime-Section">
                          <div>
                                    <a>Eminence In Shadow</a>
                    <a><p>Episode 06</p></a>
                    <button>Download</button>
                    <i class="fa-solid fa-download"></i>
                     </div>
                </div>
                                          <div class="Anime-Section">
                          <div>
                                    <a>Eminence In Shadow</a>
                    <a><p>Episode 07</p></a>
                    <button>Download</button>
                    <i class="fa-solid fa-download"></i>
                     </div>
                </div>
                                          <div class="Anime-Section">
                          <div>
                                    <a>Eminence In Shadow</a>
                    <a><p>Episode 08</p></a>
                    <button>Download</button>
                    <i class="fa-solid fa-download"></i>
                     </div>
                </div>
                                          <div class="Anime-Section">
                          <div>
                                    <a>Eminence In Shadow</a>
                    <a><p>Episode 09</p></a>
                    <button>Download</button>
                    <i class="fa-solid fa-download"></i>
                     </div>
                </div>
                                          <div class="Anime-Section">
                          <div>
                                    <a>Eminence In Shadow</a>
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
          <div class="Section">
               <div>
                    <a>Jujustu Kaisen</a>
                    <a><p>Episode 15</p></a>
                    <button>Download</button>
                    <i class="fa-solid fa-download"></i>
               </div>
          </div>
          <div class="Section">
               <div>
                    <a>My Hero Academia</a>
                    <a><p>Episode 19</p></a>
                    <button>Download</button>
                    <i class="fa-solid fa-download"></i>               
               </div>
          </div>
          <div class="Section">
               <div>
                    <a>Super Cube</a>
                    <a><p>Episode 22</p></a>
                    <button>Download</button>
                    <i class="fa-solid fa-download"></i>               
               </div>
          </div>
          <div class="Section">
               <div>
                    <a>Dr Stone</a>
                    <a><p>Episode 13</p></a>
                    <button>Download</button>
                    <i class="fa-solid fa-download"></i>             
               </div>
          </div>
          <div class="Section">
               <div>
                    <a>Solo Leveling</a>
                    <a><p>Episode 11</p></a>
                    <button>Download</button>
                    <i class="fa-solid fa-download"></i>              
               </div>
          </div>       
          <div class="Section">
               <div>
                    <a>Attack On Titans</a>
                    <a><p>Episode 82</p></a>
                    <button>Download</button>
                    <i class="fa-solid fa-download"></i>               
               </div>
          </div>
          <div class="Section">
               <div>
                    <a>Dragon Ball Super</a>
                    <a><p>Episode 73</p></a>
                    <button>Download</button>
                    <i class="fa-solid fa-download"></i>               
               </div>
          </div>
          <div class="Section">
               <div>
                    <a>Demons Slayer</a>
                    <a><p>Episode 24</p></a>
                    <button>Download</button>
                    <i class="fa-solid fa-download"></i>        
               </div>
          </div>
          <div class="Section">
               <div>
                    <a>Eminence in Shadow</a>
                    <a><p>Episode 12</p></a>
                    <button>Download</button>
                    <i class="fa-solid fa-download"></i>               
               </div>
          </div>
          <div class="Section">
               <div>
                    <a>Demon King Academia</a>
                    <a><p>Episode 11</p></a>
                    <button>Download</button>
                    <i class="fa-solid fa-download"></i>               
               </div>
          </div>
  </div>

            <div class="Anime-footer">
    <div><h4>MovieBox</h4><p>Streaming UI website.</p></div>
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
    document.getElementById("myheroTab").style.display="none";
    document.getElementById("mytextHero").style.display="none";
    document.getElementById("mysectionHero").style.display="none";
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
