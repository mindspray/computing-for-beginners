class Window {
  constructor(title, x, y, width, height) {
    // Window properties
    this.title = title;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.state = "open";

    // Create and style window
    this.element = document.createElement("div");
    this.element.classList.add("window");
    this.element.style.left = `${this.x}px`
    this.element.style.top = `${this.y}px`;
    this.element.style.width = `${this.width}px`;
    this.element.style.height = `${this.height}px`;
    this.element.appendChild(document.createElement("div"));
    let theTitle = this.element.firstChild;
    theTitle.classList.add("title-bar");
    theTitle.appendChild(document.createElement("p"));
    theTitle.firstChild.innerText = `${this.title}`;
    theTitle.style.display = "flex";
    theTitle.firstChild.style.width = "100%";
    // this.element.innerHTML = `<div class="title-bar">${this.title}</div>`;
    this.element.style.border = "4px ridge";
    this.element.style.display = "flex";
    this.element.style.flexDirection = "column";
    let minimize = document.createElement("button");
    let maximize = document.createElement("button");
    let close = document.createElement("button");

    [minimize.innerText, maximize.innerText, close.innerText] = ["🗕", "🗖", "🗙"];

    [minimize, maximize, close].forEach((element) => {
      element.style.flex = "1 0 auto";
      element.style.marginTop = "-3px"
      element.style.width = "25px";
      element.style.height = "25px";
      this.element.firstChild.appendChild(element);
    })

    document.body.appendChild(this.element);

    // Set initial window states and define variables
    const titlebar = document.querySelector(".title-bar");
    let isDragging = false;
    let lastX = 0;
    let lastY = 0;
    
    // Add event listeners to window
    titlebar.addEventListener('mousedown', (e)=> {
      isDragging = true;
      lastX = e.clientX;
      lastY = e.clientY;
    });
    titlebar.addEventListener('mouseup', (e)=> {
      isDragging = false;
    })
    titlebar.addEventListener('mousemove', (e)=> {
      if (isDragging) {
        const deltaX = e.clientX - lastX;
        const deltaY = e.clientY - lastY;
        console.log(`lX = ${lastX} lY = ${lastY} dX = ${deltaX} dY = ${deltaY}`);
        this.x += deltaX;
        this.y += deltaY;
        this.element.style.left = `${this.x}px`;
        this.element.style.top = `${this.y}px`;
        lastX = e.clientX;
        lastY = e.clientY;
      }
    })
  }
}