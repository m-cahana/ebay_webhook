export default function handler(req, res) {
  if (req.method === 'POST') {
    console.log('✅ Received Marketplace Account Deletion Event:');
    console.log(JSON.stringify(req.body, null, 2));
    res.status(200).send('Event received');
  } else {
    res.status(405).send('Method Not Allowed');
  }
}
