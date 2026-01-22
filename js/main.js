// Initialize AOS (Animate On Scroll)
AOS.init({
    duration: 1000,
    once: true,
    offset: 100
});

// Global variables
let cart = [];
let currentFilter = 'all';
let currentQuantity = 1;
let selectedSize = null;
let currentTheme = 'light';
let currentProductImages = [];
let currentImageIndex = 0;

// Sample products data
const sampleProducts = [
    {
        id: 1,
        name: 'JORT BAGGY WINGS',
        price: 31.000,
        category: 'jortsbaggys',
        image: 'https://matissedenim.com.ar/wp-content/uploads/2026/01/WhatsApp-Image-2026-01-21-at-1.04.13-PM-2.jpeg',
        images: [
            'https://matissedenim.com.ar/wp-content/uploads/2026/01/WhatsApp-Image-2026-01-21-at-1.04.13-PM-2.jpeg',
            'https://matissedenim.com.ar/wp-content/uploads/2026/01/WhatsApp-Image-2026-01-21-at-1.04.12-PM.jpeg',
            'https://matissedenim.com.ar/wp-content/uploads/2026/01/WhatsApp-Image-2026-01-21-at-1.04.13-PM.jpeg'
        ],
        description: '▪️ Tela rígida<br>▪️ Color: azul con localizado intenso + ESTAMPA pre lavado<br>▪️ Corte unisex<br><br><small>*Los precios no incluyen IVA</small>',
        sizes: ['36', '38', '40', '42', '44', '46'],
        featured: true
    },
    {
        id: 2,
        name: 'JORT BAGGY TUPAC',
        price: 31.000,
        category: 'jortsbaggys',
        image: 'https://matissedenim.com.ar/wp-content/uploads/2025/12/WhatsApp-Image-2025-12-08-at-8.45.41-AM.jpeg',
        images: [
            'https://matissedenim.com.ar/wp-content/uploads/2025/12/WhatsApp-Image-2025-12-08-at-8.45.41-AM.jpeg',
            'https://matissedenim.com.ar/wp-content/uploads/2025/12/WhatsApp-Image-2025-12-08-at-8.45.42-AM-1.jpeg', // Reemplaza con tu segunda foto
            'https://matissedenim.com.ar/wp-content/uploads/2025/12/WhatsApp-Image-2025-12-08-at-8.45.45-AM-1.jpeg'  // Reemplaza con tu tercera foto
        ],
        description: '▪️ Material premium<br>▪️ Logo bordado de alta calidad<br>▪️ Ajuste regulable<br><br><small>*Los precios no incluyen IVA</small>',
        sizes: ['36', '38', '40', '42', '44', '46'],
        featured: true
    },
    {
        id: 3,
        name: 'JORT BAGGY GTA',
        price: 31.000,
        category: 'jortsbaggys',
        image: 'https://matissedenim.com.ar/wp-content/uploads/2025/12/IMG_5581-scaled.jpeg',
        images: [
            'https://matissedenim.com.ar/wp-content/uploads/2025/12/IMG_5581-scaled.jpeg',
            'https://matissedenim.com.ar/wp-content/uploads/2025/12/IMG_5605-scaled.jpeg', // Reemplaza con tu segunda foto
            'https://matissedenim.com.ar/wp-content/uploads/2025/12/IMG_5594-scaled.jpeg'  // Reemplaza con tu tercera foto
        ],
        description: '▪️Tela rígida<br>▪️diseño con dibujo LÁSER<br>▪️Color: NEGRO stone +localizado<br>▪️Corte unisex<br><br><small>LOS PRECIOS NO INCLUYEN IVA',
        sizes: ['42', '44', '46'],
        featured: true
    },
    {
        id: 4,
        name: 'JORT BAGGY ETERNAL',
        price: 31.000,
        category: 'jortsbaggys',
        image: 'https://matissedenim.com.ar/wp-content/uploads/2025/12/WhatsApp-Image-2025-12-02-at-12.48.58-PM.jpeg',
        images: [
            'https://matissedenim.com.ar/wp-content/uploads/2025/12/WhatsApp-Image-2025-12-02-at-12.48.58-PM.jpeg',
            'https://matissedenim.com.ar/wp-content/uploads/2025/12/WhatsApp-Image-2025-12-02-at-12.48.59-PM.jpeg', // Reemplaza con tu segunda foto
            'https://matissedenim.com.ar/wp-content/uploads/2025/12/WhatsApp-Image-2025-12-02-at-12.48.59-PM.jpeg'  // Reemplaza con tu tercera foto
        ],
        description: '▪️ Tela rigida<br>▪️Color: Matizado quebrado  oxido + localizado +BORDADO<br>▪️Corte unisex<br><br><small>LOS PRECIOS NO INCLUYEN IVA',
        sizes: ['36', '38', '40', '42', '44', '46'],
        featured: true
    },
      {
        id: 5,
        name: 'JORT BAGGY IRON',
        price: 54.999,
        category: 'jortsbaggys',
        image: 'https://matissedenim.com.ar/wp-content/uploads/2025/11/WhatsApp-Image-2025-11-25-at-5.00.06-PM.jpeg',
        images: [
            'https://matissedenim.com.ar/wp-content/uploads/2025/11/WhatsApp-Image-2025-11-25-at-5.00.06-PM.jpeg',
            'https://matissedenim.com.ar/wp-content/uploads/2025/11/WhatsApp-Image-2025-11-25-at-5.00.07-PM.jpeg', // Reemplaza con tu segunda foto
            'https://matissedenim.com.ar/wp-content/uploads/2025/11/WhatsApp-Image-2025-11-25-at-5.00.10-PM.jpeg'  // Reemplaza con tu tercera foto
        ],
        description: '▪️ Tela rigida<br>▪️Color: Gris claro nevado + localizado suave + bigotes<br>▪️Corte unisex<br><br><small>LOS PRECIOS NO INCLUYEN IVA',
        sizes: ['38', '40', '42', '46'],
        featured: true
    },
     {
        id: 6,
        name: 'JORT BAGGY SNOW',
        price: 31.000,
        category: 'jortsbaggys',
        image: 'https://matissedenim.com.ar/wp-content/uploads/2025/11/WhatsApp-Image-2025-11-20-at-4.31.05-PM-7-scaled.jpeg',
        images: [
            'https://matissedenim.com.ar/wp-content/uploads/2025/11/WhatsApp-Image-2025-11-20-at-4.31.05-PM-7-scaled.jpeg',
            'https://matissedenim.com.ar/wp-content/uploads/2025/11/WhatsApp-Image-2025-11-20-at-4.31.05-PM-9-scaled.jpeg', // Reemplaza con tu segunda foto
            'https://matissedenim.com.ar/wp-content/uploads/2025/11/WhatsApp-Image-2025-11-20-at-4.31.05-PM-3-scaled.jpeg'  // Reemplaza con tu tercera foto
        ],
        description: '▪️ Tela rigida<br>▪️Color: matizado oxido suave+ RECORTES + desflecado + bolsillo CARGO<br>▪️Corte unisex<br><br><small>LOS PRECIOS NO INCLUYEN IVA',
        sizes: ['36', '38', '40', '42', '44', '46'],
        featured: true
    },
         {
        id: 7,
        name: 'JORT BAGGY STRYKEZ',
        price: 31.000,
        category: 'jortsbaggys',
        image: 'https://matissedenim.com.ar/wp-content/uploads/2025/11/WhatsApp-Image-2025-11-17-at-4.53.58-PM.jpeg',
        images: [
            'https://matissedenim.com.ar/wp-content/uploads/2025/11/WhatsApp-Image-2025-11-17-at-4.53.58-PM.jpeg',
            'https://matissedenim.com.ar/wp-content/uploads/2025/11/WhatsApp-Image-2025-11-17-at-4.53.59-PM.jpeg', // Reemplaza con tu segunda foto
            'https://matissedenim.com.ar/wp-content/uploads/2025/11/WhatsApp-Image-2025-11-17-at-4.54.02-PM.jpeg'  // Reemplaza con tu tercera foto
        ],
        description: '▪️ Tela rigida<br>▪️Color: matizado oxido suave+ recortes + BORDADO<br>▪️Corte unisex<br><br><small>LOS PRECIOS NO INCLUYEN IVA',
        sizes: ['36','44', '46'],
        featured: true
    },
             {
        id: 8,
        name: 'JORT BAGGY SQUAD',
        price: 31.000,
        category: 'jortsbaggys',
        image: 'https://matissedenim.com.ar/wp-content/uploads/2025/11/WhatsApp-Image-2025-11-17-at-4.19.45-PM.jpeg',
        images: [
            'https://matissedenim.com.ar/wp-content/uploads/2025/11/WhatsApp-Image-2025-11-17-at-4.19.45-PM.jpegg',
            'https://matissedenim.com.ar/wp-content/uploads/2025/11/WhatsApp-Image-2025-11-17-at-4.19.44-PM-1.jpeg', // Reemplaza con tu segunda foto
            'https://matissedenim.com.ar/wp-content/uploads/2025/11/WhatsApp-Image-2025-11-17-at-4.19.43-PM-1.jpeg'  // Reemplaza con tu tercera foto
        ],
        description: '▪️Tela rigida<br>▪️Color: Color camuflado único + BORDADO (temático)<br>▪️Corte unisex<br><br><small>LOS PRECIOS NO INCLUYEN IVA',
        sizes: ['36','44', '46'],
        featured: true
    },
     {
        id: 9,
        name: 'JORT BAGGY SIRAX',
        price: 31.000,
        category: 'jortsbaggys',
        image: 'https://matissedenim.com.ar/wp-content/uploads/2025/11/WhatsApp-Image-2025-11-10-at-5.27.18-PM.jpeg',
        images: [
            'https://matissedenim.com.ar/wp-content/uploads/2025/11/WhatsApp-Image-2025-11-10-at-5.27.18-PM.jpeg',
            'https://matissedenim.com.ar/wp-content/uploads/2025/11/WhatsApp-Image-2025-11-10-at-5.27.18-PM-1.jpeg', // Reemplaza con tu segunda foto
            'https://matissedenim.com.ar/wp-content/uploads/2025/11/WhatsApp-Image-2025-11-10-at-5.27.19-PM-2.jpeg'  // Reemplaza con tu tercera foto
        ],
        description: '▪️ Tela rigida<br>▪️Color: matizado oxido suave+ localizado+bigotes<br>▪️Corte unisex<br><br><small>LOS PRECIOS NO INCLUYEN IVA',
        sizes: ['36','44', '46'],
        featured: true
    },
    {
        id: 10,
        name: 'JORT BAGGY AUTHENTIC',
        price: 31.000,
        category: 'jortsbaggys',
        image: 'https://matissedenim.com.ar/wp-content/uploads/2025/11/WhatsApp-Image-2025-11-10-at-5.16.45-PM.jpeg',
        images: [
            'https://matissedenim.com.ar/wp-content/uploads/2025/11/WhatsApp-Image-2025-11-10-at-5.16.45-PM.jpeg',
            'https://matissedenim.com.ar/wp-content/uploads/2025/11/WhatsApp-Image-2025-11-10-at-5.16.44-PM.jpeg', // Reemplaza con tu segunda foto
            'https://matissedenim.com.ar/wp-content/uploads/2025/11/WhatsApp-Image-2025-11-10-at-5.16.43-PM.jpeg'  // Reemplaza con tu tercera foto
        ],
        description: '▪️Tela rigida<br>▪️Color: gris oscuro + localizado+ BORDADO<br>▪️Corte unisex<br><br><small>LOS PRECIOS NO INCLUYEN IVA',
        sizes: ['38', '40', '42', '44', '46'],
        featured: true
    },
    
];

