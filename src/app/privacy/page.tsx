import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Matt Driver Performance",
  description: "Privacy policy for Matt Driver Performance website and services.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen pt-40 pb-24">
      <div className="max-w-3xl mx-auto px-6 sm:px-8 lg:px-12">
        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-10">Privacy Policy</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 text-lg mb-8">
            Last updated: {new Date().toLocaleDateString("en-GB", { month: "long", year: "numeric" })}
          </p>

          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mt-12 mb-6">Introduction</h2>
          <p className="text-gray-600 text-lg mb-6 leading-relaxed">
            Matt Driver Performance (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed to protecting your privacy. 
            This Privacy Policy explains how we collect, use, and safeguard your information when you 
            visit our website or use our services.
          </p>

          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mt-12 mb-6">Information We Collect</h2>
          <p className="text-gray-600 text-lg mb-6 leading-relaxed">
            We may collect information that you provide directly to us, including:
          </p>
          <ul className="list-disc pl-8 text-gray-600 text-lg mb-6 space-y-3">
            <li>Name and contact information (email address, phone number)</li>
            <li>Information about your child (age, sport, training goals)</li>
            <li>Health and fitness information relevant to training</li>
            <li>Communication preferences</li>
          </ul>

          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mt-12 mb-6">How We Use Your Information</h2>
          <p className="text-gray-600 text-lg mb-6 leading-relaxed">
            We use the information we collect to:
          </p>
          <ul className="list-disc pl-8 text-gray-600 text-lg mb-6 space-y-3">
            <li>Provide and improve our training services</li>
            <li>Communicate with you about sessions and scheduling</li>
            <li>Send relevant updates about our services</li>
            <li>Ensure the safety and wellbeing of athletes</li>
          </ul>

          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mt-12 mb-6">Data Security</h2>
          <p className="text-gray-600 text-lg mb-6 leading-relaxed">
            We implement appropriate security measures to protect your personal information. 
            However, no method of transmission over the internet is 100% secure, and we cannot 
            guarantee absolute security.
          </p>

          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mt-12 mb-6">Your Rights</h2>
          <p className="text-gray-600 text-lg mb-6 leading-relaxed">
            You have the right to:
          </p>
          <ul className="list-disc pl-8 text-gray-600 text-lg mb-6 space-y-3">
            <li>Access the personal information we hold about you</li>
            <li>Request correction of inaccurate information</li>
            <li>Request deletion of your information</li>
            <li>Opt out of marketing communications</li>
          </ul>

          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mt-12 mb-6">Contact Us</h2>
          <p className="text-gray-600 text-lg mb-6 leading-relaxed">
            If you have any questions about this Privacy Policy, please contact us at:
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
            Email: matthewdriver1759@gmail.com<br />
            Phone: 07938 244 735
          </p>
        </div>
      </div>
    </div>
  );
}
