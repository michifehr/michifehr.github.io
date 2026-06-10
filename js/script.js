// =========================
// PRELOADER (SAFE)
// =========================
window.addEventListener('load', function () {
    const preloader = document.querySelector('.preloader');

    if (preloader) {
        preloader.classList.add('opacity-0');

        setTimeout(function () {
            preloader.style.display = 'none';
        }, 1000);
    }

    // =========================
    // ITYPED (SAFE)
    // =========================
    const typedElement = document.querySelector('.iTyped');

    if (typedElement && window.ityped) {
        window.ityped.init(typedElement, {
            strings: [
                "Ich heisse Michael Fehr",
                "Ich bin gelernter Applikationsentwickler",
                "Ich bin gewillt Neues zu Lernen"
            ],
            loop: true
        });
    }
});


// =========================
// ASIDE NAVIGATION
// =========================
const nav = document.querySelector('.nav');
const navList = nav ? nav.querySelectorAll('li') : [];
const totalNavList = navList.length;

const allSection = document.querySelectorAll('.section');
const totalSection = allSection.length;

for (let i = 0; i < totalNavList; i++) {
    const a = navList[i].querySelector('a');

    a.addEventListener('click', function () {

        removeBackSectionClass();

        for (let j = 0; j < totalNavList; j++) {
            if (navList[j].querySelector('a').classList.contains('active')) {
                addBackSectionClass(j);
            }
            navList[j].querySelector('a').classList.remove('active');
        }

        this.classList.add('active');

        showSection(this);

        if (window.innerWidth < 1200) {
            asideSectionTogglerBtn();
        }
    });
}


// =========================
// SECTION HELPERS
// =========================
function addBackSectionClass(num) {
    if (allSection[num]) {
        allSection[num].classList.add('back-section');
    }
}

function removeBackSectionClass() {
    for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.remove('back-section');
    }
}

function showSection(element) {
    for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.remove('active');
    }

    const target = element.getAttribute('href').split('#')[1];
    const targetSection = document.querySelector('#' + target);

    if (targetSection) {
        targetSection.classList.add('active');
    }
}


// =========================
// ASIDE TOGGLER (BURGER MENU)
// =========================
const navTogglerBtn = document.querySelector('.nav-toggler');
const aside = document.querySelector('.aside');

if (navTogglerBtn && aside) {
    navTogglerBtn.addEventListener('click', asideSectionTogglerBtn);
}

function asideSectionTogglerBtn() {
    if (aside) aside.classList.toggle('open');
    if (navTogglerBtn) navTogglerBtn.classList.toggle('open');

    for (let i = 0; i < totalSection; i++) {
        if (allSection[i]) {
            allSection[i].classList.toggle('open');
        }
    }
}


// =========================
// NAV UPDATE (optional use)
// =========================
function updateNav(element) {
    for (let i = 0; i < totalNavList; i++) {
        const link = navList[i].querySelector('a');
        if (link) {
            link.classList.remove('active');

            const target = element.getAttribute('href').split('#')[1];

            if (target === link.getAttribute('href').split('#')[1]) {
                link.classList.add('active');
            }
        }
    }
}


// =========================
// PDF MODAL
// =========================
function openPDF(pdfUrl) {
    const frame = document.getElementById("pdfFrame");
    const modal = document.getElementById("pdfModal");

    if (frame && modal) {
        frame.src = pdfUrl;
        modal.style.display = "flex";
    }
}

function closePDF() {
    const frame = document.getElementById("pdfFrame");
    const modal = document.getElementById("pdfModal");

    if (frame && modal) {
        modal.style.display = "none";
        frame.src = "";
    }
}

window.onclick = function (event) {
    const modal = document.getElementById("pdfModal");

    if (modal && event.target === modal) {
        closePDF();
    }
};