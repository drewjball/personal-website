import { Helmet } from "react-helmet-async"

interface SEOProps {
  title: string
  description: string
  path?: string
}

export function SEO({ title, description, path = "" }: SEOProps) {
  const baseUrl = "https://drewball.com" // Replace with your actual domain
  const fullUrl = `${baseUrl}${path}`

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  )
}
