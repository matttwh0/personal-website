export default function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="section-title">
      <svg style={{ width: 16, height: 16, flex: "none" }} viewBox="0 0 24 24">
        <g fill="none" stroke="#4e6e5d" strokeWidth="2" strokeLinecap="round">
          <path d="M16 6v8a5 5 0 0 1-10 0v-3" />
          <circle cx="16" cy="4.5" r="1.8" />
        </g>
      </svg>
      {children}
    </div>
  );
}
