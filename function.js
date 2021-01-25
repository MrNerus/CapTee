function openSidenav() {
    document.getElementById("sidenav").style.width = "70%";
    console.log("a")
}

function closeSidenav() {
    document.getElementById("sidenav").style.width = "0";
    console.log("b")
}

function openAboutMe() {
    document.getElementById("aboutMe").style.display = "flex";
    $('body').css('overflow', 'hidden');
}

function closeAboutMe() {
    document.getElementById("aboutMe").style.display = "none";
    $('body').css('overflow', 'auto');
}

function openMySkill() {
    document.getElementById("mySkill").style.display = "flex";
    $('body').css('overflow', 'hidden');
}

function closeMySkill() {
    document.getElementById("mySkill").style.display = "none";
    $('body').css('overflow', 'auto');
}

function openContactMe() {
    document.getElementById("contactMe").style.display = "flex";
    $('body').css('overflow', 'hidden');
}

function closeContactMe() {
    document.getElementById("contactMe").style.display = "none";
    $('body').css('overflow', 'auto');
}

function openGallary() {
    document.getElementById("gallary").style.display = "flex";
    $('body').css('overflow', 'hidden');
}

function closeGallary() {
    document.getElementById("gallary").style.display = "none";
    $('body').css('overflow', 'auto');
}

function copyEmail() {
    /* Get the text field */
    var copyText = document.getElementById("myEmail");

    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /* For mobile devices */

    /* Copy the text inside the text field */
    document.execCommand("copy");


    /* Alert the copied text */
    alert("My Email: mr.ard.nerus@gmail.com is copied");
}

function darkModeToggle() {
    if (document.getElementById("darkMode").checked === true) {
        document.querySelector(":root").style.setProperty('--primary-color', '#161616');
        document.querySelector(":root").style.setProperty('--secondary-color', '#111111');
        document.querySelector(":root").style.setProperty('--text-color1', '#e4e4e4');
        document.querySelector(":root").style.setProperty('--text-color2', '#f4f4f4');
        document.querySelector(":root").style.setProperty('--page-overlay', '# rgba(0, 0, 0, 0.1)');
        document.querySelector(":root").style.setProperty('--sticker', '#333333');
        document.querySelector(":root").style.setProperty('--button-bg', '#222222');
        document.querySelector(":root").style.setProperty('--button-bg-hover', '#151515');
        document.querySelector(":root").style.setProperty('--sky-object', '#eeffbe');
        document.querySelector(":root").style.setProperty('--opaque-card', '#353535');
        document.querySelector(":root").style.setProperty('--mountains', 'brightness(0.2)');
        document.querySelector(":root").style.setProperty('--glass-bg', 'linear-gradient( to right bottom, rgba(155, 155, 155, 0.6), rgba(155, 155, 155, 0.2))');
        document.querySelector(":root").style.setProperty('--glass-bg-tilt', 'linear-gradient( to right bottom, rgba(155, 155, 155, 0.2), rgba(155, 155, 155, 0.6))');
    } else {
        document.querySelector(":root").style.setProperty('--primary-color', '#047aed');
        document.querySelector(":root").style.setProperty('--secondary-color', '#1c3fa8');
        document.querySelector(":root").style.setProperty('--text-color1', '#000000');
        document.querySelector(":root").style.setProperty('--text-color2', '#f4f4f4');
        document.querySelector(":root").style.setProperty('--page-overlay', '#rgba(0, 0, 0, 0.1)');
        document.querySelector(":root").style.setProperty('--sticker', '#eeeeee');
        document.querySelector(":root").style.setProperty('--button-bg', '#e9e9e9');
        document.querySelector(":root").style.setProperty('--button-bg-hover', '#dedede');
        document.querySelector(":root").style.setProperty('--sky-object', '#fbff00');
        document.querySelector(":root").style.setProperty('--opaque-card', '#efefef');
        document.querySelector(":root").style.setProperty('--mountains', '#brightness(0.9)');
        document.querySelector(":root").style.setProperty('--glass-bg', 'linear-gradient( to right bottom, rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.1))');
        document.querySelector(":root").style.setProperty('--glass-bg-tilt', 'linear-gradient( to right bottom, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.4))');
    }
}