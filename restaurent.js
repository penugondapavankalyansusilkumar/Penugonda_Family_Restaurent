// DARK MODE

const themeBtn = document.getElementById("themeBtn");

if(themeBtn){

    themeBtn.addEventListener("click", () => {

        document.body.classList.toggle("dark-mode");

        if(document.body.classList.contains("dark-mode")){
            themeBtn.innerHTML = "☀ Light Mode";
        }
        else{
            themeBtn.innerHTML = "🌙 Dark Mode";
        }

    });

}


// TESTIMONIAL SLIDER

const reviews = [

"Excellent Food ⭐⭐⭐⭐⭐",
"Best Biryani In Town ⭐⭐⭐⭐⭐",
"Wonderful Service ⭐⭐⭐⭐⭐",
"Highly Recommended ⭐⭐⭐⭐⭐",
"Fresh Food & Great Service ⭐⭐⭐⭐⭐"

];

let reviewIndex = 0;

const reviewBox = document.getElementById("review");

if(reviewBox){

    setInterval(() => {

        reviewIndex++;

        if(reviewIndex >= reviews.length){
            reviewIndex = 0;
        }

        reviewBox.innerHTML = reviews[reviewIndex];

    },3000);

}


// TABLE RESERVATION

const bookingForm = document.getElementById("bookingForm");

if(bookingForm){

    bookingForm.addEventListener("submit", function(e){

        e.preventDefault();

        alert("🎉 Table Reserved Successfully!");

        bookingForm.reset();

    });

}


// MENU SEARCH

const search = document.getElementById("search");

if(search){

    search.addEventListener("keyup", function(){

        let value = this.value.toLowerCase();

        let items = document.querySelectorAll("#menuList li");

        items.forEach(item => {

            if(item.textContent.toLowerCase().includes(value)){
                item.style.display = "block";
            }
            else{
                item.style.display = "none";
            }

        });

    });

}




// CONTACT FORM VALIDATION

function validate(){

    let email = document.getElementById("email").value;

    let pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!pattern.test(email)){

        alert("Please Enter Valid Email Address");

        return false;

    }

    return true;

}


// SCROLL TO TOP

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if(topBtn){

        if(window.scrollY > 300){
            topBtn.style.display = "block";
        }
        else{
            topBtn.style.display = "none";
        }

    }

});

if(topBtn){

    topBtn.addEventListener("click", () => {

        window.scrollTo({
            top:0,
            behavior:"smooth"
        });

    });

}