function articleTemplate(article) {
  let { urlToImage, title, description, author, publishedAt } = article;
  if (title === '[Removed]') return '';

  const defaultImageUrl =
    'https://media.macphun.com/img/uploads/customer/how-to/608/15542038745ca344e267fb80.28757312.jpg?q=85&w=1340';
  urlToImage = urlToImage || defaultImageUrl;

  return `<li class="card news-card">
  <img loading="lazy" class="news-image" src="${urlToImage}" alt="${title}" />
  <h3 class="card-title">${title}</h3>
  <p class="card-desc">${description}</p>
  <div class="card-footer">
    <span>${author}</span>
    <span>${publishedAt}</span>
  </div>
</li>`;
}

export function articlesTemplate(articles) {
  return articles.map(articleTemplate).join('');
}
