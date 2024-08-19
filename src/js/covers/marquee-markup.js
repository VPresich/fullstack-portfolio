export function marqueeInnerMarkup(projectsUrl = []) {
  const createLineMarkup = () =>
    projectsUrl.reduce(
      (strMarkup, { url1x, url2x }) =>
        strMarkup +
        `        
          <picture>
            <source
              srcset="
                ${url1x} 1x,
                ${url2x} 2x               
              "
              type="image/webp"
            />
            <img
              class="cover-marquee-img"
              src="${url1x}"
              alt="Project image"
            />
          </picture>
      
        `,
      ''
    );

  const lineMarkup = createLineMarkup();

  return `
    <div class="cover-marquee-inner">
      <div class="cover-marquee-line">${lineMarkup}</div>
      <div class="cover-marquee-line">${lineMarkup}</div>
      <div class="cover-marquee-line">${lineMarkup}</div>
    </div>
  `;
}
