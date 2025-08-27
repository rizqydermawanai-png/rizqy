import re
from playwright.sync_api import sync_playwright, Page, expect
import os

def verify_discount_and_cart(page: Page):
    """
    This test verifies the end-to-end discount functionality:
    1. Applies a 20% discount to T-shirts in the admin panel.
    2. Adds a T-shirt to the cart.
    3. Verifies the cart subtotal correctly reflects the discounted price.
    """
    # Get the absolute path to the index.html file
    file_path = os.path.abspath('index.html')

    # 1. Arrange: Go to the application and wait for it to be ready.
    page.goto(f'file://{file_path}')
    page.wait_for_function('window.appReady') # Wait for our custom ready flag

    # Go to Admin Dashboard by directly calling the JS function
    page.evaluate("showPage('admin-dashboard')")

    # Wait for the URL to update, confirming navigation
    page.wait_for_url(f"file://{file_path}#admin-dashboard")
    expect(page.get_by_role("heading", name="Admin Dashboard")).to_be_visible()

    # Go to Discounts Tab
    page.get_by_role("button", name="Diskon").click()
    expect(page.get_by_role("heading", name="Manajemen Diskon")).to_be_visible()

    # Apply 20% discount to T-Shirts
    page.get_by_label("Pilih Kategori Produk").select_option("t-shirts")
    page.get_by_label("Persentase Diskon").fill("20")
    page.get_by_role("button", name="Terapkan Diskon").click()

    # Verify success message
    expect(page.locator("#discountMessage")).to_have_text("Diskon untuk kategori t-shirts berhasil diperbarui!")

    # 2. Act: Add a discounted product to the cart.
    # Go to the T-Shirts page by directly calling the JS function
    page.evaluate("showPage('t-shirts')")
    page.wait_for_url(f"file://{file_path}#t-shirts")
    expect(page.get_by_role("heading", name="T-Shirts")).to_be_visible()

    # Get the price of the first T-shirt to calculate the expected discount
    first_product = page.locator(".product-card").first
    # We need to wait for the price to be updated with the discount
    expect(first_product.locator(".price span").first).to_contain_text("IDR")
    original_price_text = first_product.locator(".price span").first.inner_text()

    # Extract number from 'IDR 150.000'
    original_price = float(re.sub(r'[^\d]', '', original_price_text))
    expected_discounted_price = original_price * 0.80

    # Click the first product to go to its detail page
    # We need the product id to call showProductDetailById
    product_link = first_product.locator("a").first
    onclick_attribute = product_link.get_attribute("onclick")
    product_id_match = re.search(r"showProductDetailById\('([^']+)'\)", onclick_attribute)
    product_id = product_id_match.group(1)

    page.evaluate(f"showProductDetailById('{product_id}')")
    page.wait_for_url(f"file://{file_path}#product-detail")
    expect(page.locator("#productDetailName")).not_to_be_empty() # Wait for detail page to load

    # Add to cart
    page.get_by_role("button", name="Tambah ke Troli").click()

    # Wait for cart page to be visible
    page.wait_for_url(f"file://{file_path}#cart")
    expect(page.get_by_role("heading", name="Troli Belanja Anda")).to_be_visible()

    # 3. Assert: Check if the cart total is correct.
    # Take screenshot for visual verification
    page.screenshot(path="jules-scratch/verification/verification.png")

    # Verify the subtotal
    subtotal_locator = page.locator("#subtotal")
    expect(subtotal_locator).to_contain_text("IDR") # Wait for it to be populated

    subtotal_text = subtotal_locator.inner_text()
    subtotal_amount = float(re.sub(r'[^\d]', '', subtotal_text))

    # Check if the calculated subtotal matches the expected discounted price
    # Allow for a small tolerance for floating point inaccuracies
    assert abs(subtotal_amount - expected_discounted_price) < 0.01, f"Subtotal {subtotal_amount} does not match expected {expected_discounted_price}"

    print("Verification successful: Cart subtotal correctly reflects the 20% discount.")

def main():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        verify_discount_and_cart(page)
        browser.close()

if __name__ == "__main__":
    main()
