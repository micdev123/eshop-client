export const categories = [
    // Electronics
    {
        id: 1,
        slug: 'electronics',
        collection_name: 'Electronics',
        title: "Digital Wonderland",
        photos: ['/assets/computer.png', '/assets/electronic_1.png', '/assets/electronic_3.png'],
        info_1: `Discover the latest gadgets and tech marvels at unbeatable prices. Embrace the digital lifestyle with cutting-edge electronics and accessories.`,
        info_2: `A category for cutting-edge gadgets, mobile phones, laptops, cameras, and audio equipment. Ideal for vendors with high-tech and digital products seeking tech-savvy customers.`,
        subCategories: [
            // Smartphones & Accessories
            {
                id: 1,
                slug: "smartphones&accessories",
                name: "Smartphones & Accessories",
                info: "A dedicated area to showcasing the latest smartphones and a variety of accessories such as cases, chargers, and screen protectors, etc.",
                filterOptions: [
                    {
                        id: 1,
                        name: "Brand",
                        options: ["Apple", "Samsung", "Xiaomi", "Huawei", "OnePlus", "Google Pixel", "Sony", "LG", "Vivo", "Lenovo", "Others"]
                    },
                    {
                        id: 2,
                        name: 'Operating System',
                        options: ["Android", "iOS"],
                    },
                    {
                        id: 3,
                        name: 'Screen Size',
                        options: ["Small (under 5 inches)", "Medium (5 - 6 inches)", "Large (6 - 7 inches)", "Extra Large (over 7 inches)"],
                    },
                    {
                        id: 4,
                        name: 'Camera Quality',
                        options: ["Basic (single or dual-camera setup)", "Standard (dual or triple-camera setup)", "Advanced (triple or quad-camera setup)", "Pro (quad or more camera setup)"],
                    },
                    {
                        id: 5,
                        name: "Battery Capacity",
                        options: ["Small (under 3000mAh)", "Medium (3000 - 4000mAh)", "Large (4000 - 5000mAh)", "Extra Large (over 5000mAh)"]
                    },
                    {
                        id: 6,
                        name: 'Accessories',
                        options: ["Cases", "Screen Protectors", "Chargers (wired, wireless)", "Phone Stands", "Pop Sockets", "Car Mounts", "Others"],
                    },
                ]
            },
            // Laptops & Computers
            {
                id: 2,
                slug: "laptops&computers",
                name: "Laptops & Computers",
                info: "Here, you can list laptops, desktop computers, and computer accessories, catering to customers looking for computing solutions.",
                filterOptions: [
                    {
                        id: 1,
                        name: "Brand",
                        options: ["HP", "Dell", "Lenovo", "Apple", "Asus", "Acer", "LG", "Sony", "Others"]
                    },
                    {
                        id: 2,
                        name: 'Operating System',
                        options: ["Windows", "macOS", "Linux"],
                    },
                    {
                        id: 3,
                        name: 'Screen Size',
                        options: ["Small (13 - 14 inches)", "Medium (15 - 16 inches)", "Large (17 inches and above)"],
                    },
                    {
                        id: 4,
                        name: 'Processor Type',
                        options: ["Intel Core", "AMD Ryzen", "Apple Silicon (M1)", "Others"],
                    },
                    {
                        id: 5,
                        name: 'RAM Size',
                        options: ["8GB", "16GB", "32GB or more"],
                    },
                    {
                        id: 6,
                        name: 'Storage Capacity',
                        options: ["SSD", "HDD"],
                    },
                    {
                        id: 7,
                        name: 'Graphic Card',
                        options: ["NVIDIA", "AMD", "ASUS", "MSI", "EVGA", "Gigabyte", "Others"],
                    },
                ]    
            },
            // Audio & Headphones
            {
                id: 3,
                slug: "audio&headphones",
                name: "Audio & Headphones",
                info: "This category highlights headphones, earbuds, and speakers, providing options for customers seeking enhanced audio experiences.",
                filterOptions: [
                    {
                        id: 1,
                        name: "Brand",
                        options: ["Sony", "Bose", "Sennheiser", "JBL", "Apple", "Samsung", "Philips", "Logitech", "Skullcandy", "Others"]
                    },
                    {
                        id: 2,
                        name: 'Headphone Type',
                        options: ["Over-ear", "In-ear", "On-ear", "Noise-Canceling", "Sports and Workout", 'Gaming', "Others"],
                    },
                    {
                        id: 3,
                        name: 'Connectivity',
                        options: ["Wireless", "Wired", "Dual Connectivity", "Lightning", "Others"],
                    },
                    {
                        id: 4,
                        name: "Sound Quality",
                        options: ["Bass-Heavy", "Balanced", "High-Fidelity", "Customizable EQ", "Others"]
                    }
                ]
            },
            // Cameras & Photography
            {
                id: 4,
                slug: "cameras&photography",
                name: "Cameras & Photography",
                info: "Vendors can showcase cameras, lenses, and photography gear, attracting photography enthusiasts and professionals.",
                filterOptions: [
                    {
                        id: 1,
                        name: "Brand",
                        options: ["Canon", "Nikon", "Sony", "Fujifilm", "Camera Type", "DJI", "Others"]
                    },
                    {
                        id: 2,
                        name: 'Camera Type',
                        options: ["DSLR", "Mirrorless", "Point-and-shoot", "Lens Compatibility", "Medium Format", "Others"],
                    },
                    {
                        id: 3,
                        name: 'Lens Compatibility',
                        options: ["Interchangeable Lens", "Fixed Lens"],
                    },
                    {
                        id: 4,
                        name: 'Features',
                        options: ["Image Stabilization", "Manual Modes", "4K Video Recording", "High Dynamic Range", "Touchscreen LCD", "Others"],
                    },
                    {
                        name: 'Video Recording Quality',
                        options: ["Full HD (1080p)", "4K"],
                    },
                    {
                        id: 5,
                        name: "Megapixel",
                        options: ["20MP or less", "20 - 30MP", "30MP or more"]
                    }
                ]
            },
            // Wearable Technology
            {
                id: 5,
                slug: "wearable technology",
                name: "Wearable Technology",
                info: "List wearable tech products like smartwatches and fitness trackers here, targeting those interested in incorporating technology into their daily lives.",
                filterOptions: [
                    {
                        id: 1,
                        name: "Brand",
                        options: ["Apple", "Samsung", "Fitbit", "Garmin", "Xiaomi", "JBL", "Sony", "Fossil", "Others"]
                    },
                    {
                        id: 2,
                        name: 'Device Type',
                        options: ["Smartwatch", "Fitness Tracker", "Smart Ring", "Blood Pressure Monitor", "Heart Rate Monitor", "GPS Tracker", "Baby Monitor", "Others"],
                    },
                    {
                        id: 3,
                        name: 'Features',
                        options: ["GPS", "Water Resistance", "Activity Recognition", "Wireless Charging", "Voice Assistant Integration", "Others"],
                    },
                    {
                        id: 4,
                        name: 'Compatibility',
                        options: ["iOS", "Android", "Universal Compatibility", "Mac OS", "Windows OS", "Proprietary Operating System", "Others      "],
                    },
                    {
                        id: 5,
                        name: "Health Tracking",
                        options: ["Heart Rate", "Steps Count", "Sleep Monitoring", "Blood Pressure Monitoring", "Temperature Tracking", "Stress Tracking", "Others"]
                    }
                ]
            },
            // Gaming & Consoles
            {
                id: 6,
                slug: "gaming&consoles",
                name: "Gaming & Consoles",
                info: "This category is for gaming-related products such as consoles, games, and accessories, appealing to avid gamers and entertainment seekers.",
                filterOptions: [
                    {
                        id: 1,
                        name: 'Brand',
                        options: ["Sony PlayStation", "Microsoft Xbox", "Nintendo", "Alienware", "HP Omen", "Lenovo Legion", "Razer", "Others"],
                    },
                    {
                        id: 2,
                        name: 'Game Genre',
                        options: ["Action", "Adventure", "Sports", "Role-Playing", "Strategy", "Survival", "Open World", "Simulation", "Puzzle", "Horror", "Others"],
                    },
                    {
                        id: 3,
                        name: 'Accessories',
                        options: ["Controllers", "Headsets", "Keyboards", "Mousepads", "Gaming Chairs", "Gaming Gloves", "Controller Grips", "Gaming Backpacks", "Gaming Glasses", "Mice", "Others"],
                    },
                ]
            },
            // Home Appliances
            {
                id: 7,
                slug: "home appliances",
                name: "Home Appliances",
                info: "Vendors can showcase electronic home appliances that make daily chores and tasks more convenient for homeowners, like smart air purifier, smart washing machine, etc.",
                filterOptions: [
                    {
                        id: 1,
                        name: 'Brands',
                        options: ["Samsung", "KitchenAid", "Whirlpool", "Dyson", "Shark", "Philips", "LG", "KitchenAid", "Eureka", "Frigidaire", "Others"],
                    },
                    {
                        id: 2,
                        name: 'Appliance Type',
                        options: ["Refrigerators", "Washing Machines", "Dishwashers", "Ovens", "Microwaves", "Cooktops", "Freezers", "Range Hoods", "Air Conditioners", "Others"],
                    },
                    {
                        id: 3,
                        name: 'Energy Efficiency',
                        options: ["Energy Star Certified", "High Efficiency", "Moderately Efficient", "Standard Efficiency", "Reduced Power Consumption", "Low Energy Consumption", "Energy-Saving Modes", "Others"],
                    },
                    {
                        id: 4,
                        name: 'Features',
                        options: ["Smart Controls", "Digital Display", "Self-Cleaning", "Portability", "Quiet Operation", "Adjustable Temperature"],
                    },
                    {
                        id: 5,
                        name: 'Size and Capacity',
                        options: ["Compact", "Standard", "Large"],
                    },
                ]
            },
        ],
        filterOptions: [
            {
                id: 1,
                name: "Brand",
                options: ["Apple", "Samsung", "Xiaomi", "Sony", "HP", "Dell", "Lenovo", "Asus", "Google", "OnePlus", "JBL", "Canon", "Microsoft", "Philips", "Others"]
            },
            {
                id: 2,
                name: 'Operating System',
                options: ["Android", "iOS", "Windows", "Linux", 'macOS'],
            },
            {
                id: 3,
                name: 'Screen Size',
                options: ["Small (under 5 inches)", "Medium (5 - 7 inches)", "Large (7 - 10 inches)", "Extra Large (over 10 inches)"],
            },
            {
                id: 4,
                name: 'Processor Type',
                options: ["Intel Core", "AMD Ryzen", "Apple M1", "NVIDIA Tegra", "ARM Cortex", "Intel Pentium", "Exynos", "Others"],
            },
            {
                id: 5,
                name: 'Connectivity',
                options: ["Bluetooth", "Wi-Fi", "4G/5G", "HDMI", "Thunderbolt", "VGA", "Infrared (IR)", "Others"],
            },
            {
                id: 6,
                name: 'Features',
                options: ["Water Resistance", "Fast Charging", "Wireless Charging", "Dual SIM", "Expandable Storage", "4K Ultra HD", "Wi-Fi Connectivity", "Biometric Security", "Others"],
            },
        ]
    },

    //  Beauty & Personal Care
    {
        id: 2,
        slug: 'beauty&personalCare',
        collection_name: 'Beauty & Personal Care',
        title: "Beauty Bliss",
        photos: ['/assets/beauty.png', '/assets/beauty_1.png', '/assets/beauty_2.png'],
        info_1: `Pamper yourself with skincare, makeup, haircare, and grooming products. Explore a range of beauty items to enhance your natural glow.`,
        category: 'beauty',
        info_2: `Present skincare, makeup, haircare, and grooming products. Attract customers looking for products that enhance their beauty and well-being.`,
        subCategories: [
            // Skincare & Facial Care
            {
                id: 1,
                slug: "skincare&facialCare",
                name: "Skincare & Facial Care",
                info: 'Here, vendors can offer a range of skincare products designed to cleanse, nourish, and promote healthy skin.',
                filterOptions: [
                    {
                        id: 1, 
                        name: "Brand",
                        options: ["Neutrogena", "Olay", "Cetaphil", "Aveeno", "La Roche-Posay", "Nivea", "Others"]
                    },
                    {
                        id: 2,
                        name: 'Skincare Type',
                        options: ["Cleansers", "Moisturizers", "Serums", "Masks", "Toners", "Acne Treatments", "Others"],
                    },
                    {
                        id: 3,
                        name: 'Skin Concern',
                        options: ["Acne", "Aging", "Hydration", "Dryness", "Uneven Skin Tone", "Hyperpigmentation (Dark Spots)", "Others"],
                    },
                    {
                        id: 4,
                        name: 'Ingredients',
                        options: ["Vitamin C", "Hyaluronic Acid", "Retinol(Vitamin A)", "Tea Tree Oil", "Others"],
                    },
                    {
                        id: 5,
                        name: "Cruelty-Free or Vegan Products",
                        options: ["Cruelty-Free", "Vegan"]
                    }
                ]
            },
            // Makeup & Cosmetics
            {
                id: 2,
                slug: "makeup&cosmetics",
                name: "Makeup & Cosmetics",
                info: "This category is for makeup products that allow customers to enhance their features and express their individual style.",
                filterOptions: [
                    {
                        id: 1,
                        name: "Brand",
                        options: ["MAC Cosmetics", "Sephora Collection", "Urban Decay", "NARS Cosmetics", "Too Faced", "Maybelline", "Others"]
                    },
                    {
                        id: 2,
                        name: 'Product Type',
                        options: ["Lipstick", "Foundation", "Eyeshadow", "Eyeliner", "Makeup Sponges", "Lip Liner", "Makeup Remover", "Others"],
                    },
                    {
                        id: 3,
                        name: 'Shade Range',
                        options: ["Nude", "Bold", "Neutral", "Warm", "Cool", "Chocolate", "Mocha", "Others"],
                    },
                    {
                        id: 4,
                        name: 'Finish',
                        options: ["Matte", "Glossy", "Shimmer", "Luminous", "Velvet", "Radiant", "Natural", "Others"],
                    },
                ]
            },
            // Haircare & Styling
            {
                id: 3,
                slug: "haircare&styling",
                name: "Haircare & Styling",
                info: "Vendors can showcase haircare products and styling tools, catering to those seeking hair health and fashionable looks.",
                filterOptions: [
                    {
                        id: 1,
                        name: "Brand",
                        options: ["Pantene", "L'Oréal Paris", "Dove", "Garnier", "TRESemmé", "Herbal Essences", "Redken", "Others"]
                    },
                    {
                        id: 2,
                        name: 'Hair Type',
                        options: ["Straight", "Curly", "Oily", "Dry", "Coily", "Others"],
                    },
                    {
                        id: 3,
                        name: 'Product Type',
                        options: ["Shampoo", "Conditioner", "Hair Powder", "Hair Detangler", "Hair Mask", "Others"],
                    },
                    {
                        id: 4,
                        name: 'Hair Concern',
                        options: ["Frizz Control", "Volume Boost", "Dandruff Relief", "Itchy Scalp Relief", "Shine Enhancement", "Hair Growth", "Others"],
                    },
                    {
                        id: 5,
                        name: 'Ingredients',
                        options: ["Argan Oil", "Keratin", "Coconut Oil", "Shea Butter", "Aloe Vera", "Olive Oil", "Silk Proteins", "Others"],
                    },
                ]
            },
            // Bath & Body
            {
                id: 4,
                slug: "bath&body",
                name: "Bath & Body",
                info: "This category focuses on bath and body products that offer relaxation and self-care experiences to customers.",
                filterOptions: [
                    {
                        id: 1,
                        name: "Brand", 
                        options: ["Dove", "Nivea", "Neutrogena", "Olay", "Aveeno", "Johnson's", "Bath & Body Works", "The Body Shop", "L'Occitane", "Cetaphil"]
                    },
                    {
                        id: 2,
                        name: 'Product Type',
                        options: ["Body Wash", "Soap", "Lotion", "Shaving Cream", "Hand Sanitizer", "Deodorant", "Others"],
                    },
                    {
                        id: 3,
                        name: 'Fragrance Type',
                        options: ["Floral", "Citrus", "Fresh", "Sweet", "Herbal", "Exotic", "Others"],
                    },
                    {
                        id: 4,
                        name: 'Skin Concern',
                        options: ["Dryness", "Sensitivity", "Hydration", "Irritation", "Uneven Skin Tone", "Aging", "Others"],
                    },
                ]
            },
            // Fragrances
            {
                id: 5,
                slug: "fragrances",
                name: "Fragrances",
                info: "Here, vendors can list perfumes and colognes, providing customers with options to find their signature scent.",
                filterOptions: [
                    {
                        id: 1,
                        name: "Brand",
                        options: ["Chanel", "Dior", "Gucci", "Versace", "Dolce & Gabbana", "Tom Ford", "Calvin Klein", "Others"]
                    },
                    {
                        id: 2,
                        name: 'Fragrance Type',
                        options: ["Floral", "Woody", "Citrus", "Fresh", "Vanilla", "Herbal", "Exotic", "Aromatic", "Powdery", "Others"],
                    },
                    {
                        id: 3,
                        name: 'Longevity',
                        options: ["Long-Lasting", "Light & airy", "Moderate", "All-day", "Intense and powerful", "Others"],
                    },
                    {
                        id: 4,
                        name: "Bottle Size",
                        options: ["Small", "Standard", "Large"]
                    }
                ]
            },
            // Men's Grooming
            {
                id: 6,
                slug: "men'sGrooming",
                name: "Men's Grooming",
                info: "This category is dedicated to grooming products tailored for men, helping them achieve their desired grooming routines.",
                filterOptions: [
                    {
                        id: 1,
                        name: "Brand",
                        options: ["Gillette", "Philips Norelco", "Braun", "Wahl", "Panasonic", "Harry's", "Dollar Shave Club", "Bevel", "Others"]
                    },
                    {
                        id: 2,
                        name: 'Product Type',
                        options: ["Shaving", "Grooming", "Skincare"],
                    },
                    {
                        id: 3,
                        name: 'Skin Type',
                        options: ["Oily", "Dry", "Normal", "Sensitive"],
                    },
                    {
                        id: 4,
                        name: 'Beard Care',
                        options: ["Beard Oil", "Beard Balm", "Beard Wash", "Nose and Ear Hair Trimmers", "Cologne", "Others"],
                    },
                    {
                        id: 5,
                        name: 'Scent Preference',
                        options: ["Masculine", "Fresh", "Citrus", "Herbal", "Minty", "Exotic", "Others"],
                    },
                ]
            },
            // Beauty Tools & Accessories
            {
                id: 7,
                slug: "beautyTools&accessories",
                name: "Beauty Tools & Accessories",
                info: "Vendors can offer tools and accessories like makeup brushes and applicators to enhance customers' beauty routines.",
                filterOptions: [
                    {
                        id: 1,
                        name: "Brand",
                        options: ["Sephora Collection", "Real Techniques", "Tarte", "e.l.f. Cosmetics", "Sigma Beauty", "Anastasia Beverly Hills", "EcoTools"]
                    },
                    {
                        id: 2,
                        name: 'Tool Type',
                        options: ["Makeup Brushes", "Eyelash Curlers", "Blending Sponges", "Hair Accessories", "Makeup Bags and Cases", "Others"],
                    },
                    {
                        id: 3,
                        name: 'Material',
                        options: ["Natural Fibers", "Synthetic", "Wood", "Leather", "Bamboo", "Others"],
                    },
                    {
                        id: 4,
                        name: 'Purpose',
                        options: ["Application", "Blending", "Precision & Detailing", "Spa & Wellness", "Coloring", "Caring", "Others"],
                    },
                    {
                        id: 5,
                        name: 'Features',
                        options: ["Travel-Friendly", "Storage Case", "Waterproof", "Cordless", "Durable Materials", "Adjustable Settings", "Noiseless Operation", "Others"],
                    },
                ]
            },
        ],
        filterOptions: [
            {
                id: 1,
                name: 'Brands',
                options: ["Nivea", "Neutrogena", "L'Oréal Paris", "Olay", "Maybelline", "Dove", "Garnier", "Estée Lauder", "Clinique", "Others"],
            },
            {
                id: 2,
                name: 'Product Type',
                options: ["Skincare & Facial Care", "Makeup & Cosmetics", "Haircare & Styling", "Bath & Body", "Fragrances", "Men's Grooming", "Beauty Tools & Accessories"],
            },
            {
                id: 3,
                name: "Skin Concern",
                options: ["Acne", "Aging", "Hydration", "Sensitivity"]
            },
            {
                id: 4,
                name: "Ingredients",
                options: ["Vitamin C", "Hyaluronic Acid", "Retinol", "Aloe Vera"]
            },
            {
                id: 5,
                name: "Scent",
                options: ["Floral", "Fruity", "Woody", "Citrus"]
            },
            {
                id: 6,
                name: "Cruelty-Free or Vegan Products",
                options: ["Yes", "No"]
            },
        ]
    },

    // Fashion & Apparel
    {
        id: 3,
        slug: 'fashion&apparel',
        collection_name: 'Fashion & Apparel',
        title: "Fashion Frenzy",
        photos: ['/assets/pp4.png', '/assets/fashion_1.png'],
        info_1: `Step into a world of trendy and stylish clothing, shoes, and accessories for men, women, and kids. Express your personal style with a wide selection of fashion choices.`,
        info_2: `Showcase trendy clothing, stylish shoes, and accessories for men, women, and kids. Perfect for fashion-forward vendors looking to cater to a diverse and fashion-conscious audience.`,
        subCategories: [
            // Men's Clothing
            {
                id: 1,
                slug: "men'sClothing",
                name: "Men's Clothing",
                info: "This category is for men's fashion items, offering a variety of clothing options for different occasions and styles.",
                filterOptions: [
                    {
                        id: 1,
                        name: 'Clothing Type',
                        options: ["Shirts", "Pants", "Suits", "Jackets"],
                    },
                    {
                        id: 2,
                        name: 'Size',
                        options: ["XS", "S", "M", "L", "XL", "XXL"],
                    },
                    {
                        id: 3,
                        name: 'Style',
                        options: ["Casual", "Formal", "Athletic"],
                    },
                    {
                        id: 4,
                        name: 'Color',
                        options: ["Black", "White", "Blue", "Other Colors"],
                    },
                ]
            },
            // Women's Clothing
            {
                id: 2,
                slug: "women'sClothing",
                name: "Women's Clothing",
                info: "Vendors can showcase a diverse range of women's clothing, catering to various tastes and preferences.",
                filterOptions: [
                    {
                        id: 1,
                        name: 'Clothing Type',
                        options: ["Dresses", "Tops", "Skirts", "Pants"],
                    },
                    {
                        id: 2,
                        name: 'Size',
                        options: ["XS", "S", "M", "L", "XL"],
                    },
                    {
                        id: 3,
                        name: 'Style',
                        options: ["Boho", "Minimalist", "Vintage"],
                    },
                    {
                        id: 4,
                        name: 'Color',
                        options: ["Black", "White", "Blue", "Other Colors"],
                    },
                    {
                        id: 5,
                        name: 'Occasion',
                        options: ["Casual", "Evening", "Work"],
                    },
                ]
            },
            // Kid's Clothing
            {
                id: 3,
                slug: "kid'sClothing",
                name: "Kid's Clothing",
                info: "Here, vendors can offer clothing options for children, providing comfort and style for young ones.",
                filterOptions: [
                    {
                        id: 1,
                        name: 'Age Range',
                        options: ["Toddler", "Kids", "Pre-Tee"],
                    },
                    {
                        id: 2,
                        name: 'Clothing Type',
                        options: ["T-Shirts", "Dresses", "Pants", "Outerwear"],
                    },
                    {
                        id: 3,
                        name: 'Gender',
                        options: ["Boys", "Girls", "Unisex"],
                    },
                    {
                        id: 4,
                        name: 'Theme',
                        options: ["Cartoon Characters", "Animals"],
                    },
                ]
            },
            // Shoes & Footwear
            {
                id: 4,
                slug: "shoes&footwear",
                name: "Shoes & Footwear",
                info: "This category highlights shoes for all ages and occasions, giving customers choices for both fashion and practical",
                filterOptions: [
                    {
                        id: 1,
                        name: 'Shoe Type',
                        options: ["Sneakers", "Heels", "Sandals", "Boots"],
                    },
                    {
                        id: 2,
                        name: 'Size',
                        options: [],
                    },
                    {
                        id: 3,
                        name: 'Style',
                        options: ["Casual", "Formal", "Athletic"],
                    },
                    {
                        id: 4,
                        name: 'Material',
                        options: ["Leather", "Canvas"],
                    },
                ]
            },
            // Accessories & Jewelry
            {
                id: 5,
                slug: "accessories&jewelry",
                name: "Accessories & Jewelry",
                info: "Vendors can offer accessories and jewelry to complement and complete customers' outfits.",
                filterOptions: [
                    {
                        id: 1,
                        name: 'Jewelry Type',
                        options: ["Necklaces", "Bracelets", "Earrings", "Rings"],
                    },
                    {
                        id: 2,
                        name: 'Occasion',
                        options: ["Everyday", "Special Events"],
                    },
                    {
                        id: 3,
                        name: 'Style',
                        options: ["Boho", "Classic", "Modern"],
                    },
                    {
                        id: 4,
                        name: 'Material',
                        options: ["Gold", "Silver", "Gemstones"],
                    },
                ]
            },
            // Bags & Luggage
            {
                id: 6,
                slug: "bags&luggage",
                name: "Bags & Luggage",
                info: "This category is for bags, backpacks, and luggage options, catering to travelers and those seeking functional carrying solutions.",
                filterOptions: [
                    {
                        id: 1,
                        name: 'Bag Type',
                        options: ["Backpacks", "Handbags", "Totes", "Luggage"],
                    },
                    {
                        id: 2,
                        name: 'Size',
                        options: ["Small", "Mediu", "Large"],
                    },
                    {
                        id: 3,
                        name: 'Features',
                        options: ["Compartments", "Laptop Sleeve"],
                    },
                    {
                        id: 4,
                        name: 'Material',
                        options: ["Leather", "Fabric", "Nylon"],
                    },
                ]
            },
            // Activewear & Sportswear
            {
                id: 7,
                slug: "activewear&sportswear",
                name: "Activewear & Sportswear",
                info: "Here, vendors can showcase sportswear and activewear products for fitness enthusiasts and active individuals.",
                filterOptions: [
                    {
                        id: 1,
                        name: 'Clothing Type',
                        options: ["Leggings", "Sports Bras", "Shorts", "Jackets"],
                    },
                    {
                        id: 2,
                        name: 'Size',
                        options: ["XS", "S", "M", "L", "XL"],
                    },
                    {
                        id: 3,
                        name: 'Activity Type',
                        options: ["Running", "Yoga", "Gym"],
                    },
                    {
                        id: 4,
                        name: 'Features',
                        options: ["Moisture-Wicking", "Compression"],
                    },
                ]
            },
        ],
        filterOptions: [
            {
                id: 1,
                name: 'Brand',
                options: ["Nike", "Adidas", "H&M", "Zara", "Gucci", "Levi's", "Calvin Klein", "Ralph Lauren"],
            },
            {
                id: 2,
                name: 'Clothing Type',
                options: ["Shirts", "Pants", "Dresses", "Suits", "T-Shirts", "Jeans", "Jackets", "Sweaters"],
            },
            {
                id: 3,
                name: 'Size',
                options: ["XS", "S", "M", "L", "XL", "XXL"],
            },
            {
                id: 4,
                name: 'Color',
                options: ["Red", "Blue", "Black", "White", "Green", "Pink", "Yellow", "Purple"],
            },
            {
                id: 5,
                name: 'Style',
                options: ["Casual", "Formal", "Athletic", "Boho", "Vintage", "Classic", "Streetwear"],
            },
            {
                id: 6,
                name: 'Gender',
                options: ["Men's", "Women's", "Unisex", "Kids"],
            },
            {
                id: 7,
                name: 'Occasion',
                options: ["Casual", "Evening", "Work", "Special Events", "Sports", "Beach"],
            },
        ]
    },

    // Home & Kitchen
    {
        id: 4,
        slug: 'home&kitchen',
        collection_name: 'Home & Kitchen',
        title: "Cozy Abode",
        photos: ['/assets/home.png', '/assets/home_1.png', '/assets/pp9.png', '/assets/kitchen.png'],
        info_1: `Elevate your living space into a haven of comfort and style. Create a cozy and functional home environment with our exquisite furniture, home decor, and kitchen essentials.`,
        info_2: `Display furniture, home decor, and essential kitchen items. Great for vendors specializing in creating cozy and functional home environments.`,
        subCategories: [
            // Furniture & Decor
            {
                id: 1,
                slug: "furniture&decor",
                name: "Furniture & Decor",
                info: "This category is dedicated to furniture and home decor items that help customers create comfortable and stylish living spaces.",
                filterOptions: [
                    {
                        id: 1,
                        name: "Brand",
                        options: ["IKEA", "AllModern", "Design Within Reach (DWR)", "RH Modern (Restoration Hardware Modern)", "Ashley Furniture", "Wayfair"],
                    },
                    {
                        id: 2,
                        name: 'Furniture Type',
                        options: ["Sofas", "Tables", "Chairs", "Bed Frames", "Buffets & Sideboards", "Kitchen Shelving Units", "Others"],
                    },
                    {
                        id: 3,
                        name: 'Room',
                        options: ["Living Room", "Bedroom", "Dining Room"],
                    },
                    {
                        id: 4,
                        name: 'Style',
                        options: ["Modern", "Rustic", "Minimalist"],
                    },
                    {
                        id: 5,
                        name: 'Material',
                        options: ["Wood", "Metal", "Fabric", "Others"],
                    },
                ]
            },
            // Kitchen Appliances
            {
                id: 2,
                slug: "kitchenAppliances",
                name: "Kitchen Appliances",
                info: "Vendors can offer a range of kitchen appliances and gadgets designed to make cooking and food preparation more efficient.",
                filterOptions: [
                    {
                        id: 1,
                        name: 'Brand',
                        options: ["KitchenAid", "Anova", "Philips", "Farberware", "Cuisinart", "Breville", "GE Appliances", "Others"],
                    },
                    {
                        id: 2,
                        name: 'Appliance Type',
                        options: ["Blenders", "Coffee Makers", "Toasters", "Microwaves", "Others"],
                    },
                    {
                        id: 3,
                        name: 'Features',
                        options: ["Smart Controls", "Timer", "Multiple Functions"],
                    },
                    {
                        id: 4,
                        name: 'Size and Capacity',
                        options: ["Small", "Medium", "Large"],
                    },
                ]
            },
            // Home Improvement
            {
                id: 3,
                slug: "homeImprovement",
                name: "Home Improvement",
                info: "This category focuses on products and tools for home improvement projects, catering to DIY enthusiasts, like paint sprayer, compact table saw, etc.",
                filterOptions: [
                    {
                        id: 1, 
                        name: "Brand",
                        options: ["Home Depot", "Lowe's", "Ace Hardware", "Sherwin-Williams", "Behr", "Dewalt", "Moen", "Ryobi", "Bosch", "Others"]
                    },
                    {
                        id: 2,
                        name: 'Project Type',
                        options: ["Painting", "Woodworking", "DIY Crafts", "Renovation", "Remodeling", "Installation", "Upgrades", "Others"],
                    },
                    {
                        id: 3,
                        name: 'Tool Type',
                        options: ["Power Tools", "Hand Tools", "Others"],
                    },
                    {
                        id: 4,
                        name: 'Skill Level',
                        options: ["Beginner", "Intermediate", "Expert"],
                    },
                    {
                        id: 5,
                        name: 'Project Size',
                        options: ["Small", "Medium", "Large"],
                    },
                ]
            },
            // Bedding & Linens
            {
                id: 4,
                slug: "bedding&linens",
                name: "Bedding & Linens",
                info: "Here, vendors can showcase bedding sets and linens that contribute to a comfortable and inviting bedroom environment, like weighted blanket, bamboo bed sheets etc.",
                filterOptions: [
                    {
                        id: 1,
                        name: "Brand",
                        options: ["IKEA", "Brooklinen", "Parachute Home", "Casper", "Pottery Barn", "West Elm", "AmazonBasics", "Boll & Branch", "Riley Home", "L.L.Bean"]
                    },
                    {
                        id: 2,
                        name: 'Bedding Type',
                        options: ["Sheets", "Duvet Covers", "Comforters", "Pillowcases", "Blankets", "Mattress Toppers", "Blankets", "Quilts", "Others"],
                    },
                    {
                        id: 3,
                        name: 'Size',
                        options: ["Twin", "Full/Double", "King", "Queen", "Custom", "Others"],
                    },
                    {
                        id: 4,
                        name: 'Color or Pattern',
                        options: ["Neutral", "Solid Colors", "Floral", "Geometric", "Abstract", "Vibrant", "Monochrome", "Pastel", "Others"],
                    },
                    {
                        id: 5,
                        name: 'Material',
                        options: ["Cotton", "Linen", "Microfiber", "Silk", "Flannel", "Bamboo", "Velvet", "Satin", "Others"],
                    },
                ]
            },
            // Home Organization
            {
                id: 5,
                slug: "homeOrganization",
                name: "Home Organization",
                info: "Vendors can offer organizational products and solutions to help customers maintain tidy and clutter-free living spaces. like stackable storage bins, hanging closet organizer, drawer dividers Set, etc.",
                filterOptions: [
                    {
                        id: 1,
                        name: "Brand",
                        options: ["IKEA", "The Container Store", "ClosetMaid", "Rubbermaid", "Sterilite", "Martha Stewart Living", "Home-it", "Whitmor", "AmazonBasics", "Elfa"]
                    },
                    {
                        id: 2,
                        name: 'Organization Type',
                        options: ["Storage Bins & Boxes", "Shelves", "Closet Organizers", "Others"],
                    },
                    {
                        id: 3,
                        name: 'Room',
                        options: ["Bedroom", "Kitchen", "Office"],
                    },
                    {
                        id: 4,
                        name: 'Features',
                        options: ["Stackable", "Collapsible", "Label Holders", "Adjustable Shelves", "Wall-Mountable", "Durable Material", "Others"],
                    },
                    {
                        id: 5,
                        name: 'Material',
                        options: ["Plastic", "Fabric or Cloth", "Bamboo", "Metal", "Wood", "Glass", "Canvas", "Others"],
                    },
                ]
            },
            // Cookware & Dining
            {
                id: 6,
                slug: "cookware&dining",
                name: "Cookware & Dining",
                info: "This category highlights cookware and dining essentials for customers seeking quality tools for their culinary endeavors, like salad spinner, stainless steel cookware set, etc.",
                filterOptions: [
                    {
                        id: 1,
                        name: "Brand",
                        options: ["Calphalon", "Cuisinart", "All-Clad", "Le Creuset", "Lodge", "Rachael Ray", "Pyrex", "Corelle", "T-fal", "KitchenAid"]
                    },
                    {
                        id: 2,
                        name: 'Cookware Type',
                        options: ["Pots", "Pans", "Utensils", "Bakeware", "Dutch Ovens", "Casserole Dishes", "Others"],
                    },
                    {
                        id: 3,
                        name: 'Set Size',
                        options: ["Single Piece", "Set of 3", "Complete Set"],
                    },
                    {
                        id: 4,
                        name: 'Features',
                        options: ["Oven-Safe", "Dishwasher-Safe", "Heat-Resistant Handles", "Quick-Heating", "Non-Stick Coating", "Others"],
                    },
                    {
                        id: 5,
                        name: 'Material',
                        options: ["Stainless Steel", "Non-Stick", "Cast Iron", "Ceramic", "Others"],
                    },
                ]
            },
            // Home Cleaning & Laundry
            {
                id: 7,
                slug: "homeCleaning&laundry",
                name: "Home Cleaning & Laundry",
                info: "Here, vendors can offer cleaning supplies and laundry products to help customers maintain clean and fresh homes.",
                filterOptions: [
                    {
                        id: 1,
                        name: "Brand",
                        options: ["lorox", "Lysol", "Tide", "Swiffer", "Mr. Clean", "Seventh Generation", "OxiClean", "Others"]
                    },
                    {
                        id: 2,
                        name: 'Cleaning Supplies Type',
                        options: ["Cleaners", "Brushes", "Wipes"],
                    },
                    {
                        id: 3,
                        name: 'Laundry Type',
                        options: ["Detergent", "Stain Removers", "Fabric Softeners"],
                    },
                    {
                        id: 4,
                        name: 'Features',
                        options: ["Eco-Friendly", "Hypoallergenic", "Multi-Purpose"],
                    },
                    {
                        id: 5,
                        name: 'Quality',
                        options: ["Single", "Pack of 3", "Value Pack"],
                    },
                ]
            },
        ],
        filterOptions: [
            {
                id: 1,
                name: 'Brand',
                options: ["KitchenAid", "Cuisinart", "Breville", "Philips", "Dyson", "Samsung", "IKEA", "Hamilton Beach"],
            },
            {
                id: 2,
                name: 'Product Type',
                options: ["Blenders", "Coffee Makers", "Vacuum Cleaners", "Microwaves", "Cookware Sets", "Air Purifiers", "Toaster Ovens", "Food Processors"],
            },
            {
                id: 3,
                name: 'Room',
                options: ["Kitchen", "Living Room", "Bedroom", "Dining Room", "Bathroom", "Home Office", "Garage"],
            },
            {
                id: 4,
                name: 'Features',
                options: ["Smart Controls", "Energy-Efficient", "Automatic Settings", "Programmable", "Dishwasher-Safe", "Multi-Function", "Stackable", "Foldable"],
            },
            {
                id: 5,
                name: 'Material',
                options: ["Stainless Steel", "Non-Stick", "Wood", "Plastic", "Glass", "Ceramic", "Fabric", "Leather"],
            },
            {
                id: 5,
                name: 'Color',
                options: ["White", "Black", "Stainless Steel", "Red", "Silver", "Blue", "Green", "Grey"],
            }
        ]
    },

    // Health & Wellness
    {
        id: 5,
        slug: 'health&wellness',
        collection_name: 'Health & Wellness',
        title: "Wellness Wonderland",
        photos: ['/assets/health.png', '/assets/health_1.png'],
        info_1: `Prioritize your health and well-being with vitamins, supplements, fitness trackers, and wellness products. Take care of yourself with items designed to support your well-being.`,
        info_2: `Offer vitamins, supplements, fitness trackers, and wellness products. A category for vendors focused on promoting a healthy lifestyle.`,
        subCategories: [
            // Vitamins & Supplements
            {
                id: 1,
                slug: "vitamins&supplements",
                name: "Vitamins & Supplements",
                info: "This category is dedicated to vitamins, supplements, and dietary products that support customers' health and well-being.",
                filterOptions: [
                    {
                        id: 1,
                        name: "Brand", 
                        options: ["Nature Made", "NOW Foods", "Garden of Life", "Vitafusion", "SmartyPants", "Nature's Bounty", "Centrum", "GNC (General Nutrition Center)"]
                    },
                    {
                        id: 2,
                        name: 'Health Goals',
                        options: ["Immunity", "Energy Boost", "Weight Management", "Cognitive Health", "Overall Wellness", "Others"],
                    },
                    {
                        id: 3,
                        name: 'Vitamin Type',
                        options: ["Vitamin C", "Vitamin D", "Multivitamins", "Vitamin Supplements (Others)"],
                    },
                    {
                        id: 4,
                        name: 'Form',
                        options: ["Capsule", "Tablet", "Liquid", "Gummies", "Powder", "Others"],
                    },
                    {
                        id: 5,
                        name: 'Dietary Preference',
                        options: ["Vegan", "Gluten-Free", "Non-GMO", "Organic", "Sugar-Free", "Others"],
                    },
                ]
            },
            //  Fitness Equipment
            {
                id: 2,
                slug: "fitnessEquipment",
                name: "Fitness Equipment",
                info: "Vendors can showcase fitness equipment and accessories for customers interested in staying active and fit.",
                filterOptions: [
                    {
                        id: 1,
                        name: "Brand",
                        options: ["NordicTrack", "Bowflex", "Peloton", "ProForm", "Schwinn", "Life Fitness", "Precor", "Others"]
                    },
                    {
                        id: 2,
                        name: 'Equipment Type',
                        options: ["Treadmill", "Dumbbells", "Stationary Bike", "Cardio Machines", "Others"],
                    },
                    {
                        id: 3,
                        name: 'Exercise Type',
                        options: ["Cardio", "Strength Training", "Yoga & Pilates", "Circuit Training", "Others"],
                    },
                    {
                        id: 4,
                        name: 'Features',
                        options: ["Foldable", "Adjustable", "Built-In Programs", "Safety Features (Emergency Stop, Locking Mechanism)", "Others"],
                    },
                    {
                        id: 5,
                        name: 'Size and Weight Capacity',
                        options: ["Small & Compact", "Medium", "Large", "High Weight Capacity"],
                    },
                ]
            },
            // Personal Care & Hygiene
            {
                id: 3,
                slug: "personalCare&hygiene",
                name: "Personal Care & Hygiene",
                info: "This category focuses on products for personal care and hygiene, catering to individuals seeking wellness and cleanliness, like natural handmade soap, face cleansing brush, hand sanitizer gel etc.",
                filterOptions: [
                    {
                        id: 1,
                        name: "Brand",
                        options: ["Dove", "Nivea", "Colgate", "Gillette", "Neutrogena", "Pantene", "Crest", "Others"]
                    },
                    {
                        id: 2,
                        name: 'Product Type',
                        options: ["Toothpaste", "Deodorant", "Body Wash", "Shampoo", "Conditioner", "Lotion", "Others"],
                    },
                    {
                        id: 3,
                        name: 'Ingredient Preference',
                        options: ["Natural", "Organic", "Hypoallergenic", "Vegan", "Antibacterial", "Non-GMO", "Others"],
                    },
                    {
                        id: 4,
                        name: 'Scent',
                        options: ["Unscented", "Floral", "Lavender", "Fresh", "Sweet", "Herbal", "Minty", "Others"],
                    },
                    {
                        id: 5,
                        name: 'Features',
                        options: ["Hypoallergenic", "Moisturizing", "Organic", "Antibacterial", "Others"],
                    },
                ]
            },
            // Health Monitors & T
            {
                id: 4,
                slug: "healthMonitors&trackers",
                name: "Health Monitors & Trackers",
                info: "Here, vendors can offer devices for monitoring health metrics and progress, helping customers take control of their well-being.",
                filterOptions: [
                    {
                        id: 1,
                        name: "Brand",
                        Options: ["Fitbit", "Garmin", "Apple", "Samsung", "Withings", "Polar", "Huawei", "Others"]
                    },
                    {
                        id: 2,
                        name: 'Health Metrics',
                        options: ["Heart Rate", "Steps", "Sleep Quality", "Blood Pressure", "Stress Level", "Others"],
                    },
                    {
                        id: 3,
                        name: 'Device Type',
                        options: ["Smartwatch", "Fitness Tracker", "Heart Rate Monitors", "Pulse Oximeters", "Others"],
                    },
                    {
                        id: 4,
                        name: 'Compatibility',
                        options: ["iOS", "Android", "Others", ],
                    },
                    {
                        id: 5,
                        name: 'Features',
                        options: ["GPS Tracking", "Water Resistance", "Activity Tracking", "Medication Reminders", "Blood Pressure Monitoring", "Others"],
                    },
                ]
            },
            // Natural Remedies
            {
                id: 5,
                slug: "naturalRemedies",
                name: "Natural Remedies",
                info: "Vendors can offer natural remedies and holistic products that promote a balanced and healthy lifestyle, like organic herbal skin care s, yoga and wellness accessories, etc.",
                filterOptions: [
                    {
                        id: 1, 
                        name: "Brand",
                        options: ["Nature's Way", "Gaia Herbs", "NOW Foods", "Traditional Medicinals", "Herb Pharm", "Boiron", "Others"]
                    },
                    {
                        id: 2,
                        name: 'Remedy Type',
                        options: ["Herbal Teas", "Essential Oils", "Tinctures", "Flower Essences", "Others"],
                    },
                    {
                        id: 3,
                        name: 'Health Benefits',
                        options: ["Stress Relief", "Digestion", "Sleep Aid", "Skin Care", "Cognitive Enhancement", "Others"],
                    },
                    {
                        id: 4,
                        name: 'Ingredients',
                        options: ["Lavender", "Chamomile", "Eucalyptus", "Aloe Vera", "Honey", "Others"],
                    },
                    {
                        id: 5,
                        name: 'Usage',
                        options: ["Diffuser", "Topical Application", "Inhalation", "Massage", "Others"],
                    },
                ]
            },
            // Relaxation & Stress Relief
            {
                id: 6,
                slug: "relaxation&stressRelief",
                name: "Relaxation & Stress Relief",
                info: "This category highlights products designed for relaxation and stress relief, contributing to customers' mental and emotional wellness.",
                filterOptions: [
                    {
                        id: 1, 
                        name: "Brand",
                        options: ["Bath & Body Works", "Aromatherapy Associates", "Young Living", "Saje Natural Wellness", "Neom Organics", "ELEMIS", "Others"]
                    },
                    {
                        id: 2,
                        name: 'Product Type',
                        options: ["Aromatherapy", "Relaxation Tools", "Bath Bombs", "Weighted Blankets", "Herbal Teas", "Others"],
                    },
                    {
                        id: 3,
                        name: 'Usage',
                        options: ["Bath and Shower", "Meditation", "Stress Management", "Home Spa", "Others"],
                    },
                    {
                        id: 4,
                        name: 'Features',
                        options: ["Portable", "Heatable", "Adjustable Intensity", "Noise-Canceling", "Others"],
                    },
                    {
                        id: 5,
                        name: 'Benefits',
                        options: ["Calming", "Relaxation", "Stress Relief", "Enhanced Focus", "Improved Sleep", "Others"],
                    },
                ]
            },
            // Healthy Snacks & Nutrition
            {
                id: 7,
                slug: "healthySnacks&nutrition",
                name: "Healthy Snacks & Nutrition",
                info: "Here, vendors can offer nutritious snacks and food products for health-conscious customers seeking wholesome options.",
                filterOptions: [
                    {
                        id: 1,
                        name: "Brand",
                        Options: ["Nature Valley", "KIND", "Larabar", "RXBAR", "Quest Nutrition", "Clif Bar", "Others"]
                    },
                    {
                        id: 2,
                        name: 'Snack Type',
                        options: ["Nuts & Seeds", "Granola Bars", "Protein Bars", "Dried Fruits", "Fruit Snacks", "Dark Chocolate", "Energy Bites", "Rice Cakes", "Others"],
                    },
                    {
                        id: 3,
                        name: 'Dietary Preference',
                        options: ["Gluten-Free", "Vegan", "Non-GMO", "Vegetarian", "Organic", "All-Natural", "Sugar-Free", "Low-Calorie",  "Others"],
                    },
                    {
                        id: 4,
                        name: 'Nutrition Goal',
                        options: ["Energy Boost", "Protein Intake", "Weight Management", "Bone Health", "Mood Enhancement", "Mood Enhancement", "Immune Support", "Others"],
                    },
                    {
                        id: 5,
                        name: 'Flavor',
                        options: ["Sweet", "Savory", "Fruity", "Chocolate", "Mint", "Others"],
                    },
                ]
            },
        ],
        filterOptions: [
            {
                id: 1,
                name: 'Brand',
                options: ["Nature's Way", "NOW Foods", "Garden of Life", "Optimum Nutrition", "Gaia Herbs", "Vega", "NutraBlast", "MegaFood"],
            },
            {
                id: 2,
                name: 'Product Type',
                options: ["Vitamins", "Supplements", "Protein Powder", "Herbal Teas", "Essential Oils", "Fitness Equipment", "Personal Care", "Health Monitors"],
            },
            {
                id: 3,
                name: 'Health Goal',
                options: ["Immunity Support", "Energy Boost", "Weight Management", "Stress Relief", "Digestive Health", "Joint Health", "Skin Health", "Heart Health"],
            },
            {
                id: 4,
                name: 'Dietary Preference',
                options: ["Vegan", "Gluten-Free", "Organic", "Non-GMO", "Sugar-Free", "Paleo", "Keto", "Dairy-Free"],
            },
            {
                id: 5,
                name: 'Gender',
                options: ["Men", "Women", "Unisex"],
            },
            {
                id: 6,
                name: 'Ingredients',
                options: ["Vitamin C", "Vitamin D", "Omega-3", "Probiotics", "Turmeric", "Collagen", "Biotin", "Magnesium"],
            },
            {
                id: 7,
                name: 'Features',
                options: ["Natural Ingredients", "Organic Certification", "Non-Allergenic", "Time-Release", "Easy-to-Swallow Capsules", "Multivitamin", "Antioxidant-Rich", "Clinically Tested"],
            },
        ]
    },

    // Toys & Games
    {
        id: 6,
        slug: 'toys&games',
        collection_name: 'Toys & Games',
        title: "Playtime Paradise",
        photos: ['/assets/game.png', '/assets/toy_1.png', '/assets/toys.png'],
        info_1: `Delight in a world of fun and learning with toys, games, and puzzles. Find entertainment for kids and adults alike.`,
        info_2: `Delight customers with a wide range of toys, games, and puzzles. Perfect for vendors catering to children and the young at heart.`,
        subCategories: [
            // Educational Toys
            {
                id: 1,
                slug: "educationalToys",
                name: "Educational Toys",
                info: "This category is for educational toys that stimulate learning and creativity in children.",
                filterOptions: [
                    {
                        id: 1,
                        name: "Brand",
                        options: ["Melissa & Doug", "LEGO", "Fisher-Price", "VTech", "LeapFrog", "Play-Doh", "Others"]
                    },
                    {
                        id: 2,
                        name: 'Age Range',
                        options: ["3-5 Years", "6-8 Years", "9-12 Years"],
                    },
                    {
                        id: 3,
                        name: 'Learning Focus',
                        options: ["Science", "Math", "Language", "Problem Solving", "Cognitive Development", "Others"],
                    },
                    {
                        id: 4,
                        name: 'Skill Level',
                        options: ["Beginner", "Intermediate", "Advanced"],
                    },
                    {
                        id: 5,
                        name: 'Interactive Features',
                        options: ["Sound", "Lights", "Touch-Sensitive", "Virtual Reality (VR)", "Motion Sensors", "Others"],
                    },
                ]
            },
            // Board Games & Puzzles
            {
                id: 2,
                slug: "boardGames&puzzles",
                name: "Board Games & Puzzles",
                info: "Vendors can offer board games and puzzles that provide entertainment and mental challenges for families and individuals.",
                filterOptions: [
                    {
                        id: 1,
                        name: "Brand",
                        options: ["Hasbro", "Mattel", "Ravensburger", "LEGO", "Asmodee", "Others"]
                    },
                    {
                        id: 2,
                        name: 'Game Type',
                        options: ["Strategy", "Party", "Cooperative", "Word", "Chess & Checkers", "Others"],
                    },
                    {
                        id: 3,
                        name: 'Age Group',
                        options: ["Kids", "Adults", "Family"],
                    },
                    {
                        id: 4,
                        name: 'Complexity Level',
                        options: ["Easy", "Intermediate", "Advanced"],
                    },
                    {
                        id: 5,
                        name: "Number of Players",
                        options: ["2 Players", "3-4 Players", "5+ Players"]
                    }
                ]
            },
            // Outdoor Play Equipment
            {
                id: 3,
                slug: "outdoorPlayEquipment",
                name: "Outdoor Play Equipment",
                info: "This category showcases outdoor toys and play equipment for children to enjoy outdoor activities and fun.",
                filterOptions: [
                    {
                        id: 1,
                        name: "Brand",
                        options: ["Step2", "Little Tikes", "Lifetime", "Backyard Discovery", "Gorilla Playsets", "Others"]
                    },
                    {
                        id: 2,
                        name: 'Equipment Type',
                        options: ["Swings Sets", "Slides", "Playhouses", "Climbing Structures", "Others"],
                    },
                    {
                        id: 3,
                        name: 'Age Range',
                        options: ["Toddler (1-3 Years)", "Kids (4-8 Years)", "Pre-Teen (9-12 Years)", "Teenagers", "All Ages"],
                    },
                    {
                        id: 4,
                        name: 'Material',
                        options: ["Wood", "Plastic", "Metal", "Aluminum", "Others"],
                    },
                    {
                        id: 5,
                        name: 'Features',
                        options: ["Climbing Wall", "Sandbox", "Swings", "Treehouses", "Others"],
                    },
                ]
            },
            // Action Figures & Collectibles
            {
                id: 4,
                slug: "actionFigures&collectibles",
                name: "Action Figures & Collectibles",
                info: "Vendors can offer action figures and collectibles related to popular franchises, appealing to collectors and enthusiasts.",
                filterOptions: [
                    {
                        id: 1,
                        name: 'Brand',
                        options: ["Marvel", "DC Comics", "Funko", "NECA", "Hot Toys", "McFarlane Toys", "Hasbro", "Others"],
                    },
                    {
                        id: 2,
                        name: 'Theme',
                        options: ["Superheroes", "Movie Characters", "Anime"],
                    },
                    {
                        id: 3,
                        name: 'Collectible Type',
                        options: ["Action Figures", "Figurines"],
                    },
                    {
                        id: 4,
                        name: 'Rarity Level',
                        options: ["Common", "Limited Edition"],
                    },
                ]
            },
            // Remote Control Toys
            {
                id: 5,
                slug: "remoteControlToys",
                name: "Remote Control Toys",
                info: "This category focuses on remote control vehicles and gadgets, providing remote-controlled entertainment for hobbyists.",
                filterOptions: [
                    {
                        id: 1,
                        name: "Brand",
                        options: ["DJI", "Traxxas"]
                    },
                    {
                        id: 2,
                        name: 'Toy Type',
                        options: ["Cars", "Drones", "Helicopters", "Others"],
                    },
                    {
                        id: 3,
                        name: 'Control Type',
                        options: ["Remote Control", "Smartphone App", "Touchscreen", "Motion Control", "Others"],
                    },
                    {
                        id: 4,
                        name: 'Age Range',
                        options: ["6-8 Years", "9-12 Years", "Teen", "Adults"],
                    },
                    {
                        id: 5,
                        name: 'Features',
                        options: ["Camera", "Lights", "360-Degree Flips", "Rechargeable Batteries", "Water Resistance", "Others"],
                    },
                ]
            },
            // Arts & Crafts
            {
                id: 6,
                slug: "arts&crafts",
                name: "Arts & Crafts",
                info: "Vendors can showcase arts and crafts supplies for creative individuals seeking materials for artistic expression.",
                filterOptions: [
                    {
                        id: 1,
                        name: "Brand",
                        options: ["Crayola", "Faber-Castell", "Prismacolor", "Winsor & Newton", "Reeves", "Others"]
                    },
                    {
                        id: 2,
                        name: 'Crafty Type',
                        options: ["Painting", "Drawing", "Crafting", "Scrapbooking", "Woodworking", "Pottery & Ceramics", "Others"],
                    },
                    {
                        id: 3,
                        name: 'Age Range',
                        options: ["4-6 Years", "7-9 Years", "10-12 Years", "Teenagers", "Adults"],
                    },
                    {
                        id: 4,
                        name: 'Skill Level',
                        options: ["Beginner", "Advanced"],
                    },
                    {
                        id: 5,
                        name: 'Material Type',
                        options: ["Paints", "Markers", "Paper", "Wood", "Clay", "Plastic", "Others"],
                    },
                ]
            },
            // Stuffed Animals & Plushies
            {
                id: 7,
                slug: "stuffedAnimals&plushies",
                name: "Stuffed Animals & Plushies",
                info: "This category highlights soft and cuddly stuffed animals, providing comfort and companionship to children and collectors.",
                filterOptions: [
                    {
                        id: 1,
                        name: 'Brand',
                        options: ["Disney", "Aurora World", "Jellycat", "Steiff", "Ty", "Others"]
                    },
                    {
                        id: 2,
                        name: 'Animal Type',
                        options: ["Dogs", "Cats", "Bears", "Other Animals"],
                    },
                    {
                        id: 3,
                        name: 'Size',
                        options: ["Small", "Medium", "Large"],
                    },
                    {
                        id: 4,
                        name: 'Age Range',
                        options: ["0-12 Months", "1-2 Years", "3-5 Years", "6-8 Years", "9-12 Years", "Teens", "Adults"],
                    },
                    {
                        id: 5,
                        name: 'Features',
                        options: ["Sound & Cuddly", "Interactive Elements", "Washable", "Customizable", "Talking or Singing", "Others"],
                    },
                ]
            },
        ],
        filterOptions: [
            {
                id: 1,
                name: 'Brand',
                options: ["LEGO", "Hasbro", "Mattel", "Fisher-Price", "Disney", "Nintendo", "Ravensburger", "Crayola", "Others"],
            },
            {
                id: 2,
                name: 'Age Range',
                options: ["0-2 years", "3-5 years", "6-8 years", "9-12 years", "Teenagers", "Adults"],
            },
            {
                id: 3,
                name: 'Toy Type',
                options: ["Action Figures", "Building Blocks", "Dolls and Accessories", "Board Games", "Outdoor Play Equipment", "Puzzles", "Arts and Crafts", "Remote Control Toys"],
            },
            {
                id: 4,
                name: 'Theme',
                options: ["Superheroes", "Animals", "Sci-Fi", "Fantasy", "Educational", "Cartoon Characters", "Movies and TV Shows", "Sports"],
            },
            
        ]
    },

];


