const socialLinksMarkup = links => {
  return links
    .map(
      link =>
        `
    <li>
        <span class="hero-social-list-item">
            <a class="hero-social-list-link"      
            target="_blank"
            rel="noopener"
            href="${link.href}"
            >
            ${link.text}       
            </a>
        </span>
    </li>
    `
    )
    .join('');
};

export default socialLinksMarkup;
