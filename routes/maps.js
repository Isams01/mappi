const express = require('express');
const router  = express.Router();
const request = require('request');
const process = require('process');


// this will either be used to send and store data about the map..
// right now I am trying to get the map api without exposing the api keyy

// GETs below

module.exports = (db) => {
  router.get("/", (req, res) => {
      const templateVars = {
        API_KEY: process.env.API_KEY,
      }
      res.render("index", templateVars);
  });

  router.get("/:id", (req,res) => {
    //return data about single map
  });


  return router;
};

// POSTs below

router.post("/:id/post", (req, res) => {

});
