// Sample list of books with authors and publication years
const books = [
    { title: "The Road", author: "Cormac McCarthy", year: 2006 },
    { title: "The Hunger Games", author: "Suzanne Collins", year: 2008 },
    { title: "The Girl with the Dragon Tattoo", author: "Stieg Larsson", year: 2005 },
    { title: "The Fault in Our Stars", author: "John Green", year: 2012 },
    { title: "Gone Girl", author: "Gillian Flynn", year: 2012 },
    { title: "The Martian", author: "Andy Weir", year: 2011 },
    { title: "The Goldfinch", author: "Donna Tartt", year: 2013 }
];

// Function to capitalize the author's name
function capitalizeName(name) {
    return name.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ');
}

// Function to filter books published after 2010 and capitalize author names
function filterAndCapitalizeBooks(books) {
    return books
        .filter(book => book.year >= 2010) // Filter books published after or in 2010
        .map(book => ({ 
            ...book, 
            author: capitalizeName(book.author) // Capitalize the author's name
        }));
}

// Get the filtered and capitalized list of books
const filteredBooks = filterAndCapitalizeBooks(books);

// Output the result
console.log("Books published after 2010 with capitalized author names:", filteredBooks);
