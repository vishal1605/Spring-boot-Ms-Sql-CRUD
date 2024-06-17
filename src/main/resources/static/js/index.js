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


/////////////////////////////////////////////////Datatables valid code for multiple editor or working code also for simple datatable////////////////////////////////////////
const editor = new DataTable.Editor({
  ajax: {
      type: "POST",
      url: "/save-user",
      contentType: "application/json; charset=utf-8",
      data: function (editorData) {
          console.log(editorData)
          return JSON.stringify(editorData)
      }
  },
  serverSide: true,
  fields: [
      {
          label: 'firstName:',
          name: 'firstName'
      },
      {
          label: 'lastName:',
          name: 'lastName'
      },
      {
          label: 'email:',
          name: 'email'
      },
      {
          label: 'gender:',
          name: 'gender'
      },
      {
          label: 'ipAddress:',
          name: 'ipAddress'
      },
      {
          label: 'password:',
          name: 'password'
      },
      {
          label: 'city:',
          name: 'city'
      },
      {
          label: 'phoneNo:',
          name: 'phoneNo'
      },
      {
          label: 'language:',
          name: 'language'
      },
      {
          label: 'designation:',
          name: 'designation'
      },
      {
          label: 'companyName:',
          name: 'companyName'
      },
      {
          label: 'currency:',
          name: 'currency'
      },
  ],
  table: '#example',
  idSrc: 'id'
});
////////////////////////////////////////////////////////////Editor222222222222//////////////////////////////////////////////////

const editor2 = new DataTable.Editor({
  serverSide: true,
  ajax: {
      type: "POST",
      url: "/save-user",
      contentType: "application/json; charset=utf-8",
      data: function (editorData) {
          console.log(parentTable.row({ selected: true }).data())
          console.log(editorData.data[parentTable.row({ selected: true }).data().id])

          return JSON.stringify(editorData)
      }
  },
  fields: [
      {
          label: 'Password:',
          name: 'password'
      }
  ],
  table: '#example',
  idSrc: 'id'
});

editor2.on('preSubmit', (e, o, action) => {
  if (action !== 'remove') {
      let password = editor2.field('password');
      if (!password.isMultiValue()) {
          if (!password.val()) {
              password.error("Password must be fill");
          }

          if (password.val().match(/^[a-z0-9@]+$/) == null) {
              password.error(
                  "Password regex errror"
              );
          }
      }

      // ... additional validation rules

      // If any error was reported, cancel the submission so it can be corrected
      if (editor2.inError()) {
          return false;
      }

  }
})

////////////////////////////////////////////////////Table///////////////////////////////////////////////////////////////
// const parentTable = new DataTable('#example', {
//   buttons: [
//       { extend: 'create', editor },
//       { extend: 'edit', editor },
//       { extend: 'remove', editor },
//       {
//           className: "custom-edit-btn",
//           text: 'Update password',
//           action: function (e, dt, node, config) {
//               editor2.title('Edit password').buttons([{
//                   label: "Update",
//                   fn: function () {
//                       console.log("hnbhnnnnununun")
//                       editor2.submit();
//                   }
//               }]).edit(parentTable.row({ selected: true }).index());
//           }
//       }
//   ],
//   columns: [
//       { data: 'firstName' },
//       { data: 'lastName' },
//       { data: 'email' },
//       { data: 'gender' },
//       { data: 'ipAddress' },
//       { data: 'password' },
//       { data: 'city' },
//       { data: 'phoneNo' },
//       { data: 'language' },
//       { data: 'designation' },
//       { data: 'companyName' },
//       { data: 'currency' }
//   ],
//   dom: 'Bfrtip',
//   select: true,
//   select: {
//       style: 'multi'
//   },
//   pageLength: 15,
//   lengthChange: true,
//   lengthMenu: [15, 25, 50, 75, 100],
//   order: [[1, 'desc']],
//   // stateSave: true,
//   stateDuration: (60 * 60 * 24),

//   colReorder: true,

//   deferRender: true,

//   scrollX: true,
//   scrollY: '60vh',
// });
// let buttons = parentTable.buttons([".custom-edit-btn"]);
// if (parentTable.rows({ selected: true }).indexes().length === 0) {
//   buttons.disable();
// }
// parentTable.on('select', () => {
//   if (parentTable.rows({ selected: true }).indexes().length !== 0) {
//       buttons.enable();
//   }
// });

// parentTable.on('deselect', () => {
//   if (parentTable.rows({ selected: true }).indexes().length === 0) {
//       buttons.disable();
//   }
// });

// function setTableData(data) {
//   parentTable.clear();
//   data.forEach(function (tableRows) {
//       parentTable.row.add(tableRows);
//   });

//   parentTable.draw();
// }

// $.ajax({
//   type: "GET",
//   url: "/get-data",
//   success: function (response) {
//       console.log(response)
//       setTableData(response)
//   }
// });
