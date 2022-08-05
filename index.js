
function DogWalk() {
  const map = Array.prototype.map;
  const elements = document.querySelectorAll('.dogwalk');
  const filterElements = Array.from(elements).filter((element) => {
    return element.textContent.trim() !== "" && element.children.length === 0;
  });
  for (const element of filterElements) {
    const originalText = element.textContent;
    let charIndex = 0;
    setInterval(() => {
      if (charIndex === 0) {
        charIndex = element.textContent.length - 1;
      } else {
        charIndex--;
      }
      element.textContent = map.call(originalText, (ch, index) => {
        if (index === charIndex) {
          return "🐕";
        }
        return ch;
      }).join('');
    }, 1000);
  }
}

