let urlparam = new URLSearchParams(window.location.search);

let mood = urlparam.get("mood");
let lang = urlparam.get("lang");

let EnergeticEnglish = [
    "Counting Stars - One Direction",
    "Dance Monkey - Tones and I",
    "Dont Let Me Down - The Chainsmokers",
    "Levitating - Dua Lipa",
    "Stay -Justin Beiber",
    "This is what you came for - Calvin Harris"
];

let FocusEnglish = [
    "Come With Me - Salem Ilese",
    "Magnificent - Oh Wonder"
];

let RelaxEnglish = [
    "Leisure - Miles Away",
    "Love Me More - Sam Smith",
    "Someone You Loved - Lewis Capaldi"
];

let LowEnglish = [
    "It'll Be Okay - Shawn Mendes",
    "Let Somebody Go - Coldplay",
    "Runaway - Aurora"
];

let PartyEnglish = [
    "Cheap Thrills - Sia",
    "Rockabye - Clean Bandit",
    "Shape of You - Ed Sheeran"
];

let EnergeticHindi = [
    "Jai Jai Shiv Shankar"
];

let FocusHindi = [
    "Saibo (LoFI)"
];

let RelaxHindi = [
    "Pehla Nasha",
    "Yaaron"
];

let LowHindi = [
    "Dil Kyun Ye Mera",
    "Tu Na Jaane Aas Paas Khuda"
];

let PartyHindi = [
    "Muqabla",
    "Naach Meri Raani"
];

let srcArray = [];
let currSrc = 0;

function makeplaylist() {
    if (mood == "Energetic") {
        if (lang == "English")
            EnergeticEnglish.forEach((ele) => createEle(ele, lang));
        else if (lang == "Hindi")
            EnergeticHindi.forEach((ele) => createEle(ele, lang));
        else {
            EnergeticEnglish.forEach((ele) => createEle(ele, "English"));
            EnergeticHindi.forEach((ele) => createEle(ele, "Hindi"));
        }
    }
    else if (mood == "Focus") {
        if (lang == "English")
            FocusEnglish.forEach((ele) => createEle(ele, lang));
        else if (lang == "Hindi")
            FocusHindi.forEach((ele) => createEle(ele, lang));
        else {
            FocusEnglish.forEach((ele) => createEle(ele, "English"));
            FocusHindi.forEach((ele) => createEle(ele, "Hindi"));
        }
    }
    else if (mood == "Relax") {
        if (lang == "English")
            RelaxEnglish.forEach((ele) => createEle(ele, lang));
        else if (lang == "Hindi")
            RelaxHindi.forEach((ele) => createEle(ele, lang));
        else {
            RelaxEnglish.forEach((ele) => createEle(ele, "English"));
            RelaxHindi.forEach((ele) => createEle(ele, "Hindi"));
        }
    }
    else if (mood == "Low") {
        if (lang == "English")
            LowEnglish.forEach((ele) => createEle(ele, lang));
        else if (lang == "Hindi")
            LowHindi.forEach((ele) => createEle(ele, lang));
        else {
            LowEnglish.forEach((ele) => createEle(ele, "English"));
            LowHindi.forEach((ele) => createEle(ele, "Hindi"));
        }
    }
    else if (mood == "Party") {
        if (lang == "English")
            PartyEnglish.forEach((ele) => createEle(ele, lang));
        else if (lang == "Hindi")
            PartyHindi.forEach((ele) => createEle(ele, lang));
        else {
            PartyEnglish.forEach((ele) => createEle(ele, "English"));
            PartyHindi.forEach((ele) => createEle(ele, "Hindi"));
        }
    }
}

function createEle(ele, mlang) {
    let dpl = document.createElement("div");
    dpl.innerHTML = ele;
    dpl.classList.add("pl-nplay");
    srcArray.push(`videos/${mlang}/${mood}/${ele}.mp4`);
    addel(dpl, mlang);
    document.getElementById("pl-list").appendChild(dpl);
}

function addel(element, mlang) {
    element.addEventListener("click", () => {
        document.getElementById("pl-play").removeAttribute("id");
        element.setAttribute("id", "pl-play");
        currSrc = Array.from(element.parentNode.children).indexOf(element);
        document.getElementById("vtitle").innerHTML = element.innerHTML;
        document.getElementById("pl-vid").setAttribute("src", srcArray[currSrc]);
        document.getElementById("pl-vid").focus();
    })
}

function firstplay() {
    let fpch = document.getElementById("pl-list").firstChild;
    fpch.setAttribute("id", "pl-play");
    document.getElementById("vtitle").innerHTML = fpch.innerHTML;
    document.getElementById("pl-vid").setAttribute("src", srcArray[0]);
}

function changebgcolor() {
    let r = 0 + Math.round(100 * Math.random());
    let g = 0 + Math.round(100 * Math.random());
    let b = 0 + Math.round(200 * Math.random());
    document.querySelector("body").style.cssText = `background-color: rgb(${r}, ${b}, ${b});`;
}

document.getElementById("pl-vid").addEventListener("ended", () => {
    let curr = document.getElementById("pl-play");
    let next = curr.nextElementSibling;
    if (next == null) {
        next = document.getElementById("pl-list").firstChild;
        currSrc = -1;
    }
    curr.removeAttribute("id");
    next.scrollIntoView();
    next.setAttribute("id", "pl-play");
    currSrc++;
    document.getElementById("vtitle").innerHTML = next.innerHTML;
    document.getElementById("pl-vid").setAttribute("src", srcArray[currSrc]);
});

setInterval(changebgcolor, 800);
makeplaylist();
firstplay();
document.getElementById("pl-vid").focus();