let springDataTables;

function init() {
  springDataTables = $("#data-table").DataTable({
    select: true,
    dom: "Bfrtip",
    buttons: ["excel", "pdf"],

    columns: [
      { data: "id" },
      { data: "name" },
      { data: "email" },
      { data: "password" },
    ],
  });
  $.ajax({
    type: "GET",
    url: "http://localhost:8080/getdata",
    success: function (result) {
      var val = JSON.parse(result);
      val.data.forEach((element) => {
        springDataTables.row.add(element);
      });
      springDataTables.draw();
    },
  });
}
init();
