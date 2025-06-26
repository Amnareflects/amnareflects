export const metadata = {
  title: "Amna Reflects",
  description: "Reflections, Reviews, and Writings by Amna",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ fontFamily: "serif", margin: 0 }}>
        <nav style={{ display: "flex", justifyContent: "center", gap: "1rem", padding: "1rem", borderBottom: "1px solid #ddd", flexWrap: "wrap" }}>
          <a href="/" style={{ textDecoration: "none", fontWeight: "bold" }}>Home</a>
          <a href="/about" style={{ textDecoration: "none" }}>About</a>
          <a href="/reflections" style={{ textDecoration: "none" }}>Reflections</a>
          <a href="/reviews" style={{ textDecoration: "none" }}>Reviews</a>
        </nav>
        <main style={{ maxWidth: "640px", margin: "auto", padding: "1rem" }}>{children}</main>
      </body>
    </html>
  );
}
