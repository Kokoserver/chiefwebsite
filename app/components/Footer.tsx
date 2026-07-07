import { XIcon, FacebookIcon, InstagramIcon, YouTubeIcon } from "@/app/components/Icons";

interface FooterProps {
  variant: 'commander' | 'builder' | 'reformer';
}

export default function Footer({ variant }: FooterProps) {
  const colorMap = {
    commander: {
      bg: 'bg-green-950',
      text: 'text-white',
      accent: 'text-amber-500',
    },
    builder: {
      bg: 'bg-green-900',
      text: 'text-white',
      accent: 'text-orange-400',
    },
    reformer: {
      bg: 'bg-slate-900',
      text: 'text-white',
      accent: 'text-yellow-400',
    },
  };

  const colors = colorMap[variant];

  return (
    <footer className={`${colors.bg} ${colors.text} py-12 mt-20`}>
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className={`text-2xl font-bold ${colors.accent} mb-1`}>Sen. Emeka Achebe</h3>
            <p className="text-xs opacity-50 tracking-widest uppercase mb-2">Anambra South · 2027</p>
            <p className="text-sm opacity-75">Rebuilding Anambra. Restoring Pride. Representing Ndi Igbo.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Campaign</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li><a href="#about" className="hover:opacity-100 transition">About</a></li>
              <li><a href="#vision" className="hover:opacity-100 transition">Vision</a></li>
              <li><a href="#events" className="hover:opacity-100 transition">Events</a></li>
            </ul>
          </div>

          {/* Get Involved */}
          <div>
            <h4 className="font-semibold mb-4">Get Involved</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li><a href="#volunteer" className="hover:opacity-100 transition">Volunteer</a></li>
              <li><a href="#donate" className="hover:opacity-100 transition">Donate</a></li>
              <li><a href="#contact" className="hover:opacity-100 transition">Contact</a></li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className={`hover:opacity-80 transition ${colors.accent}`}>
                <XIcon size={20} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className={`hover:opacity-80 transition ${colors.accent}`}>
                <FacebookIcon size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className={`hover:opacity-80 transition ${colors.accent}`}>
                <InstagramIcon size={20} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className={`hover:opacity-80 transition ${colors.accent}`}>
                <YouTubeIcon size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className={`border-t ${colors.accent} opacity-30 my-6`}></div>

        {/* Copyright */}
        <div className="text-center text-sm opacity-70">
          <p>&copy; 2027 Senator Emeka Achebe Campaign — Anambra South Senatorial District. All rights reserved.</p>
          <p className="mt-2">
            <a href="#privacy" className="hover:opacity-100 transition">Privacy Policy</a> •{' '}
            <a href="#terms" className="hover:opacity-100 transition">Terms of Service</a> •{' '}
            <a href="#accessibility" className="hover:opacity-100 transition">Accessibility</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
