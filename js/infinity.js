// Copyright (c) 2021 Infinity de Guzman All rights reserved
//
// Created by: Infinity de Guzman
// Created on: May 2021
// This file contains the JS functions for infinity.html

"use strict"

window.onload = function() {
  const params = new URLSearchParams(document.location.search)

  // input
  const length = params.get('l')
  const width = params.get('w')
  const height = params.get('h')

  // process
  const volume = length * width * height
  const dimensions = "<ul>\n<li>length = " + length + "</li>\n<li>width = " + width + "</li>\n<li>height = " + height + "</li>\n</ul>"

  //output
  document.getElementById('dimensions').innerHTML = dimensions
  document.getElementById('volume').innerHTML = 'Volume is: ' + volume.toFixed(2) + ' cm³'
}
