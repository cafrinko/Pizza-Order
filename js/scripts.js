// function Size(small, medium, large) {
//   this.small = small;
//   this.medium = medium;
//   this.large = large;
// }

function Pizza(size, toppings) {
  this.size = size;
  this.toppings = [];
}

Pizza.prototype.cost = function() {
//size of pizza cost + #of toppings above 2* 1
  var total = 0;
  if (this.size === "small") {
    total = 10;
  } else if (this.size === "medium") {
    total = 15;
  } else {
    total = 20;
  }

  for (i = 0; i <= this.toppings.length; i++) {
    if (this.toppings.length <= 1) {
      total
    } else {
      total += this.toppings.length * 1;
    }
  }
  return total
}

$(document).ready(function() {
  $("form.pizza").submit(function(event) {
    var size = $("#size").val();

    var toppings = [];
    $(".checkbox-inline:checked").each(function() {
        toppings.push($(this).val());
      });

    var pizza = new Pizza(size, toppings);
    var cost = pizza.cost();

    $(".total").text(cost);
    $(".output").show();
  });
});
