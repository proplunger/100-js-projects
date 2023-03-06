// Constants for the Open Library API endpoints
const SUBJECTS_URL = "https://openlibrary.org/subjects.json";
const SEARCH_URL = "https://openlibrary.org/search.json";

// DOM elements
const searchInput = document.getElementById("search-input");
const searchBtn = document.getElementById("search-btn");
const clearBtn = document.getElementById("clear-btn");
const popularSubjects = document.getElementById("popular-subjects");
const booksContainer = document.getElementById("books-container");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");

// State variables
let currentQuery = "";
let currentSubject = "";
let currentOffset = 0;

// Event listeners
searchBtn.addEventListener("click", handleSearch);
clearBtn.addEventListener("click", clearSearch);
popularSubjects.addEventListener("click", handleSubjectClick);
prevBtn.addEventListener("click", handlePrevClick);
nextBtn.addEventListener("click", handleNextClick);

// Functions
async function handleSearch() {
  const query = searchInput.value.trim();
  if (query === "") return;
  currentQuery = query;
  currentSubject = "";
  currentOffset = 0;
  renderBooks(await searchBooks(query));
}

function clearSearch() {
  searchInput.value = "";
  currentQuery = "";
  currentSubject = "";
  currentOffset = 0;
  booksContainer.innerHTML = "";
}

async function handleSubjectClick(event) {
  event.preventDefault();
  const subject = event.target.dataset.subject;
  if (!subject) return;
  currentQuery = "";
  currentSubject = subject;
  currentOffset = 0;
  renderBooks(await getSubjectBooks(subject));
}

async function handlePrevClick() {
  if (currentOffset <= 0) return;
  currentOffset -= 10;
  if (currentQuery) {
    renderBooks(await searchBooks(currentQuery));
  } else {
    renderBooks(await getSubjectBooks(currentSubject));
  }
}

async function handleNextClick() {
  currentOffset += 10;
  if (currentQuery) {
    renderBooks(await searchBooks(currentQuery));
  } else {
    renderBooks(await getSubjectBooks(currentSubject));
  }
}

async function searchBooks(query) {
  const url = `${SEARCH_URL}?q=${query}&offset=${currentOffset}&limit=10`;
  const response = await fetch(url);
  const data = await response.json();
  return data.docs;
}

async function getSubjectBooks(subject) {
  const url = `${SUBJECTS_URL}/${subject}.json?details=true&limit=10&offset=${currentOffset}`;
  const response = await fetch(url);
  const data = await response.json();
  return data.works;
}

function renderBooks(books) {
  let html = "";
  books.forEach((book) => {
    const coverUrl = `http://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`;
    const title = book.title;
    const author = book.author_name ? book.author_name.join(", ") : "Unknown";
    const year = book.first_publish_year || "Unknown";
    html += `
      <div class="book">
        <img src="${coverUrl}" alt="${title} cover" />
        <h3>${title}</h3>
        <p><strong>Author:</strong> ${author}</p>
        <p><strong>Year:</strong> ${year}</p>
      </div>
    `;
  });
  booksContainer.innerHTML = html;
}

// pop-subs

function handlePopularSubjectClick(event) {
  const subject = event.target.innerText;
  searchBox.value = subject;
  handleSearch();
}

function createPopularSubjects() {
  const popularSubjectsContainer = document.querySelector("#popular-subjects");

  popularSubjects.forEach(subject => {
    const subjectElem = document.createElement("a");
    subjectElem.href = `#${subject}`;
    subjectElem.innerText = subject;
    subjectElem.classList.add("subject");

    subjectElem.addEventListener("click", handlePopularSubjectClick);

    popularSubjectsContainer.appendChild(subjectElem);
  });
}
