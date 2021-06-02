// Copyright (c) 2021 haokai All rights reserved
//
// Created by: haokai
// Created on: Jun 2021
// This is the fork_assignment

"use strict"

window.onload = function() {
  //input
  const params = new URLSearchParams(document.location.search)
  const length = params.get('l')
  const width = params.get('w')
  const height = params.get('h')

  // process
  const volume = length * width * height
  const dimensions = "<ul>\n<li>length = " + length + "</li>\n<li>width = " + width + "</li>\n<li>height = " + height + "</li>\n</ul>"

  //output
  document.getElementById('dimensions').innerHTML = dimensions
  document.getElementById('area').innerHTML = 'Volume= ' + volume.toFixed(2) + 'cm³'
}