
const getDataFromUser = function () {
    let userData = {}
    let title = $("#title-text").val();
    let date = $("#date-text").val();
    let description = $("#description-text").val();
    userData = {name: title, date: date, description: description}
    return userData
}

$("#submit-button").on('click', function () {
    const ToDoData = getDataFromUser()
    console.log(ToDoData);
    $.ajax({
        type: 'POST',
        url: 'http://localhost:3002/Todo',
        data: ToDoData,
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          }
      });
})

$("#doneListPage").on("click", function () {
    window.location.href = "/App/done-page/index.html";
});
  
$("#calendarPage").on("click", function () {
    window.location.href = "/App/calender-Home-Page/index.html";
});
$("#ExpireListPage").on("click", function () {
    window.location.href = "/App/expire-date-of-card/index.html";
  });