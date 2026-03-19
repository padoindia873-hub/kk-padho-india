export default function ScholarshipPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-green-700 mb-8">Scholarship Programs</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Scholarship cards will go here */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2">Merit-Based Scholarship</h2>
            <p className="text-gray-600">For students with outstanding academic performance</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2">Need-Based Financial Aid</h2>
            <p className="text-gray-600">Supporting students from economically weaker sections</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2">Women in STEM</h2>
            <p className="text-gray-600">Encouraging girls in science and technology</p>
          </div>
        </div>
      </div>
    </div>
  );
}