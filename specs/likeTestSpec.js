/* eslint-disable no-undef */
import "../src/scripts/components/resto-detail/Resto-fav";

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

  it("Button state should be inactive", () => {
    expect(favButton.classList.contains("resto-fav-active")).toBeFalsy();
  });
});
