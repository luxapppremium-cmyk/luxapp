export const metadata = {
  title: "Luxapp | Digital Store",
  description: "Luxury Digital Store by Luxapp",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="th">
      <body
        style={{
          margin: 0,
          fontFamily: "system-ui, -apple-system, sans-serif",
          backgroundColor: "#0b0b0b",
          color: "#ffffff",
        }}
      >
        {children}
      </body>
    </html>
  );
}