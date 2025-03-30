import {test} from "@playwright/test";

test.beforeEach(async ({page}) => {
  await page.goto('http://localhost:4200');
  await page.getByRole("link", {name: "Forms"}).click();
  await page.getByRole("link", {name: "Form Layouts"}).click();
});

test("Locator syntax rules", async ({page}) => {
  // By Tag Name
  
});
