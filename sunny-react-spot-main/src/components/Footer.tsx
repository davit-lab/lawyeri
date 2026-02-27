import { Link } from "react-router-dom";
import { Scale, Facebook, Instagram, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-dark text-primary-foreground">
      {/* Contact strip */}
      <div className="section-padding py-10 border-b border-dark-light">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: Mail, label: "email", value: "official@gmail.com" },
            { icon: Phone, label: "კონტაქტი", value: "(+995)-599999999, (+995)-598999999" },
            { icon: MapPin, label: "მისამართი", value: "ესა და ეს ქუჩა" },
          ].map(({ icon: Icon, label, value }) => (
            <div key={label} className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                <Icon className="w-4 h-4 text-accent" />
              </div>
              <div>
                <h4 className="font-serif text-sm font-semibold mb-0.5">{label}</h4>
                <p className="text-xs text-primary-foreground/60">{value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Main footer */}
      <div className="section-padding py-14">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-2.5 mb-5">
              <div className="w-9 h-9 rounded-lg bg-accent flex items-center justify-center">
                <Scale className="w-4 h-4 text-accent-foreground" />
              </div>
              <span className="font-serif text-xl font-bold">Justic</span>
            </Link>
            <p className="text-sm text-primary-foreground/50 leading-relaxed">
              ჩვენ ვართ იურისტების პროფესიონალი გუნდი, რომელიც თქვენს ინტერესებს იცავს პატიოსნებით, თანაგრძნობით და სრული ერთგულებით.
            </p>
          </div>

          {/* Practice areas */}
          <div>
            <h4 className="font-serif font-semibold mb-5 text-sm">ჩვენი გამოცდილება</h4>
            <ul className="space-y-2.5 text-xs text-primary-foreground/50">
              {["კორპორაციული სამართალი", "უძრავი ქონების სამართალი", "დასაქმების სამართალი", "პერსონალური დაზიანება", "სისხლის სამართლის დაცვა", "იმიგრაციის სამართალი"].map((item) => (
                <li key={item}>
                  <Link to="/practice-areas" className="hover:text-accent transition-colors duration-200">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-serif font-semibold mb-5 text-sm">გამოგვყევი სოც მედიაში</h4>
            <div className="flex gap-2">
              {[
                { icon: Facebook, href: "https://www.facebook.com" },
                { icon: Instagram, href: "https://www.instagram.com" },
              ].map(({ icon: Icon, href }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-dark-light flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all duration-200"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-serif font-semibold mb-5 text-sm">კომპანია</h4>
            <ul className="space-y-2.5 text-xs text-primary-foreground/50">
              {[
                { label: "ჩვენს შესახებ", path: "/about" },
                { label: "ადვოკატები", path: "/team" },
                { label: "ქეისები", path: "/cases" },
                { label: "FAQ", path: "/faqs" },
                { label: "დაგვიკავშირდით", path: "/contact" },
              ].map(({ label, path }) => (
                <li key={path}>
                  <Link to={path} className="hover:text-accent transition-colors duration-200">{label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-dark-light section-padding py-5">
        <div className="container mx-auto text-center text-xs text-primary-foreground/40">
          © {new Date().getFullYear()} Justic. ყველა უფლება დაცულია.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
