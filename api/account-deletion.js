export default function handler(req, res) {
  if (req.method === "POST") {
    const body = req.body;

    const EXPECTED_TOKEN = process.env.EBAY_VERIFICATION_TOKEN;
    if (body.verificationToken && body.verificationToken !== EXPECTED_TOKEN) {
      return res.status(403).end("Invalid verification token");
    }

    if (body.challengeCode) {
      return res.status(200).json({ challengeResponse: body.challengeCode });
    }

    console.log("Received account deletion event:", body);
    return res.status(204).end(); // No content
  }

  // Add this so you can verify it's up via curl or browser
  if (req.method === "GET") {
    return res
      .status(200)
      .json({ message: "Account deletion webhook is live." });
  }

  res.status(405).end(); // Method not allowed
}
