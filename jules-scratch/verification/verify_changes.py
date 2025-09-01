import asyncio
from playwright.async_api import async_playwright, expect
import os

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        page = await browser.new_page()

        # Get the absolute path to the HTML file
        file_path = os.path.abspath('index.html')

        # Go to the page FIRST
        await page.goto(f'file://{file_path}')

        # Now clear storage for that origin
        await page.evaluate('() => window.localStorage.clear()')

        # Reload the page to apply the cleared storage state
        await page.reload(wait_until='domcontentloaded')

        # Wait for a stable element to appear to ensure React has rendered
        await expect(page.get_by_role("link", name="KAZUMI")).to_be_visible(timeout=15000)

        # --- Verification for Admin Panel ---

        # 1. Log in as admin
        login_link = page.get_by_role("link", name="User login")
        await expect(login_link).to_be_visible(timeout=10000)
        await login_link.click()

        await page.get_by_label("Alamat Email").fill("admin@kazumi.com")
        await page.get_by_label("Kata Sandi").fill("rizqybrokol1")
        await page.get_by_role("button", name="Masuk").click()

        # Wait for navigation to home and for admin button to appear
        admin_button = page.get_by_role("link", name="Admin")
        await expect(admin_button).to_be_visible()

        # 2. Go to Admin Panel
        await admin_button.click()

        # 3. Navigate to the unified content/navigation page
        nav_content_button = page.get_by_role("button", name="Navigasi & Konten")
        await expect(nav_content_button).to_be_visible()
        await nav_content_button.click()

        # 4. Switch to the Menu Navigation tab
        menu_nav_tab = page.get_by_role("button", name="Navigasi Menu")
        await expect(menu_nav_tab).to_be_visible()
        await menu_nav_tab.click()

        # 5. Take a screenshot of the menu management UI
        await expect(page.get_by_role("heading", name="Pengelolaan Menu Utama")).to_be_visible()
        await page.screenshot(path="jules-scratch/verification/admin_view.png")

        # --- Verification for Homepage Layout ---

        # 6. Go back to homepage
        await page.get_by_role("link", name="KAZUMI").click()

        # Wait for hero to be visible
        await expect(page.get_by_role("heading", name="ELEVATE YOUR STYLE")).to_be_visible()

        # 7. Take a screenshot of the homepage
        await page.screenshot(path="jules-scratch/verification/homepage_view.png", full_page=True)

        await browser.close()

if __name__ == '__main__':
    asyncio.run(main())
