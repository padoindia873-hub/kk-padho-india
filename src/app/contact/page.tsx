export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-green-700 mb-8">Contact Us</h1>
        <div className="bg-white p-8 rounded-lg shadow-md">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
              <div className="space-y-4">
                <p className="flex items-center gap-3">
                  <span className="text-green-600">📍</span>
                  <span>123 Education Street, New Delhi - 110001</span>
                </p>
                <p className="flex items-center gap-3">
                  <span className="text-green-600">📞</span>
                  <span>+91 98765 43210</span>
                </p>
                <p className="flex items-center gap-3">
                  <span className="text-green-600">✉️</span>
                  <span>info@kkpadhoindia.org</span>
                </p>
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-4">Send Message</h2>
              <form className="space-y-4">
                <input type="text" placeholder="Your Name" className="w-full p-3 border rounded-lg" />
                <input type="email" placeholder="Your Email" className="w-full p-3 border rounded-lg" />
                <textarea placeholder="Your Message" rows={4} className="w-full p-3 border rounded-lg"></textarea>
                <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700">Send</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}