// Initialize the app
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    loadProducts();
    setupEventListeners();
    loadCartFromStorage();
    
    // Load theme from storage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        const themeToggle = document.getElementById('themeToggle');
        if (themeToggle) {
            themeToggle.classList.add('active');
        }
    }
    
    // Set initial active state for "Todos" button
    const todosBtn = document.querySelector('[data-filter="all"]');
    if (todosBtn) {
        todosBtn.classList.add('active');
    }
}

function setupEventListeners() {
    // Filter buttons
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            filterProducts(this.dataset.filter);
            updateFilterButtons(this);
        });
    });

    // Search functionality
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            searchProducts(this.value);
        });
    }

    // Sort functionality
    const sortSelect = document.getElementById('sortSelect');
    if (sortSelect) {
        sortSelect.addEventListener('change', function() {
            sortProducts(this.value);
        });
    }

    // Size selector
    document.querySelectorAll('.size-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            selectSize(this);
        });
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const href = this.getAttribute('href');
            if (href && href !== '#') {
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // Close modal when clicking outside
    document.getElementById('productModal').addEventListener('click', function(e) {
        if (e.target === this) {
            closeModal();
        }
    });
}

function loadProducts() {
    products = sampleProducts;
    renderProducts(products);
}

function renderProducts(productsToRender) {
    const grid = document.getElementById('productsGrid');
    grid.innerHTML = '';

    productsToRender.forEach((product, index) => {
        const productCard = createProductCard(product, index);
        grid.appendChild(productCard);
    });
}

function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105';
    
    // Determinar badge
    let badge = '';
    if (product.featured) {
        badge = '<span class="product-badge badge-new">NUEVO</span>';
    } else if (Math.random() > 0.7) {
        badge = '<span class="product-badge badge-popular">POPULAR</span>';
    } else if (Math.random() > 0.5) {
        badge = '<span class="product-badge badge-sale">OFERTA</span>';
    }
    
    card.innerHTML = `
        <div class="relative">
            ${badge}
            <img src="${product.image}" alt="${product.name}" class="w-full h-64 object-cover">
        </div>
        <div class="p-4">
            <h3 class="text-lg font-semibold mb-2 text-gray-900 dark:text-white">${product.name}</h3>
            <p class="text-2xl font-bold text-red-600 dark:text-red-400 mb-4">$${product.price.toLocaleString('es-AR')}</p>
            <button onclick="openProductModal(${product.id})" class="w-full bg-black dark:bg-white text-white dark:text-black px-4 py-2 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors">
                Ver Detalles
            </button>
        </div>
    `;
    return card;
}

function filterProducts(category) {
    currentFilter = category;
    let filteredProducts = products;

    if (category !== 'all') {
        filteredProducts = products.filter(product => product.category === category);
    }

    // Apply current search if exists
    const searchInput = document.getElementById('searchInput');
    if (searchInput && searchInput.value) {
        filteredProducts = filteredProducts.filter(product => 
            product.name.toLowerCase().includes(searchInput.value.toLowerCase())
        );
    }

    renderProducts(filteredProducts);
}

