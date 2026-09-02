document.addEventListener('click', function(event) {
  
    const clickedTab = event.target.closest('.tab');
  
    if (!clickedTab) {
      return;
    }
  
    const tabsContainer = clickedTab.closest('.tabs');
    if (!tabsContainer) {
      return;
    }
  
    const tabs = tabsContainer.querySelectorAll('.tab');
    const contents = tabsContainer.querySelectorAll('.tab__content');
    const index = Array.from(tabs).indexOf(clickedTab);
  
    tabs.forEach(function(tab) {
      tab.classList.remove('tab_active');
    });
  
    contents.forEach(function(content) {
      content.classList.remove('tab__content_active');
    });
  
    clickedTab.classList.add('tab_active');
  
    contents[index].classList.add('tab__content_active');
  });