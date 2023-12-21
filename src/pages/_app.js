import { Footer, Navbar, Sidebar } from "@/components";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Sidebar />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}
