const KAZUMI_DEFAULT_DATA = {
    products: [
        {
            id: '1',
            name: 'Classic White T-Shirt',
            category: 'T-Shirt',
            price: 150000,
            image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            images: [
                'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
                'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60',
                'https://images.unsplash.com/photo-1622445272461-c6bc0017385a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60',
                'https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60'
            ],
            description: 'Kaos katun putih klasik yang wajib dimiliki, sempurna untuk segala acara.',
            sizes: ['S', 'M', 'L', 'XL'],
            collection: 'Weekend'
        },
        {
            id: '2',
            name: 'Blue Oxford Shirt',
            category: 'Shirt',
            price: 250000,
            image: 'https://images.unsplash.com/photo-1603252109360-7049524f3a15?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            images: [
                'https://images.unsplash.com/photo-1603252109360-7049524f3a15?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
                'https://images.unsplash.com/photo-1596755094514-7e7244087bda?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60',
                'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60',
                'https://images.unsplash.com/photo-1550928434-4a02a9534544?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60'
            ],
            description: 'Kemeja oxford biru formal dengan potongan slim-fit, ideal untuk bekerja atau acara formal.',
            sizes: ['M', 'L', 'XL'],
            collection: 'Executive'
        },
        {
            id: '3',
            name: 'Modern Chino Pants',
            category: 'Pants',
            price: 300000,
            image: 'https://images.unsplash.com/photo-1605518216938-6c52b6b82195?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            images: [
                'https://images.unsplash.com/photo-1605518216938-6c52b6b82195?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
                'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60',
                'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60',
                'https://images.unsplash.com/photo-1560243563-062bfc001d68?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60'
            ],
            description: 'Celana chino modern yang nyaman dan serbaguna, cocok untuk gaya kasual maupun semi-formal.',
            sizes: ['30', '32', '34', '36'],
            collection: 'Executive'
        },
        {
            id: '4',
            name: 'Denim Trucker Jacket',
            category: 'Jacket',
            price: 450000,
            image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            images: [
                'https://images.unsplash.com/photo-1551028719-00167b16eac5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
                'https://images.unsplash.com/photo-1616258417212-726e952e64e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60',
                'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60',
                'https://images.unsplash.com/photo-1543087903-1ac2378a245f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60'
            ],
            description: 'Jaket denim trucker dengan gaya abadi yang memberikan sentuhan keren pada penampilan Anda.',
            sizes: ['S', 'M', 'L'],
            collection: 'Limited'
        },
        {
            id: '5',
            name: 'Graphic Print T-Shirt',
            category: 'T-Shirt',
            price: 175000,
            image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60',
            images: [
                'https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60',
                'https://images.unsplash.com/photo-1527719327859-c6ce80353573?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60',
                'https://images.unsplash.com/photo-1503341504253-dff481648532?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60',
                'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
            ],
            description: 'Tampil beda dengan kaos print grafis yang unik dan artistik.',
            sizes: ['S', 'M', 'L'],
            collection: 'Weekend'
        },
        {
            id: '6',
            name: 'Flannel Plaid Shirt',
            category: 'Shirt',
            price: 275000,
            image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60',
            images: [
                'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60',
                'https://images.unsplash.com/photo-1580906853298-72b388dbe552?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60',
                'https://images.unsplash.com/photo-1617137968427-85434488314a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60',
                'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60'
            ],
            description: 'Kemeja flanel kotak-kotak yang hangat dan nyaman, sempurna untuk cuaca dingin.',
            sizes: ['M', 'L', 'XL'],
            collection: 'None'
        }
    ],
    settings: {
        slider: [
            {
                title: 'ELEVATE YOUR STYLE',
                subtitle: 'Discover the perfect blend of sophistication and modern fashion.',
                image: 'https://images.unsplash.com/photo-1617137968427-85924c800a22?ixlib=rb-4.0.3&auto=format&fit=crop&w=1770&q=80'
            },
            {
                title: 'TIMELESS COLLECTION',
                subtitle: 'Crafted with passion, designed for the discerning.',
                image: 'https://images.unsplash.com/photo-1550928434-4a02a9534544?ixlib=rb-4.0.3&auto=format&fit=crop&w=1770&q=80'
            }
        ],
        featuredTitle: 'Our Collections',
        featuredCategories: ['T-Shirt', 'Shirt', 'Pants', 'Jacket'],
        newArrivalsTitle: 'New Arrivals',
        newArrivalsProductIds: ['1', '2', '4', '6'],
        promoBanner: {
            title: 'KAZUMI x BUSINESSWEEK',
            subtitle: 'Collaboration of The Year',
            offer: 'BUY 2 GET 30% OFF',
            image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&auto=format&fit=crop&w=1770&q=80'
        }
    }
};

// Initialization script
function initializeData() {
    if (!localStorage.getItem('kazumiProducts')) {
        localStorage.setItem('kazumiProducts', JSON.stringify(KAZUMI_DEFAULT_DATA.products));
    }
    if (!localStorage.getItem('kazumiSettings')) {
        localStorage.setItem('kazumiSettings', JSON.stringify(KAZUMI_DEFAULT_DATA.settings));
    }
}

initializeData();
