import Link from "next/link";
import {
  ShieldCheck,
  Zap,
  BadgeDollarSign,
  Users,
  LockKeyhole,
  ArrowRight,
  Gift
} from "lucide-react";

export default function Home() {
  return (
    <>
      <main>
        <section className="hero">
          <div>
            <div className="kicker">
              🇪🇹 BUILT FOR ETHIOPIA • P2P FINANCE
            </div>

            <h1>
              ETB ↔ USD,
              <br />
              <span className="gradientText">
                Made Simple.
              </span>
            </h1>

            <p className="heroText">
              Buy and sell USD directly with verified traders.
              Transparent pricing, secure transaction controls,
              and a premium P2P experience built for Ethiopia.
            </p>

            <div className="heroButtons">
              <Link href="/market" className="btn btnPrimary">
                BUY USD
                <ArrowRight size={17} />
              </Link>

              <Link href="/market" className="btn btnGhost">
                SELL USD
              </Link>
            </div>

            <div className="trustRow">
              <span className="trustChip">
                ✓ Verified Traders
              </span>
              <span className="trustChip">
                ✓ Secure P2P
              </span>
              <span className="trustChip">
                ✓ Transparent Pricing
              </span>
              <span className="trustChip">
                ✓ Fast Settlement
              </span>
            </div>
          </div>

          <div className="scene">
            <div className="sceneOrb" />

            <div className="traderPlaceholder">
              <div className="traderPlaceholderInner">
                <div className="traderFlag">🇪🇹</div>

                <strong style={{fontSize: 21}}>
                  Ethiopian Trader
                </strong>

                <div style={{
                  fontSize: 12,
                  marginTop: 8
                }}>
                  Cinematic trader image slot
                </div>
              </div>
            </div>

            <div className="marketFloat">
              <div className="marketTitle">
                <span>Wexat.p2p Market</span>
                <span className="live">● LIVE</span>
              </div>

              <div className="marketRow">
                <div>
                  <div className="smallLabel">
                    BUY USD
                  </div>
                  <div className="rate">
                    1 USD
                  </div>
                </div>

                <strong>Live ETB</strong>
              </div>

              <div className="marketRow">
                <div>
                  <div className="smallLabel">
                    SELL USD
                  </div>
                  <div className="rate">
                    1 USD
                  </div>
                </div>

                <strong>Live ETB</strong>
              </div>

              <div className="smallLabel">
                Production rates connect through the backend.
              </div>
            </div>
          </div>
        </section>

        <section className="container section">
          <div className="sectionHeader">
            <h2>Trade with confidence.</h2>
            <p>
              Wexat.p2p is designed around verification,
              controlled transactions and traceable records.
            </p>
          </div>

          <div className="cards3">
            <Feature
              icon={<ShieldCheck />}
              title="Secure P2P"
              text="KYC, 2FA, risk controls and auditable transaction events."
            />

            <Feature
              icon={<Zap />}
              title="Fast Experience"
              text="Find offers, create orders and follow payment status from one interface."
            />

            <Feature
              icon={<BadgeDollarSign />}
              title="Fair Pricing"
              text="Rates and fees are calculated by the backend rather than hard-coded."
            />
          </div>
        </section>

        <section className="container section">
          <div className="sectionHeader">
            <h2>Live ETB ↔ USD Market</h2>
            <p>
              Real production rates and liquidity will come
              from the approved backend data source.
            </p>
          </div>

          <div className="marketGrid">
            <div className="quoteCard">
              <div className="smallLabel">
                BUY USD
              </div>

              <div className="quoteBig green">
                Live backend rate
              </div>

              <div className="smallLabel">
                Verified offers
              </div>
            </div>

            <div className="quoteCard">
              <div className="smallLabel">
                SELL USD
              </div>

              <div className="quoteBig blue">
                Live backend rate
              </div>

              <div className="smallLabel">
                Verified offers
              </div>
            </div>
          </div>
        </section>

        <section className="container section">
          <div className="sectionHeader">
            <h2>Trade in 3 steps.</h2>
          </div>

          <div className="cards3">
            <Feature
              icon={<Users />}
              title="1. Find Offer"
              text="Compare rate, limits, payment method and verified trader history."
            />

            <Feature
              icon={<LockKeyhole />}
              title="2. Pay Securely"
              text="Follow the order instructions and submit the actual payment reference."
            />

            <Feature
              icon={<ArrowRight />}
              title="3. Receive USD"
              text="Funds are released only after the configured verification rules pass."
            />
          </div>
        </section>

        <section className="container section">
          <div className="cta">
            <div className="kicker">
              TRADE • REFER • EARN
            </div>

            <h2>
              Grow with Wexat.p2p.
            </h2>

            <p style={{
              color: "var(--muted)",
              maxWidth: 600,
              margin: "0 auto 25px",
              lineHeight: 1.7
            }}>
              Invite eligible traders and earn commissions
              from eligible platform fees under the affiliate
              rules.
            </p>

            <Link
              href="/affiliate"
              className="btn btnPrimary"
            >
              <Gift size={17} />
              AFFILIATE CENTER
            </Link>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footerInner">
          <span>© Wexat.p2p</span>
          <span>EN • OM • አማ</span>
          <span>
            Secure P2P infrastructure
          </span>
        </div>
      </footer>
    </>
  );
}

function Feature({
  icon,
  title,
  text
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="card">
      <div className="cardIcon">
        {icon}
      </div>

      <h3>{title}</h3>

      <p>{text}</p>
    </div>
  );
}
