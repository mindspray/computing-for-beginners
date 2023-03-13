const subItems = document.querySelectorAll(".subItem")
const items = document.querySelectorAll(".item");
const startMenu = document.querySelector(".startMenu");
const subMenus = document.querySelectorAll(".subMenu");

document.addEventListener('click', (e)=> {
  // if start button pressed
  if (e.target.closest(".startBtn")) {
    // if startMenu showing
    if (startMenu.classList.contains("displayFlex")) {
      // hide menu
      startMenu.classList.remove("displayFlex");
      // close menu tree
      subMenus.forEach((subMenu)=> {
        subMenu.classList.remove("delayed");
      })
    } else {
      // if start menu not showing, show it
      startMenu.classList.add("displayFlex");
    }
  } else if ((!e.target.closest(".startMenu"))) {
    // If didn't click on start menu or subtrees
    startMenu.classList.remove("displayFlex");
    subMenus.forEach((subMenu)=> {
      if (subMenu.classList.contains("delayed")) {
        subMenu.classList.remove("delayed");
      } else {
        return;
      }
    })
  }
})

let totalItems = [items, subItems];

totalItems.forEach((itemSet)=> {
  itemSet.forEach((item)=>{
    let timeoutIdAdd;
    let timeoutIdRemove;
    let subMenu = item.querySelector(":scope > .subMenu");
    if (!subMenu) return;
    if (subMenu) {
      let arrow = document.createElement("p");
      arrow.textContent = "⏵";
      arrow.style.paddingRight = "10px"
      item.appendChild(arrow);
    }

    item.addEventListener('mouseenter', ()=> {
      timeoutIdAdd = setTimeout(() => {
        subMenu.classList.add("delayed");
      }, 700);
      console.log(item.classList.toString());
    })

    item.addEventListener('mouseleave', ()=> {
      clearTimeout(timeoutIdAdd);
      timeoutIdRemove = setTimeout(() => {
        subMenu.classList.remove("delayed");
      }, 700);
    })
    
    // subMenu.addEventListener('mouseenter', ()=> {
    //   clearTimeout(timeoutIdRemove);
    // })
    // subMenu.addEventListener('mouseleave', ()=> {
    //   setTimeout(() => {
    //     subMenu.classList.remove("delayed");
    //   }, 700);
    // })

    startMenu.addEventListener("mouseleave", () => {
      clearTimeout(timeoutIdRemove);
    })
  })

})

notepadLink = document.querySelector(".notepad");
notepadLink.addEventListener("click", ()=> {
  openNotepad();
})