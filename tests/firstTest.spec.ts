import {test} from "@playwright/test";

test.beforeEach(async ({page}) => {
  await page.goto('http://localhost:4200');
  await page.getByRole("link", {name: "Forms"}).click();
});

test("first test", async ({page}) => {
  await page.getByRole("link", {name: "Form Layouts"}).click();

});

test("navigate to date picker test", async ({page}) => {
  await page.getByRole("link", {name: "Datepicker"}).click();
});