export const collectionProductSlider = [
    {
        id: 1,
        product_img: '/assets/p6.png',
        product_name: 'JBL T460BT Black Portable Earbud',
        rating: 5,
        reviews: '1,245',
        product_price: 220,
        discount: 40,
        discount_price: 132,
        category: 'electronics',
    },

    {
        id: 2,
        product_img: '/assets/p3.png',
        product_name: 'LG Meridian Wireless Black Earbud',
        rating: 4,
        reviews: '1,245',
        product_price: 220,
        discount: 40,
        discount_price: 132,
        category: 'electronics',
    },

    {
        id: 3,
        product_img: '/assets/pp15.png',
        product_name: 'RealmeOppA5s | Andriod Smart Phone',
        rating: 3,
        reviews: '1,245',
        product_price: 220,
        discount: 40,
        discount_price: 132,
        category: 'electronics',
    },

    {
        id: 4,
        product_img: '/assets/pp5.png',
        product_name: 'Dark Red Sport Sneaker',
        rating: 5,
        reviews: '1,105',
        product_price: 220,
        discount: 40,
        discount_price: 132,
        category: 'fashion&apparel',
    },

    {
        id: 5,
        product_img: '/assets/pp2.png',
        product_name: 'Dark Brown Ladder Shoe',
        rating: 4,
        reviews: '1,105',
        product_price: 220,
        discount: 40,
        discount_price: 132,
        category: 'fashion&apparel',
    },

    {
        id: 6,
        product_img: '/assets/pp3.png',
        product_name: 'Gray & White Long Sleeve T-Shirt',
        rating: 4,
        reviews: '105',
        product_price: 220,
        discount: 40,
        discount_price: 132,
        category: 'fashion&apparel',
    },

    {
        id: 7,
        product_img: '/assets/pp4.png',
        product_name: 'Brown Long Sleeve Ladder Jacket',
        rating: 5,
        reviews: '1,005',
        product_price: 220,
        discount: 40,
        discount_price: 132,
        category: 'fashion&apparel',
    },

    {
        id: 8,
        product_img: '/assets/pp14.png',
        product_name: 'Clear Glass Bottle With Yellow Liquid',
        rating: 5,
        reviews: '1,005',
        product_price: 220,
        discount: 40,
        discount_price: 132,
        category: 'beauty&personalCare',
    },

    {
        id: 9,
        product_img: '/assets/pp16.png',
        product_name: 'White and Gold Container Body Oil',
        rating: 4,
        reviews: '1,005',
        product_price: 220,
        discount: 40,
        discount_price: 132,
        category: 'beauty&personalCare',
    },

    {
        id: 10,
        product_img: '/assets/pp10.png',
        product_name: 'White Labeled Clear Plastic Bottle',
        rating: 4,
        reviews: '1,005',
        product_price: 220,
        discount: 40,
        discount_price: 132,
        category: 'beauty&personalCare',
    },

    {product_price: 220,
        discount: 40,
        id: 11,
        product_img: '/assets/pp9.png',
        product_name: 'Keener All Wood Round Dining Table',
        rating: 4,
        reviews: '1,005',
        product_price: 220,
        discount: 40,
        discount_price: 132,
        category: 'health & household',
    },

    {
        id: 12,
        product_img: '/assets/pp8.png',
        product_name: 'Classique Wood Chair Cane Backrest',
        rating: 4,
        reviews: '1,005',
        product_price: 220,
        discount: 40,product_price: 220,
        discount: 40,
        discount_price: 132,
        category: 'home&kitchen',
    },

    {
        id: 13,
        product_img: '/assets/pp12.png',
        product_name: 'Modern Wooden Parametric Petal Chair',
        rating: 4,
        reviews: '1,005',
        product_price: 220,
        discount: 40,product_price: 220,
        discount: 40,
        discount_price: 132,
        category: 'home&kitchen',
    },
]



