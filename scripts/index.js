document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault();
    const email = document.querySelector("input").value;
    let currentNewsleter = JSON.parse(
        localStorage.getItem("newsletter") || "[]",
    );
    currentNewsleter.push(email);
    localStorage.setItem("newsletter", JSON.stringify(currentNewsleter));

    document.querySelector("input").value = "";
    alert("Thank you for subscribing!");
});