function searchProducts(searchTerm) {
    let filteredProducts = products;

    // Apply category filter if active
    if (currentFilter !== 'all') {
        filteredProducts = products.filter(product => product.category === currentFilter);
    }

    // Apply search filter
    if (searchTerm) {
        filteredProducts = filteredProducts.filter(product => 
            product.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }

    renderProducts(filteredProducts);
}

function sortProducts(sortType) {
    let sortedProducts = [...products];

    switch(sortType) {
        case 'name-asc':
            sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
            break;
        case 'name-desc':
            sortedProducts.sort((a, b) => b.name.localeCompare(a.name));
            break;
        case 'price-asc':
            sortedProducts.sort((a, b) => a.price - b.price);
            break;
        case 'price-desc':
            sortedProducts.sort((a, b) => b.price - a.price);
            break;
    }

    products = sortedProducts;
    
    // Re-apply current filters
    const searchInput = document.getElementById('searchInput');
    if (currentFilter !== 'all' || (searchInput && searchInput.value)) {
        filterProducts(currentFilter);
    } else {
        renderProducts(products);
    }
}

function setupChatbot() {
    const chatbotToggle = document.getElementById('chatbotToggle');
    const chatbotWindow = document.getElementById('chatbotWindow');
    const closeChatbot = document.getElementById('closeChatbot');
    const chatbotInput = document.getElementById('chatbotInput');
    const sendButton = document.getElementById('sendChatbotMessage');
    const chatbotMessages = document.getElementById('chatbotMessages');

    if (!chatbotToggle || !chatbotWindow) return;

    chatbotToggle.addEventListener('click', function() {
        chatbotWindow.classList.toggle('active');
    });

    if (closeChatbot) {
        closeChatbot.addEventListener('click', function() {
            chatbotWindow.classList.remove('active');
        });
    }

    function sendMessage() {
        const message = chatbotInput.value.trim();
        if (!message) return;

        // Add user message
        const userMessageDiv = document.createElement('div');
        userMessageDiv.className = 'user-message';
        userMessageDiv.textContent = message;
        chatbotMessages.appendChild(userMessageDiv);

        // Clear input
        chatbotInput.value = '';

        // Simulate bot response
        setTimeout(() => {
            const botResponse = getBotResponse(message);
            const botMessageDiv = document.createElement('div');
            botMessageDiv.className = 'bot-message';
            botMessageDiv.innerHTML = botResponse;
            chatbotMessages.appendChild(botMessageDiv);
            
            // Scroll to bottom
            chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
        }, 1000);
    }

    if (sendButton) {
        sendButton.addEventListener('click', sendMessage);
    }

    if (chatbotInput) {
        chatbotInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                sendMessage();
            }
        });
    }
}

function getBotResponse(message) {
    const lowerMessage = message.toLowerCase();
    
    // Respuestas predefinidas
    if (lowerMessage.includes('hola') || lowerMessage.includes('hi')) {
        return '¡Hola! 👋 ¿En qué puedo ayudarte?<br><br>• Productos disponibles<br>• Tallas y colores<br>• Envíos y pagos<br>• Cuidados de prendas';
    } else if (lowerMessage.includes('precio') || lowerMessage.includes('cuanto cuesta')) {
        return 'Nuestros precios varían según el modelo:<br><br>• Jorts: $30.500 - $34.000<br>• Gorras: $25.000<br><br>¿Querés saber el precio de algún producto específico?';
    } else if (lowerMessage.includes('talla') || lowerMessage.includes('talle')) {
        return 'Contamos con tallas: 36, 38, 40, 42, 44, 46<br><br>Algunos modelos tienen disponibilidad limitada. ¿Qué talla buscás?';
    } else if (lowerMessage.includes('envío') || lowerMessage.includes('envio')) {
        return 'Hacemos envíos a todo Argentina:<br><br>• Neuquén: $2.500<br>• Resto del país: $3.500<br>• Entrega 24-48hs';
    } else if (lowerMessage.includes('pago') || lowerMessage.includes('pagar')) {
        return 'Métodos de pago:<br><br>• Transferencia bancaria<br>• Mercado Pago<br>• Efectivo (local)<br><br>¿Cuál preferís?';
    } else if (lowerMessage.includes('material') || lowerMessage.includes('tela')) {
        return 'Nuestros jorts están confeccionados con:<br><br>• Tela rígida de alta calidad<br>• Diseños únicos con bordados<br>• Corte unisex<br>• Lavado especial';
    } else {
        return 'Entendido. ¿Podrías darme más detalles?<br><br>Puedo ayudarte con:<br>• Productos y precios<br>• Tallas disponibles<br>• Envíos y pagos<br>• Cuidados de las prendas';
    }
}

function updateFilterButtons(activeBtn) {
    // Remove active class from all buttons
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Add active class to clicked button
    activeBtn.classList.add('active');
}

function openProductModal(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    // Set product images
    currentProductImages = product.images || [product.image];
    currentImageIndex = 0;

    // Update modal content
    document.getElementById('modalImage').src = currentProductImages[0];
    document.getElementById('modalTitle').textContent = product.name;
    document.getElementById('modalPrice').textContent = `$${product.price}`;
    document.getElementById('modalDescription').innerHTML = product.description;

    // Create thumbnails
    createThumbnails(currentProductImages);

    // Update size selector
    const sizeSelector = document.getElementById('sizeSelector');
    sizeSelector.innerHTML = '';
    product.sizes.forEach(size => {
        const btn = document.createElement('button');
        btn.className = 'size-btn';
        btn.textContent = size;
        btn.onclick = () => selectSize(btn);
        sizeSelector.appendChild(btn);
    });

    // Reset quantity and selected size
    currentQuantity = 1;
    selectedSize = null;
    document.getElementById('quantity').textContent = '1';

    // Show modal
    document.getElementById('productModal').classList.add('active');
}

function createThumbnails(images) {
    const container = document.getElementById('thumbnailContainer');
    container.innerHTML = '';

    images.forEach((image, index) => {
        const thumbnail = document.createElement('div');
        thumbnail.className = 'thumbnail';
        if (index === 0) thumbnail.classList.add('active');
        
        const img = document.createElement('img');
        img.src = image;
        img.alt = `Thumbnail ${index + 1}`;
        img.onclick = (e) => {
            e.stopPropagation();
            selectImage(index);
        };
        
        thumbnail.appendChild(img);
        container.appendChild(thumbnail);
    });
}

function selectImage(index) {
    currentImageIndex = index;
    document.getElementById('modalImage').src = currentProductImages[index];
    
    // Update active thumbnail
    document.querySelectorAll('.thumbnail').forEach((thumb, i) => {
        thumb.classList.toggle('active', i === index);
    });
}

function openZoomModal() {
    const modal = document.getElementById('zoomModal');
    document.getElementById('zoomImage').src = currentProductImages[currentImageIndex];
    modal.classList.add('active');
}

function closeZoomModal() {
    document.getElementById('zoomModal').classList.remove('active');
}

function navigateZoom(direction) {
    currentImageIndex += direction;
    
    if (currentImageIndex < 0) {
        currentImageIndex = currentProductImages.length - 1;
    } else if (currentImageIndex >= currentProductImages.length) {
        currentImageIndex = 0;
    }
    
    document.getElementById('zoomImage').src = currentProductImages[currentImageIndex];
    selectImage(currentImageIndex);
}

function closeModal() {
    document.getElementById('productModal').classList.remove('active');
}

function selectSize(btn) {
    document.querySelectorAll('.size-btn').forEach(b => b.classList.remove('selected'));
    btn.classList.add('selected');
    selectedSize = btn.dataset.size;
}

