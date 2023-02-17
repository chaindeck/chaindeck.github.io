const btns = document.querySelectorAll(".btn");
const snapshots = document.querySelectorAll(".card");

const btn = document.querySelector(".btn");
const snapContainer = document.getElementById("snapshot-filter");
const filterBtns = snapContainer.getElementsByClassName("btn");

/* correct one */
for (i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", (e) => {
        e.preventDefault();

        const filter = e.target.dataset.filter;

        snapshots.forEach((snapshot) => {
            if (filter === "all") {
                snapshot.style.display = "flex";
                btn.classList.add("active");
            } else {
                if (snapshot.classList.contains(filter)) {
                    snapshot.style.display = "flex";
                    btn.classList.add("active");
                } else {
                    snapshot.style.display = "none";
                }
                btn.classList.remove("active");
            }
        });
    });
}
