'use client';

import { useTransitionNavigate } from '@/src/components/TransitionProvider';

export default function ServiceCard({ name, path, price, description }) {
  const navigate = useTransitionNavigate();

  return (
    <button
      type="button"
      onClick={() => navigate(path)}
      className="w-full text-left bg-white/60 rounded-2xl px-6 py-6 sm:px-8 sm:py-8 shadow-sm hover:shadow-md transition-shadow cursor-pointer border border-gray-100">
      <div className="flex items-baseline justify-between gap-4 mb-2">
        <h2 className="text-lg sm:text-xl font-medium text-blue">
          {name}
        </h2>
        {price && (
          <span className="text-sm font-medium text-gray-500 whitespace-nowrap">
            {price}
          </span>
        )}
      </div>
      <p className="text-sm font-light text-gray-600 leading-relaxed">
        {description}
      </p>
    </button>
  );
}
