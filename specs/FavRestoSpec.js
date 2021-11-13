/* eslint-disable no-undef */
import "../src/scripts/components/resto-detail/Resto-fav";
import Database from "../src/scripts/utils/indexedDB";

const data = {
  id: "123456",
  name: "Melting Pot",
  pictureId: "14",
  city: "Medan",
  rating: 4.2,
  address: "Jln. Pandeglang no 19",
};

const stringifyData = JSON.stringify(data);

describe("Favorite a restaurant", () => {
  beforeEach(() => {
    document.body.innerHTML = `<resto-fav data-resto='${stringifyData}'></resto-fav>`;
  });

  it("Should display fav button", () => {
    expect(document.querySelector(".resto-fav")).toBeTruthy();
  });

  it("button state should be not fav", () => {
    expect(
      document
        .querySelector(".resto-fav")
        .classList.contains("resto-fav-active")
    ).toBeFalsy();
  });

  it("Should have functionality to fav resto", () => {
    document.querySelector(".resto-fav").dispatchEvent(new Event("click"));
    Database.getRestoo(data.id).then((res) => {
      expect(res).toEqual(data);
    });
  });

  afterEach(() => {
    Database.deleteAllRestoo();
  });
});

describe("UnFavorite a restaurnt", () => {
  beforeEach(() => {
    Database.openDB();
    Database.addRestoo(data);
    document.body.innerHTML = `<resto-fav data-resto='${stringifyData}'></resto-fav>`;
  });

  it("Should display fav button", () => {
    expect(document.querySelector(".resto-fav")).toBeTruthy();
  });

  it("Button state should be fav", () => {
    document.querySelector(".resto-fav").dispatchEvent(new Event("click"));
    expect(
      document
        .querySelector(".resto-fav")
        .classList.contains("resto-fav-active")
    ).toBeTruthy();
  });

  it("Should be able to unfav resto", () => {
    document.querySelector(".resto-fav").dispatchEvent(new Event("click"));
    document.querySelector(".resto-fav").dispatchEvent(new Event("click"));

    Database.getRestoo(data.id).then((res) => {
      expect(res).toBeFalsy();
    });
  });

  afterEach(() => {
    Database.deleteAllRestoo();
  });
});
