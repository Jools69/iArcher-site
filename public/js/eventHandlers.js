const shownHandler = (e) => {
    // console.log('Accordion segment opened, handle scroll');
    // console.dir(e.target);

    const rect = e.target.getBoundingClientRect();
    const scrollContainer = document.querySelector('.scrollableContainer');
    console.log(rect.top >= 0 && 
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight));
    console.log(rect.bottom - scrollContainer.getBoundingClientRect().bottom);

    if (rect.bottom > window.innerHeight) {
        // we need to scroll the rect into view
        scrollAmount = rect.bottom - scrollContainer.getBoundingClientRect().bottom;
        scrollContainer.scrollBy(0, scrollAmount);
    }
}

const roundContainers = document.querySelectorAll('.collapse');

for (container of roundContainers) {
    container.addEventListener('shown.bs.collapse', shownHandler);
}
