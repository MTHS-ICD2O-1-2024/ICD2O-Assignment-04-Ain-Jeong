// Copyright (c) 2025 Ain Jeong All rights reserved
//
// Created by: Ain Jeong
// Created on: Apr 2025
// This file contains the JS functions for index.html

"use-strict"

/**
 * This function check user's age and the type of movie they can watch
 */
// eslint-disable-next-line no-unused-vars
function checkPrice () {
  const TAX = 0.13
  let subTotal = 0

  // input
  const coffeeSize = document.getElementById('size-grande').checked
  const addOns = document.getElementById('add-ons').value

  // process (size of coffee)
  if (coffeeSize === true) {
    subTotal = subTotal + 2.5
  } else {
    subTotal = subTotal + 3.5
  }

  // process (add-on options)
  if (addOns === 'add-shots') {
    subTotal = subTotal + 1
  } else if (addOns === 'add-syrups') {
    subTotal = subTotal + 0.8
  } else {
    subTotal = subTotal + 0.5
  }

  // tax calculation
  totalPrice = subTotal * (1 + TAX)

  // output
  document.getElementById('answer').innerHTML =
    'Sub Total: $' + subTotal.toFixed(2) + 'Tax Rate: 13%' + 'Total Price: $' + totalPrice.toFixed(2)

}