export const products = [
    {
        id: 1,
        product_img: '/assets/p11.png',
        product_name: 'Wireless Black Earbud',
        rating: 5,
        reviews: '1,245',
        product_price: 150,
        discount: 0,
        discount_price: 150,
        category: 'electronics',
        store: "e-shop",
        sub_category: "audio&headphones",
        brand: 'Sony',
        headphone_type: "In-Ear",
        connectivity: "Wireless",
        sound_quality: "Balanced",
        tag: 'top selling',
        level: ['featured', 'recentViewed', 'lastMinute', 'newest']

    },
    {
        id: 2,
        product_img: '/assets/p11.png',
        product_name: 'Wireless Black Earbud',
        rating: 1.5,
        reviews: '1,245',
        product_price: 320,
        discount: 40,
        discount_price: 192,
        category: 'electronics',
        store: "e-shop",
        sub_category: "audio&headphones",
        brand: 'Samsung',
        headphone_type: "Over-Ear",
        connectivity: "Wireless",
        sound_quality: "Base-Heavy",
        tag: 'top selling',
        level: ['topSelling', 'recentViewed', 'lastMinute']
    },
    {
        id: 3,
        product_img: '/assets/p11.png',
        product_name: 'Wireless Black Earbud',
        rating: 3,
        reviews: '1,245',
        product_price: 420,
        discount: 10,
        discount_price: 378,
        category: 'electronics',
        store: "Amazon",
        sub_category: "smartphones&accessories",
        brand: 'araimo',
        tag: 'top selling',
        level: ['featured', 'recentViewed', 'newest']
    },
    {
        id: 4,
        product_img: '/assets/p11.png',
        product_name: 'Wireless Black Earbud',
        rating: 4,
        reviews: '1,245',
        product_price: 220,
        discount: 40,
        discount_price: 132,
        category: 'electronics',
        store: "e-bay",
        sub_category: "gaming&consoles",
        brand: 'araimo',
        tag: 'top selling',
        level: ['featured', 'recentViewed', 'lastMinute']
    },
    {
        id: 5,
        product_img: '/assets/p11.png',
        product_name: 'Wireless Black Earbud',
        rating: 4,
        reviews: '1,245',
        product_price: 220,
        discount: 40,
        discount_price: 132,
        category: 'electronics',
        brand: 'araimo',
        tag: 'top selling',
        level: ['featured', 'recentViewed']
    },
    {
        id: 6,
        product_img: '/assets/p11.png',
        product_name: 'Wireless Black Earbud',
        rating: 4,
        reviews: '1,245',
        product_price: 220,
        discount: 40,
        discount_price: 132,
        category: 'electronics',
        brand: 'araimo',
        tag: 'top selling',
        level: ['topSelling', 'lastMinute']
    },
    {
        id: 7,
        product_img: '/assets/p11.png',
        product_name: 'Wireless Black Earbud',
        rating: 4,
        reviews: '1,245',
        product_price: 220,
        discount: 40,
        discount_price: 132,
        category: 'electronics',
        brand: 'araimo',
        tag: 'top selling',
        level: ['featured']
    },
    {
        id: 8,
        product_img: '/assets/p11.png',
        product_name: 'Wireless Black Earbud',
        rating: 4,
        reviews: '1,245',
        product_price: 220,
        discount: 40,
        discount_price: 132,
        category: 'electronics',
        brand: 'araimo',
        tag: 'top selling',
        level: ['featured', 'lastMinute']
    },
    {
        id: 9,
        product_img: '/assets/p11.png',
        product_name: 'Wireless Black Earbud',
        rating: 4,
        reviews: '1,245',
        product_price: 220,
        discount: 40,
        discount_price: 132,
        category: 'electronics',
        brand: 'araimo',
        tag: 'top selling',
        level: ['topSelling', 'recentViewed', 'lastMinute']
    },
    {
        id: 10,
        product_img: '/assets/p11.png',
        product_name: 'Wireless Black Earbud',
        rating: 4,
        reviews: '1,245',
        product_price: 220,
        discount: 40,
        discount_price: 132,
        category: 'electronics',
        brand: 'araimo',
        tag: 'top selling',
        level: ['featured', 'recentViewed']
    },
    {
        id: 11,
        product_img: '/assets/p11.png',
        product_name: 'Wireless Black Earbud',
        rating: 4,
        reviews: '1,245',
        product_price: 220,
        discount: 40,
        discount_price: 132,
        category: 'electronics',
        brand: 'araimo',
        tag: 'top selling',
        level: ['featured', 'recentViewed']
    },
    {
        id: 12,
        product_img: '/assets/p11.png',
        product_name: 'Wireless Black Earbud',
        rating: 4,
        reviews: '1,245',
        product_price: 220,
        discount: 40,
        discount_price: 132,
        category: 'electronics',
        brand: 'araimo',
        tag: 'top selling',
        level: ['featured', 'recentViewed']
    },
    {
        id: 13,
        product_img: '/assets/p11.png',
        product_name: 'Wireless Black Earbud',
        rating: 4,
        reviews: '1,245',
        product_price: 220,
        discount: 40,
        discount_price: 132,
        category: 'electronics',
        brand: 'araimo',
        tag: 'top selling',
        level: ['topSelling']
    },
    {
        id: 14,
        product_img: '/assets/p11.png',
        product_name: 'Wireless Black Earbud',
        rating: 4,
        reviews: '1,245',
        product_price: 220,
        discount: 40,
        discount_price: 132,
        category: 'electronics',
        brand: 'araimo',
        tag: 'top selling',
        level: ['topSelling', 'recentViewed']
    },
    {
        id: 15,
        product_img: '/assets/p11.png',
        product_name: 'Wireless Black Earbud',
        rating: 4,
        reviews: '1,245',
        product_price: 220,
        discount: 40,
        discount_price: 132,
        category: 'electronics',
        brand: 'araimo',
        tag: 'top selling',
        level: ['topSelling', 'recentViewed']
    },
    {
        id: 16,
        product_img: '/assets/p11.png',
        product_name: 'Wireless Black Earbud',
        rating: 4,
        reviews: '1,245',
        product_price: 220,
        discount: 40,
        discount_price: 132,
        category: 'electronics',
        brand: 'araimo',
        tag: 'top selling',
        level: ['topSelling']
    },   
];

