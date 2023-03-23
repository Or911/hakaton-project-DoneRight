class Render {
  constructor() {
    this.events = [];
  }
  removeAllEvent(){
    this.events = []
  }
  removeEvent(name) {
    let newEvents = this.events.filter((e) => e.title !== name);
    this.events = newEvents;
    this.calendar();
  }
  addEvent(todoList) {
    let newEvent = this.sortDataToEvent(todoList);
    this.events.push(newEvent);
    this.calendar();
  }
  sortDataToEvent(todoList) {
    let newEvent = {
      title: todoList.name,
      start: todoList.date,
    };
    if (todoList.isDone) {
      newEvent.color = "#00a341";
    } else if (new Date(todoList.date) < new Date()) {
      newEvent.color = "#ff605c";
    } else {
      newEvent.color = "#ffbd44";
    }
    return newEvent;
  }

  calendar() {
    $("#calendar-container").remove();
    $(".window").append(`<div id='calendar-container'></div>`);
    const calendarHtml = document.getElementById("calendar-container");
    const calendar = new FullCalendar.Calendar(calendarHtml, {
      initialView: "dayGridMonth",
      events: this.events,
      eventContent: function (arg) {
        let arrayOfDomNodes = [];

        let titleEvent = document.createElement("div");
        if (arg.event._def.title) {
          titleEvent.innerHTML = arg.event._def.title;
          titleEvent.classList = `fc-event-title fc-sticky`;
        }

        let imgEventWrap = document.createElement("div");
        if (arg.event.extendedProps.image_url) {
          let imgEvent =
            '<img src="' + arg.event.extendedProps.image_url + '" >';
          imgEventWrap.classList = "fc-event-img";
          imgEventWrap.innerHTML = imgEvent;
        }

        arrayOfDomNodes = [titleEvent, imgEventWrap];

        return { domNodes: arrayOfDomNodes };
      },
    });
    calendar.render();
  }
  ToDoCardRender(card) {
    $(".cards-container").empty()
    if (card.isDone) {
      card.color = "green";
      $('.checkbox').attr("disabled", true)
    } else if (new Date(card.date) < new Date()) {
      card.color = "red";
    } else {
      card.color = "orange";
    }
    $(".cards-container").empty();
    const source = $("#card-template").html();
    const template = Handlebars.compile(source);
    let newHtml = template(card);
    $(".cards-container").append(newHtml);
  }

  usernameRender(){
    $('.fa-user').text(localStorage.getItem('username'))
  }
}