function increaseQuantity() {
    currentQuantity++;
    document.getElementById('quantity').textContent = currentQuantity;
}

function decreaseQuantity() {
    if (currentQuantity > 1) {
        currentQuantity--;
        document.getElementById('quantity').textContent = currentQuantity;
    }
}

function addToCart() {
    if (!selectedSize) {
        showNotification('Por favor selecciona una talla', 'error');
        return;
    }

    const modalTitle = document.getElementById('modalTitle').textContent;
    const modalPrice = document.getElementById('modalPrice').textContent;
    const modalImage = document.getElementById('modalImage').src;

    const cartItem = {
        id: Date.now(),
        name: modalTitle,
        price: parseFloat(modalPrice.replace('$', '')),
        image: modalImage,
        size: selectedSize,
        quantity: currentQuantity
    };

    cart.push(cartItem);
    updateCartUI();
    saveCartToStorage();
    closeModal();
    showNotification('Producto agregado al carrito', 'success');

    // Add bounce animation to cart icon
    document.querySelector('.fa-shopping-cart').parentElement.classList.add('cart-bounce');
    setTimeout(() => {
        document.querySelector('.fa-shopping-cart').parentElement.classList.remove('cart-bounce');
    }, 500);
}

function quickAddToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const cartItem = {
        id: Date.now(),
        name: product.name,
        price: product.price,
        image: product.image,
        size: product.sizes[0], // Default to first size
        quantity: 1
    };

    cart.push(cartItem);
    updateCartUI();
    saveCartToStorage();
    showNotification('Producto agregado al carrito', 'success');

    // Add bounce animation to cart icon
    document.querySelector('.fa-shopping-cart').parentElement.classList.add('cart-bounce');
    setTimeout(() => {
        document.querySelector('.fa-shopping-cart').parentElement.classList.remove('cart-bounce');
    }, 500);
}

function updateCartUI() {
    const cartItems = document.getElementById('cartItems');
    const cartCount = document.getElementById('cartCount');
    const cartTotal = document.getElementById('cartTotal');

    // Clear cart items
    cartItems.innerHTML = '';

    if (cart.length === 0) {
        cartItems.innerHTML = `<p class="text-center" style="color: var(--text-secondary);">Tu carrito está vacío</p>`;
        cartCount.textContent = '0';
        cartTotal.textContent = '$0';
        return;
    }

    let total = 0;
    let itemCount = 0;

    cart.forEach(item => {
        const cartItemElement = document.createElement('div');
        cartItemElement.className = 'flex items-center gap-4 p-4 rounded-lg';
        cartItemElement.style.backgroundColor = 'var(--bg-light)';
        cartItemElement.innerHTML = `
            <img src="${item.image}" alt="${item.name}" class="w-16 h-16 object-cover rounded">
            <div class="flex-1">
                <h4 class="font-semibold" style="color: var(--text-primary);">${item.name}</h4>
                <p class="text-sm" style="color: var(--text-secondary);">Talla: ${item.size} | Cantidad: ${item.quantity}</p>
                <p class="font-bold" style="color: var(--text-primary);">$${(item.price * item.quantity).toFixed(2)}</p>
            </div>
            <button onclick="removeFromCart(${item.id})" class="text-red-500 hover:text-red-700">
                <i class="fas fa-trash"></i>
            </button>
        `;
        cartItems.appendChild(cartItemElement);

        total += item.price * item.quantity;
        itemCount += item.quantity;
    });

    cartCount.textContent = itemCount;
    cartTotal.textContent = `$${total.toFixed(2)}`;
}

function removeFromCart(itemId) {
    cart = cart.filter(item => item.id !== itemId);
    updateCartUI();
    saveCartToStorage();
    showNotification('Producto eliminado del carrito', 'success');
}

function toggleCart() {
    const cartSidebar = document.getElementById('cartSidebar');
    cartSidebar.classList.toggle('translate-x-full');
}

function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    mobileMenu.classList.toggle('active');
}

function scrollToProducts() {
    document.getElementById('products').scrollIntoView({
        behavior: 'smooth'
    });
}

function loadMoreProducts() {
    // Simulate loading more products
    showNotification('Cargando más productos...', 'success');
    
    // Add some animation
    const grid = document.getElementById('productsGrid');
    grid.style.opacity = '0.5';
    
    setTimeout(() => {
        grid.style.opacity = '1';
        showNotification('Todos los productos están cargados', 'success');
    }, 1000);
}

function subscribeNewsletter(event) {
    event.preventDefault();
    const email = event.target.querySelector('input[type="email"]').value;
    
    // Simulate subscription
    showNotification('¡Gracias por suscribirte! Revisa tu correo para confirmar.', 'success');
    event.target.reset();
}

function sendContactForm(event) {
    event.preventDefault();
    
    // Simulate form submission
    showNotification('Mensaje enviado correctamente. Te responderemos pronto.', 'success');
    event.target.reset();
}

function showNotification(message, type = 'success') {
    const notification = document.getElementById('notification');
    const notificationText = document.getElementById('notification-text');
    const icon = notification.querySelector('i');
    
    // Update notification content
    notificationText.textContent = message;
    
    // Update icon and class based on type
    notification.className = 'notification';
    if (type === 'success') {
        notification.classList.add('success');
        icon.className = 'fas fa-check-circle text-green-500';
    } else if (type === 'error') {
        notification.classList.add('error');
        icon.className = 'fas fa-exclamation-circle text-red-500';
    }
    
    // Show notification
    notification.classList.add('show');
    
    // Hide after 3 seconds
    setTimeout(() => {
        notification.classList.remove('show');
    }, 3000);
}

function saveCartToStorage() {
    localStorage.setItem('lussinkz_cart', JSON.stringify(cart));
}

function loadCartFromStorage() {
    const savedCart = localStorage.getItem('lussinkz_cart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
        updateCartUI();
    }
}

function loadThemeFromStorage() {
    const savedTheme = localStorage.getItem('lussinkz_theme');
    if (savedTheme) {
        currentTheme = savedTheme;
        applyTheme(currentTheme);
    }
}

// Theme toggle functionality
function toggleTheme() {
    const body = document.body;
    const themeToggle = document.getElementById('themeToggle');
    
    body.classList.toggle('dark-mode');
    themeToggle.classList.toggle('active');
    
    // Save theme preference
    const isDark = body.classList.contains('dark-mode');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
}

// FAQ Functionality
function toggleFAQ(element) {
    const faqItem = element.parentElement;
    const allItems = document.querySelectorAll('.faq-item');
    
    // Close all other items
    allItems.forEach(item => {
        if (item !== faqItem) {
            item.classList.remove('active');
        }
    });
    
    // Toggle current item
    faqItem.classList.toggle('active');
}

function filterFAQ(category) {
    const allItems = document.querySelectorAll('.faq-item');
    const allButtons = document.querySelectorAll('.faq-category-btn');
    
    // Update button states
    allButtons.forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.category === category) {
            btn.classList.add('active');
        }
    });
    
    // Filter items
    allItems.forEach(item => {
        if (category === 'all' || item.dataset.category === category) {
            item.style.display = 'block';
            setTimeout(() => {
                item.style.opacity = '1';
                item.style.transform = 'translateY(0)';
            }, 100);
        } else {
            item.style.opacity = '0';
            item.style.transform = 'translateY(-20px)';
            setTimeout(() => {
                item.style.display = 'none';
            }, 300);
        }
    });
}

