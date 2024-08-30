function getBackgroundImageSrc(target) {
  const screenWidth = window.innerWidth;
  const pixelRatio = window.devicePixelRatio || 1;

  let bgrSrc;

  if (screenWidth >= 1440) {
    bgrSrc =
      pixelRatio > 1
        ? target.dataset.bgrSrcDesktop2x
        : target.dataset.bgrSrcDesktop1x;
  } else if (screenWidth >= 768) {
    bgrSrc =
      pixelRatio > 1
        ? target.dataset.bgrSrcTablet2x
        : target.dataset.bgrSrcTablet1x;
  } else {
    bgrSrc =
      pixelRatio > 1
        ? target.dataset.bgrSrcMobile2x
        : target.dataset.bgrSrcMobile1x;
  }

  return bgrSrc;
}

function handleIntersection(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const target = entry.target;

      if (target.dataset.bgSrcDesktop1x) {
        // Lazy-load background image
        const bgrSrc = getBackgroundImageSrc(target);
        if (bgrSrc) {
          target.style.backgroundImage = `url(${bgrSrc})`;
        }
        target.classList.remove('lazy-bgr');
      }

      if (target.dataset.src) {
        // Lazy-load normal image
        target.src = target.dataset.src;
      }

      observer.unobserve(target);
    }
  });
}

const elementsToObserve = document.querySelectorAll('.lazy-bgr, [data-src]');

const observer = new IntersectionObserver(handleIntersection);

elementsToObserve.forEach(el => observer.observe(el));
