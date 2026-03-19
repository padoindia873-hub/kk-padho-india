interface Service {
  title: string;
  description: string;
}

export default function ServicesPage() {
  const services: Service[] = [
    { title: "Scholarship Guidance", description: "Expert guidance for scholarship applications" },
    { title: "Career Counseling", description: "Professional career advice for students" },
    { title: "Skill Development", description: "Workshops and training programs" },
    { title: "Mentorship Program", description: "One-on-one mentorship from industry experts" },
    { title: "Study Material", description: "Free study resources and materials" },
    { title: "Exam Preparation", description: "Coaching for competitive exams" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-green-700 mb-8">Our Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h2 className="text-xl font-semibold text-green-600 mb-2">{service.title}</h2>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}