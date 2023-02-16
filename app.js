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
    // If didn't click on start menu
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

items.forEach((item)=>{
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
  })

  item.addEventListener('mouseleave', ()=> {
    clearTimeout(timeoutIdAdd);
    timeoutIdRemove = setTimeout(() => {
      subMenu.classList.remove("delayed");
    }, 700);
  })
  
  subMenu.addEventListener('mouseenter', ()=> {
    clearTimeout(timeoutIdRemove);
  })

  startMenu.addEventListener("mouseleave", () => {
    clearTimeout(timeoutIdRemove);
  })
})

subItems.forEach((subItem)=>{
  let timeoutIdAdd;
  let timeoutIdRemove;
  let subMenu = subItem.querySelector(":scope > .subMenu");
  if (!subMenu) return;
  if (subMenu) {
    let arrow = document.createElement("p");
    arrow.textContent = "⏵";
    arrow.style.paddingRight = "10px"
    subItem.appendChild(arrow);
  }
  subItem.addEventListener('mouseenter', ()=> {
    // subMenu.classList.remove("delayed");
    timeoutIdAdd = setTimeout(() => {
      subMenu.classList.add("delayed");
    }, 700);
  })

  subItem.addEventListener('mouseleave', ()=> {
    clearTimeout(timeoutIdAdd);
    timeoutIdRemove = setTimeout(() => {
      subMenu.classList.remove("delayed");
    }, 700);
  })

  subMenu.addEventListener('mouseenter', ()=> {
    clearTimeout(timeoutIdRemove);
  })

  startMenu.addEventListener("mouseleave", () => {
    clearTimeout(timeoutIdRemove);
  })
})

notepadLink = document.querySelector(".notepad");
notepadLink.addEventListener("click", ()=> {
  let notepad = new Window("notepad", 100, 100, 640, 480);
  console.log(notepad);
  notepad.element.style.position = "fixed";
  notepad.element.style.backgroundColor = `rgb(255 255 255)`;
  notepad.element.style.resize = "both";
  notepad.element.style.overflow = "auto";
})