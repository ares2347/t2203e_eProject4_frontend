import Footer from "@/components/layout/footer"
import Header from "@/components/layout/header"

export default function RootLayout({children,}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <title>Vé Xe Cực Rẻ</title>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body >
        <Header/>
        {children}
        <Footer />
      </body>
    </html>
  )
}
