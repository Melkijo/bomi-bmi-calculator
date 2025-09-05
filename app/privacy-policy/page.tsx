import CTA from "@/components/cta";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import type { Metadata } from "next";

const APP_NAME = "Bomi - BMI Calculator";
const CONTACT_EMAIL = "melkijonathan2@gmail.com";
const EFFECTIVE_DATE = "September 5, 2025";

export const metadata: Metadata = {
  title: `Privacy Policy — ${APP_NAME}`,
  description: `Privacy Policy for ${APP_NAME}, explaining what data we collect, how we use it, and your choices.`,
};

export default function PrivacyPolicy() {
    return (
      <div >
         <Navbar/>
         <main className="mx-auto max-w-3xl px-6 py-16 prose prose-neutral">
      <h1>Privacy Policy for {APP_NAME}</h1>
      <p><strong>Effective Date:</strong> {EFFECTIVE_DATE}</p>

      <p>
        Your privacy is important to us. This Privacy Policy explains how {APP_NAME} (“we,”
        “our,” or “the app”) collects, uses, and protects your information.
      </p>

      <h2>1. Information We Collect</h2>
      <ul>
        <li>
          <strong>Personal Data:</strong> We do not collect or store personal
          information such as your name, email address, or contact details.
        </li>
        <li>
          <strong>Health Data:</strong> The app only processes the information you
          enter (such as height and weight) locally on your device to calculate BMI.
          This data is not shared with us or any third party.
        </li>
        <li>
          <strong>App Usage Data:</strong> We do not collect analytics, location, or
          browsing data.
        </li>
      </ul>

      <h2>2. How We Use Your Information</h2>
      <ul>
        <li>BMI results and history are calculated and stored only on your device.</li>
        <li>The information is used solely to provide BMI tracking and health tips.</li>
      </ul>

      <h2>3. Data Storage and Security</h2>
      <ul>
        <li>All BMI history and related data are stored locally on your device.</li>
        <li>We do not transmit your data to external servers.</li>
        <li>You are responsible for securing your device and protecting access to your app data.</li>
      </ul>

      <h2>4. Third-Party Services</h2>
      <p>
        The app does not use third-party analytics, advertising, or tracking tools.
      </p>

      <h2>5. Children’s Privacy</h2>
      <p>
        The app is suitable for general use but is not specifically designed for
        children under 13. We do not knowingly collect personal information from children.
      </p>

      <h2>6. Changes to This Privacy Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. Any changes will be
        posted on this page with an updated effective date.
      </p>

      <h2>7. Contact Us</h2>
      <p>
        If you have questions or concerns about this Privacy Policy, contact us at{" "}
        <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
      </p>

      <hr />
      <p>
        If {APP_NAME} later adds features like accounts, cloud sync, analytics, or ads,
        this policy will be updated to reflect those changes before release.
      </p>

     
    </main>
    <CTA/>
    <Footer />
      </div>
    );
  }