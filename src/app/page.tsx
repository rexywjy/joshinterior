import Link from "next/link";
import Products from "./components/Products";

export default function Home() {
  return (
    <section className="text-center space-y-16">
      {/* Hero Section */}
      <div className="relative bg-wood-gradient rounded-2xl p-12 md:p-20 shadow-wood-lg animate-fade-in-up">
        <div className="space-y-8">
          <h1 className="hero-title text-wood-primary font-serif animate-scale-in">
            JOSH Interior
          </h1>
          <p className="text-xl text-wood-dark max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            Interior & Exterior solutions that blend aesthetics and functionality.  
            We transform spaces into timeless designs that reflect your unique style.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{animationDelay: '0.4s'}}>
            <Link
              href="#products"
              className="btn-primary bg-wood-primary hover:bg-wood-dark text-white px-8 py-4 rounded-xl font-semibold shadow-wood transition-all duration-300 hover:shadow-wood-lg hover:-translate-y-1"
            >
              View Our Products
            </Link>
            <Link
              href="/projects"
              className="btn-secondary border-2 border-wood-primary text-wood-primary hover:bg-wood-primary hover:text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300"
            >
              Explore Projects
            </Link>
          </div>
        </div>
      </div>

      {/* Services Overview */}
      <div className="grid md:grid-cols-3 gap-8 animate-fade-in-up">
        <div className="p-8 bg-white shadow-wood rounded-2xl card-hover border border-wood">
          <div className="w-16 h-16 bg-wood-primary rounded-xl flex items-center justify-center mb-6 mx-auto">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2V7zm0 0V5a2 2 0 012-2h6l2 2h6a2 2 0 012 2v2M7 13h10M7 17h4" />
            </svg>
          </div>
          <h3 className="font-bold text-xl mb-4 text-wood-primary font-serif">Interior Design</h3>
          <p className="text-wood-dark leading-relaxed">Elegant, functional, and personalized living spaces that reflect your personality and lifestyle.</p>
        </div>
        <div className="p-8 bg-white shadow-wood rounded-2xl card-hover border border-wood">
          <div className="w-16 h-16 bg-wood-primary rounded-xl flex items-center justify-center mb-6 mx-auto">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
          </div>
          <h3 className="font-bold text-xl mb-4 text-wood-primary font-serif">Exterior Design</h3>
          <p className="text-wood-dark leading-relaxed">Modern outdoor concepts that inspire connection with nature and create stunning curb appeal.</p>
        </div>
        <div className="p-8 bg-white shadow-wood rounded-2xl card-hover border border-wood">
          <div className="w-16 h-16 bg-wood-primary rounded-xl flex items-center justify-center mb-6 mx-auto">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M9 1v6m6-6v6" />
            </svg>
          </div>
          <h3 className="font-bold text-xl mb-4 text-wood-primary font-serif">Custom Furniture</h3>
          <p className="text-wood-dark leading-relaxed">Handcrafted pieces tailored to fit your space perfectly and complement your design vision.</p>
        </div>
      </div>

      {/* Products Section */}
      <div id="products" className="animate-fade-in-up">
        <Products />
      </div>
    </section>
  );
}
