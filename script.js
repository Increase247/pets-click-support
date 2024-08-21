document.addEventListener("DOMContentLoaded", function() {
    const names = ["Joshua", "Frank", "Emily", "Madison", "Michael", "Jessica", "David", "Sarah", "John", "Ashley"];
    const widget = document.getElementById("support-widget");

    let index = 0;

    function showSupportMessage() {
        const name = names[Math.floor(Math.random() * names.length)];
        widget.textContent = `${name} just clicked to support`;
        widget.classList.add("show");

        setTimeout(() => {
            widget.classList.remove("show");
            if (++index < 10) {
                setTimeout(showSupportMessage, 3000);
            }
        }, 3000);
    }

    showSupportMessage();
});

document.addEventListener("DOMContentLoaded", function() {
    const button = document.getElementById("floating-button");
    const texts = [
        "Click to Save a Pet",
        "Click to Support a Pet",
        "Click to Feed a Pet",
        "Click to Heal a Pet"
    ];

    let index = 0;

    function changeText() {
        button.textContent = texts[index];
        index = (index + 1) % texts.length;
    }

    setInterval(changeText, 2000); // Change text every 2 seconds
});
