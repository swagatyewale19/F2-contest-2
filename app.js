let issuedBooks = [];

    
const issueBookForm = document.getElementById("issue-book-form");
const issuedBooksTableBody = document.querySelector(
  "#issued-books-table tbody"
);


function addIssuedBook(bookName, issuedTo) {
  
  const id = issuedBooks.length + 1;

  
  const now = new Date();
  const issuedTime = now.toLocaleString();

  
  issuedBooks.push({
    id,
    bookName,
    issuedTo,
    issuedTime,
    status: "not returned",
  });

  updateIssuedBooksTable();
}

function updateIssuedBooksTable() {
  issuedBooksTableBody.innerHTML = "";
}
