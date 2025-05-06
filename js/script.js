// Copyright (c) 2025 Ain Jeong All rights reserved
//
// Created by: Ain Jeong
// Created on: Apr 2025
// This file contains the JS functions for index.html

'use-strict'

/**
 * This function check the price of Dinosaur Museum's entry fee
 */
// eslint-disable-next-line no-unused-vars
function checkPrice () {
  const TAX = 0.13
  let subTotal = 0

  // input
  const customerAge = parseFloat(document.getElementById('customer-age').value)
  const tourOption = document.getElementById('tour-option').value

  // process (cutomerAge)
  if (customerAge <= 3 || customerAge >= 65) {
    subTotal = subTotal + 15
  } else {
    subTotal = subTotal + 20
  }

  // process (tourOption)
  if (tourOption === 'self-tour') {
    subTotal = subTotal + 5
  } else if (tourOption === 'private-tour') {
    subTotal = subTotal + 45
  } else {
    subTotal = subTotal + 12
  }

  // tax calculation
  const totalPrice = subTotal * (1 + TAX)

  // output
  document.getElementById('answer').innerHTML =
    'Sub Total: $' +
    subTotal.toFixed(2) +
    '<br>' +
    'Tax Rate: 13%<br>' +
    'Total Price: $' +
    totalPrice.toFixed(2)
}
