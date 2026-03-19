interface Member {
  name: string;
  role: string;
  qualification: string;
}

export default function CommitteePage() {
  const members: Member[] = [
    { name: "Dr. Rajesh Kumar", role: "Chairman", qualification: "Ph.D in Education" },
    { name: "Mrs. Priya Sharma", role: "Secretary", qualification: "M.A in Social Work" },
    { name: "Mr. Amit Patel", role: "Treasurer", qualification: "MBA Finance" },
    { name: "Dr. Sunita Gupta", role: "Academic Advisor", qualification: "Ph.D in Mathematics" },
    { name: "Mr. Vikram Singh", role: "Student Coordinator", qualification: "B.Tech" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-green-700 mb-8">Committee Members</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {members.map((member, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold text-green-600">{member.name}</h2>
              <p className="text-gray-700 font-medium">{member.role}</p>
              <p className="text-gray-600 text-sm mt-2">{member.qualification}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}