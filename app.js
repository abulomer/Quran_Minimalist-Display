// ============================================================
// القرآن الكريم - Quran Application
// Reciter: Sheikh Abdullah Basfar (Offline Version)
// ============================================================

// ===== SURAH METADATA =====
const SURAHS = [
  { number: 1, name: "الفاتحة", ayahCount: 7, type: "مكية" },
  { number: 2, name: "البقرة", ayahCount: 286, type: "مدنية" },
  { number: 3, name: "آل عمران", ayahCount: 200, type: "مدنية" },
  { number: 4, name: "النساء", ayahCount: 176, type: "مدنية" },
  { number: 5, name: "المائدة", ayahCount: 120, type: "مدنية" },
  { number: 6, name: "الأنعام", ayahCount: 165, type: "مكية" },
  { number: 7, name: "الأعراف", ayahCount: 206, type: "مكية" },
  { number: 8, name: "الأنفال", ayahCount: 75, type: "مدنية" },
  { number: 9, name: "التوبة", ayahCount: 129, type: "مدنية" },
  { number: 10, name: "يونس", ayahCount: 109, type: "مكية" },
  { number: 11, name: "هود", ayahCount: 123, type: "مكية" },
  { number: 12, name: "يوسف", ayahCount: 111, type: "مكية" },
  { number: 13, name: "الرعد", ayahCount: 43, type: "مدنية" },
  { number: 14, name: "إبراهيم", ayahCount: 52, type: "مكية" },
  { number: 15, name: "الحجر", ayahCount: 99, type: "مكية" },
  { number: 16, name: "النحل", ayahCount: 128, type: "مكية" },
  { number: 17, name: "الإسراء", ayahCount: 111, type: "مكية" },
  { number: 18, name: "الكهف", ayahCount: 110, type: "مكية" },
  { number: 19, name: "مريم", ayahCount: 98, type: "مكية" },
  { number: 20, name: "طه", ayahCount: 135, type: "مكية" },
  { number: 21, name: "الأنبياء", ayahCount: 112, type: "مكية" },
  { number: 22, name: "الحج", ayahCount: 78, type: "مدنية" },
  { number: 23, name: "المؤمنون", ayahCount: 118, type: "مكية" },
  { number: 24, name: "النور", ayahCount: 64, type: "مدنية" },
  { number: 25, name: "الفرقان", ayahCount: 77, type: "مكية" },
  { number: 26, name: "الشعراء", ayahCount: 227, type: "مكية" },
  { number: 27, name: "النمل", ayahCount: 93, type: "مكية" },
  { number: 28, name: "القصص", ayahCount: 88, type: "مكية" },
  { number: 29, name: "العنكبوت", ayahCount: 69, type: "مكية" },
  { number: 30, name: "الروم", ayahCount: 60, type: "مكية" },
  { number: 31, name: "لقمان", ayahCount: 34, type: "مكية" },
  { number: 32, name: "السجدة", ayahCount: 30, type: "مكية" },
  { number: 33, name: "الأحزاب", ayahCount: 73, type: "مدنية" },
  { number: 34, name: "سبأ", ayahCount: 54, type: "مكية" },
  { number: 35, name: "فاطر", ayahCount: 46, type: "مكية" },
  { number: 36, name: "يس", ayahCount: 83, type: "مكية" },
  { number: 37, name: "الصافات", ayahCount: 182, type: "مكية" },
  { number: 38, name: "ص", ayahCount: 88, type: "مكية" },
  { number: 39, name: "الزمر", ayahCount: 75, type: "مكية" },
  { number: 40, name: "غافر", ayahCount: 85, type: "مكية" },
  { number: 41, name: "فصلت", ayahCount: 54, type: "مكية" },
  { number: 42, name: "الشورى", ayahCount: 53, type: "مكية" },
  { number: 43, name: "الزخرف", ayahCount: 89, type: "مكية" },
  { number: 44, name: "الدخان", ayahCount: 59, type: "مكية" },
  { number: 45, name: "الجاثية", ayahCount: 37, type: "مكية" },
  { number: 46, name: "الأحقاف", ayahCount: 35, type: "مكية" },
  { number: 47, name: "محمد", ayahCount: 38, type: "مدنية" },
  { number: 48, name: "الفتح", ayahCount: 29, type: "مدنية" },
  { number: 49, name: "الحجرات", ayahCount: 18, type: "مدنية" },
  { number: 50, name: "ق", ayahCount: 45, type: "مكية" },
  { number: 51, name: "الذاريات", ayahCount: 60, type: "مكية" },
  { number: 52, name: "الطور", ayahCount: 49, type: "مكية" },
  { number: 53, name: "النجم", ayahCount: 62, type: "مكية" },
  { number: 54, name: "القمر", ayahCount: 55, type: "مكية" },
  { number: 55, name: "الرحمن", ayahCount: 78, type: "مدنية" },
  { number: 56, name: "الواقعة", ayahCount: 96, type: "مكية" },
  { number: 57, name: "الحديد", ayahCount: 29, type: "مدنية" },
  { number: 58, name: "المجادلة", ayahCount: 22, type: "مدنية" },
  { number: 59, name: "الحشر", ayahCount: 24, type: "مدنية" },
  { number: 60, name: "الممتحنة", ayahCount: 13, type: "مدنية" },
  { number: 61, name: "الصف", ayahCount: 14, type: "مدنية" },
  { number: 62, name: "الجمعة", ayahCount: 11, type: "مدنية" },
  { number: 63, name: "المنافقون", ayahCount: 11, type: "مدنية" },
  { number: 64, name: "التغabن", ayahCount: 18, type: "مدنية" },
  { number: 65, name: "الطلاق", ayahCount: 12, type: "مدنية" },
  { number: 66, name: "التحريم", ayahCount: 12, type: "مدنية" },
  { number: 67, name: "الملك", ayahCount: 30, type: "مكية" },
  { number: 68, name: "القلم", ayahCount: 52, type: "مكية" },
  { number: 69, name: "الحاقة", ayahCount: 52, type: "مكية" },
  { number: 70, name: "المعارج", ayahCount: 44, type: "مكية" },
  { number: 71, name: "نوح", ayahCount: 28, type: "مكية" },
  { number: 72, name: "الجن", ayahCount: 28, type: "مكية" },
  { number: 73, name: "المزمل", ayahCount: 20, type: "مكية" },
  { number: 74, name: "المدثر", ayahCount: 56, type: "مكية" },
  { number: 75, name: "القيامة", ayahCount: 40, type: "مكية" },
  { number: 76, name: "الإنسان", ayahCount: 31, type: "مدنية" },
  { number: 77, name: "المرسلات", ayahCount: 50, type: "مكية" },
  { number: 78, name: "النبأ", ayahCount: 40, type: "مكية" },
  { number: 79, name: "النازعات", ayahCount: 46, type: "مكية" },
  { number: 80, name: "عبس", ayahCount: 42, type: "مكية" },
  { number: 81, name: "التكوير", ayahCount: 29, type: "مكية" },
  { number: 82, name: "الانفطار", ayahCount: 19, type: "مكية" },
  { number: 83, name: "المطففين", ayahCount: 36, type: "مكية" },
  { number: 84, name: "الانشقاق", ayahCount: 25, type: "مكية" },
  { number: 85, name: "البروج", ayahCount: 22, type: "مكية" },
  { number: 86, name: "الطارق", ayahCount: 17, type: "مكية" },
  { number: 87, name: "الأعلى", ayahCount: 19, type: "مكية" },
  { number: 88, name: "الغاشية", ayahCount: 26, type: "مكية" },
  { number: 89, name: "الفجر", ayahCount: 30, type: "مكية" },
  { number: 90, name: "البلد", ayahCount: 20, type: "مكية" },
  { number: 91, name: "الشمس", ayahCount: 15, type: "مكية" },
  { number: 92, name: "الليل", ayahCount: 21, type: "مكية" },
  { number: 93, name: "الضحى", ayahCount: 11, type: "مكية" },
  { number: 94, name: "الشرح", ayahCount: 8, type: "مكية" },
  { number: 95, name: "التين", ayahCount: 8, type: "مكية" },
  { number: 96, name: "العلق", ayahCount: 19, type: "مكية" },
  { number: 97, name: "القدر", ayahCount: 5, type: "مكية" },
  { number: 98, name: "البينة", ayahCount: 8, type: "مدنية" },
  { number: 99, name: "الزلزلة", ayahCount: 8, type: "مدنية" },
  { number: 100, name: "العاديات", ayahCount: 11, type: "مكية" },
  { number: 101, name: "القارعة", ayahCount: 11, type: "مكية" },
  { number: 102, name: "التكاثر", ayahCount: 8, type: "مكية" },
  { number: 103, name: "العصر", ayahCount: 3, type: "مكية" },
  { number: 104, name: "الهمزة", ayahCount: 9, type: "مكية" },
  { number: 105, name: "الفيل", ayahCount: 5, type: "مكية" },
  { number: 106, name: "قريش", ayahCount: 4, type: "مكية" },
  { number: 107, name: "الماعون", ayahCount: 7, type: "مكية" },
  { number: 108, name: "الكوثر", ayahCount: 3, type: "مكية" },
  { number: 109, name: "الكافرون", ayahCount: 6, type: "مكية" },
  { number: 110, name: "النصر", ayahCount: 3, type: "مدنية" },
  { number: 111, name: "المسد", ayahCount: 5, type: "مكية" },
  { number: 112, name: "الإخلاص", ayahCount: 4, type: "مكية" },
  { number: 113, name: "الفلق", ayahCount: 5, type: "مكية" },
  { number: 114, name: "الناس", ayahCount: 6, type: "مكية" },
];

