const changeContent = (clickedContent) => {
  const selectedContent = clickedContent;
  if (clickedContent.classList.contains('option')) {
    const currentSelectBox = clickedContent.closest('.select-cover');
    currentSelectBox.querySelector('.selected-value').textContent =
      clickedContent.textContent;
  }
};

const selectBoxList = document.querySelectorAll('.select-cover');
selectBoxList.forEach((selectBox) => {
  selectBox.addEventListener('click', (e) => {
    e.stopPropagation();
    selectBox.querySelector('ul').classList.toggle('active');
    changeContent(e.target);
  });
});
