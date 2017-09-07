'use strict';

var fs = require('fs'),
    mongoose = require('mongoose'), 
    Schema = mongoose.Schema, 
    Listing = require('./ListingSchema.js'), 
    config = require('./config'),
    jsonListings = require('./listings.json');

/* Connect to your database */
mongoose.connect(config.db.uri);

 var entry, currentListing;

 for(var i in jsonListings.entries){
  entry = jsonListings.entries[i];

  currentListing = new Listing({
    code: entry.code,
    name: entry.name,
    coordinates: entry.coordinates,
    address: entry.address
  });

  currentListing.save(function(err){
    if(err) throw err;
  });

 }

//Disconnect from database.
mongoose.disconnect();
