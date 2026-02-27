import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import PageHero, { GoldDivider } from "@/components/PageHero";
import heroPractice from "@/assets/hero-practice.jpg";
import { Building2, Home as HomeIcon, Briefcase, Shield, Gavel, Globe, ArrowRight } from "lucide-react";

const areas = [
  { icon: Building2, title: "კორპორაციული სამართალი", desc: "დეტალური ინფორმაცია კორპორაციული სამართლის შესახებ..." },
  { icon: HomeIcon, title: "უძრავი ქონების სამართალი", desc: "დეტალური ინფორმაცია უძრავი ქონების სამართლის შესახებ..." },
  { icon: Briefcase, title: "დასაქმების სამართალი", desc: "დეტალური ინფორმაცია დასაქმების სამართლის შესახებ..." },
  { icon: Shield, title: "პერსონალური დაზიანება", desc: "დეტალური ინფორმაცია პერსონალური დაზიანების შესახებ..." },
  { icon: Gavel, title: "სისხლის სამართლის დაცვა", desc: "დეტალური ინფორმაცია სისხლის სამართლის შესახებ..." },
  { icon: Globe, title: "იმიგრაციის სამართალი", desc: "დეტალური ინფორმაცია იმიგრაციის სამართლის შესახებ..." },
];

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const PracticeAreas = () => {
  return (
    <Layout>
      <PageHero title="სამუშაო არეალი" backgroundImage={heroPractice} subtitle="ჩვენი ექსპერტიზის სფეროები" />

      <section className="section-padding py-24 bg-background">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-14">
            <GoldDivider />
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-3">ჩვენი სამუშაო არეალი</h2>
            <p className="text-muted-foreground text-sm">გაეცანი ჩვენს სამუშაო არეალს …………..</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {areas.map((area, i) => (
              <motion.div
                key={i}
                {...fadeUp}
                transition={{ delay: i * 0.08 }}
                className="bg-card rounded-2xl p-8 border border-border group card-hover"
              >
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                  <area.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-serif text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {area.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-5 leading-relaxed">{area.desc}</p>
                <span className="text-primary text-sm font-medium inline-flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  გაიგეთ მეტი <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding py-20 bg-gradient-to-br from-primary to-crimson-dark">
        <div className="container mx-auto text-center max-w-2xl">
          <GoldDivider />
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary-foreground mb-6">
            ჩვენი გამოცდილი ადვოკატები მზად არიან უპასუხონ თქვენს კითხვებს
          </h2>
          <Link to="/contact">
            <Button variant="outline" className="rounded-full px-8 py-6 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
              მოითხოვეთ უფასო ზარი
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default PracticeAreas;
