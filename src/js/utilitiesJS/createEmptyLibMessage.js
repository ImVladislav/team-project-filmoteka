export function createMessage() {
  const messageMarkup = `<div class="message-wrap" >
      <p class="sorry">Sorry...</p>
      <p class="message">
        You haven't added any movies yet. Hope you fix this soon :)
      </p>
      <a href="/src/index.html" class="library__button accent">Filmoteka</a>
    </div>`;
  return messageMarkup;
}
