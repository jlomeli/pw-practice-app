import {expect, test} from "@playwright/test";

test.beforeEach(async ({page}) => {
  await page.goto('http://uitestingplayground.com/ajax');

});

test("Auto Waiting", async ({page}) => {
  await page.getByText('Button Triggering AJAX Request').click();

  const data = page.locator('.bg-success');

  await  expect(data).toHaveText('Data loaded with AJAX get request.', {timeout: 20000});
});
