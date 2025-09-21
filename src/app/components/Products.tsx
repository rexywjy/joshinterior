import Image from 'next/image';

export default function Products() {
    const items = [
      {
        title: "Luxury Sofa Collection",
        description: "Elegant sofas crafted with premium materials, featuring contemporary designs that blend comfort with sophistication.",
        image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop&crop=center",
        price: "From $2,500",
        category: "Living Room"
      },
      {
        title: "Modern Kitchen Set",
        description: "Custom kitchens that combine style and efficiency, designed to be the heart of your home.",
        image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop&crop=center",
        price: "From $15,000",
        category: "Kitchen"
      },
      {
        title: "Outdoor Living Suite",
        description: "Functional exterior setups for comfort and gatherings, perfect for entertaining and relaxation.",
        image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=600&h=400&fit=crop&crop=center",
        price: "From $3,800",
        category: "Outdoor"
      },
      {
        title: "Executive Office Set",
        description: "Professional workspace solutions that inspire productivity and reflect your business success.",
        image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop&crop=center",
        price: "From $4,200",
        category: "Office"
      },
      {
        title: "Master Bedroom Suite",
        description: "Complete bedroom collections designed for ultimate comfort and peaceful rest.",
        image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=600&h=400&fit=crop&crop=center",
        price: "From $3,500",
        category: "Bedroom"
      },
      {
        title: "Dining Room Elegance",
        description: "Sophisticated dining sets that create memorable moments for family and friends.",
        image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=300&fit=crop&crop=center",
        price: "From $2,800",
        category: "Dining"
      }
    ];
  
    return (
      <section className="space-y-12">
        <div className="text-center animate-fade-in-up">
          <h2 className="section-title text-wood-primary font-serif">Our Premium Products</h2>
          <p className="text-xl text-wood-dark max-w-3xl mx-auto">
            Discover our curated collection of furniture and design solutions, 
            each piece carefully crafted to elevate your living experience.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <div
              key={index}
              className="group card-hover bg-white rounded-2xl overflow-hidden shadow-wood border border-wood animate-fade-in-up"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="relative overflow-hidden">
                <Image 
                  src={item.image} 
                  alt={item.title} 
                  width={600}
                  height={400}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500" 
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-wood-accent/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-wood-primary">
                    {item.category}
                  </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-wood-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-wood-dark group-hover:text-wood-primary transition-colors font-serif">
                    {item.title}
                  </h3>
                  <span className="text-lg font-semibold text-wood-primary">
                    {item.price}
                  </span>
                </div>
                <p className="text-wood-dark leading-relaxed mb-4">
                  {item.description}
                </p>
                
                <div className="flex gap-3">
                  <button className="flex-1 bg-wood-primary hover:bg-wood-dark text-white py-2 px-4 rounded-lg font-medium hover:shadow-wood-lg transition-all duration-300 hover:-translate-y-1">
                    View Details
                  </button>
                  <button className="px-4 py-2 border-2 border-wood hover:border-wood-primary hover:text-wood-primary transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* CTA */}
        <div className="text-center mt-12 animate-fade-in-up">
          <p className="text-wood-dark mb-6">
            Can't find what you're looking for? We create custom solutions tailored to your needs.
          </p>
          <button className="bg-wood-primary hover:bg-wood-dark text-white px-8 py-3 rounded-lg font-semibold shadow-wood hover:shadow-wood-lg transition-all duration-300 hover:-translate-y-1">
            Request Custom Design
          </button>
        </div>
      </section>
    );
  }