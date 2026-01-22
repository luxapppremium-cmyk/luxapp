export default function Home() {
  return (
   <main
  style={{
    minHeight: "100vh",
    backgroundColor: "#0b0b0b",
    color: "#ffffff",
  }}
>
      {/* Header */}
      <header
        style={{
          padding: "16px 20px",
          borderBottom: "1px solid #222",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h1 style={{ margin: 0, fontSize: 20 }}>Luxapp</h1>
        <button
          style={{
            background: "#fff",
            color: "#000",
            border: "none",
            padding: "8px 14px",
            borderRadius: 6,
            fontWeight: 600,
          }}
        >
          Login
        </button>
      </header>

      {/* Hero */}
      <section style={{ padding: "60px 20px", textAlign: "center" }}>
        <h2 style={{ fontSize: 28, marginBottom: 12 }}>
          Luxury Digital Store
        </h2>
        <p style={{ color: "#aaa", marginBottom: 24 }}>
          ร้านดิจิทัลพรีเมียม ระบบสมาชิก & โปรโมชัน
        </p>

        <button
          style={{
            background: "linear-gradient(135deg,#d4af37,#f5e28a)",
            color: "#000",
            border: "none",
            padding: "14px 22px",
            borderRadius: 8,
            fontSize: 16,
            fontWeight: 700,
          }}
        >
          ดูสินค้า
        </button>
      </section>

      {/* VIP Section */}
      <section style={{ padding: "20px" }}>
        <h3 style={{ marginBottom: 16 }}>สมาชิก VIP</h3>

        {[
          { name: "Bronze", discount: "5%" },
          { name: "Silver", discount: "10%" },
          { name: "Gold", discount: "15%" },
        ].map((tier) => (
          <div
            key={tier.name}
            style={{
              background: "#141414",
              padding: 16,
              borderRadius: 10,
              marginBottom: 12,
              border: "1px solid #222",
            }}
          >
            <h4 style={{ margin: 0 }}>{tier.name}</h4>
            <p style={{ margin: "6px 0 0", color: "#bbb" }}>
              ส่วนลด {tier.discount}
            </p>
          </div>
        ))}
      </section>

      {/* Footer */}
      <footer
        style={{
          padding: 20,
          borderTop: "1px solid #222",
          textAlign: "center",
          color: "#666",
          fontSize: 14,
        }}
      >
        © {new Date().getFullYear()} Luxapp
      </footer>
    </main>
  );
}