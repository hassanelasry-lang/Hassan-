import { StoreProvider } from "@/components/providers/store-provider"
// ... استورد الـ Header والـ Footer

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="lt">
      <body className="container mx-auto">
        <StoreProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </StoreProvider>
      </body>
    </html>
  )
}