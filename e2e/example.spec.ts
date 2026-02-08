const { test, expect } = require('@playwright/test');

test('homepage has title and login button', async ({ page }) => {
    const response = await page.goto('https://devtalk.opsdock.work');

    // Check if the site is reachable
    if (response?.status() === 502) {
        throw new Error('Deployment returned 502 Bad Gateway. Container might be down or port mismatch.');
    }

    await expect(response?.status()).toBe(200);

    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/devTalk/);

    // Check for Sign In button (Clerk)
    const signInButton = page.getByRole('button', { name: /sign in/i });
    await expect(signInButton).toBeVisible();
});