// ===== CONSTANTS =====
const STORAGE_KEY = "quran-app-saved-state";

// ===== DOM REFERENCES =====
const DOM = {};

function cacheDOMElements() {
  DOM.sidebar = document.getElementById("sidebar");
  DOM.overlay = document.getElementById("overlay");
  DOM.hamburger = document.getElementById("hamburger");
  DOM.closeSidebar = document.getElementById("close-sidebar");
  DOM.surahList = document.getElementById("surah-list");
  DOM.surahSearch = document.getElementById("surah-search");
  DOM.surahTitle = document.getElementById("surah-title");
  DOM.ayahIndicator = document.getElementById("ayah-indicator");
  DOM.quranContent = document.getElementById("quran-content");
  DOM.ayahsContainer = document.getElementById("ayahs-container");
  DOM.loading = document.getElementById("loading");
  DOM.surahHeaderCard = document.getElementById("surah-header-card");
  DOM.surahNameDisplay = document.getElementById("surah-name-display");
  DOM.surahTypeDisplay = document.getElementById("surah-type-display");
  DOM.surahAyahCountDisplay = document.getElementById("surah-ayah-count-display");
  DOM.bismillah = document.getElementById("bismillah");
  DOM.playBtn = document.getElementById("play-btn");
  DOM.playIconSvg = document.getElementById("play-icon-svg");
  DOM.playText = document.getElementById("play-text");
  DOM.audioPlayer = document.getElementById("audio-player");
  DOM.reciterToast = document.getElementById("reciter-toast");
}

