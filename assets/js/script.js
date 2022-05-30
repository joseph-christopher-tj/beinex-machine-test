//header
$(window).on("scroll", function() {
    if ($(window).scrollTop() > 224) {
        $(".bx-header").addClass("sticky");
        $("body").addClass("sticky-soomth");
    } else {
        $(".bx-header").removeClass("sticky");
        $("body").removeClass("sticky-soomth");
    }
});
$(".bx-header__fade").click(function() {
    $(".bx-header__navbar .navbar-collapse").removeClass("show");
    $("body").removeClass("overflow");
});
$(".navbar-toggler").click(function() {
    $("body").addClass("overflow");
});
$(".bx-header__close").click(function() {
    $("body").removeClass("overflow");
});
//feature-carousel
$('.bx-features__carousel').slick({
    centerMode: true,
    centerPadding: '0px',
    slidesToShow: 3,
    arrows: true,
    dots: true,
    infinite: true,
    focusOnSelect: true,
    cssEase: 'linear',
    touchMove: true,
    responsive: [{
        breakpoint: 768,
        settings: {

            centerMode: true,

            slidesToShow: 1
        }
    }]
});
//custom-dropdown
var x, i, j, l, ll, selElmnt, a, b, c;

x = document.getElementsByClassName("bx-dropdown");
l = x.length;
for (i = 0; i < l; i++) {
    selElmnt = x[i].getElementsByTagName("select")[0];
    ll = selElmnt.length;

    a = document.createElement("DIV");
    a.setAttribute("class", "bx-dropdown__select-selected");
    a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
    x[i].appendChild(a);

    b = document.createElement("DIV");
    b.setAttribute("class", "bx-dropdown__select-items bx-dropdown__select-hide");
    for (j = 1; j < ll; j++) {

        c = document.createElement("DIV");
        c.innerHTML = selElmnt.options[j].innerHTML;
        c.addEventListener("click", function(e) {

            var y, i, k, s, h, sl, yl;
            s = this.parentNode.parentNode.getElementsByTagName("select")[0];
            sl = s.length;
            h = this.parentNode.previousSibling;
            for (i = 0; i < sl; i++) {
                if (s.options[i].innerHTML == this.innerHTML) {
                    s.selectedIndex = i;
                    h.innerHTML = this.innerHTML;
                    y = this.parentNode.getElementsByClassName("bx-dropdown__same-as-selected");
                    yl = y.length;
                    for (k = 0; k < yl; k++) {
                        y[k].removeAttribute("class");
                    }
                    this.setAttribute("class", "bx-dropdown__same-as-selected");
                    break;
                }
            }
            h.click();
        });
        b.appendChild(c);
    }
    x[i].appendChild(b);
    a.addEventListener("click", function(e) {

        e.stopPropagation();
        closeAllSelect(this);
        this.nextSibling.classList.toggle("bx-dropdown__select-hide");
        this.classList.toggle("select-arrow-active");
    });
}

function closeAllSelect(elmnt) {

    var x, y, i, xl, yl, arrNo = [];
    x = document.getElementsByClassName("bx-dropdown__select-items");
    y = document.getElementsByClassName("bx-dropdown__select-selected");
    xl = x.length;
    yl = y.length;
    for (i = 0; i < yl; i++) {
        if (elmnt == y[i]) {
            arrNo.push(i)
        } else {
            y[i].classList.remove("select-arrow-active");
        }
    }
    for (i = 0; i < xl; i++) {
        if (arrNo.indexOf(i)) {
            x[i].classList.add("bx-dropdown__select-hide");
        }
    }
}

document.addEventListener("click", closeAllSelect);


//form validation

// phone-validate
let phone = document.querySelector("#phone");
let phoneBox = document.querySelector(".bx-input__phone");

let phoneErr = false;

phone.addEventListener("keyup", () => {
    if ((phone.value == '') || (phone.value.length != 10)) {
        phoneBox.classList.add("bx-input__error");

        phoneErr = true
        if (phoneBox.classList.contains("bx-input__error")) {
            phoneBox.classList.remove("bx-input__phone-none");
        }
    } else {
        phoneBox.classList.remove("bx-input__error");
        phoneErr = false
        phoneBox.classList.remove("bx-input__phone-none");
    }
    checker();
})

//email-validate

let email = document.querySelector("#email");
let emailOuter = document.querySelector("[data-email]");

let emailErr = false;
email.addEventListener("keyup", () => {
    var emailChecklist = /^[^@]+@(beniex)\.(com)$/i;
    if ((!(emailChecklist.test(email.value)) || email.value == "" || email.value == null)) {
        emailOuter.classList.add("bx-input__error");
        emailErr = true;
        if (emailOuter.classList.contains("bx-input__error")) {
            emailOuter.classList.remove("bx-input__mail-none");
        }
    } else {
        emailOuter.classList.remove("bx-input__error");
        emailErr = false
        emailOuter.classList.remove("bx-input__mail-none")
    }
    checker();
})

let submit = document.querySelector(".bx-btn__submit");


function checker() {

    if ((!(emailOuter.classList.contains("bx-input__mail-none"))) && (!(phoneBox.classList.contains("bx-input__phone-none")))) {
        submit.classList.add("active");

    } else {
        submit.classList.remove("active")
    }
}