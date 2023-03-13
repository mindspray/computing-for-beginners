function openNotepad (){
  let notepad = new Window("notepad", 100, 100, 640, 480);
  notepad.element.style.position = "fixed";
  notepad.element.style.backgroundColor = `rgb(255 255 255)`;
  notepad.element.style.resize = "both";
  notepad.element.style.overflow = "auto";
  let textArea = document.createElement("textarea")
  textArea.style.resize = "none";
  textArea.style.width = "100%";
  textArea.style.height = "100%"
  notepad.element.appendChild(textArea);
}