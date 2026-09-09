"use client";

const inputCls = "w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 text-sm focus:outline-none focus:border-saffron/50 transition-colors";

export default function AdminSettingsPage() {
  return (
    <div className="max-w-2xl">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-white">Settings</h1>
        <p className="text-white/40 text-sm mt-1">Configure platform settings</p>
      </div>

      <div className="space-y-6">
        <div className="bg-zinc-900 border border-white/10 rounded-2xl p-6">
          <h2 className="text-white font-semibold mb-5">General</h2>
          <div className="space-y-4">
            <div>
              <label className="text-white/50 text-xs mb-1.5 block">Platform Name</label>
              <input type="text" defaultValue="Durga Puja 360°" className={inputCls} />
            </div>
            <div>
              <label className="text-white/50 text-xs mb-1.5 block">Year</label>
              <input type="number" defaultValue={2025} className={inputCls} />
            </div>
            <div>
              <label className="text-white/50 text-xs mb-1.5 block">Contact Email</label>
              <input type="email" defaultValue="hello@durgapuja360.com" className={inputCls} />
            </div>
          </div>
        </div>

        <div className="bg-zinc-900 border border-white/10 rounded-2xl p-6">
          <h2 className="text-white font-semibold mb-5">Sponsor Display</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl">
              <div>
                <p className="text-white text-sm font-medium">Show Sponsor Banners</p>
                <p className="text-white/40 text-xs mt-0.5">Display sponsor logos in the 360° viewer</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" defaultChecked className="sr-only peer" />
                <div className="w-11 h-6 bg-white/10 peer-checked:bg-saffron rounded-full transition-colors peer-checked:after:translate-x-5 after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-transform" />
              </label>
            </div>
            <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl">
              <div>
                <p className="text-white text-sm font-medium">Auto-rotate Sponsor Banners</p>
                <p className="text-white/40 text-xs mt-0.5">Cycle through sponsors every 5 seconds</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" />
                <div className="w-11 h-6 bg-white/10 peer-checked:bg-saffron rounded-full transition-colors peer-checked:after:translate-x-5 after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-transform" />
              </label>
            </div>
          </div>
        </div>

        <button className="w-full bg-gradient-to-r from-saffron to-gold text-white font-bold py-3 rounded-xl hover:opacity-90 transition-opacity">
          Save Settings
        </button>
      </div>
    </div>
  );
}
