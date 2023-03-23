class UserDataAPI {
  constructor() {
    this.data = [];
  }
  getdataByID(cardID) {
    return this.data.find((d) => d.id === cardID);
  }
  getdataByName(nameOfList) {
    return this.data.find((d) => d.name === nameOfList);
  }
  removeDataByID(cardID) {
    let newData = this.data.find((d) => d.id !== cardID);
    this.data = newData;
  }
  removeUserByName(name) {
    let newData = this.data.filter((d) => d.name !== name);
    this.data = newData;
    return this.data;
  }

  getDataUser() {
    return $.ajax({
      method: "GET",
      url: `/Todo`,
      dataType: "json",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      success: (data) => {
        this.data = data;
      },
    });
  }

  delete(name) {
    return $.ajax({
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      url: `/Todo/${name}`,

      success: (info) => {
      },
    });
  }
  isDone(ListID) {
    return $.ajax({
      method: "PUT",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      url: `/Todo/${ListID}`,
      success: () => {
        return "success";
      },
    });
  }
}
