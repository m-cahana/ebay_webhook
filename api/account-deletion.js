export default async function handler(req, res) {
  if (req.method === "POST") {
    const body = req.body;

    // OPTIONAL: Verify the incoming token
    const EXPECTED_TOKEN = process.env.EBAY_VERIFICATION_TOKEN;
    if (body.verificationToken && body.verificationToken !== EXPECTED_TOKEN) {
      return res.status(403).end("Invalid verification token");
    }

    if (body.challengeCode) {
      // Respond to verification challenge
      return res.status(200).json({ challengeResponse: body.challengeCode });
    }

    // Handle real account deletion event here (optional)
    console.log("Received account deletion event:", body);
    return res.status(204).end(); // Success with no content
  }

  res.status(405).end(); // Method Not Allowed
}
