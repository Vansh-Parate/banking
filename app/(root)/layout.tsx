export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <div>
        SIDEBAR
        {children}
      </div>
    </main>
  );
}
