//your code here
// Select all draggable elements
const images = document.querySelectorAll('.image');

let draggedItem = null;

images.forEach((image) => {
  image.addEventListener('dragstart', (e) => {
    draggedItem = e.target;
    setTimeout(() => (draggedItem.style.visibility = 'hidden'), 0);
  });

  image.addEventListener('dragend', () => {
    setTimeout(() => (draggedItem.style.visibility = 'visible'), 0);
    draggedItem = null;
  });

  image.addEventListener('dragover', (e) => {
    e.preventDefault();
  });

  image.addEventListener('dragenter', (e) => {
    e.preventDefault();
    if (e.target !== draggedItem) {
      e.target.classList.add('selected');
    }
  });

  image.addEventListener('dragleave', (e) => {
    e.target.classList.remove('selected');
  });

  image.addEventListener('drop', (e) => {
    if (e.target !== draggedItem) {
      e.target.classList.remove('selected');

      // Swap the background images between the two elements
      const draggedBackground = draggedItem.style.backgroundImage;
      draggedItem.style.backgroundImage = e.target.style.backgroundImage;
      e.target.style.backgroundImage = draggedBackground;
    }
  });
});
