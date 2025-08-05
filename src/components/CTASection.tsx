export const CTASection = () => {
  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center">
        {/* Testimonials Heading */}
        <h3 className="text-sm font-semibold text-gray-600 uppercase tracking-wider mb-12">
          Testimonials
        </h3>
        
        {/* Main Testimonial Text with Embedded Images */}
        <div className="mb-8">
          <p className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
            Loved by creators{" "}
            <img 
              src="/assets/avatars/avatar1.jpg" 
              alt="Testimonial 1" 
              className="inline-block w-12 h-12 md:w-16 md:h-16 rounded-full object-cover align-middle mx-2 border-2 border-white shadow-sm"
            />
            {" "}and people that{" "}
            <img 
              src="/assets/avatars/avatar2.jpg" 
              alt="Testimonial 2" 
              className="inline-block w-12 h-12 md:w-16 md:h-16 rounded-full object-cover align-middle mx-2 border-2 border-white shadow-sm"
            />
            {" "}care deeply about{" "}
            <img 
              src="/assets/avatars/avatar3.jpg" 
              alt="Testimonial 3" 
              className="inline-block w-12 h-12 md:w-16 md:h-16 rounded-full object-cover align-middle mx-2 border-2 border-white shadow-sm"
            />
            {" "}connection, growth, and clarity.
          </p>
        </div>
      </div>
    </section>
  );
};