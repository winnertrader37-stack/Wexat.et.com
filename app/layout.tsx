import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Wexat.p2p — ETB ↔ USD",
  description:
    "A premium Ethiopian ETB and USD peer-to-peer marketplace."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <nav className="nav">
          <div className="navInner">
            <Link href="/" className="logo">
              Wexat<span>.p2p</span>
            </Link>

            <div className="navLinks">
              <Link href="/market">P2P Market</Link>
              <Link href="/affiliate">Affiliate</Link>
            </div>

            <div className="navActions">
              <Link href="/login" className="btn btnGhost">
                Login
              </Link>

              <Link href="/register" className="btn btnPrimary">
                Create Account
              </Link>
            </div>
          </div>
        </nav>

        {children}
      </body>
    </html>
  );
}
