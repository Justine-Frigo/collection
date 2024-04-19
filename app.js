const booksQuotation = [
  {
    id: 1,
    title: "Le Seigneur des Anneaux",
    bookClass: "lotr",
    author: "J.R.R Tolkien",
    year: "1954",
    cover: "./images/le-seigneur-des-anneaux.jpg",
    summary:
      "Cette saga épique raconte l'histoire d'un jeune hobbit, Frodon Sacquet, chargé de détruire un anneau maléfique avant qu'il ne tombe entre les mains du seigneur des ténèbres, Sauron. Accompagné d'une communauté hétéroclite, il entreprend un périple périlleux à travers la Terre du Milieu pour accomplir sa mission et sauver le monde de la domination du mal.",
    quote:
      "Tout ce qui est or ne brille pas. Tous ceux qui errent ne sont pas perdus.",
  },

  {
    id: 2,
    title: "Alice au pays des merveilles",
    bookClass: "alice",
    author: "Lewis Carroll",
    year: "1865",
    cover: "./images/alice-au-pays-des-merveilles.jpg",
    summary:
      " Cette histoire relate les aventures fantastiques d'une jeune fille nommée Alice, qui tombe dans un terrier de lapin et découvre un monde étrange et merveilleux. Elle rencontre des personnages excentriques comme le Lapin Blanc, le Chapelier Fou et la Reine de Cœur, vivant des situations absurdes et loufoques tout en cherchant à retrouver son chemin chez elle.",
    quote:
      "Mais alors, dit Alice, si le monde n'a absolument aucun sens, qui nous empêche d'en inventer un ?",
  },

  {
    id: 3,
    title: "Le Meilleur des mondes",
    bookClass: "mondes",
    author: "Aldous Huxley",
    year: "1932",
    cover: "./images/le-meilleur-des-mondes.jpg",
    summary:
      "Le roman présente une société future dystopique où la reproduction est contrôlée en laboratoire et les individus sont conditionnés pour accepter leur place dans une hiérarchie rigide. L'histoire suit Bernard Marx, un membre de cette société qui remet en question ses valeurs, et John, un homme né en dehors de ce système, dont les idées perturbent l'ordre établi.",
    quote:
      "Je n'en veux pas du confort ! Je veux Dieu, je veux de la poésie, je veux du danger véritable, je veux de la liberté, je veux de la bonté. Je veux du péché. Je réclame le droit d'être malheureux.",
  },

  {
    id: 4,
    title: "Le Portrait de Dorian Gray",
    bookClass: "portrait",
    author: "Oscar Wilde",
    year: "1890",
    cover: "./images/le-portrait-de-dorian-gray.jpg",
    summary:
      "Ce roman raconte l'histoire de Dorian Gray, un jeune homme dont le portrait vieillit et porte les marques de ses péchés tandis qu'il conserve sa jeunesse éternelle. Obsédé par la quête de plaisirs et de beauté, Dorian descend lentement dans la corruption morale, tandis que son portrait devient un reflet de sa dépravation.",
    quote:
      "Tout portrait qu’on peint avec âme est un portrait non du modèle, mais de l’artiste.",
  },

  {
    id: 5,
    title: "Ne tirez pas sur l'oiseau moqueur",
    bookClass: "moqueur",
    author: "Harper Lee",
    year: "1960",
    cover: "./images/ne-tirez-pas-sur-l-oiseau-moqueur.jpg",
    summary:
      "Ce roman suit l'histoire d'une jeune fille nommée Scout et de son frère Jem, qui grandissent dans une petite ville d'Alabama pendant les années 1930. Ils sont témoins des injustices raciales et de la lutte pour la justice lorsque leur père, l'avocat Atticus Finch, défend un homme noir accusé à tort de viol. Le roman explore les thèmes de la tolérance, de l'empathie et de la compréhension dans un contexte de préjugés profondément enracinés.",
    quote:
      "Je voudrais que tu comprennes ce qu'est le vrai courage. C'est savoir que tu pars battu d'avance, et malgré cela, agir quand même et tenir jusqu'au bout.",
  },

  {
    id: 6,
    title: "Fahrenheit 451",
    bookClass: "fahrenheit",
    author: "Ray Bradbury",
    year: "1953",
    cover: "./images/fahrenheit-451.jpg",
    summary:
      "Ce roman présente un monde dystopique où les livres sont interdits et brûlés par les pompiers, chargés de maintenir l'ignorance et la conformité. Le protagoniste, Montag, remet en question son rôle de brûleur de livres et cherche à redécouvrir le pouvoir des mots et de la pensée critique.",
    quote:
      "Les choses ont de la mémoire, et si vous les brûlez, vous perdez l'histoire.",
  },

  {
    id: 7,
    title: "Les aventures de Sherlock Holmes",
    bookClass: "sherlock",
    author: "Arthur Conan Doyle",
    year: "1892",
    cover: "./images/les-aventures-de-sherlock-holmes.jpg",
    summary:
      "Une série de romans qui présentent les enquêtes fascinantes du célèbre détective Sherlock Holmes et de son fidèle compagnon le Dr Watson. Ensemble, ils résolvent une série de mystères complexes et captivants, utilisant la logique, l'observation minutieuse et la déduction pour démasquer les criminels et rendre justice.",
    quote:
      "Quand vous avez éliminé l'impossible, ce qui reste, si improbable soit-il, est nécessairement la vérité.",
  },

  {
    id: 8,
    title: "Frankenstein",
    bookClass: "frankenstein",
    author: "Mary Shelley",
    year: "1818",
    cover: "./images/frankenstein.png",
    summary:
      "Ce roman raconte l'histoire du savant Victor Frankenstein, qui crée une créature vivante à partir de cadavres. Rejetée par son créateur et la société, la créature cherche vengeance, semant le chaos dans la vie de Frankenstein et mettant en lumière les dangers de la science non réglementée et de l'isolement",
    quote:
      "Rien n'est si pénible pour l'esprit humain que de se trouver en présence de circonstances inexpliquées, d'événements extraordinaires, sans pouvoir y découvrir une cause naturelle.",
  },

  {
    id: 9,
    title: "Le Trône de fer",
    bookClass: "got",
    author: "George R.R. Martin",
    year: "1996",
    cover: "./images/le-trône-de-fer.jpg",
    summary:
      "Cette saga épique se déroule dans un monde médiéval-fantastique où plusieurs maisons nobles luttent pour le contrôle du Royaume des Sept Couronnes. Entre complots, trahisons, alliances fragiles et guerres brutales, l'intrigue tourne autour du jeu de pouvoir pour s'emparer du trône de fer. À travers une multitude de personnages complexes, l'auteur explore les thèmes de la politique, de la moralité et du destin.",
    quote:
      "La peur est plus tranchante qu'aucune épée. Qui a peur de perdre a déjà perdu",
  },

  {
    id: 10,
    title: "La Nuit des temps",
    bookClass: "nuit",
    author: "René Barjavel",
    year: "1968",
    cover: "./images/la-nuit-des-temps.jpg",
    summary:
      "Ce roman relate la découverte d'une civilisation ancienne sous la glace de l'Antarctique, datant de milliers d'années. À travers le récit d'amour tragique entre les membres de cette civilisation oubliée, l'auteur explore les thèmes de la science, de l'amour et de la quête de vérité, offrant une réflexion sur l'humanité et son destin.",
    quote:
      "Et, quand on eut tout essayé, alors on se mit à aimer. Et, quand on eut tout oublié, alors on se mit à espérer.",
  },
];

