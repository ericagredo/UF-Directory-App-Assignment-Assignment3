'use strict';
/* 
  Import modules/files you may need to correctly run the script. 
  Make sure to save your DB's uri in the config file, then import it with a require statement!
 */
var fs = require('fs'),
    mongoose = require('mongoose'), 
    Schema = mongoose.Schema, 
    Listing = require('./ListingSchema.js'), 
    config = require('./config'),
    jsonListings = require('./listings.json');

/* Connect to your database */
mongoose.connect(config.db.uri);



var findLibraryWest = function() {
  
   Listing.find({ name: 'Library West' }, function(err, libWestListing){
    if(err) throw err;

    console.log(libWestListing);
   });
};

var removeCable = function() {
  
   Listing.findOneAndRemove({ code: 'CABL' }, function(err, cableListing){
    if(err) throw err;
    
    //Log this document to the console.
    console.log(cableListing);
   });
};

var updatePhelpsLab = function() {
  
   var newAddress = 'Gainesville, FL 32603';
   
   Listing.findOneAndUpdate({ name: 'Phelps Laboratory' }, { address: newAddress }, function(err, phelpsListing) {
    if(err) throw err;

    // Log updated listing to the console.
    phelpsListing.address = newAddress;
    console.log(phelpsListing);
  });
};

var retrieveAllListings = function() {
  /* 
    Retrieve all listings in the database, and log them to the console. 
   */
   Listing.find({}, function(err, listings){
    if(err) throw err;

    console.log(listings);
   });
};

findLibraryWest();
removeCable();
updatePhelpsLab();
retrieveAllListings();