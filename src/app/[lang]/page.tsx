import Main from '@/components/Main'
import { getDictionary } from '@/lib/i18n/get-dictionary'
import { Locale } from '@/lib/i18n/i18n-config'

export default async function Home({
  params
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  const t = await getDictionary(lang as Locale)
  return (
    <>
      <Main title={t.HomePage.title} description={t.HomePage.description} />
    </>
  )
}