// ===== APPLICATION STATE =====
let state = {
  currentSurah: 1,
  currentAyah: 1,
  isPlaying: false,
  surahData: null,
  sidebarOpen: false,
  toastTimeout: null,
};

// ===== ARABIC NUMBER CONVERSION =====
function toArabicNumber(num) {
  const arabicDigits = ["٠", "١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩"];
  return String(num)
    .split("")
    .map((d) => arabicDigits[parseInt(d)])
    .join("");
}

// ===== STATE PERSISTENCE =====
function saveState() {
  try {
    const data = {
      surah: state.currentSurah,
      ayah: state.currentAyah,
      timestamp: Date.now(),
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch (e) {
    console.warn("Could not save state:", e);
  }
}

function loadSavedState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const data = JSON.parse(raw);
      if (data.surah >= 1 && data.surah <= 114) {
        state.currentSurah = data.surah;
        const surah = SURAHS.find((s) => s.number === data.surah);
        if (surah && data.ayah >= 1 && data.ayah <= surah.ayahCount) {
          state.currentAyah = data.ayah;
        } else {
          state.currentAyah = 1;
        }
      }
    }
  } catch (e) {
    console.warn("Could not load saved state:", e);
  }
}

// ===== SIDEBAR MANAGEMENT =====
function buildSurahList(filter = "") {
  const list = DOM.surahList;
  list.innerHTML = "";

  const normalizedFilter = filter.trim().toLowerCase();

  SURAHS.forEach((surah) => {
    if (normalizedFilter) {
      const nameMatch = surah.name.includes(normalizedFilter);
      const numMatch = String(surah.number).includes(normalizedFilter);
      if (!nameMatch && !numMatch) return;
    }

    const li = document.createElement("li");
    li.className = "surah-item";
    if (surah.number === state.currentSurah) {
      li.classList.add("active");
    }
    li.setAttribute("role", "button");
    li.setAttribute("tabindex", "0");
    li.dataset.surahNumber = surah.number;

    li.innerHTML = `
      <span class="surah-number">${toArabicNumber(surah.number)}</span>
      <div class="surah-info">
        <span class="surah-name">${surah.name}</span>
        <span class="surah-ayah-count">${toArabicNumber(surah.ayahCount)} آية · ${surah.type}</span>
      </div>
    `;

    li.addEventListener("click", () => handleSurahSelect(surah.number));
    li.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        handleSurahSelect(surah.number);
      }
    });

    list.appendChild(li);
  });
}

