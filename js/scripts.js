//variables I'll want to use
//var size = new Pizza(size:"small");

function Size(small, medium, large) {
  this.small = small;
  this.medium = medium;
  this.large = large;
}
//
// function baseToppings {
//   this.onions = onions;
//   this.garlic = garlic;
//   this.olives = olives;
//   this.greenPeppers = greenPeppers;
//   this.pepperoni = pepperoni;
// }
//
// function fancyToppings {
//   this.bacon = bacon;
//   this.oneHundredYearOldEggs = oneHundredYearOldEggs;
//   this.avocado = avocado;
//   this.ejaculate = ejaculate;
// }

function Pizza(size, toppings) {
  this.size = size;
  this.toppings = [];
}

Pizza.prototype.Cost = function() {
//size of pizza cost + #of toppings above 2* 1
  var total = 0;

  //
  //   if (this.size === this.small) {
  //     return total = 10;
  //   } else if (this.size === this.medium ) {
  //     return total = 15;
  //   } else (this.size === this.large) {
  //     return total = 20;
  //   }
  // }
  //
  //   for (i = 0; i <= this.toppings.length; i++) {
  //     if (this.toppings.length <= 1) {
  //       return total += this.toppings.length
  //     } else {
  //       return parseInt(sizePrice + this.toppings.length * 1);
  //     }
  //   }
  // }
}

$(document).ready(function() {
  $("form.pizzaChar").submit(function(event) {
    var small = new Size($("#small").val());
    var medium = new Size($("#medium").val());
    var large = new Size($("#large").val());
    var cost = ne

    if (this.size === this.small) {
      return "10.00";
    } else if (this.size === this.medium ) {
      return "15.00";
    } else (Pizza.size === this.large) {
      return "20.00";
    }

    var toppings = [];
    $(".checkbox-inline:checked").each(function() {
        toppings.push($(this).val());
        console.log(checkedToppings());
      });

    for (i = 0; i <= toppings.length; i++) {
      if (toppings.length <= 1) {
        return toppings.length * 1
      } else {
        return
      }
    }

    $(".total").text()
  });
});
