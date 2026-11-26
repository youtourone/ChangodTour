$(function () {
  d = window.datos;
  $("#factura").text(d.factura);
  $("#fecha_salida_scu").text(d.fecha_salida_scu);
  $("#fecha_llegada_geo").text(d.fecha_llegada_geo);
  $("#fecha_salida_geo").text(d.fecha_salida_geo);
  $("#fecha_llegada_scu").text(d.fecha_llegada_scu);
  $("#hora_salida_scu").text(d.hora_salida_scu);
  $("#hora_llegada_geo").text(d.hora_llegada_geo);
  $("#hora_salida_geo").text(d.hora_salida_geo);
  $("#hora_llegada_scu").text(d.hora_llegada_scu);
  $("#person").text(d.person);
  $("#passport").text(d.passport);
  $("#category").text(d.category);
  $("#email").text(d.email);
  $("#nationality").text(d.nationality);
  $("#gender").text(d.gender);
  $("#phone").text(d.phone);
});
