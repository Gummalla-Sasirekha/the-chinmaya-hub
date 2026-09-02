type AdminDashboardProps = {
  onLogout: () => void
}

export default function AdminDashboard({ onLogout }: AdminDashboardProps) {
  return (
    <main
      style={{
        minHeight: '100vh',
        padding: '32px',
        maxWidth: '1100px',
        margin: '0 auto',
      }}
    >
      <header
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '16px',
          marginBottom: '32px',
        }}
      >
        <div>
          <p style={{ margin: 0, fontSize: '14px', opacity: 0.7 }}>
            CHINMAYA HUB
          </p>

          <h1 style={{ margin: '6px 0 0' }}>
            Admin Dashboard
          </h1>
        </div>

        <button type="button" onClick={onLogout}>
          Logout
        </button>
      </header>

      <section
        style={{
          border: '1px solid currentColor',
          borderRadius: '12px',
          padding: '24px',
          marginBottom: '20px',
        }}
      >
        <h2 style={{ marginTop: 0 }}>
          Timetable Management
        </h2>

        <p>
          Upload the latest timetable PDF and process it
          into timetable data.
        </p>

        <button type="button" disabled>
          Upload Timetable PDF — Coming Next
        </button>
      </section>

      <section
        style={{
          border: '1px solid currentColor',
          borderRadius: '12px',
          padding: '24px',
        }}
      >
        <h2 style={{ marginTop: 0 }}>
          Admin Tools
        </h2>

        <ul>
          <li>Faculty management</li>
          <li>Announcements</li>
          <li>Timetable history</li>
          <li>Data validation</li>
        </ul>
      </section>
    </main>
  )
}
