Feature("favorite restorant");

Scenario("showing empty favorite resto", ({ I }) => {
  I.amOnPage("#/favorite");
  I.seeElement(".list-container");
  I.see("Tidak ada favorite", "#no-fav");
});

Scenario("Favorite a restaurant", ({ I }) => {
  I.amOnPage("/");
  I.seeElement(".card .card-description a");
  I.click(locate(".card .card-description a").first());

  I.waitForElement("#fav-btn", 10);
  I.seeElement("#fav-btn");

  I.click("#fav-btn");
  I.amOnPage("#/favorite");
  I.seeElement(".card");
});

Scenario("Unfavorite a restaurant", ({ I }) => {
  I.amOnPage("/");
  I.seeElement(".card .card-description a");
  I.click(locate(".card .card-description a").first());

  I.waitForElement("#fav-btn", 10);
  I.seeElement("#fav-btn");
  I.click("#fav-btn");

  I.amOnPage("#/favorite");
  I.seeElement(".card .card-description a");
  I.click(locate(".card .card-description a").first());

  I.waitForElement("#fav-btn", 10);
  I.seeElement("#fav-btn");
  I.click("#fav-btn");

  I.amOnPage("#/favorite");
  I.see("Tidak ada favorite", "#no-fav");
});
