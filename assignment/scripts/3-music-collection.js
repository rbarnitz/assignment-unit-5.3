console.log('***** Music Collection *****')
// Safe Zone -- Write code below this line


myCollection = [];

function addToCollection(collection, title1, artist1, yearPublished1) {


  let newObject = {
    title: title1,
    artist: artist1,
    yearPublished: yearPublished1
  };
  
  myCollection.push(newObject);

 // console.log(newObject);
 // console.log(myCollection);


}


addToCollection("FirstAlbum", 'Snoop', 'Dogg', 2000);












// PLEASE DO NOT MODIFY THIS. Just leave it down here at the bottom. Think of it
// as a lil' chunk of friendly code that you don't need to understand right now.
// (It's used for automated testing.)
try {
  module.exports = {
    myCollection: typeof myCollection !== 'undefined' ? myCollection : undefined,
    addToCollection: typeof addToCollection !== 'undefined' ? addToCollection : undefined,
    showCollection: typeof showCollection !== 'undefined' ? showCollection : undefined,
    findByArtist: typeof findByArtist !== 'undefined' ? findByArtist : undefined,
    search: typeof search !== 'undefined' ? search : undefined,
  }
} catch (e) {
  // Do nothing
}
