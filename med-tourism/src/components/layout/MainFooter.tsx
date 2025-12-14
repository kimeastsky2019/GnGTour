export default function MainFooter() {
  return (
    <footer className="border-t mt-8">
      <div className="max-w-5xl mx-auto px-4 py-4 text-xs text-slate-500 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
        <div>© {new Date().getFullYear()} Medical Korea Platform. All rights reserved.</div>
        <div className="flex gap-3">
          <a href="#faq">FAQ</a>
          <a href="/auth">의료진 전용</a>
        </div>
      </div>
    </footer>
  );
}