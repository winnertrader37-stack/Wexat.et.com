import Link from "next/link";

export default function RegisterPage() {
  return (
    <main className="authWrapper">
      <div className="authCard">
        <div className="kicker">
          JOIN WEXAT.P2P
        </div>

        <h1>Create account.</h1>

        <p>
          Start your Wexat.p2p journey.
        </p>

        <form>
          <label className="fieldLabel">
            Full name
          </label>
          <input className="input" required />

          <label className="fieldLabel">
            Email
          </label>
          <input
            className="input"
            type="email"
            required
          />

          <label className="fieldLabel">
            Phone
          </label>
          <input className="input" required />

          <label className="fieldLabel">
            Password
          </label>
          <input
            className="input"
            type="password"
            minLength={10}
            required
          />

          <label className="fieldLabel">
            Confirm password
          </label>
          <input
            className="input"
            type="password"
            minLength={10}
            required
          />

          <label
            style={{
              display: "flex",
              gap: 8,
              alignItems: "center",
              marginTop: 17,
              fontSize: 13
            }}
          >
            <input
              type="checkbox"
              required
              style={{width: "auto"}}
            />

            I agree to the Terms and Privacy Policy.
          </label>

          <button
            className="btn btnPrimary fullButton"
            type="submit"
          >
            CREATE ACCOUNT
          </button>
        </form>

        <p style={{fontSize: 13}}>
          Already registered?{" "}
          <Link
            href="/login"
            style={{color: "var(--green)"}}
          >
            Login
          </Link>
        </p>
      </div>
    </main>
  );
}
