import { useEffect } from 'react';
import { BarChart3 } from 'lucide-react';

/**
 * Private analytics dashboard.
 *
 * This page is publicly reachable by URL — that is fine and intentional.
 * It contains only UI code; every byte of actual data comes from /api/stats,
 * which refuses to answer without the correct password. There is deliberately
 * no client-side route guard, because client-side route guards are theatre.
 */
export default function Counter() {
  useEffect(() => {
    document.title = 'Analytics';

    // Belt-and-braces alongside robots.txt and the X-Robots-Tag header.
    const meta = document.createElement('meta');
    meta.name = 'robots';
    meta.content = 'noindex,nofollow';
    document.head.appendChild(meta);
    return () => meta.remove();
  }, []);

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-[#09090b] text-zinc-900 dark:text-zinc-100 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex items-center gap-3 mb-2">
          <div className="p-2.5 rounded-xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
            <BarChart3 className="w-5 h-5 text-teal-600 dark:text-teal-400" />
          </div>
          <h1 className="text-3xl font-black tracking-tight">Analytics</h1>
        </div>
        <p className="text-zinc-500 dark:text-zinc-400 font-medium">
          Private dashboard — wiring up.
        </p>
      </div>
    </div>
  );
}