export const dealTypes = [
    {
        id: 1,
        dealFor: 'her',
        desc: `Shop e-shop fashion including clothing, shoes, jewelry, watches, bags and more`,
        img: '/assets/her.png'
    },
    {
        id: 2,
        dealFor: 'him',
        desc: `Shop e-shop fashion including clothing, shoes, jewelry, watches, bags and more`,
        img: '/assets/him.png'
    }
]

export const lastMinuteDeals = [
    {
        id: 1,
        deal_img: '/assets/bag.png',
        deal_name: 'Top Backpacks',
        deal_percent: 30,
        dealType: 'both'
    },
    {
        id: 2,
        deal_img: '/assets/pp17.png',
        deal_name: 'Smart Devices',
        deal_percent: 30,
        dealType: 'him'
    },
    {
        id: 3,
        deal_img: '/assets/pp9.png',
        deal_name: 'Household Deals',
        deal_percent: 30,
        dealType: 'her'
    },
    {
        id: 4,
        deal_img: '/assets/pp14.png',
        deal_name: 'Clear Glass Bottle With Yellow Liquid',
        deal_percent: 30,
        dealType: 'her'
    }
];


export const deliveryMethods = [
    {
        id: 1,
        slug: 'standard_shipping',
        name: "Standard Shipping",
        info: `This is the regular shipping option that delivers orders within the standard delivery timeframes. It is usually the most cost-effective option.`
    },
    {
        id: 2,
        slug: 'expedited_shipping',
        name: "Expedited Shipping",
        info: `This method provides faster delivery times than standard shipping, often at an additional cost to the customer.`
    },
    {
        id: 3,
        slug: 'free_shipping',
        name: "Free Shipping",
        info: `Some vendors may choose to offer free shipping for certain products or for orders above a specific purchase amount.`
    },
    {
        id: 4,
        slug: 'local_pickup',
        name: "Local Pickup",
        info: `In this option, customers can pick up their orders directly from the vendor's physical store or a designated pickup location.`
    },
    {
        id: 5,
        slug: 'same-day_or_next-day_delivery',
        name: "Same-Day or Next-Day Delivery",
        info: `Some vendors may provide same-day or next-day delivery services for customers located in close proximity to their business location.`
    }
];

export const paymentMethods = [
    {
        id: 1,
        slug: 'credit/Debit_cards',
        name: "Credit/Debit Cards",
        imgs: ['/assets/visa.png', '/assets/mastercard.png']
    },
    {
        id: 2,
        slug: 'paypal',
        name: "PayPal",
        imgs: ['/assets/paypal.png']
    },
    {
        id: 3,
        slug: 'mobile_payment_service',
        name: "Mobile Payment Service",
        imgs: ['/assets/orange.png', '/assets/africell.png']
    },
];