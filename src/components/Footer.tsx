export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-mist-800 text-center">
      <p className="text-mist-500 text-sm">
        Dibuat oleh{" "}
        <span className="text-green-400 font-medium">Muhammad Fajar Kurniawan</span> ·{" "}
        {new Date().getFullYear()}
      </p>
      <div className="flex justify-center gap-6 mt-4">
        <a
          href="https://github.com/FajarrKurniawan9"
          target="_blank"
          rel="noopener noreferrer"
          className="text-mist-500 hover:text-green-400 text-sm transition-colors"
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/Fajar-Kurniawan"
          target="_blank"
          rel="noopener noreferrer"
          className="text-mist-500 hover:text-green-400 text-sm transition-colors"
        >
          LinkedIn
        </a>
      </div>
    </footer>
  );
}
