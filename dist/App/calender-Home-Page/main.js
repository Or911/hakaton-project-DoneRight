const render = new Render();
const userDataAPI = new UserDataAPI();
$("body").on("click", ".delete-btn", function () {
  const footer = $(this).parent();
  const parent = footer.parent().html();
  const name = $(`${parent}:first-child`).html();
  $.get(`/deleteTodo/${name}`);
});

$("body").on("click", ".fc-event-main", function () {
  let nameOfList = $(this).children(".fc-event-title").text();
  let list = userDataAPI.getdataByName(nameOfList);
  render.ToDoCardRender(list);
  $(".cards-container").addClass("displayCard");
});
$(".cards-container").on("click", "#buttonXofCard", function () {
  $(".cards-container").removeClass("displayCard");
});

$("#doneListPage").on("click", function () {
  window.location.href = "/App/done-page/index.html";
});

$("#createListPage").on("click", function () {
  window.location.href = "/App/ToDoPage/index.html";
});

$("#LogoutBtn").on("click", function () {
  window.location.href = "../../index.html";
});

$("body").on("click", ".deleteList", function () {
  cardName = $(this).data("name");
  userDataAPI.delete(cardName).then(() => {
    render.removeEvent(cardName);
    $(".cards-container").removeClass("displayCard");
  });
});


$("body").on("change", ".DoneButton", function () {
  cardID = $(this).data("id")
  $('.checkbox').attr("disabled", true);
  userDataAPI.isDone(cardID)
  .then(()=>{
    userDataAPI.getDataUser()
    .then((data)=>{
      let list = userDataAPI.getdataByID(cardID);
      render.ToDoCardRender(list);
      $('.checkbox').attr("disabled", true);
      $('.checkbox').attr('checked', true)
      render.removeAllEvent()
      data.forEach((d) => {
        render.addEvent(d);
      });
    })
  })
});
const firstLoad = function () {
  render.removeAllEvent()
  render.usernameRender();
  render.calendar();
  userDataAPI.getDataUser().then((data) => {
    data.forEach((d) => {
      render.addEvent(d);
    });
  });
};

$("#ExpireListPage").on("click", function () {
  window.location.href = "/App/expire-date-of-card/index.html";
});


firstLoad();
