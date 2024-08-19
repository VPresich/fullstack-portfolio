export function marqueeInnerMarkup(projectsUrl = []) {
  const createLineMarkup = (shift = 0) => {
    const shiftedProjectsUrl = [
      ...projectsUrl.slice(shift),
      ...projectsUrl.slice(0, shift),
    ];

    return shiftedProjectsUrl.reduce(
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
  };

  const lineMarkup1 = createLineMarkup(0);
  const lineMarkup2 = createLineMarkup(3);
  const lineMarkup3 = createLineMarkup(6);

  return `
    <div class="cover-marquee-inner">
      <div class="cover-marquee-line">${lineMarkup1}</div>
      <div class="cover-marquee-line">${lineMarkup2}</div>
      <div class="cover-marquee-line">${lineMarkup3}</div>
    </div>
  `;
}
