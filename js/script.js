// Copyright (c) 2025 Ain Jeong All rights reserved
//
// Created by: Ain Jeong
// Created on: Apr 2025
// This file contains the JS functions for index.html

/**
 * This function check user's age and the type of movie they can watch
 */
// eslint-disable-next-line no-unused-vars
function checkPrice () {
  // input
  let totalPrice = 0
  const regularCone = document.getElementById('regular-cone').checked
  const numberOfScoops = document.getElementById('number-of-scoops').value

  // process (size of cone)
  if (regularCone === true) {
    totalPrice = totalPrice + 3
  } else {
    totalPrice = totalPrice + 5
  }
  // process (number of scoops)
  if (numberOfScoops === 'one-scoop') {
    totalPrice = totalPrice + 2
  } else if (numberOfScoops === 'two-scoop') {
    totalPrice = totalPrice + 3.5
  } else {
    totalPrice = totalPrice + 5
  }
  // tax calculation
  totalPrice = totalPrice * (1 + 0.13)

  // output
  document.getElementById('answer').innerHTML =
    'Total price of your ice cream order is $' + totalPrice.toFixed(2)
}
