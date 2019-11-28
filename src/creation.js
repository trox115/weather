function createEl(tag, classTag) {
  const element = document.createElement(tag);
  if (classTag !== '') {
    element.classList.add(classTag);
  }
  return element;
}

export default createEl;
