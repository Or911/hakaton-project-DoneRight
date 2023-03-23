function renderDonePage(doneArray) {
    $(".containerToDoList").empty()
    $(".done-container").empty()
    const source = $("#donecard-template").html()
    const template = Handlebars.compile(source)
    let newHtml = template({doneArray})
    $(".done-container").append(newHtml)
}