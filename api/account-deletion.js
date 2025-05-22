export default function handler(req, res) {
  if (req.method === "POST") {
    const body = req.body;

    console.log("Received body:", body);
    console.log("Expected token:", process.env.EBAY_VERIFICATION_TOKEN);

    const EXPECTED_TOKEN = process.env.EBAY_VERIFICATION_TOKEN;

    if (body.verificationToken && body.verificationToken !== EXPECTED_TOKEN) {
      return res
        .status(403)
        .json({
          error: "Invalid token",
          expected: EXPECTED_TOKEN,
          received: body.verificationToken,
        });
    }

    if (body.challengeCode) {
      return res.status(200).json({ challengeResponse: body.challengeCode });
    }

    return res.status(204).end();
  }

  if (req.method === "GET") {
    return res
      .status(200)
      .json({ message: "Account deletion webhook is live." });
  }

  res.status(405).end();
}
