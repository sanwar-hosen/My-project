import { useState } from 'react';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  
  const categories = [
    { id: 'all', name: 'All' },
    { id: 'biryani', name: 'Biryanis' },
    { id: 'kebab', name: 'Kebabs' },
    { id: 'curry', name: 'Curries' },
    { id: 'sides', name: 'Sides' },
    { id: 'desserts', name: 'Desserts' },
    { id: 'drinks', name: 'Drinks' },
  ];
  
  const menuItems = [
    {
      id: 1,
      name: 'Special Kacchi Biryani',
      description: 'Fragrant basmati rice cooked with tender meat, aromatic spices, and saffron',
      price: '350',
      category: 'biryani',
      image: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?q=80&w=1887&auto=format&fit=crop',
      popular: true
    },
    {
      id: 2,
      name: 'Mutton Tehari',
      description: 'Slow-cooked rice with premium mutton, traditional spices, and caramelized onions',
      price: '300',
      category: 'biryani',
      image: 'https://images.unsplash.com/photo-1631515242802-10382c1df5a4?q=80&w=1888&auto=format&fit=crop'
    },
    {
      id: 3,
      name: 'Chicken Roast',
      description: 'Marinated chicken slowly roasted with a blend of authentic Bengali spices',
      price: '220',
      category: 'curry',
      image: 'https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?q=80&w=1470&auto=format&fit=crop'
    },
    {
      id: 4,
      name: 'Beef Bhuna Khichuri',
      description: 'Traditional khichuri with slow-cooked beef and aromatic spices',
      price: '280',
      category: 'biryani',
      image: 'https://images.unsplash.com/photo-1630392747604-65c29729baa6?q=80&w=1887&auto=format&fit=crop'
    },
    {
      id: 5,
      name: 'Shami Kebab',
      description: 'Minced meat patties with lentils and spices, pan-fried to perfection',
      price: '180',
      category: 'kebab',
      image: 'https://images.unsplash.com/photo-1626429511884-27875f9b83a5?q=80&w=2340&auto=format&fit=crop',
      popular: true
    },
    {
      id: 6,
      name: 'Chicken Tikka Kebab',
      description: 'Tender chicken pieces marinated in yogurt and spices, grilled in tandoor',
      price: '220',
      category: 'kebab',
      image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?q=80&w=1450&auto=format&fit=crop'
    },
    {
      id: 7,
      name: 'Firni',
      description: 'Traditional rice pudding dessert with cardamom, saffron and nuts',
      price: '120',
      category: 'desserts',
      image: 'https://images.unsplash.com/photo-1576621934860-41214aa4cd01?q=80&w=2070&auto=format&fit=crop'
    },
    {
      id: 8,
      name: 'Jilapi',
      description: 'Sweet, crispy, and juicy deep-fried pretzel soaked in sugar syrup',
      price: '100',
      category: 'desserts',
      image: 'https://images.unsplash.com/photo-1575519296548-a7047485182c?q=80&w=1964&auto=format&fit=crop'
    },
    {
      id: 9,
      name: 'Borhani',
      description: 'Traditional spicy yogurt drink that aids digestion',
      price: '80',
      category: 'drinks',
      image: 'https://images.unsplash.com/photo-1603496987539-dad6699636c4?q=80&w=1974&auto=format&fit=crop',
      popular: true
    },
    {
      id: 10,
      name: 'Aloo Bukhara Chutney',
      description: 'Sweet and tangy sauce made with plums, perfect side for biryanis',
      price: '60',
      category: 'sides',
      image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?q=80&w=1450&auto=format&fit=crop'
    },
    {
      id: 11,
      name: 'Rezala',
      description: 'Creamy meat curry with yogurt, cashews, and aromatic spices',
      price: '280',
      category: 'curry',
      image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&w=2071&auto=format&fit=crop'
    },
    {
      id: 12,
      name: 'Polao',
      description: 'Fragrant rice dish cooked with ghee and whole spices',
      price: '220',
      category: 'biryani',
      image: 'https://images.unsplash.com/photo-1634871572365-8bc0578873e8?q=80&w=1974&auto=format&fit=crop'
    }
  ];
  
  // Filter menu items based on active category
  const filteredItems = activeCategory === 'all' 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);
  
  return (
    <section className="py-16 bg-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-amber-900 mb-2">Our Menu</h2>
          <div className="h-1 w-20 bg-amber-500 mx-auto"></div>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our authentic dishes made with traditional recipes and premium ingredients
          </p>
        </div>
        
        {/* Category Filter */}
        <div className="flex justify-center flex-wrap mb-12 gap-2">
          {categories.map(category => (
            <button 
              key={category.id}
              className={`px-4 py-2 rounded-full ${
                activeCategory === category.id 
                  ? 'bg-amber-800 text-white' 
                  : 'bg-white text-amber-800 hover:bg-amber-100'
              } transition-colors duration-300`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>
        
        {/* Menu Items */}
        <div className="grid md:grid-cols-2 gap-6">
          {filteredItems.map(item => (
            <div 
              key={item.id}
              className="flex bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <img 
                src={item.image} 
                alt={item.name}
                className="h-32 w-32 object-cover"
              />
              <div className="p-4 flex-1">
                <div className="flex justify-between items-start mb-1">
                  <div>
                    <h3 className="text-lg font-semibold text-amber-900">{item.name}</h3>
                    {item.popular && (
                      <span className="bg-amber-100 text-amber-700 text-xs px-2 py-1 rounded">Popular</span>
                    )}
                  </div>
                  <span className="font-bold text-amber-800">৳{item.price}</span>
                </div>
                <p className="text-sm text-gray-600 mt-1">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-700 mb-4">
            For catering services and special orders, please contact us
          </p>
          <button className="bg-amber-700 hover:bg-amber-800 text-white font-medium py-2 px-6 rounded-md transition duration-300">
            Contact For Catering
          </button>
        </div>
      </div>
    </section>
  );
};

export default Menu;