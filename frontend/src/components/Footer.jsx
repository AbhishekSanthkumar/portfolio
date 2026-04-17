export default function Footer({ hero }) {
  return (
    <footer className="border-t border-white/[0.06] py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-muted text-sm">
          © {new Date().getFullYear()} <span className="text-white font-medium">{hero?.name}</span>
        </p>
        <p className="text-muted/50 text-xs">Built with React + Express</p>
      </div>
    </footer>
  );
}
