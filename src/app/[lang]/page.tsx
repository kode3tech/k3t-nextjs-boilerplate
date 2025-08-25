import Main from '@/components/Main'
import { getDictionary } from '@/lib/i18n/get-dictionary'
import { Locale } from '@/lib/i18n/i18n-config'

export default async function Home(props: {
  params: Promise<{ lang: Locale }>
}) {
  const { lang } = await props.params
  const t = await getDictionary(lang)
  return (
    <>
      <Main title={t.HomePage.title} description={t.HomePage.description} />
    </>
  )
}
