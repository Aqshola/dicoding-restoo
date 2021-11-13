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
  let favButton = "";

  beforeEach(async () => {
    document.body.innerHTML = `<resto-fav data-resto='${stringifyData}'></resto-fav>`;
    favButton = document.querySelector(".resto-fav");
  });

  it("Should show favorite button", () => {
    expect(favButton).toBeTruthy();
  });

  it("Favorite button state should be inactive", () => {
    expect(favButton.classList.contains("resto-fav-active")).toBeFalsy();
  });

  it("Should have functional add restaurant to IDB favorite", async () => {
    favButton.dispatchEvent(new Event("click"));
    const checkResto = await Database.getRestoo(data.id);
    expect(checkResto).toEqual(data);
  });

  it("Should change state to active after favorite a resto", () => {
    favButton.dispatchEvent(new Event("click"));
    expect(favButton.classList.contains("resto-fav-active")).toBeFalsy();
  });

  afterEach(() => {
    Database.deleteRestoo(data.id);
  });
});

// describe("Unfav a restaurant", () => {});
