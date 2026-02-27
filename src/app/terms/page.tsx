import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Matt Driver Performance",
  description: "Terms of service for Matt Driver Performance training services.",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen pt-40 pb-24">
      <div className="max-w-3xl mx-auto px-6 sm:px-8 lg:px-12">
        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-10">Terms of Service</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 text-lg mb-8">
            Last updated: {new Date().toLocaleDateString("en-GB", { month: "long", year: "numeric" })}
          </p>

          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mt-12 mb-6">Agreement to Terms</h2>
          <p className="text-gray-600 text-lg mb-6 leading-relaxed">
            By accessing our website or booking our services, you agree to be bound by these 
            Terms of Service. If you disagree with any part of the terms, you may not access 
            our services.
          </p>

          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mt-12 mb-6">Services</h2>
          <p className="text-gray-600 text-lg mb-6 leading-relaxed">
            Matt Driver Performance provides strength and conditioning training services for 
            youth athletes. Our services include Performance Profiling, 1-1 Training, and 
            Small Group Training sessions.
          </p>

          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mt-12 mb-6">Booking and Payment</h2>
          <ul className="list-disc pl-8 text-gray-600 text-lg mb-6 space-y-3">
            <li>All sessions must be booked in advance</li>
            <li>Payment is required prior to or at the time of the session</li>
            <li>Prices are as stated on our website and may be subject to change</li>
            <li>Package deals are available for block bookings</li>
          </ul>

          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mt-12 mb-6">Cancellation Policy</h2>
          <p className="text-gray-600 text-lg mb-6 leading-relaxed">
            We require at least 24 hours notice for cancellations. Sessions cancelled with 
            less than 24 hours notice may be charged at the full rate. We reserve the right 
            to cancel or reschedule sessions due to weather conditions or unforeseen circumstances.
          </p>

          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mt-12 mb-6">Health and Safety</h2>
          <ul className="list-disc pl-8 text-gray-600 text-lg mb-6 space-y-3">
            <li>Participants must disclose any relevant medical conditions or injuries</li>
            <li>Appropriate sportswear and footwear must be worn during sessions</li>
            <li>Participants should bring water and be adequately hydrated</li>
            <li>Parents/guardians are responsible for athletes under 18</li>
          </ul>

          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mt-12 mb-6">Liability</h2>
          <p className="text-gray-600 text-lg mb-6 leading-relaxed">
            While we take every precaution to ensure safety, participation in physical 
            training carries inherent risks. Matt Driver Performance is not liable for any 
            injuries that may occur during training, except where caused by negligence on 
            our part.
          </p>

          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mt-12 mb-6">Photography and Media</h2>
          <p className="text-gray-600 text-lg mb-6 leading-relaxed">
            We may occasionally take photographs or videos during sessions for marketing 
            purposes. Please inform us if you do not wish to be photographed.
          </p>

          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mt-12 mb-6">Contact</h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            For any questions regarding these terms, please contact us at:<br />
            Email: matthewdriver1759@gmail.com<br />
            Phone: 07938 244 735
          </p>
        </div>
      </div>
    </div>
  );
}
