// ===============================
// POST IMAGE MODAL
// ===============================

const posts = document.querySelectorAll(".post");
const modal = document.getElementById("modal");
const modalImage = document.getElementById("modalImage");
const closeButton = document.querySelector(".close");

posts.forEach(post => {

    post.addEventListener("click", () => {

        const image = post.querySelector("img");

        modalImage.src = image.src;

        modal.classList.add("show");

    });

});


closeButton.addEventListener("click", () => {

    modal.classList.remove("show");

});


modal.addEventListener("click", (event) => {

    if (event.target === modal) {
        modal.classList.remove("show");
    }

});


// ===============================
// PROFILE BUTTON
// ===============================

const editButton = document.querySelector(".edit-btn");

editButton.addEventListener("click", () => {

    alert("Edit Profile feature coming soon!");

});


// ===============================
// TABS
// ===============================

const tabs = document.querySelectorAll(".tab");

tabs.forEach(tab => {

    tab.addEventListener("click", () => {

        tabs.forEach(item => {
            item.classList.remove("active");
        });

        tab.classList.add("active");

        const type = tab.dataset.tab;

        if (type === "posts") {
            document.querySelector(".posts").style.display = "grid";
        } else {
            document.querySelector(".posts").style.display = "none";

            alert(type.toUpperCase() + " section coming soon!");
        }

    });

});


// ===============================
// ESC KEY CLOSE MODAL
// ===============================

document.addEventListener("keydown", event => {

    if (event.key === "Escape") {
        modal.classList.remove("show");
    }

});