export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).send({ message: 'Only POST requests allowed' })
    return
  }

  const response = await fetch(
      `${process.env.NEXT_PUBLIC_ADMIN_URL}api/request`, {
        method: 'POST',
        body: JSON.stringify(req.body)
      });
  const json = await response.json();
  if (json.status === 'error') {
    res.status(400).json(json)
  } else {
    res.status(response.status).json(json);
  }
}