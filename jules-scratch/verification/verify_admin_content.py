import os
from playwright.sync_api import sync_playwright, expect
import sys

def run_verification(playwright):
    browser = playwright.chromium.launch(headless=True)
    context = browser.new_context()
    page = context.new_page()

    try:
        file_path = os.path.abspath('test.html')
        page.goto(f'file://{file_path}', timeout=60000)

        # Wait for a stable element to ensure the page is loaded
        expect(page.get_by_text("KAZUMI", exact=True)).to_be_visible(timeout=10000)

        # 1. Login as admin
        page.get_by_label("User login").click()

        # Wait for login form to be visible
        expect(page.get_by_role("heading", name="Masuk ke Akun Anda")).to_be_visible()

        # Use more direct selectors for form fields
        page.locator('input[name="email"]').fill("admin@kazumi.com")
        page.locator('input[name="password"]').fill("rizqybrokol1")
        page.get_by_role("button", name="Masuk").click()

        # 2. Navigate to Admin Panel
        admin_button = page.locator("a", has_text="Admin")
        expect(admin_button).to_be_visible()
        admin_button.click()

        # 3. Navigate to Content Management
        expect(page.get_by_role("heading", name="Super Admin Panel")).to_be_visible()
        page.get_by_text("Kelola Konten").click()

        # 4. Verify the sub-menu is visible
        expect(page.get_by_text("Konten Utama")).to_be_visible()
        expect(page.get_by_text("Gambar & Slideshow")).to_be_visible()
        expect(page.get_by_text("Menu Navigasi")).to_be_visible()

        # 5. Click the "Gambar & Slideshow" tab
        page.get_by_text("Gambar & Slideshow").click()

        # 6. Verify the new flexbox gallery layout
        # Find the fieldset for the hero slides
        hero_fieldset = page.locator("fieldset", has=page.locator("legend:has-text('Manajemen Slide Hero')"))
        # Check that the container for the slides has the 'flex' and 'flex-wrap' classes
        flex_container = hero_fieldset.locator("div.flex.flex-wrap")
        expect(flex_container).to_be_visible()

        # Check that there are multiple slide items within the flex container
        slide_items = flex_container.locator("div.border")
        count = slide_items.count()
        assert count > 1, f"Expected more than 1 slide item, but found {count}"

        print("Verification script completed successfully.")
        return True

    except Exception as e:
        print(f"An error occurred during verification:\n{e}", file=sys.stderr)
        page.screenshot(path="jules-scratch/verification/error_screenshot.png")
        print("Error screenshot saved to jules-scratch/verification/error_screenshot.png", file=sys.stderr)
        return False
    finally:
        browser.close()

if __name__ == "__main__":
    with sync_playwright() as playwright:
        if not run_verification(playwright):
            sys.exit(1)
