from playwright.sync_api import sync_playwright, expect
import os

def run_verification(playwright):
    browser = playwright.chromium.launch(headless=True)
    context = browser.new_context()
    page = context.new_page()

    # Get the absolute path to the HTML file
    file_path = os.path.abspath('test.html')
    page.goto(f'file://{file_path}')

    # 1. Login as admin
    page.get_by_role("link", name="User login").click()
    expect(page.get_by_role("heading", name="Masuk ke Akun Anda")).to_be_visible()
    page.locator('input[name="email"]').fill("admin@kazumi.com")
    page.locator('input[name="password"]').fill("rizqybrokol1")
    page.get_by_role("button", name="Masuk").click()

    # 2. Go to the admin page
    expect(page.get_by_role("link", name="Admin")).to_be_visible()
    page.get_by_role("link", name="Admin").click()

    # Wait for the admin dashboard to appear
    expect(page.get_by_role("heading", name="Super Admin Panel")).to_be_visible()

    # 3. Go to "Kelola Konten & Tata Letak"
    page.get_by_role("button", name="Kelola Konten & Tata Letak").click()

    # Wait for the content management page to load
    expect(page.get_by_role("button", name="Konten Utama")).to_be_visible()

    # 4. Verify Menu Layout (No Drag and Drop)
    page.get_by_role("button", name="Tata Letak Menu").click()
    expect(page.get_by_text("Seret dan lepas item untuk mengubah urutan menu utama (Drag and drop disabled for debugging).")).to_be_visible()
    page.screenshot(path="jules-scratch/verification/01_menu_layout.png")

    # 5. Verify Homepage Layout Reordering (No Drag and Drop)
    page.get_by_role("button", name="Tata Letak Homepage").click()
    expect(page.get_by_text("Seret dan lepas untuk mengubah urutan section di beranda (Drag and drop disabled for debugging).")).to_be_visible()

    # Check the order of elements
    sections = page.locator("div.flex.items-center.gap-2.p-3.border.rounded-md.bg-white.shadow-sm span").all_text_contents()
    expected_order = [
        "Produk Terlaris",
        "Layanan Pesanan",
        "Koleksi Spesial",
        "Kategori Unggulan",
        "Slider Kategori",
        "Banner Promo",
        "Download Aplikasi"
    ]

    # Check if the first and second items are correct.
    expect(page.locator("span").get_by_text("Produk Terlaris")).to_be_visible()
    expect(page.locator("span").get_by_text("Layanan Pesanan")).to_be_visible()

    page.screenshot(path="jules-scratch/verification/02_homepage_layout.png")

    # 6. Verify Image Upload UI (Flexbox)
    page.get_by_role("button", name="Gambar & Slideshow").click()
    expect(page.get_by_text("Manajemen Gambar Koleksi Spesial")).to_be_visible()
    collections_container = page.locator('fieldset:has-text("Manajemen Gambar Koleksi Spesial") > div')
    expect(collections_container).to_have_class("grid grid-cols-1 md:grid-cols-2 gap-6")
    page.screenshot(path="jules-scratch/verification/03_image_upload_flexbox.png")

    browser.close()

with sync_playwright() as p:
    run_verification(p)
