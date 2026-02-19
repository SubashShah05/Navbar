// Storing 'FirstName' and 'Location' in localStorage
localStorage.setItem('FirstName', 'Subash'); 
localStorage.setItem('Location', 'Mirchaiya');

// Retrieving 'Location' before removal
let getBeforeRemoval = localStorage.getItem('Location');
console.log(getBeforeRemoval);  // Output: 'Mirchaiya'

// Removing 'Location' from localStorage
localStorage.removeItem('Location');

// Trying to retrieve 'Location' after removal
let getAfterRemoval = localStorage.getItem('Location');
console.log(getAfterRemoval);  // Output: null (since 'Location' is removed)
