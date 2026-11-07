import './App.css'

const services = [
  'Content service',
  'Progress service',
  'Recommendations',
]

function App() {
  return (
    <main className="app-shell">
      <header className="topbar">
        <nav className="account-actions" aria-label="Account">
          <button className="button button-quiet" type="button">Log in</button>
          <button className="button button-primary" type="button">Create account</button>
        </nav>
      </header>

      <section className="service-grid" aria-label="Service placeholders">
        {services.map((service) => (
          <article className="service-card" key={service}>
            <h1>{service}</h1>
            <div className="service-placeholder" aria-label={`${service} placeholder`} />
          </article>
        ))}
      </section>
    </main>
  )
}

export default App
