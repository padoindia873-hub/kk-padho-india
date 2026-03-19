export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-green-700 mb-6">About KK PADHO INDIA</h1>
        <div className="bg-white p-8 rounded-lg shadow-md">
          <p className="text-gray-700 mb-4 text-lg">
            KK PADHO INDIA is a non-profit organization dedicated to empowering students across India through education, scholarships, and skill development programs.
          </p>
          <p className="text-gray-700 mb-4">
            Founded in 2020, we have helped over 5000 students achieve their academic dreams through various scholarship programs and educational initiatives.
          </p>
          <h2 className="text-2xl font-semibold text-green-600 mt-6 mb-3">Our Mission</h2>
          <p className="text-gray-700">
            To ensure that no student is left behind due to financial constraints and to provide equal educational opportunities for all.
          </p>
        </div>
      </div>
    </div>
  );
}