function searchFAQ(searchTerm) {
    const allItems = document.querySelectorAll('.faq-item');
    const term = searchTerm.toLowerCase();
    
    allItems.forEach(item => {
        const question = item.querySelector('h3').textContent.toLowerCase();
        const answer = item.querySelector('p').textContent.toLowerCase();
        
        if (question.includes(term) || answer.includes(term)) {
            item.style.display = 'block';
            setTimeout(() => {
                item.style.opacity = '1';
                item.style.transform = 'translateY(0)';
            }, 100);
        } else {
            item.style.opacity = '0';
            item.style.transform = 'translateY(-20px)';
            setTimeout(() => {
                item.style.display = 'none';
            }, 300);
        }
    });
    
    // Reset category buttons
    document.querySelectorAll('.faq-category-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.category === 'all') {
            btn.classList.add('active');
        }
    });
}

// Newsletter functionality
function subscribeNewsletter(event) {
    event.preventDefault();
    const email = event.target.querySelector('input[type="email"]').value;
    
    // Show success notification
    showNotification('¡Gracias por suscribirte! Te enviaremos las últimas novedades.', 'success');
    
    // Clear form
    event.target.reset();
    
    // Here you would normally send the email to your backend
    console.log('Newsletter subscription:', email);
}

// Contact form functionality
function sendContactForm(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    
    // Show success notification
    showNotification('¡Mensaje enviado! Te responderemos a la brevedad.', 'success');
    
    // Clear form
    event.target.reset();
    
    // Here you would normally send the data to your backend
    console.log('Contact form:', data);
}

// Enhanced notification system
function showNotification(message, type = 'success') {
    const notification = document.getElementById('notification');
    const notificationText = document.getElementById('notification-text');
    const icon = notification.querySelector('i');
    
    // Set message
    notificationText.textContent = message;
    
    // Set icon and color based on type
    notification.className = 'notification show';
    if (type === 'success') {
        icon.className = 'fas fa-check-circle text-green-500';
        notification.style.borderLeft = '4px solid #10b981';
    } else if (type === 'error') {
        icon.className = 'fas fa-exclamation-circle text-red-500';
        notification.style.borderLeft = '4px solid #ef4444';
    } else if (type === 'info') {
        icon.className = 'fas fa-info-circle text-blue-500';
        notification.style.borderLeft = '4px solid #3b82f6';
    }
    
    // Auto hide after 5 seconds
    setTimeout(() => {
        notification.classList.remove('show');
    }, 5000);
}

// Enhanced cart functionality
function updateCartUI() {
    const cartCount = document.getElementById('cartCount');
    const cartTotal = document.getElementById('cartTotal');
    const cartItems = document.getElementById('cartItems');
    
    if (cartCount) cartCount.textContent = cart.length;
    
    if (cartTotal) {
        const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        cartTotal.textContent = `$${total.toLocaleString('es-AR')}`;
    }
    
    if (cartItems) {
        if (cart.length === 0) {
            cartItems.innerHTML = '<p class="text-center py-8">Tu carrito está vacío</p>';
        } else {
            cartItems.innerHTML = cart.map(item => `
                <div class="flex items-center gap-4 py-4 border-b">
                    <img src="${item.image}" alt="${item.name}" class="w-16 h-16 object-cover rounded">
                    <div class="flex-1">
                        <h4 class="font-semibold">${item.name}</h4>
                        <p class="text-sm">Talla: ${item.size || 'U'} | Cantidad: ${item.quantity}</p>
                        <p class="font-bold">$${(item.price * item.quantity).toLocaleString('es-AR')}</p>
                    </div>
                    <button onclick="removeFromCart(${item.id})" class="text-red-500 hover:text-red-700">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            `).join('');
        }
    }
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartUI();
    saveCartToStorage();
    showNotification('Producto eliminado del carrito', 'info');
}

