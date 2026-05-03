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

    <div class="Background squush-anime-clip-head">
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

         <div class="Text-Content-Anime ">
          <h2>Download Now</h2>
          <h2>View all</h2>
            </div>

                   <div class="Anime-Scroll-Content">
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

            <div class="Anime-Steps-Content Dr-Stone">
          <div class="Anime-Steps">
               <div class="Anime-Steps-Set"> 
               <h2>My Hero Academia</h2>
               <a>Izuku Midoriya Unlocks All For One!. Experience All Episodes In High Quality.</a>
               <p><button>▶ Watch Now</button>
               <button>Download All</button>
               </div>
          </div>
     </div>

         <div class="Text-Content-Anime">
          <h2>Download Now</h2>
          <h2>View all</h2>
            </div>

                   <div class="Anime-Scroll-Content">
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

         <div class="Anime-Steps-Content Dragon-Ball">
          <div class="Anime-Steps">
               <div class="Anime-Steps-Set"> 
               <h2>Dragon Ball Super</h2>
               <a>Goku With The Quest Of Unlimited Power. Experience All Episodes In High Quality.</a>
               <p><button>▶ Watch Now</button>
               <button>Download All</button>
               </div>
          </div>
     </div>

            <div class="Text-Content-Anime">
          <h2>Download Now</h2>
          <h2>View all</h2>
            </div>

            
                   <div class="Anime-Scroll-Content">
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