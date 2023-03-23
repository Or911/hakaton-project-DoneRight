moment = require("moment");

const sortMomentDate = function (data) {
  let newData = [];
  data.forEach((d) => {
    let card = {
      name: d.name,
      date: moment(d.date).format("YYYY-MM-DD"),
      isDone: d.isDone,
      gifUrl: d.gifUrl,
      description: d.description,
      id: d._id,
    };
    newData.push(card);
  });
  return newData;
};

module.exports = sortMomentDate;
