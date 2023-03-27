import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import translate from '@google-cloud/translate'

const Translation = ({ children }) => {
  const router = useRouter()
  const [translation, setTranslation] = useState(children)

  useEffect(() => {
    const fetchApiKey = async () => {
      const res = await fetch('../api/translate/key')
      const { apiKey } = await res.json()

      const targetLocale = router.query.locale || router.locale // use query parameter if present, fallback to router locale
      const sourceText = children.props.children // get the source text from the children prop

      const translateClient = new translate.v2.Translate({ key: apiKey })
      const [translationResponse] = await translateClient.translate(sourceText, targetLocale)

      setTranslation({ __html: translationResponse }) // set the translated text as inner HTML
    }

    fetchApiKey()
  }, [router, children])

  return <div dangerouslySetInnerHTML={translation} />
}

export default Translation