function handleSurahSelect(surahNumber) {
  if (state.isPlaying) {
    stopPlayback();
  }
  state.currentAyah = 1;
  closeSidebar();
  loadSurah(surahNumber);
}

function openSidebar() {
  state.sidebarOpen = true;
  DOM.sidebar.classList.add("open");
  DOM.overlay.classList.add("active");
  DOM.hamburger.classList.add("active");
  document.body.style.overflow = "hidden";

  setTimeout(() => {
    const activeItem = DOM.surahList.querySelector(".surah-item.active");
    if (activeItem) {
      activeItem.scrollIntoView({ block: "center", behavior: "smooth" });
    }
  }, 350);
}

function closeSidebar() {
  state.sidebarOpen = false;
  DOM.sidebar.classList.remove("open");
  DOM.overlay.classList.remove("active");
  DOM.hamburger.classList.remove("active");
  document.body.style.overflow = "";
  DOM.surahSearch.value = "";
  buildSurahList();
}

// ===== LOAD & RENDER SURAH (OFFLINE) =====
async function loadSurah(surahNumber) {
  state.currentSurah = surahNumber;

  DOM.loading.style.display = "flex";
  DOM.ayahsContainer.innerHTML = "";
  DOM.surahHeaderCard.style.display = "none";
  DOM.bismillah.style.display = "none";

  const surah = SURAHS.find((s) => s.number === surahNumber);
  DOM.surahTitle.textContent = `سورة ${surah.name}`;
  DOM.ayahIndicator.textContent = "";

  updateSidebarActive(surahNumber);

  try {
    if (typeof QURAN_DATA === "undefined") {
      throw new Error("QURAN_DATA bulunamadı. Lütfen quran-data.js dosyasını index.html'e eklediğinizden emin olun.");
    }

    const surahData = QURAN_DATA.find(s => s.id === surahNumber); 

    if (!surahData) {
      throw new Error("Sure yerel veride bulunamadı.");
    }

    state.surahData = {
      ayahs: surahData.verses.map(v => ({
        numberInSurah: v.id,
        text: v.text
      }))
    };

    renderSurahContent(state.surahData, surah);
    DOM.loading.style.display = "none";

    setTimeout(() => {
      scrollToAyah(state.currentAyah, false);
    }, 400);
  } catch (error) {
    console.error("Yerel veri yükleme hatası:", error);
    DOM.loading.style.display = "none";
    DOM.ayahsContainer.innerHTML = `<div class="error-message"><p>⚠️ خطأ في تحميل السورة محلياً <br><small>${error.message}</small></p></div>`;
  }

  saveState();
}

