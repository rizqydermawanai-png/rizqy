import re
from playwright.sync_api import sync_playwright, Page, expect
import os

# Assume the project is in a folder named 'kazumi-project' inside htdocs
BASE_URL = "http://localhost/kazumi-project/index.html"
# A unique name for the product to ensure the test is valid
UNIQUE_PRODUCT_NAME = "Test Product 123"


def verify_add_product(page: Page):
    """
    This test verifies the end-to-end "Add Product" functionality:
    1. Navigates to the admin panel.
    2. Opens the "Add Product" modal.
    3. Fills in and submits the form to create a new product.
    4. Navigates to the product's category page.
    5. Asserts that the new product is visible on the page.
    """

    # 1. Arrange: Go to the application
    print(f"Navigating to {BASE_URL}...")
    page.goto(BASE_URL, timeout=60000) # Increased timeout for server start

    # Wait for the app to signal it's ready
    page.wait_for_function('window.appReady')
    print("Application is ready.")

    # 2. Act: Create a new product via the admin dashboard
    print("Navigating to Admin Dashboard...")
    page.evaluate("showPage('admin-dashboard')")
    expect(page.get_by_role("heading", name="Admin Dashboard")).to_be_visible()

    print("Navigating to Products tab...")
    page.get_by_role("button", name="Produk").click()
    expect(page.get_by_role("heading", name="Manajemen Produk")).to_be_visible()

    print("Opening 'Add Product' modal...")
    page.get_by_role("button", name="Tambah Produk Baru").click()
    expect(page.get_by_role("heading", name="Tambah Produk Baru")).to_be_visible()

    print(f"Filling out form for '{UNIQUE_PRODUCT_NAME}'...")
    page.locator("#product-name").fill(UNIQUE_PRODUCT_NAME)
    page.locator("#product-category").select_option("shirts")
    page.locator("#product-price").fill("250000")
    # Use a placeholder image for simplicity
    page.locator("#product-imagePreview").evaluate("node => { node.src = 'https://images.unsplash.com/photo-1603252109360-7049524f3a15?auto=format&fit=crop&w=500&q=60'; node.classList.add('active'); }")
    page.locator("#product-description").fill("A test product created by an automated script.")

    print("Submitting new product...")
    page.get_by_role("button", name="Simpan Produk").click()

    # Wait for the modal to disappear and the product list to potentially refresh
    expect(page.get_by_role("heading", name="Tambah Produk Baru")).not_to_be_visible()
    print("Product submitted.")

    # 3. Assert: Verify the new product appears on the frontend
    print("Navigating to the 'Shirts' category page...")
    page.evaluate("showPage('shirts')")
    expect(page.get_by_role("heading", name="Shirts")).to_be_visible()

    print(f"Looking for product '{UNIQUE_PRODUCT_NAME}' on the page...")
    new_product_card = page.get_by_role("heading", name=UNIQUE_PRODUCT_NAME)

    # Take screenshot for visual verification
    page.screenshot(path="jules-scratch/verification/verification.png")

    expect(new_product_card).to_be_visible()
    print("Verification successful: New product is visible on the frontend.")


def main():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        verify_add_product(page)
        browser.close()

if __name__ == "__main__":
    main()
