export default (req, res) => {
  const apiKey = process.env.GOOGLE_TRANSLATE_API_KEY

  if (!apiKey) {
    res.status(500).json({ error: 'Google Translate API key not found.' })
    return
  }

  res.status(200).json({ apiKey })
}
