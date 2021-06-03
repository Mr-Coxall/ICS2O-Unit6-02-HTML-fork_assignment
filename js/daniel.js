// Copyright (c) 2021 Daniel Pawelko All rights reserved
//
// Created by: Daniel Pawelko
// Created on: June 2021
// This file contains the JS functions for index.html

"use strict"

window.onload = function() {
  // this calculates volume of a cube, user input from search query
  const params = new URLSearchParams(document.location.search)

  // input
  const length = params.get('l')
  const width = params.get('w')
  const height = params.get('h')

  // process
  const volume = length * width * height

  // output
  document.getElementById('length').innerHTML = "Length = " + length + "cm"    
  document.getElementById('width').innerHTML ="Width = " + width + "cm"
  document.getElementById('height').innerHTML ="Height = " + height + "cm"
  document.getElementById('output').innerHTML = "Volume = " + volume + "cm³"
}