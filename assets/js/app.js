const tabsBox = document.querySelector(".tabs-box");
const allTabs = document.querySelectorAll(".tab");
const arrowIcons = document.querySelectorAll(".icon i");

// initially drag end
let isDragging = false;

const handleIcons = () => {
  let scrollVal = Math.round(tabsBox.scrollLeft);
  let maxScrollableWidth = tabsBox.scrollWidth - tabsBox.clientWidth;

  // left icons isShow
  arrowIcons[0].parentElement.style.display = scrollVal > 0 ? "flex" : "none";

  // right icons isShow
  arrowIcons[1].parentElement.style.display =
    maxScrollableWidth - 2 > scrollVal ? "flex" : "none";
};

// click and show hide arrow icons
arrowIcons.forEach((icon) => {
  icon.addEventListener("click", () => {
    tabsBox.scrollLeft += icon.id === "left" ? -350 : 350;
    setTimeout(() => handleIcons(), 50);
  });
});

// is active any item
allTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabsBox.querySelector(".active").classList.remove("active");
    tab.classList.add("active");
  });
});

// start darg
const dragStart = () => {
  isDragging = true;
};

// drag running
const dragging = (e) => {
  if (!isDragging) return;
  tabsBox.classList.add("dragging");
  tabsBox.scrollLeft -= e.movementX;
  handleIcons();
};

// end darg
const dragStop = () => {
  isDragging = false;
  tabsBox.classList.remove("dragging");
};

tabsBox.addEventListener("mousedown", dragStart);
tabsBox.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);