// Enhanced product modal
function openProductModal(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    const modal = document.getElementById('productModal');
    const modalImage = document.getElementById('modalImage');
    const modalTitle = document.getElementById('modalTitle');
    const modalPrice = document.getElementById('modalPrice');
    const modalDescription = document.getElementById('modalDescription');
    const thumbnailContainer = document.getElementById('thumbnailContainer');
    
    // Set product info
    modalImage.src = product.image;
    modalTitle.textContent = product.name;
    modalPrice.textContent = `$${product.price.toLocaleString('es-AR')}`;
    modalDescription.innerHTML = product.description;
    
    // Set thumbnails
    if (product.images && product.images.length > 1) {
        thumbnailContainer.innerHTML = product.images.map((img, index) => `
            <img src="${img}" alt="${product.name} ${index + 1}" 
                 class="thumbnail ${index === 0 ? 'active' : ''}" 
                 onclick="changeModalImage('${img}')">
        `).join('');
        thumbnailContainer.style.display = 'flex';
    } else {
        thumbnailContainer.style.display = 'none';
    }
    
    // Reset size and quantity
    selectedSize = null;
    currentQuantity = 1;
    document.getElementById('quantity').textContent = '1';
    
    // Update size buttons
    const sizeButtons = document.querySelectorAll('.size-btn');
    sizeButtons.forEach(btn => {
        btn.classList.remove('selected');
        if (product.sizes && product.sizes.includes(btn.dataset.size)) {
            btn.style.display = 'inline-block';
        } else {
            btn.style.display = 'none';
        }
    });
    
    // Show modal
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function changeModalImage(imageSrc) {
    const modalImage = document.getElementById('modalImage');
    const thumbnails = document.querySelectorAll('.thumbnail');
    
    modalImage.src = imageSrc;
    
    thumbnails.forEach(thumb => {
        thumb.classList.remove('active');
        if (thumb.src === imageSrc || thumb.src.includes(imageSrc.split('/').pop())) {
            thumb.classList.add('active');
        }
    });
}

// Smooth scroll to products
function scrollToProducts() {
    const productsSection = document.getElementById('products');
    if (productsSection) {
        productsSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Authentication System
let currentUser = null;
let users = JSON.parse(localStorage.getItem('lussinkz_users')) || [];

// Add some test users if empty
if (users.length === 0) {
    console.log('📝 No hay usuarios, creando usuarios de prueba...');
    users = [
        {
            id: 1,
            name: 'Usuario',
            surname: 'Prueba',
            email: 'test@email.com',
            password: '123456',
            phone: '2995123456',
            role: 'user',
            isActive: true,
            registeredAt: new Date().toISOString()
        },
        {
            id: 2,
            name: 'LussInkz',
            surname: 'Admin',
            email: 'admin@lussinkz.com',
            password: 'admin123',
            phone: '2995987654',
            role: 'admin',
            isActive: true,
            registeredAt: new Date().toISOString()
        }
    ];
    localStorage.setItem('lussinkz_users', JSON.stringify(users));
    console.log('✅ Usuarios de prueba creados:', users);
}
let orders = JSON.parse(localStorage.getItem('lussinkz_orders')) || [];
let messages = JSON.parse(localStorage.getItem('lussinkz_messages')) || [];

// Initialize with admin user
if (users.length === 0) {
    users.push({
        id: 1,
        name: 'Admin',
        surname: 'LussInkz',
        email: 'admin@lussinkz.com',
        password: 'admin123', // In production, this should be hashed
        phone: '+54 9 2995 91-7923',
        role: 'admin',
        registeredAt: new Date().toISOString(),
        isActive: true
    });
    localStorage.setItem('lussinkz_users', JSON.stringify(users));
}

// Authentication Functions
function openAuthModal() {
    console.log('openAuthModal called'); // Debug
    const modal = document.getElementById('authModal');
    console.log('Modal found:', modal); // Debug
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
        console.log('Modal should be visible now'); // Debug
    } else {
        console.error('Modal not found!'); // Debug
    }
}

function closeAuthModal() {
    const modal = document.getElementById('authModal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

function showPasswordReset() {
    document.getElementById('loginForm').classList.add('hidden');
    document.getElementById('registerForm').classList.add('hidden');
    document.getElementById('passwordResetForm').classList.remove('hidden');
}

function handlePasswordReset(event) {
    console.log('🚀 handlePasswordReset called!');
    console.log('📧 Event object:', event);
    
    event.preventDefault();
    console.log('✅ Event prevented');
    
    // Mostrar usuarios actuales en consola
    console.log('👥 Usuarios actuales en LocalStorage:', users);
    console.log('📊 Total de usuarios:', users.length);
    
    const email = document.getElementById('resetEmail').value;
    console.log('📧 Email from form:', email);
    
    if (!email) {
        console.error('❌ Email is empty');
        showNotification('Por favor ingresa tu email', 'error');
        return;
    }
    
    console.log('👤 Looking for user with email:', email);
    
    // Check if user exists
    const user = users.find(u => u.email === email);
    
    if (user) {
        // Generate reset token (in production, this should be more secure)
        const resetToken = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
        const resetExpiry = new Date(Date.now() + 3600000); // 1 hour from now
        
        // Store reset token
        user.resetToken = resetToken;
        user.resetExpiry = resetExpiry.toISOString();
        localStorage.setItem('lussinkz_users', JSON.stringify(users));
        
        // Create reset link
        const resetLink = `${window.location.origin}${window.location.pathname}?token=${resetToken}`;
        
        // Email template data
        const templateParams = {
            to_email: email,
            to_name: user.name || "Cliente",
            email: email,
            link: resetLink,
            company_name: "LussInkz",
            website_link: window.location.origin,
            logo_url: "https://i.imgur.com/ZzKvOsx.png"
        };
        
        // Send email using EmailJS
        if (typeof emailjs !== 'undefined') {
            console.log('📧 Enviando email con los siguientes parámetros:', templateParams);
            console.log('🔧 Service ID: service_w8p6kjj');
            console.log('📝 Template ID: template_v4k020w');
            
            // Try with different parameter names
            const minimalParams = {
                to_email: email,
                to_name: user.name || "Cliente",
                from_name: "LussInkz",
                message: resetLink,
                reset_link: resetLink,
                link: resetLink
            };
            
            console.log('⚡ Intentando con parámetros extendidos:', minimalParams);
            console.log('🚀 Enviando a EmailJS...');
            
            emailjs.send("service_w8p6kjj", "template_v4k020w", minimalParams)
            .then(function(response) {
                console.log("✅ Email enviado exitosamente!", response.status, response.text);
                showPasswordResetSuccess();
            }, function(error) {
                console.error("❌ Error enviando email:", error);
                console.error("Error details:", error.text || error.message);
                
                // Fallback: show link in console and notification
                console.log(`📋 DEMO: Enlace de reset: ${resetLink}`);
                showNotification(`Se ha generado un enlace de recuperación. Revisa la consola (F12) para obtener el enlace de demostración.`, 'info');
                showPasswordResetSuccess();
            });
        } else {
            console.error("❌ EmailJS no está cargado");
            console.log(`📋 DEMO: Enlace de reset: ${resetLink}`);
            showNotification(`EmailJS no está disponible. Revisa la consola (F12) para obtener el enlace de demostración.`, 'info');
            showPasswordResetSuccess();
        }
        
        // Clear form
        document.getElementById('resetEmail').value = '';
    } else {
        showNotification('Si el email existe en nuestro sistema, recibirás un enlace de recuperación.', 'info');
        // Don't reveal if email exists or not for security
        setTimeout(() => {
            showPasswordResetSuccess();
        }, 2000);
    }
}

function showPasswordResetSuccess() {
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    const passwordResetForm = document.getElementById('passwordResetForm');
    const passwordResetSuccess = document.getElementById('passwordResetSuccess');
    
    if (loginForm) loginForm.classList.add('hidden');
    if (registerForm) registerForm.classList.add('hidden');
    if (passwordResetForm) passwordResetForm.classList.add('hidden');
    if (passwordResetSuccess) passwordResetSuccess.classList.remove('hidden');
    
    // Hide any existing notifications
    const notification = document.getElementById('notification');
    if (notification) {
        notification.classList.remove('show');
        notification.style.transform = 'translateX(400px)';
    }
}

// Check for password reset in URL
function checkPasswordReset() {
    console.log('🔍 Verificando reset de contraseña en URL...');
    
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get('token');
    
    console.log('📋 Token encontrado en URL:', token);
    console.log('👥 Usuarios disponibles:', users.map(u => ({email: u.email, hasToken: !!u.resetToken, token: u.resetToken})));
    
    if (token) {
        const user = users.find(u => u.resetToken === token && u.resetExpiry && new Date(u.resetExpiry) > new Date());
        
        console.log('🔍 Buscando usuario con token:', token);
        console.log('👤 Usuario encontrado:', user);
        
        if (user) {
            console.log('✅ Token válido, mostrando formulario de nueva contraseña');
            // Show password reset form
            showNewPasswordForm(user);
        } else {
            console.error('❌ Token inválido o expirado');
            showNotification('El enlace de recuperación ha expirado o es inválido.', 'error');
        }
    } else {
        console.log('ℹ️ No hay token en URL');
    }
}

function showNewPasswordForm(user) {
    console.log('🔑 Mostrando formulario de nueva contraseña para:', user.email);
    
    const modal = document.getElementById('authModal');
    if (!modal) {
        console.error('❌ Modal no encontrado');
        return;
    }
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    // Hide all forms
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    const passwordResetForm = document.getElementById('passwordResetForm');
    const passwordResetSuccess = document.getElementById('passwordResetSuccess');
    
    if (loginForm) loginForm.classList.add('hidden');
    if (registerForm) registerForm.classList.add('hidden');
    if (passwordResetForm) passwordResetForm.classList.add('hidden');
    if (passwordResetSuccess) passwordResetSuccess.classList.add('hidden');
    
    // Create new password form
    const resetForm = document.getElementById('passwordResetForm');
    if (resetForm) {
        resetForm.innerHTML = `
            <div class="text-center mb-8">
                <h2 class="text-3xl font-bold mb-2" style="color: var(--text-primary);">Nueva Contraseña</h2>
                <p style="color: var(--text-secondary);">Ingresa tu nueva contraseña</p>
            </div>
            
            <form onsubmit="handleNewPassword(event, '${user.email}')">
                <div class="mb-4">
                    <label class="block mb-2 font-semibold" style="color: var(--text-primary);">Nueva Contraseña</label>
                    <input type="password" id="newPassword" required 
                           class="w-full px-4 py-3 rounded-lg border-2 focus:outline-none"
                           style="background-color: var(--bg-primary); border-color: var(--border-color); color: var(--text-primary);"
                           placeholder="Mínimo 6 caracteres">
                </div>
                <div class="mb-4">
                    <label class="block mb-2 font-semibold" style="color: var(--text-primary);">Confirmar Contraseña</label>
                    <input type="password" id="confirmNewPassword" required 
                           class="w-full px-4 py-3 rounded-lg border-2 focus:outline-none"
                           style="background-color: var(--bg-primary); border-color: var(--border-color); color: var(--text-primary);"
                           placeholder="Repite tu nueva contraseña">
                </div>
                <button type="submit" class="w-full py-3 rounded-lg font-semibold transition-all duration-300"
                        style="background: linear-gradient(135deg, var(--accent-color) 0%, #cc0000 100%); color: white;">
                    <i class="fas fa-check mr-2"></i>Actualizar Contraseña
                </button>
            </form>
            
            <div class="text-center mt-6">
                <p style="color: var(--text-secondary);">
                    <a href="#" onclick="showLoginForm()" class="font-semibold" style="color: var(--accent-color);">
                        <i class="fas fa-arrow-left mr-2"></i>Volver al Login
                    </a>
                </p>
            </div>
        `;
        resetForm.classList.remove('hidden');
        console.log('✅ Formulario de nueva contraseña creado y mostrado');
    } else {
        console.error('❌ passwordResetForm no encontrado');
    }
}

function handleNewPassword(event, email) {
    event.preventDefault();
    
    const newPassword = document.getElementById('newPassword').value;
    const confirmPassword = document.getElementById('confirmNewPassword').value;
    
    if (newPassword !== confirmPassword) {
        showNotification('Las contraseñas no coinciden', 'error');
        return;
    }
    
    if (newPassword.length < 6) {
        showNotification('La contraseña debe tener al menos 6 caracteres', 'error');
        return;
    }
    
    // Update user password
    const user = users.find(u => u.email === email);
    if (user) {
        user.password = newPassword;
        user.resetToken = null;
        user.resetExpiry = null;
        localStorage.setItem('lussinkz_users', JSON.stringify(users));
        
        showNotification('¡Contraseña actualizada correctamente! Ya puedes iniciar sesión.', 'success');
        
        // Go to login
        setTimeout(() => {
            showLoginForm();
        }, 2000);
    }
}

function showLoginForm() {
    document.getElementById('loginForm').classList.remove('hidden');
    document.getElementById('registerForm').classList.add('hidden');
    document.getElementById('passwordResetForm').classList.add('hidden');
    document.getElementById('passwordResetSuccess').classList.add('hidden');
}

function showRegisterForm() {
    document.getElementById('loginForm').classList.add('hidden');
    document.getElementById('registerForm').classList.remove('hidden');
    document.getElementById('passwordResetForm').classList.add('hidden');
    document.getElementById('passwordResetSuccess').classList.add('hidden');
}

function handleLogin(event) {
    event.preventDefault();
    
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    const rememberMe = document.getElementById('rememberMe').checked;
    
    // Find user
    const user = users.find(u => u.email === email && u.password === password);
    
    if (user) {
        if (!user.isActive) {
            showNotification('Tu cuenta está desactivada. Contacta al administrador.', 'error');
            return;
        }
        
        currentUser = user;
        
        // Save session
        if (rememberMe) {
            localStorage.setItem('lussinkz_session', JSON.stringify(user));
        } else {
            sessionStorage.setItem('lussinkz_session', JSON.stringify(user));
        }
        
        // Update UI
        updateUserUI();
        closeAuthModal();
        showNotification(`¡Bienvenido de nuevo, ${user.name}!`, 'success');
        
        // If admin, show admin panel
        if (user.role === 'admin') {
            setTimeout(() => {
                showNotification('Panel administrador disponible', 'info');
                // Add admin button to user menu
                const userDropdown = document.getElementById('userDropdown');
                const adminLink = document.createElement('a');
                adminLink.href = '#';
                adminLink.onclick = toggleAdminPanel;
                adminLink.innerHTML = '<i class="fas fa-crown mr-2"></i>Panel Admin';
                adminLink.className = 'text-yellow-500';
                userDropdown.insertBefore(adminLink, userDropdown.lastElementChild);
            }, 1000);
        }
    } else {
        showNotification('Email o contraseña incorrectos', 'error');
    }
}

function handleRegister(event) {
    event.preventDefault();
    
    const name = document.getElementById('registerName').value;
    const surname = document.getElementById('registerSurname').value;
    const email = document.getElementById('registerEmail').value;
    const phone = document.getElementById('registerPhone').value;
    const password = document.getElementById('registerPassword').value;
    const confirmPassword = document.getElementById('registerConfirmPassword').value;
    const acceptTerms = document.getElementById('acceptTerms').checked;
    
    // Validation
    if (password !== confirmPassword) {
        showNotification('Las contraseñas no coinciden', 'error');
        return;
    }
    
    if (password.length < 6) {
        showNotification('La contraseña debe tener al menos 6 caracteres', 'error');
        return;
    }
    
    if (!acceptTerms) {
        showNotification('Debes aceptar los términos y condiciones', 'error');
        return;
    }
    
    // Check if user already exists
    if (users.find(u => u.email === email)) {
        showNotification('Este email ya está registrado', 'error');
        return;
    }
    
    // Create new user
    const newUser = {
        id: users.length + 1,
        name,
        surname,
        email,
        phone,
        password, // In production, this should be hashed
        role: 'user',
        registeredAt: new Date().toISOString(),
        isActive: true,
        favorites: [],
        orders: []
    };
    
    users.push(newUser);
    localStorage.setItem('lussinkz_users', JSON.stringify(users));
    
    // Auto login
    currentUser = newUser;
    localStorage.setItem('lussinkz_session', JSON.stringify(newUser));
    
    // Update UI
    updateUserUI();
    closeAuthModal();
    showNotification(`¡Bienvenido a LussInkz, ${name}!`, 'success');
}

function logout() {
    currentUser = null;
    localStorage.removeItem('lussinkz_session');
    sessionStorage.removeItem('lussinkz_session');
    
    updateUserUI();
    showNotification('Sesión cerrada correctamente', 'info');
    
    // Close admin panel if open
    const adminPanel = document.getElementById('adminPanel');
    adminPanel.classList.remove('show');
}

function updateUserUI() {
    const userMenu = document.getElementById('userMenu');
    const authBtn = document.querySelector('.auth-btn');
    
    if (currentUser) {
        // Show user menu
        userMenu.classList.remove('hidden');
        document.getElementById('userName').textContent = currentUser.name;
        
        // Hide auth button
        if (authBtn) {
            authBtn.style.display = 'none';
        }
    } else {
        // Show auth button
        if (authBtn) {
            authBtn.style.display = 'flex';
        }
        
        // Hide user menu
        userMenu.classList.add('hidden');
    }
}

function toggleUserMenu() {
    const dropdown = document.getElementById('userDropdown');
    dropdown.classList.toggle('show');
}

// Admin Panel Functions
function toggleAdminPanel() {
    const adminPanel = document.getElementById('adminPanel');
    adminPanel.classList.toggle('show');
    
    if (adminPanel.classList.contains('show')) {
        loadAdminData();
    }
}

function showAdminSection(section) {
    // Hide all sections
    document.querySelectorAll('.admin-section').forEach(s => {
        s.classList.remove('active');
    });
    
    // Remove active class from all tabs
    document.querySelectorAll('.admin-tab').forEach(t => {
        t.classList.remove('active');
    });
    
    // Show selected section
    document.getElementById(`admin${section.charAt(0).toUpperCase() + section.slice(1)}`).classList.add('active');
    
    // Add active class to clicked tab
    document.querySelector(`[data-section="${section}"]`).classList.add('active');
}

function loadAdminData() {
    // Update stats
    updateAdminStats();
    
    // Load products
    loadAdminProducts();
    
    // Load orders
    loadAdminOrders();
    
    // Load users
    loadAdminUsers();
    
    // Load messages
    loadAdminMessages();
}

function updateAdminStats() {
    const stats = {
        totalOrders: orders.length,
        totalUsers: users.length,
        totalProducts: products.length,
        totalRevenue: orders.reduce((sum, order) => sum + (order.total || 0), 0)
    };
    
    // Update stat cards
    const statCards = document.querySelectorAll('.stat-info h4');
    if (statCards.length >= 4) {
        statCards[0].textContent = stats.totalOrders;
        statCards[1].textContent = stats.totalUsers;
        statCards[2].textContent = stats.totalProducts;
        statCards[3].textContent = `$${stats.totalRevenue.toLocaleString('es-AR')}`;
    }
}

function loadAdminProducts() {
    const tbody = document.getElementById('productsTableBody');
    tbody.innerHTML = products.map(product => `
        <tr>
            <td>${product.id}</td>
            <td>${product.name}</td>
            <td>$${product.price.toLocaleString('es-AR')}</td>
            <td>${product.stock || 'N/A'}</td>
            <td><span class="status-badge ${product.featured ? 'featured' : 'active'}">${product.featured ? 'Destacado' : 'Activo'}</span></td>
            <td>
                <button onclick="editProduct(${product.id})" class="btn-edit">
                    <i class="fas fa-edit"></i>
                </button>
                <button onclick="deleteProduct(${product.id})" class="btn-delete">
                    <i class="fas fa-trash"></i>
                </button>
            </td>
        </tr>
    `).join('');
}

function loadAdminOrders() {
    const tbody = document.getElementById('ordersTableBody');
    tbody.innerHTML = orders.map(order => `
        <tr>
            <td>${order.id}</td>
            <td>${order.customerName}</td>
            <td>$${order.total?.toLocaleString('es-AR') || '0'}</td>
            <td><span class="status-badge ${order.status || 'pending'}">${order.status || 'Pendiente'}</span></td>
            <td>${new Date(order.date).toLocaleDateString('es-AR')}</td>
            <td>
                <button onclick="viewOrder(${order.id})" class="btn-view">
                    <i class="fas fa-eye"></i>
                </button>
            </td>
        </tr>
    `).join('');
}

function loadAdminUsers() {
    const tbody = document.getElementById('usersTableBody');
    tbody.innerHTML = users.map(user => `
        <tr>
            <td>${user.id}</td>
            <td>${user.name} ${user.surname}</td>
            <td>${user.email}</td>
            <td>${new Date(user.registeredAt).toLocaleDateString('es-AR')}</td>
            <td><span class="status-badge ${user.isActive ? 'active' : 'inactive'}">${user.isActive ? 'Activo' : 'Inactivo'}</span></td>
            <td>
                <button onclick="toggleUserStatus(${user.id})" class="btn-toggle">
                    <i class="fas fa-${user.isActive ? 'ban' : 'check'}"></i>
                </button>
            </td>
        </tr>
    `).join('');
}

function loadAdminMessages() {
    const messagesList = document.getElementById('messagesList');
    messagesList.innerHTML = messages.map(message => `
        <div class="message-item">
            <div class="message-header">
                <span class="message-sender">${message.name}</span>
                <span class="message-date">${new Date(message.date).toLocaleDateString('es-AR')}</span>
            </div>
            <div class="message-content">
                <p><strong>Email:</strong> ${message.email}</p>
                <p><strong>Teléfono:</strong> ${message.phone || 'No proporcionado'}</p>
                <p><strong>Mensaje:</strong> ${message.message}</p>
            </div>
        </div>
    `).join('');
}

// User Functions
function showProfile() {
    showNotification('Perfil de usuario en desarrollo', 'info');
}

function showOrders() {
    showNotification('Historial de pedidos en desarrollo', 'info');
}

function showFavorites() {
    showNotification('Favoritos en desarrollo', 'info');
}

function showSettings() {
    showNotification('Configuración en desarrollo', 'info');
}

// Admin Functions
function showAddProduct() {
    showNotification('Agregar producto en desarrollo', 'info');
}

function editProduct(id) {
    showNotification(`Editar producto ${id} en desarrollo`, 'info');
}

function deleteProduct(id) {
    if (confirm('¿Estás seguro de eliminar este producto?')) {
        products = products.filter(p => p.id !== id);
        localStorage.setItem('lussinkz_products', JSON.stringify(products));
        loadAdminProducts();
        showNotification('Producto eliminado correctamente', 'success');
    }
}

function viewOrder(id) {
    showNotification(`Ver pedido ${id} en desarrollo`, 'info');
}

function toggleUserStatus(userId) {
    const user = users.find(u => u.id === userId);
    if (user) {
        user.isActive = !user.isActive;
        localStorage.setItem('lussinkz_users', JSON.stringify(users));
        loadAdminUsers();
        showNotification(`Usuario ${user.isActive ? 'activado' : 'desactivado'} correctamente`, 'success');
    }
}

// Close dropdowns when clicking outside
document.addEventListener('click', function(event) {
    const userDropdown = document.getElementById('userDropdown');
    const userMenuBtn = document.querySelector('.user-menu-btn');
    
    if (!userMenuBtn.contains(event.target) && !userDropdown.contains(event.target)) {
        userDropdown.classList.remove('show');
    }
});

// Check for existing session on page load
function checkExistingSession() {
    const sessionData = localStorage.getItem('lussinkz_session') || sessionStorage.getItem('lussinkz_session');
    
    if (sessionData) {
        try {
            currentUser = JSON.parse(sessionData);
            updateUserUI();
        } catch (error) {
            console.error('Error parsing session data:', error);
        }
    }
}

// Initialize EmailJS
(function() {
    // Wait for EmailJS to be available
    function initEmailJS() {
        if (typeof emailjs !== 'undefined') {
            console.log('Initializing EmailJS...');
            emailjs.init("3qgQJSxn6YLPCF-ZQ");
            console.log('EmailJS initialized successfully');
        } else {
            console.log('EmailJS not ready, retrying in 500ms...');
            setTimeout(initEmailJS, 500);
        }
    }
    
    // Start initialization
    initEmailJS();
})();

// Initialize auth system
document.addEventListener('DOMContentLoaded', function() {
    checkExistingSession();
    checkPasswordReset(); // Check for password reset token in URL
    
    // Add contact form handler
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            const formData = new FormData(event.target);
            const data = Object.fromEntries(formData);
            
            // Save message
            const message = {
                id: messages.length + 1,
                name: data.name,
                email: data.email,
                phone: data.phone,
                message: data.message,
                subject: data.subject,
                date: new Date().toISOString()
            };
            
            messages.push(message);
            localStorage.setItem('lussinkz_messages', JSON.stringify(messages));
            
            showNotification('¡Mensaje enviado! Te responderemos a la brevedad.', 'success');
            event.target.reset();
        });
    }
});
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
    
    // Initialize FAQ
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        item.style.transition = 'all 0.3s ease';
    });
    
    // Initialize newsletter
    const newsletterForm = document.querySelector('form[onsubmit*="subscribeNewsletter"]');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', subscribeNewsletter);
    }
    
    // Initialize contact form
    const contactForm = document.querySelector('form[onsubmit*="sendContactForm"]');
    if (contactForm) {
        contactForm.addEventListener('submit', sendContactForm);
    }
    
    // Add smooth scroll for all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const href = this.getAttribute('href');
            if (href && href !== '#') {
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero-video');
    if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Lazy loading for images
function setupLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));
}

// Initialize additional features
document.addEventListener('DOMContentLoaded', function() {
    setupLazyLoading();
    
    // Add smooth reveal animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('.product-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        revealObserver.observe(el);
    });
});
