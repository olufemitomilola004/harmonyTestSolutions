var Vtype = {};
function element(array) {
  array.forEach(function (elements) {
    var d_type = typeof elements;

    const Vtype2 = {
      [d_type]: elements,
    };

    Vtype = Object.assign(Vtype2, Vtype);
  });
  console.log(Vtype);
}

element([1, "test", true, [1, 2, 3], null]); 
