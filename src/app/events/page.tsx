interface Event {
  title: string;
  date: string;
  time: string;
}

export default function EventsPage() {
  const events: Event[] = [
    { title: "Career Guidance Workshop", date: "March 25, 2026", time: "10:00 AM" },
    { title: "Scholarship Application Drive", date: "April 5, 2026", time: "11:00 AM" },
    { title: "Student Success Seminar", date: "April 15, 2026", time: "2:00 PM" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-green-700 mb-8">Upcoming Events</h1>
        <div className="space-y-4">
          {events.map((event, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-2">{event.title}</h2>
              <p className="text-gray-600">Date: {event.date} | Time: {event.time}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}