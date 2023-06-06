export default function Dashboard({ children }) {
  return (
    <>
      <div className="p-6">
        <h1 className="text-secondary text-5xl font-medium mb-7">Dashboard</h1>
        {children}
      </div>
    </>
  )
}
