import { expect, test } from "@playwright/test";

test.describe("Home Page", () => {
  test("should display the title", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByRole("heading", { name: "vercel-stack" })).toBeVisible();
  });

  test("should have sign in and sign up buttons", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByRole("link", { name: "Sign In" })).toBeVisible();
    await expect(page.getByRole("link", { name: "Sign Up" })).toBeVisible();
  });

  test("should navigate to login page", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("link", { name: "Sign In" }).click();
    await expect(page).toHaveURL("/login");
  });
});
