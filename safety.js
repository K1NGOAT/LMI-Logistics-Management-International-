function toggleDescription(element) {
    const description = element.previousElementSibling.querySelector('.more-text');
    if (description.style.display === 'none' || description.style.display === '') {
      description.style.display = 'inline';
      element.textContent = 'Read Less';
    } else {
      description.style.display = 'none';
      element.textContent = 'Read More';
    }
  }
  