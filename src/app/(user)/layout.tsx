import Footer from "@/components/layout/footer"
import Header from "@/components/layout/header"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
