function renderExpirePage(doneArray) {
    expireArray = expireDateCards(doneArray)
    $(".expire-container").empty()
    const source = $("#expireCard-template").html()
    const template = Handlebars.compile(source)
    let newHtml = template({expireArray})
    $(".expire-container").append(newHtml)
}

function expireDateCards(cardsArray) {
    let expireArray=[]
    nowDate = new Date().toJSON().slice(0, 10)
    for (const card of cardsArray) {
        console.log(card);
        if(card.date < nowDate){
            expireArray.push(card)
        }
    }
    return expireArray
}