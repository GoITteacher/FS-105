function articleTemplate(article) {
  let { media, title, summary, author, published_date } = article;
  const defaultImageUrl =
    'https://media.macphun.com/img/uploads/customer/how-to/608/15542038745ca344e267fb80.28757312.jpg?q=85&w=1340';

  media = media || defaultImageUrl;
  return `<li class="card news-card">
  <img loading="lazy"
    class="news-image"
    src="${media}"
    alt="${title}"
  />
  <h3 class="card-title">
    ${title}
  </h3>
  <p class="card-desc">
  ${summary}
  </p>
  <div class="card-footer">
    <span>${author}</span>
    <span>${published_date}</span>
  </div>
</li>`;
}

export function articlesTemplate(articles) {
  return articles.map(articleTemplate).join('');
}