function renderSurahContent(data, surahMeta) {
  DOM.surahHeaderCard.style.display = "block";
  DOM.surahNameDisplay.textContent = `سورة ${surahMeta.name}`;
  DOM.surahTypeDisplay.textContent = surahMeta.type; 
  DOM.surahAyahCountDisplay.textContent = `${toArabicNumber(surahMeta.ayahCount)} آية`;

  if (surahMeta.number !== 1 && surahMeta.number !== 9) {
    DOM.bismillah.style.display = "block";
  } else {
    DOM.bismillah.style.display = "none";
  }

  const container = DOM.ayahsContainer;
  container.innerHTML = "";

  data.ayahs.forEach((ayah, index) => {
    const div = document.createElement("div");
    div.className = "ayah";
    div.id = `ayah-${ayah.numberInSurah}`;
    div.dataset.number = ayah.numberInSurah;
    div.style.animationDelay = `${Math.min(index * 0.05, 0.35)}s`;

    const text = document.createElement("span");
    text.className = "ayah-text";
    text.textContent = ayah.text;

    const number = document.createElement("span");
    number.className = "ayah-number";
    number.textContent = `﴿${toArabicNumber(ayah.numberInSurah)}﴾`;

    div.appendChild(text);
    div.appendChild(number);

    div.addEventListener("click", () => {
      state.currentAyah = ayah.numberInSurah;
      saveState();
      updateAyahIndicator();

      if (state.isPlaying) {
        playAyah(state.currentSurah, ayah.numberInSurah);
      }
    });

    container.appendChild(div);
  });

  updateAyahIndicator();
}

function updateSidebarActive(surahNumber) {
  document.querySelectorAll(".surah-item").forEach((el) => {
    if (parseInt(el.dataset.surahNumber) === surahNumber) {
      el.classList.add("active");
    } else {
      el.classList.remove("active");
    }
  });
}

function updateAyahIndicator() {
  const surah = SURAHS.find((s) => s.number === state.currentSurah);
  if (surah) {
    DOM.ayahIndicator.textContent = `الآية ${toArabicNumber(state.currentAyah)} من ${toArabicNumber(surah.ayahCount)}`;
  }
}

// ===== AUDIO PLAYBACK (OFFLINE) =====
function getAudioUrl(surahNum, ayahNum) {
  const s = String(surahNum).padStart(3, "0");
  const a = String(ayahNum).padStart(3, "0");
  return `./assets/audio/${s}${a}.mp3`;
}

function togglePlayback() {
  if (state.isPlaying) {
    pausePlayback();
  } else {
    startPlayback();
  }
}

function startPlayback() {
  state.isPlaying = true;
  updatePlayButton();
  showReciterToast();
  playAyah(state.currentSurah, state.currentAyah);
}

function pausePlayback() {
  state.isPlaying = false;
  DOM.audioPlayer.pause();
  updatePlayButton();
  saveState();
}

function stopPlayback() {
  state.isPlaying = false;
  DOM.audioPlayer.pause();
  DOM.audioPlayer.removeAttribute("src");
  DOM.audioPlayer.load();
  updatePlayButton();
  clearHighlight();
  saveState();
}

async function playAyah(surahNum, ayahNum) {
  state.currentSurah = surahNum;
  state.currentAyah = ayahNum;

  highlightAyah(ayahNum);
  scrollToAyah(ayahNum, true);
  updateAyahIndicator();

  const url = getAudioUrl(surahNum, ayahNum);
  
  if (DOM.audioPlayer.src !== url) {
    DOM.audioPlayer.src = url;
    DOM.audioPlayer.load();
  }

  try {
    await DOM.audioPlayer.play();
  } catch (error) {
    console.error("Ses oynatılırken bir sorun oluştu:", error);
    if (error.name === "NotAllowedError") {
      console.log("Kullanıcı etkileşimi bekleniyor.");
    }
  }

  saveState();
}

