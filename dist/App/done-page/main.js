const todo = new TodoList();

function doneRendrer(){
  todo.getAllList()
}

$("#calendarPage").on("click", function () {
  window.location.href = "/App/calender-Home-Page/index.html";
});

$("#createListPage").on("click", function () {
  window.location.href = "/App/ToDoPage/index.html";
});

$("#ExpireListPage").on("click", function () {
  window.location.href = "/App/expire-date-of-card/index.html";
});

function removeDoneCard() {
  cardName = $(this).data("name")
  todo.delete(cardName)
  doneRendrer()
}

$("#cardId").on("click", "#remove", removeDoneCard)

doneRendrer()