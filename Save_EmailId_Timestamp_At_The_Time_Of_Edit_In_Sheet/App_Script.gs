function onEdit() {
  var s = SpreadsheetApp.getActiveSheet();
  if (s.getName() == "New") {
    var r = s.getActiveCell();
    if (r.getColumn() == 4) {
      var nextCell = r.offset(0, 2);
      nextCell.setValue(new Date());
      nextCell.offset(0, 1).setValue(Session.getActiveUser().getEmail());
    }
    if (r.getColumn() == 8) {
      var nextCell = r.offset(0, 1);
      nextCell.setValue(new Date());
      nextCell.offset(0, 1).setValue(Session.getActiveUser().getEmail());
    }
  }
}
