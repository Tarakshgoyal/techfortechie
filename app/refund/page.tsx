import Navbar from "@/components/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function RefundPolicy() {
  return (
    <div className="min-h-screen">
      <Navbar />

      <div className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Refund & Cancellation Policy</h1>
          <p className="text-muted-foreground mb-8">Last updated: November 8, 2025</p>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Our Commitment</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  At TechForTechie, we are committed to providing high-quality educational content and ensuring 
                  customer satisfaction. This Refund & Cancellation Policy outlines the terms under which refunds 
                  are processed for different types of courses.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>1. Live Bootcamp & Workshop Refunds</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  <strong>1.1 Before Session Starts:</strong>
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li><strong>More than 48 hours before:</strong> 100% refund (minus payment gateway charges)</li>
                  <li><strong>24-48 hours before:</strong> 50% refund</li>
                  <li><strong>Less than 24 hours before:</strong> No refund</li>
                </ul>
                <p className="text-muted-foreground mt-4">
                  <strong>1.2 After Session Starts:</strong> No refunds once the live session has commenced.
                </p>
                <p className="text-muted-foreground">
                  <strong>1.3 Session Cancellation by Us:</strong> If we cancel or reschedule the session, you will 
                  receive a full refund or option to attend the rescheduled session.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>2. Self-Paced Course Refunds</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  <strong>2.1 7-Day Money-Back Guarantee:</strong>
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Refunds available within 7 days of purchase</li>
                  <li>Must have accessed less than 20% of course content</li>
                  <li>Must not have downloaded course materials</li>
                  <li>Must not have received a certificate</li>
                </ul>
                <p className="text-muted-foreground mt-4">
                  <strong>2.2 Beyond 7 Days:</strong> No refunds after 7 days from purchase date.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>3. Technical Issues</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  <strong>3.1 Platform Issues:</strong> If you experience technical problems accessing course content 
                  due to platform issues on our end:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Contact support immediately at support@techfortechie.com</li>
                  <li>We will resolve the issue within 24-48 hours</li>
                  <li>If unresolved, you are eligible for a full refund</li>
                </ul>
                <p className="text-muted-foreground mt-4">
                  <strong>3.2 User Technical Issues:</strong> Problems caused by user's internet connection, device 
                  compatibility, or local setup are not eligible for refunds. We will provide technical support to 
                  help resolve such issues.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>4. Payment Gateway Charges</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  All refunds are subject to payment gateway processing fees charged by Razorpay (typically 2-3% of 
                  transaction amount). These fees are non-refundable and will be deducted from the refund amount.
                </p>
                <p className="text-muted-foreground">
                  <strong>Example:</strong> If you paid ₹499 and are eligible for a full refund, you will receive 
                  approximately ₹484-489 after gateway charges are deducted.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>5. How to Request a Refund</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  To request a refund:
                </p>
                <ol className="list-decimal list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Email us at <strong>refunds@techfortechie.com</strong></li>
                  <li>Include your order ID/transaction ID</li>
                  <li>Provide registered email address</li>
                  <li>State the reason for refund request</li>
                  <li>Include any supporting documentation (for technical issues)</li>
                </ol>
                <p className="text-muted-foreground mt-4">
                  <strong>Response Time:</strong> We will review your request within 2-3 business days and respond 
                  via email.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>6. Refund Processing Time</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Once approved:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li><strong>Credit/Debit Cards:</strong> 5-7 business days</li>
                  <li><strong>Net Banking:</strong> 5-7 business days</li>
                  <li><strong>UPI:</strong> 3-5 business days</li>
                  <li><strong>Wallets:</strong> 3-5 business days</li>
                </ul>
                <p className="text-muted-foreground mt-4">
                  Refund timelines may vary based on your bank or payment provider's processing times.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>7. Non-Refundable Items</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  The following are NOT eligible for refunds:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Courses purchased during promotional sales (unless explicitly stated)</li>
                  <li>Gift cards or promotional credits</li>
                  <li>Courses completed (more than 80% accessed)</li>
                  <li>Certificates already issued</li>
                  <li>Course bundles (partial refunds not available)</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>8. Cancellation by TechForTechie</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  If we cancel or significantly modify a course:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>You will be notified via email at least 48 hours in advance</li>
                  <li>Full refund will be automatically processed</li>
                  <li>Alternative course suggestions will be provided</li>
                  <li>Option to transfer to rescheduled session</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>9. Disputed Charges</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  If you notice an unauthorized charge or billing error:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Contact us immediately at billing@techfortechie.com</li>
                  <li>Do not file a chargeback before contacting us</li>
                  <li>We will investigate within 24-48 hours</li>
                  <li>Unauthorized charges will be refunded immediately</li>
                </ul>
                <p className="text-muted-foreground mt-4">
                  <strong>Note:</strong> Filing a chargeback without contacting us first may result in account suspension.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>10. Partial Refunds</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  In certain circumstances, partial refunds may be granted at our discretion:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Extenuating circumstances (medical emergency, etc.)</li>
                  <li>Significant course content or quality issues</li>
                  <li>Multiple technical problems affecting learning</li>
                </ul>
                <p className="text-muted-foreground mt-4">
                  Each case will be reviewed individually by our support team.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>11. Contact for Refund Queries</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  For any questions regarding refunds or cancellations:
                </p>
                <div className="text-muted-foreground space-y-1">
                  <p><strong>Email:</strong> refunds@techfortechie.com</p>
                  <p><strong>Support:</strong> support@techfortechie.com</p>
                  <p><strong>Response Time:</strong> Within 24-48 hours</p>
                </div>
              </CardContent>
            </Card>

            <div className="bg-primary/10 border border-primary/20 rounded-lg p-6 mt-8">
              <h3 className="text-lg font-semibold mb-2">Payment Partner: Razorpay</h3>
              <p className="text-sm text-muted-foreground">
                All payments are processed through Razorpay, a PCI-DSS compliant payment gateway. For information 
                about payment security and Razorpay's policies, visit{" "}
                <a href="https://razorpay.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  razorpay.com
                </a>
              </p>
            </div>
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
