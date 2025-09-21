export default function Products() {
    const items = [
      {
        title: "Luxury Sofa",
        description: "Elegant sofas crafted with premium materials.",
        image: "https://source.unsplash.com/400x300/?sofa,interior",
      },
      {
        title: "Modern Kitchen Set",
        description: "Custom kitchens that combine style and efficiency.",
        image: "https://source.unsplash.com/400x300/?kitchen,design",
      },
      {
        title: "Outdoor Living",
        description: "Functional exterior setups for comfort and gatherings.",
        image: "https://source.unsplash.com/400x300/?patio,exterior",
      },
    ];
  
    return (
      <section className="mt-16 space-y-8">
        <h2 className="text-3xl font-bold text-indigo-700">Our Products</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow rounded-lg overflow-hidden hover:shadow-lg transition"
            >
              <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
              <div className="p-6 text-left">
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
  