function addMovie() 
{
    // Get form values
    let titleInput = document.querySelector('.card .title input');
    let languageSelect = document.getElementById('language');
    let genreSelect = document.getElementById('genre');
    let isWatchedCheckbox = document.getElementById('isWatched');

    let title = titleInput.value;
    let language = languageSelect.value;
    let genre = genreSelect.value;
    let isWatched = isWatchedCheckbox.checked;

    // Validation form input
    if (!title || !language || !genre)
    {
        console.log('Error!');
        alert('Please fill in all option.');
        return;
    }
    else
    {
        console.log('Vaild:)');
        alert('All option is full.');
    }

    // Create a new table row
    let tableBody = document.getElementById('movieTable').getElementsByTagName('tbody')[0];
    let newRow = tableBody.insertRow(tableBody.rows.length);

    // Insert cells in the new row
    var cellIndex = newRow.insertCell(0);
    var cellTitle = newRow.insertCell(1);
    var cellLanguage = newRow.insertCell(2);
    var cellGenre = newRow.insertCell(3);
    var cellIsWatched = newRow.insertCell(4);
    var cellActions = newRow.insertCell(5);

    // Populate cells with form values
    cellIndex.textContent = tableBody.rows.length;
    cellTitle.textContent = title;
    cellLanguage.textContent = language;
    cellGenre.textContent = genre;
    cellIsWatched.textContent = isWatched ? 'Yes' : 'No';


    // Clear form fields after adding a movie
    titleInput.value = '';
    languageSelect.value = '';
    genreSelect.value = '';
    isWatchedCheckbox.checked = false;

    // Create delete button
    let deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';

    deleteButton.addEventListener('click', function () {
        // Call the function to remove the row when the delete button is clicked
        removeMovieRow(newRow);
});

    cellActions.appendChild(deleteButton);

}

function removeMovieRow(row) 
{
    let tableBody = document.getElementById('movieTable').getElementsByTagName('tbody')[0];

    // Check if the row exists before trying to delete it
    if (row.parentNode) 
        {
            tableBody.removeChild(row);
            if (tableBody.rows.length === 0) 
            {
                console.log('no rows.');
            }
        }
}

document.querySelector('button').addEventListener('click', addMovie);