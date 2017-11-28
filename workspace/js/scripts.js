function getTriangleArea(a,h) {
  if (a>0 && h>0) {
    return a*h/2;
  }
  else {
    return "Nieprawidłowe dane";
}
}
console.log(getTriangleArea(10,15));

var triangle1Area = getTriangleArea(10, 15),
    triangle2Area = getTriangleArea(7, 12),
    triangle3Area = getTriangleArea(5, 11);
