const books = [];
let keyword = "";
const RENDER_EVENT = "render-book";
const SAVED_EVENT = "saved-book";
const STORAGE_KEY = "BOOKSHELF_APPS";

document.addEventListener(RENDER_EVENT, function () {
  const incompleteBookshelfList = document.getElementById(
    "incompleteBookshelfList"
  );
  incompleteBookshelfList.innerHTML = "";

  const completeBookshelfList = document.getElementById(
    "completeBookshelfList"
  );
  completeBookshelfList.innerHTML = "";

  const filteredBooks = books.filter((book) => {
    return book.title.toLowerCase().includes(keyword.toLowerCase());
  });

  for (const bookItem of filteredBooks) {
    const bookElement = makeBookElement(bookItem);
    if (!bookItem.isComplete) {
      incompleteBookshelfList.append(bookElement);
    } else {
      completeBookshelfList.append(bookElement);
    }
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const submitForm = document.getElementById("inputBook");
  submitForm.addEventListener("submit", function (event) {
    event.preventDefault();
    addBook();
  });

  const submitSearch = document.getElementById("searchBook");
  submitSearch.addEventListener("submit", function (event) {
    event.preventDefault();
    searchBook();
  });

  const labelComplete = document.getElementById("labelComplete");
  const inputBookIsComplete = document.getElementById("inputBookIsComplete");

  inputBookIsComplete.addEventListener("change", function (event) {
    if (this.checked) {
      labelComplete.innerHTML = "Selesai dibaca";
    } else {
      labelComplete.innerHTML = "Belum selesai dibaca";
    }
  });

  if (isStorageExist()) {
    loadDataFromStorage();
  }
});

function generateId() {
  return +new Date();
}

function generateBookObject(id, title, author, year, isComplete) {
  return {
    id,
    title,
    author,
    year,
    isComplete,
  };
}

function addBook() {
  const id = generateId();
  const title = document.getElementById("inputBookTitle").value;
  const author = document.getElementById("inputBookAuthor").value;
  const year = document.getElementById("inputBookYear").value;
  const isComplete = document.getElementById("inputBookIsComplete").checked;

  const bookObject = generateBookObject(id, title, author, year, isComplete);

  books.push(bookObject);

  document.dispatchEvent(new Event(RENDER_EVENT));
  saveData();
}

function makeBookElement(bookObject) {
  const textTitle = document.createElement("h3");
  textTitle.innerText = bookObject.title;

  const textAuthor = document.createElement("p");
  textAuthor.innerText = "Penulis: " + bookObject.author;

  const textYear = document.createElement("p");
  textYear.innerText = "Tahun: " + bookObject.year;

  const container = document.createElement("article");
  container.classList.add("book_item");
  container.append(textTitle, textAuthor, textYear);
  container.setAttribute("id", `book-${bookObject.id}`);

  const actionContainer = document.createElement("div");
  actionContainer.classList.add("action");

  const deleteButton = document.createElement("button");
  deleteButton.classList.add("red");
  deleteButton.innerText = "Hapus buku";
  deleteButton.addEventListener("click", function () {
    showRemoveDialog(bookObject.id);
  });

  if (bookObject.isComplete) {
    const incompleteButton = document.createElement("button");
    incompleteButton.classList.add("green");
    incompleteButton.innerText = "Belum selesai dibaca";

    incompleteButton.addEventListener("click", function () {
      undoFinishReadingBook(bookObject.id);
    });

    actionContainer.append(incompleteButton, deleteButton);
    container.append(actionContainer);
  } else {
    const completeButton = document.createElement("button");
    completeButton.classList.add("green");
    completeButton.innerText = "Selesai dibaca";

    completeButton.addEventListener("click", function () {
      finishReadingBook(bookObject.id);
    });

    actionContainer.append(completeButton, deleteButton);
    container.append(actionContainer);
  }

  return container;
}

function showRemoveDialog(bookId) {
  if (confirm("Hapus buku?") === true) {
    removeBook(bookId);
  }
}

function removeBook(bookId) {
  const bookTarget = findBookIndex(bookId);

  if (bookTarget === -1) return;

  books.splice(bookTarget, 1);
  document.dispatchEvent(new Event(RENDER_EVENT));
  saveData();
}

function finishReadingBook(bookId) {
  const bookTarget = findBook(bookId);

  if (bookTarget == null) return;

  bookTarget.isComplete = true;
  document.dispatchEvent(new Event(RENDER_EVENT));
  saveData();
}

function undoFinishReadingBook(bookId) {
  const bookTarget = findBook(bookId);

  if (bookTarget == null) return;

  bookTarget.isComplete = false;
  document.dispatchEvent(new Event(RENDER_EVENT));
  saveData();
}

function searchBook() {
  const searchKeyword = document.getElementById("searchBookTitle").value;
  keyword = searchKeyword;

  document.dispatchEvent(new Event(RENDER_EVENT));
}

function findBook(bookId) {
  for (const bookItem of books) {
    if (bookItem.id === bookId) {
      return bookItem;
    }
  }
  return null;
}

function findBookIndex(bookId) {
  for (const index in books) {
    if (books[index].id === bookId) {
      return index;
    }
  }

  return -1;
}

function saveData() {
  if (isStorageExist()) {
    const parsed = JSON.stringify(books);
    localStorage.setItem(STORAGE_KEY, parsed);
    document.dispatchEvent(new Event(SAVED_EVENT));
  }
}

function isStorageExist() /* boolean */ {
  if (typeof Storage === undefined) {
    alert("Browser kamu tidak mendukung local storage");
    return false;
  }
  return true;
}

function loadDataFromStorage() {
  const serializedData = localStorage.getItem(STORAGE_KEY);
  let data = JSON.parse(serializedData);

  if (data !== null) {
    for (const book of data) {
      books.push(book);
    }
  }

  document.dispatchEvent(new Event(RENDER_EVENT));
}
