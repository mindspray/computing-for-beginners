class Window {
  constructor(title, x, y, width, height) {
    this.title = title;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.state = "open";

    this.element = document.createElement("div");
    this.element.classList.add("window");
    this.element.style.left = `${this.x}px`
    this.element.style.top = `${this.y}px`;
    this.element.style.width = `${this.width}px`
    this.element.style.height = `${this.height}px`
    this.element.innerHTML = `<div class="title-bar">${this.title}</div>`
    document.body.appendChild(this.element);

    const titlebar = document.querySelector(".title-bar");
    let isDragging = false;
    let lastX = 0;
    let lastY = 0;
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