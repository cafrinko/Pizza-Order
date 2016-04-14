function Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings;
}

Pizza.prototype.cost = function() {
//size of pizza cost + #of toppings above 2* 1
  var total = 0;
  if (this.size === "small") {
    total += 10;
  } else if (this.size === "medium") {
    total += 15;
  } else {
    total += 20;
  }
  if (this.toppings.length <= 2) {
      total += 0;
    } else {
      //add the number of toppings over 2 to the existing total
      total = total + this.toppings.length - 2;
      console.log(total);
    }
  return total;
};

$(document).ready(function() {
  $("form.pizza").submit(function(event) {
    event.preventDefault();
    var size = $("input:radio[name=size]:checked").val();
    console.log(size);

    var toppings = [];
    $("input[type=checkbox]:checked").each(function() {
        toppings.push($(this).val());
        console.log(toppings);
    });

    var pizza = new Pizza(size, toppings);
    var cost = pizza.cost();
    console.log(pizza);
    $(".total").text(cost);
    $(".output").show();
  });
});
