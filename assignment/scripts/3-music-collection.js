console.log('***** Music Collection *****')
// Safe Zone -- Write code below this line


myCollection = [];

/*
  {
    artist: 'Snoop Dogg',
    title: 'The Doggfather',
    yearPublished: 1996,
  },
  {
    artist: 'Snoop Dogg',
    title: 'The Last Meal',
    yearPublished: 2000,
  },
  {
    artist: 'Snoop Dogg',
    title: 'No Limit Top Dogg',
    yearPublished: 1999,
  },
  {
    artist: '50 Cent',
    title: 'Get Rich or Die Tryin'',
    yearPublished: 2003,
  },
  {
    artist: '50 Cent',
    title: 'The Massacre'',
    yearPublished: 2005,
  },
  {
    artist: 'Nas',
    title: 'Gods Son',
    yearPublished: 2002,
  },
];

*/

function addToCollection(collection, title1, artist1, yearPublished1) {


  let newObject = {
    artist: artist1,
    title: title1,
    yearPublished: yearPublished1,
  };
  
  collection.push(newObject);

  //console.log(album);
 //console.log(collection);
 return newObject;



}

addToCollection(myCollection, 'Snoop Dogg', 'The Doggfather', 1996);
addToCollection(myCollection, 'Snoop Dogg', 'The Last Meal', 2000);
addToCollection(myCollection, 'Snoop Dogg', 'No Limit Top Dogg', 1999);
addToCollection(myCollection, '50 Cent', 'Get Rich or Die Tryin', 2003);
addToCollection(myCollection, '50 Cent', 'The Massacre', 2005);
addToCollection(myCollection, 'Nas', 'Gods Son', 2002);

console.log(this.myCollection);


function showCollection(collection) {
  for (album of collection) {    
  
    let collectionString = '';

    //console.log(album.artist,'by',album.title,', published in', yearString);
    
    collectionString = `${album.artist} by ${album.title}, published in ${album.yearPublished.toString()}`;

    console.log(collectionString);

  }

}

showCollection(this.myCollection);








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
