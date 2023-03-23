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

$("#doneListPage").on("click", function () {
  window.location.href = "/App/done-page/index.html";
});

function removeDoneCard() {
  cardName = $(this).data("name")
  todo.delete(cardName)
  doneRendrer()
}

$("#cardId").on("click", "#remove", removeDoneCard)

doneRendrer()