function onAudioEnded() {
  if (!state.isPlaying) return;

  const surah = SURAHS.find((s) => s.number === state.currentSurah);

  if (state.currentAyah < surah.ayahCount) {
    state.currentAyah++;
    playAyah(state.currentSurah, state.currentAyah);
  } else if (state.currentSurah < 114) {
    state.currentSurah++;
    state.currentAyah = 1;
    loadSurah(state.currentSurah).then(() => {
      if (state.isPlaying) {
        setTimeout(() => {
          playAyah(state.currentSurah, 1);
        }, 500);
      }
    });
  } else {
    stopPlayback();
  }
}

function onAudioError(e) {
  console.error("Yerel ses dosyası hatası veya dosya eksik:", e);
  if (state.isPlaying) {
    stopPlayback();
  }
}

// ===== HIGHLIGHT & SCROLL =====
function highlightAyah(ayahNum) {
  clearHighlight();
  const ayahEl = document.getElementById(`ayah-${ayahNum}`);
  if (ayahEl) {
    ayahEl.classList.add("highlighted");
  }
}

function clearHighlight() {
  document.querySelectorAll(".ayah.highlighted").forEach((el) => {
    el.classList.remove("highlighted");
  });
}

function scrollToAyah(ayahNum, smooth = true) {
  const ayahEl = document.getElementById(`ayah-${ayahNum}`);
  if (ayahEl) {
    ayahEl.scrollIntoView({
      behavior: smooth ? "smooth" : "auto",
      block: "center",
    });
  }
}

// ===== UI UPDATES =====
function updatePlayButton() {
  if (state.isPlaying) {
    DOM.playIconSvg.innerHTML = '<rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect>';
    DOM.playText.textContent = "إيقاف";
    DOM.playBtn.classList.add("playing");
  } else {
    DOM.playIconSvg.innerHTML = '<path d="M8 5v14l11-7z"/>';
    DOM.playText.textContent = "اقرأ";
    DOM.playBtn.classList.remove("playing");
  }
}

function showReciterToast() {
  if (state.toastTimeout) clearTimeout(state.toastTimeout);
  DOM.reciterToast.classList.add("visible");
  state.toastTimeout = setTimeout(() => {
    DOM.reciterToast.classList.remove("visible");
  }, 3000);
}

// ===== EVENT LISTENERS =====
function setupEventListeners() {
  DOM.hamburger.addEventListener("click", () => {
    if (state.sidebarOpen) {
      closeSidebar();
    } else {
      openSidebar();
    }
  });

  DOM.closeSidebar.addEventListener("click", closeSidebar);
  DOM.overlay.addEventListener("click", closeSidebar);

  DOM.surahSearch.addEventListener("input", (e) => {
    buildSurahList(e.target.value);
  });

  DOM.playBtn.addEventListener("click", togglePlayback);
  DOM.audioPlayer.addEventListener("ended", onAudioEnded);
  DOM.audioPlayer.addEventListener("error", onAudioError);

  document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
      saveState();
    }
  });

  window.addEventListener("beforeunload", () => {
    saveState();
  });

  window.addEventListener("pageshow", (event) => {
    if (event.persisted) {
      loadSavedState();
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      if (state.sidebarOpen) {
        closeSidebar();
      }
    }
    if (e.key === " " && document.activeElement !== DOM.surahSearch) {
      e.preventDefault();
      togglePlayback();
    }
  });

  let touchStartX = 0;
  let touchStartY = 0;

  document.addEventListener("touchstart", (e) => {
    touchStartX = e.touches[0].clientX;
    touchStartY = e.touches[0].clientY;
  }, { passive: true });

  document.addEventListener("touchend", (e) => {
    const touchEndX = e.changedTouches[0].clientX;
    const touchEndY = e.changedTouches[0].clientY;
    const deltaX = touchEndX - touchStartX;
    const deltaY = Math.abs(touchEndY - touchStartY);

    if (deltaX < -80 && deltaY < 80 && !state.sidebarOpen) {
      openSidebar();
    }
    if (deltaX > 80 && deltaY < 80 && state.sidebarOpen) {
      closeSidebar();
    }
  }, { passive: true });
}

// ===== INITIALIZATION =====
function initApp() {
  cacheDOMElements();
  loadSavedState();
  buildSurahList();
  setupEventListeners();
  loadSurah(state.currentSurah);
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initApp);
} else {
  initApp();
}