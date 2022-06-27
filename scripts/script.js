console.log("Hello");
let mood = "";
let mood_id = "";
let lang = "";
let lang_id = "";

function mbutton_sel(id) {
    if (mood == "" && mood_id == "") {
        mood_id = id;
        mood = document.getElementById(mood_id).innerHTML;
        document.getElementById(mood_id).classList.add("opt-selected");
        document.querySelector(`#${mood_id}`).style.cssText = "margin: 0px 50px;margin-top: 5px;height: 75px;width: 100px;";
    }
    else if (mood_id == id) {
        document.getElementById(mood_id).classList.remove("opt-selected");
        document.querySelector(`#${mood_id}`).style.cssText = "";
        mood_id = "";
        mood = "";
    }
    else {
        document.getElementById(mood_id).classList.remove("opt-selected");
        document.querySelector(`#${mood_id}`).style.cssText = "";
        mood_id = id;
        mood = document.getElementById(mood_id).innerHTML;
        document.getElementById(mood_id).classList.add("opt-selected");
        document.querySelector(`#${mood_id}`).style.cssText = "margin: 0px 50px;margin-top: 5px;height: 75px;width: 100px;";
    }
}

function lbutton_sel(id) {
    if (lang == "" && lang_id == "") {
        lang_id = id;
        lang = document.getElementById(lang_id).innerHTML;
        document.getElementById(lang_id).classList.add("opt-selected");
        document.querySelector(`#${lang_id}`).style.cssText = "margin: 0px 20px;width: 160px;";
    }
    else if (lang_id == id) {
        document.getElementById(lang_id).classList.remove("opt-selected");
        document.querySelector(`#${lang_id}`).style.cssText = "";
        lang_id = "";
        lang = "";
    }
    else {
        document.getElementById(lang_id).classList.remove("opt-selected");
        document.querySelector(`#${lang_id}`).style.cssText = "";
        lang_id = id;
        lang = document.getElementById(lang_id).innerHTML;
        document.getElementById(lang_id).classList.add("opt-selected");
        document.querySelector(`#${lang_id}`).style.cssText = "margin: 0px 20px;width: 160px;";
    }
}

function checkml() {
    if (mood != "" && lang != "") {
        location.href = `musicbox.html?mood=${mood}&lang=${lang}`;
    }
    else if (mood != "") {
        alert("Please Select Language");
    }
    else if (lang != "") {
        alert("Please Select Mood");
    }
    else {
        alert("Please Select Mood and Language");
    }
}