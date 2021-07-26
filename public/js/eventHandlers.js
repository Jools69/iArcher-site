const shownHandler = (e) => {

    const rect = e.target.getBoundingClientRect();
    const scrollContainer = document.querySelector('.scrollableContainer');

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


// duration = 1000 ms
// distance = 100 px
// distance per ms = 100/1000 = 0.1 pixels per ms
// 0.1 * 1000 = 100;
// endTime = currentTime + duration
// if (currentTime < endTime) {
//     requestAnimationFrame()
// }