// Copyright (c) 2021 Ryan-Shaw-2 All rights reserved
//
// Created by: Ryan-Shaw-2
// Created on: June 2021
// This file contains the JS functions for ryan.html

"use strict"

window.onload = function() {
  // this function calculates the volume of a cube using a query string

  const params = new URLSearchParams(document.location.search)

  // input
  const length = params.get('l')
  const width = params.get('w')
  const height = params.get('h')

  // process
  const volume = length * width * height
  const volumeRounded = volume.toFixed(1)

  // output
  document.getElementById('dimensions-text').innerHTML = "Dimensions"
  document.getElementById('dimensions').innerHTML = "<ul>\n<li>Length = " + length + "\n<li>Width = " + width + "\n<li>Height = " + height
  document.getElementById('volume').innerHTML = "The volume is: " + volumeRounded + " cm³"
}
