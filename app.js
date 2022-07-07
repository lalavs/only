let item = document.getElementsByClassName("list-item");

for (let i = 0; i < item.length; i++) {
  item[i].addEventListener("click", function(e) {
    if (this !== e.target) return;
  
    this.classList.toggle("active");

    const spoiler = this.lastElementChild;

    if (spoiler.style.display === "block") {
      spoiler.style.display = "none";
    } else {
      spoiler.style.display = "block";
    }
  });
};