const main = document.getElementsByTagName("main")[0];
console.log(main);

for (let book of booksQuotation) {
  console.log(book);
  const section = document.createElement("section");
  main.appendChild(section);

  const imgContainer = document.createElement("div");
  imgContainer.className = `${book.bookClass}-img-container`;
  section.appendChild(imgContainer);

  const badgesContainer = document.createElement("nav");
  section.appendChild(badgesContainer);

  const contentContainer = document.createElement("article");
  section.appendChild(contentContainer);

  const year = document.createElement("h4");
  year.innerText = book.year;
  badgesContainer.appendChild(year);

  const title = document.createElement("h2");
  title.innerText = book.title;
  contentContainer.appendChild(title);

  const author = document.createElement("h3");
  author.innerText = book.author;
  badgesContainer.appendChild(author);

  const summary = document.createElement("p");
  summary.innerText = book.summary;
  contentContainer.appendChild(summary);

  const quote = document.createElement("q");
  quote.setAttribute('id', `quote-${book.bookClass}`);
  quote.innerText = book.quote;
  quote.className = 'hidden';
  contentContainer.appendChild(quote);

  const displayQuoteButton = document.createElement("button");
  displayQuoteButton.setAttribute('id', `quote-btn-${book.bookClass}`);
  displayQuoteButton.innerText = "Citation";
  contentContainer.appendChild(displayQuoteButton);

  displayQuote(displayQuoteButton, quote);
}

function displayQuote(button, quote) {
  button.addEventListener(('click'), () => {
    quote.classList.toggle('hidden')
  })
}

