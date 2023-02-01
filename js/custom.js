// Tab-Pane change function
function tabChange() {
  var tabs = $(".nav-tabs > li");
  var active = tabs.filter(".active");
  var next = active.next("li").length
    ? active.next("li").find("a")
    : tabs.filter(":first-child").find("a");
  next.tab("show");
}
function tabChange() {
  var tabs = $(".nav-tabs > li");
  var active = tabs.filter(".active");
  var next = active.next("li").length
    ? active.next("li").find("a")
    : tabs.filter(":first-child").find("a");
  next.tab("show");
}

$(".tab-pane").hover(
  function () {
    clearInterval(tabCycle);
  },
  function () {
    tabCycle = setInterval(tabChange, 5000);
  }
);

// Tab Cycle function
var tabCycle = setInterval(tabChange, 5000);

// Tab click event handler
$(function () {
  $(".nav-tabs a").click(function (e) {
    e.preventDefault();
    clearInterval(tabCycle);
    $(this).tab("show");
    tabCycle = setInterval(tabChange, 5000);
  });
  //
  $("#kslide").kslide({});
  //
});
window.addEventListener("scroll", function () {
  let navbar = document.getElementById("stickyHeader");
  if (window.pageYOffset >= 46) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
});

const accordian = document.getElementsByClassName("contentBx");
for (i = 0; i < accordian.length; i++) {
  accordian[i].addEventListener("click", function () {
    this.classList.toggle("active");
  });
}
