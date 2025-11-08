import Navbar from "@/components/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function TermsOfService() {
  return (
    <div className="min-h-screen">
      <Navbar />

      <div className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Terms of Service</h1>
          <p className="text-muted-foreground mb-8">Last updated: November 8, 2025</p>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>1. Acceptance of Terms</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  By accessing or using TechForTechie's services, you agree to be bound by these Terms of Service 
                  and all applicable laws and regulations. If you do not agree with any of these terms, you are 
                  prohibited from using or accessing this site.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>2. Course Enrollment and Access</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  <strong>2.1 Account Creation:</strong> You must create an account to enroll in courses. You are 
                  responsible for maintaining the confidentiality of your account credentials.
                </p>
                <p className="text-muted-foreground">
                  <strong>2.2 Course Access:</strong> Upon successful payment, you will receive access to the course 
                  materials. Access duration and terms are specified for each course.
                </p>
                <p className="text-muted-foreground">
                  <strong>2.3 Live Sessions:</strong> For live bootcamps and sessions, attendance is required at the 
                  scheduled time. Recordings may be provided, but are not guaranteed.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>3. Payment and Pricing</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  <strong>3.1 Payment Processing:</strong> All payments are processed securely through Razorpay. 
                  By making a payment, you agree to Razorpay's terms and conditions.
                </p>
                <p className="text-muted-foreground">
                  <strong>3.2 Pricing:</strong> Course prices are displayed in Indian Rupees (₹) and are subject 
                  to change. The price you pay at checkout is final.
                </p>
                <p className="text-muted-foreground">
                  <strong>3.3 Payment Methods:</strong> We accept credit cards, debit cards, UPI, net banking, 
                  and other payment methods supported by Razorpay.
                </p>
                <p className="text-muted-foreground">
                  <strong>3.4 Failed Payments:</strong> If payment fails, course access will not be granted until 
                  successful payment is received.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>4. Refund and Cancellation Policy</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  <strong>4.1 Live Bootcamps:</strong> Refunds are available up to 24 hours before the scheduled 
                  session start time. No refunds after the session has started.
                </p>
                <p className="text-muted-foreground">
                  <strong>4.2 Self-Paced Courses:</strong> Refunds are available within 7 days of purchase if less 
                  than 20% of the course content has been accessed.
                </p>
                <p className="text-muted-foreground">
                  <strong>4.3 Refund Processing:</strong> Approved refunds will be processed within 7-10 business 
                  days to the original payment method.
                </p>
                <p className="text-muted-foreground">
                  <strong>4.4 Technical Issues:</strong> If you experience technical issues preventing course access, 
                  contact support immediately. We will either fix the issue or provide a refund.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>5. Intellectual Property Rights</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  <strong>5.1 Course Content:</strong> All course materials, including videos, documents, code, and 
                  other content, are the intellectual property of TechForTechie or our instructors.
                </p>
                <p className="text-muted-foreground">
                  <strong>5.2 Restrictions:</strong> You may not reproduce, distribute, modify, create derivative 
                  works, publicly display, or exploit course content for commercial purposes without written permission.
                </p>
                <p className="text-muted-foreground">
                  <strong>5.3 Personal Use:</strong> Course materials are licensed for your personal, non-commercial 
                  educational use only.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>6. User Conduct</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  You agree not to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Share your account credentials with others</li>
                  <li>Download or distribute course materials to unauthorized parties</li>
                  <li>Use the platform for any illegal or unauthorized purpose</li>
                  <li>Interfere with or disrupt the platform's operation</li>
                  <li>Harass, abuse, or harm other users or instructors</li>
                  <li>Attempt to gain unauthorized access to any part of the platform</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>7. Certificates</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  <strong>7.1 Eligibility:</strong> Certificates are issued upon successful completion of course 
                  requirements, which may include attending sessions, completing assignments, and passing assessments.
                </p>
                <p className="text-muted-foreground">
                  <strong>7.2 Verification:</strong> Certificates include a unique verification code that can be 
                  verified on our website.
                </p>
                <p className="text-muted-foreground">
                  <strong>7.3 Disclaimer:</strong> Certificates are for educational purposes and do not guarantee 
                  employment or professional certification.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>8. Disclaimer of Warranties</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  The platform and courses are provided "as is" without warranties of any kind, either express or 
                  implied. We do not guarantee that the platform will be error-free, uninterrupted, or secure.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>9. Limitation of Liability</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  TechForTechie shall not be liable for any indirect, incidental, special, consequential, or punitive 
                  damages, or any loss of profits or revenues, whether incurred directly or indirectly.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>10. Modifications to Service</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  We reserve the right to modify, suspend, or discontinue any part of our service at any time without 
                  notice. We may also update course content, pricing, and these terms at our discretion.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>11. Termination</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  We reserve the right to terminate or suspend your account and access to our services at our sole 
                  discretion, without notice, for conduct that we believe violates these Terms or is harmful to other 
                  users or our business.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>12. Governing Law</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  These Terms shall be governed by and construed in accordance with the laws of India. Any disputes 
                  shall be subject to the exclusive jurisdiction of the courts in India.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>13. Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  For questions about these Terms of Service, please contact:
                </p>
                <div className="text-muted-foreground space-y-1">
                  <p><strong>Email:</strong> support@techfortechie.com</p>
                  <p><strong>Address:</strong> TechForTechie, India</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-border mt-12">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>&copy; 2024 TechForTechie. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
