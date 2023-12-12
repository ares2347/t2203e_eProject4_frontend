import Header from "./components/header";
import Footer from "./components/footer";
import MainPage from "./components/mainpage";
import TestPage from "./pages/usres/testpage/page";


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
