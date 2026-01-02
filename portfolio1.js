// Sélection du bouton et de l'image du profil
const toggleBtn = document.getElementById("theme-toggle");
const profilePic = document.querySelector(".image img"); // Sélectionne ton <img> dans la div .image

toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        toggleBtn.textContent = "☀️"; // icône soleil pour Dark Mode
        profilePic.src = "profile-dark.jpeg"; // Image Dark Mode
    } else {
        toggleBtn.textContent = "🌙"; // icône lune pour Light Mode
        profilePic.src = "photo-profile.jpg"; // Image Light Mode
    }
});
