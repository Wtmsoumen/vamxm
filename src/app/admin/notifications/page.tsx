"use client";

import { Send, Bell } from "lucide-react";

const inputCls = "w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 text-sm focus:outline-none focus:border-saffron/50 transition-colors";

export default function NotificationsPage() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-white">Notifications</h1>
        <p className="text-white/40 text-sm mt-1">Send push notifications to app users</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-zinc-900 border border-white/10 rounded-2xl p-6">
          <h2 className="text-white font-semibold mb-5">Create Notification</h2>
          <form className="space-y-4">
            <div>
              <label className="text-white/50 text-xs mb-1.5 block">Title</label>
              <input type="text" placeholder="Notification title" className={inputCls} />
            </div>
            <div>
              <label className="text-white/50 text-xs mb-1.5 block">Message</label>
              <textarea rows={4} placeholder="Notification message..." className={`${inputCls} resize-none`} />
            </div>
            <div>
              <label className="text-white/50 text-xs mb-1.5 block">Audience</label>
              <select className={`${inputCls} appearance-none cursor-pointer`}>
                <option value="all" className="bg-zinc-900">All Users</option>
                <option value="android" className="bg-zinc-900">Android Only</option>
                <option value="ios" className="bg-zinc-900">iOS Only</option>
              </select>
            </div>
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-saffron to-gold text-white font-bold py-3 rounded-xl hover:opacity-90 transition-opacity"
            >
              <Send className="w-4 h-4" /> Send Notification
            </button>
          </form>
        </div>

        <div className="bg-zinc-900 border border-white/10 rounded-2xl p-6">
          <h2 className="text-white font-semibold mb-5">Recent Notifications</h2>
          <div className="space-y-3">
            {[
              { title: "New Pandal Added!", msg: "Check out Kumartuli Park's 360° experience.", time: "2h ago" },
              { title: "Festival Begins Tomorrow", msg: "Durga Puja starts October 9th!", time: "1d ago" },
              { title: "New Sponsor", msg: "Welcome Bengal Sweets as our sponsor.", time: "3d ago" },
            ].map((n) => (
              <div key={n.title} className="flex items-start gap-3 p-3 rounded-xl bg-white/5">
                <div className="w-8 h-8 bg-saffron/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Bell className="w-4 h-4 text-saffron" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-white text-sm font-medium">{n.title}</p>
                  <p className="text-white/40 text-xs mt-0.5 truncate">{n.msg}</p>
                </div>
                <span className="text-white/30 text-xs flex-shrink-0">{n.time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
