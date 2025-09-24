import Image from 'next/image';

const projects = [
    {
      title: "Minimalist Apartment",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop&crop=center",
      desc: "Neutral tones with open layouts for modern living, featuring clean lines and functional design.",
      location: "Jakarta",
      year: "2023",
      category: "Residential"
    },
    {
      title: "Luxury Villa",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=400&fit=crop&crop=center",
      desc: "Elegant blend of indoor and outdoor living with premium materials and sophisticated design.",
      location: "Bali",
      year: "2023",
      category: "Residential"
    },
    {
      title: "Creative Office Space",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop&crop=center",
      desc: "A workspace that boosts collaboration and innovation with modern furniture and inspiring design.",
      location: "Surabaya",
      year: "2024",
      category: "Commercial"
    },
    {
      title: "Cozy Cafe Interior",
      image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=600&h=400&fit=crop&crop=center",
      desc: "Warm and inviting cafe design that creates the perfect atmosphere for relaxation and socializing.",
      location: "Bandung",
      year: "2024",
      category: "Commercial"
    },
    {
      title: "Modern Family Home",
      image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=600&h=400&fit=crop&crop=center",
      desc: "Contemporary family residence designed for comfort, functionality, and beautiful family moments.",
      location: "Yogyakarta",
      year: "2023",
      category: "Residential"
    },
    {
      title: "Boutique Hotel Suite",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop&crop=center",
      desc: "Luxurious hotel interior that provides guests with an unforgettable and comfortable experience.",
      location: "Lombok",
      year: "2024",
      category: "Hospitality"
    },
  ];
  
export default function Projects() {
    return (
      <section className="space-y-12">
        <div className="text-center animate-fade-in-up">
          <h1 className="hero-title text-wood-primary font-serif mb-6">Our Portfolio</h1>
          <p className="text-xl text-wood-dark max-w-3xl mx-auto">
            Explore our collection of completed projects that showcase our expertise in creating beautiful, 
            functional spaces that exceed our clients&apos; expectations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="group bg-white shadow-wood rounded-2xl overflow-hidden card-hover border border-wood animate-fade-in-up"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="relative overflow-hidden">
                <Image 
                  src={project.image} 
                  alt={project.title} 
                  width={600}
                  height={400}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500" 
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-wood-accent/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-wood-primary">
                    {project.category}
                  </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-wood-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-wood-primary font-serif group-hover:text-wood-dark transition-colors">
                    {project.title}
                  </h3>
                  <span className="text-sm text-wood-dark bg-wood-accent px-2 py-1 rounded">
                    {project.year}
                  </span>
                </div>
                
                <div className="flex items-center gap-2 mb-3">
                  <svg className="w-4 h-4 text-wood-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-sm text-wood-dark">{project.location}</span>
                </div>
                
                <p className="text-wood-dark leading-relaxed mb-4">
                  {project.desc}
                </p>
                
                <button className="w-full bg-wood-primary hover:bg-wood-dark text-white py-2 px-4 rounded-lg font-medium hover:shadow-wood-lg transition-all duration-300 hover:-translate-y-1 flex items-center justify-center gap-2">
                  View Project Details
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-wood-gradient rounded-2xl p-12 shadow-wood-lg animate-fade-in-up">
          <h2 className="text-3xl font-bold text-wood-primary font-serif mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-wood-dark mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss your vision and create a space that perfectly reflects your style and needs. 
            Contact us today for a free consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://wa.me/6289699639763?text=Hi%20JOSH%20Interior,%20I%20would%20like%20to%20discuss%20my%20project"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-green inline-flex items-center justify-center"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.787"/>
              </svg>
              Start Your Project
            </a>
            <button className="bg-wood-primary hover:bg-wood-dark text-white px-8 py-3 rounded-lg font-semibold shadow-wood hover:shadow-wood-lg transition-all duration-300 hover:-translate-y-1">
              View All Projects
            </button>
          </div>
        </div>
      </section>
    );
}
