export default function Cautions({ children }) {
  return (
    <div className="max-w-2xl w-full bg-amber-50 border border-amber-200 rounded-xl px-6 py-5 text-left">
      <h3 className="text-sm font-semibold uppercase tracking-widest text-amber-800 mb-2">
        Cautions
      </h3>
      <p className="text-sm leading-relaxed text-amber-900">{children}</p>
    </div>
  );
}
