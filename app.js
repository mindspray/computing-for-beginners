// let start = document.querySelector(".start");
// let startBtn = document.querySelector(".startBtn");
// let startMenu = document.querySelector(".startMenu");
// let startBtnInner = document.querySelector(".startBtnInner");
// let items = document.querySelectorAll(".item");

// let subMenu = document.querySelector(".subMenu");
// let subItemList = document.querySelector(".subItemList");
// let subItem = document.querySelector(".subItem")


// start.addEventListener("click", (e) => {
//   console.log("start click ran");
//   if (e.target.closest(".startMenu")) {
//     return;
//   }
//   toggleDisplay(startMenu);
//   toggleBevel(startBtn);
//   toggleDottedBorder(startBtnInner);
  
// })

// startBtn.addEventListener("blur", (e) => {
//   console.log(e);
//   console.log("blur ran");
//   console.log(e.target.parentElement.closest(".startMenu"));
//   if(e.target.closest(".startMenu")) {
//     return;
//   }
//   startMenu.style.display = "none";
//   startBtn.style.borderStyle = "outset";
//   startBtnInner.style.border = "none";
// })

// startMenu.addEventListener("mouseover", (e) => {
//   console.log(e.target.classList);
//   let item = e.target.closest(".item");
//   let subItem = e.target.closest(".subItem");
  
//   if (item) {
//     console.log(item);
//     const sub = item.querySelector(".subMenu");
//     if (sub) {
//       sub.style.display = "flex";
//     }
//     }
//     if (subItem) {
//       console.log(subItem);
//       const subsub = subItem.querySelector(".subMenu");
//       if (subsub) {
//         subsub.style.display = "flex";
//       }
//     }
//   }
// )



// function toggleBevel(item) {
//   let currentState = getComputedStyle(item).borderStyle;
//   item.style.borderStyle = currentState === "outset" ? "inset" : "outset";
// }

// function toggleDottedBorder(item) {
//   let currentState = getComputedStyle(item).border;
//   item.style.border = currentState === "1px dotted rgb(0, 0, 0)" ? "none" : "1px dotted rgb(0, 0, 0)";
// }

// function toggleDisplay(item) {
//   let currentState = getComputedStyle(item).display;
//   item.style.display = currentState === "flex" ? "none" : "flex";
// }