export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      console.log("✅ Received eBay Marketplace Account Deletion Event:");
      console.log(JSON.stringify(req.body, null, 2));

      // Do something with the data, e.g., log to a DB or trigger an email

      res.status(200).send("Event received");
    } catch (error) {
      console.error("❌ Error handling event:", error);
      res.status(500).send("Internal Server Error");
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).send("Method Not Allowed");
  }
}
