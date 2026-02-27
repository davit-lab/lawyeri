import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import PageHero, { GoldDivider } from "@/components/PageHero";
import heroCases from "@/assets/hero-cases.jpg";
import { ArrowRight } from "lucide-react";

const cases = [
  { title: "რავიცი", amount: "₾200", description: "შესავალი - დეტალური აღწერა საქმის შესახებ..." },
  { title: "რავიცი", amount: "₾200", description: "შესავალი - დეტალური აღწერა საქმის შესახებ..." },
  { title: "რავიცი", amount: "₾500", description: "შესავალი - დეტალური აღწერა საქმის შესახებ..." },
];

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const Cases = () => {
  return (
    <Layout>
      <PageHero title="ქეისები" backgroundImage={heroCases} subtitle="ჩვენი წარმატებული საქმეები" />

      <section className="section-padding py-24 bg-background">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-14">
            <GoldDivider />
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-3">მოგებული საქმეები</h2>
            <p className="text-muted-foreground text-sm">ჩვენი კლიენტებისთვის მიღწეული შედეგები</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cases.map((c, i) => (
              <motion.div
                key={i}
                {...fadeUp}
                transition={{ delay: i * 0.1 }}
                className="bg-card rounded-2xl overflow-hidden border border-border card-hover group"
              >
                <div className="h-48 bg-gradient-to-br from-muted to-card flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-accent/5 group-hover:bg-accent/10 transition-colors" />
                  <span className="text-5xl font-serif font-bold text-accent relative z-10">{c.amount}</span>
                </div>
                <div className="p-7">
                  <span className="inline-flex items-center text-xs font-semibold uppercase tracking-wider text-accent bg-accent/10 rounded-full px-3 py-1 mb-3">
                    {c.amount}
                  </span>
                  <h3 className="font-serif text-xl font-bold mb-2">{c.title}</h3>
                  <p className="text-sm text-muted-foreground mb-5 leading-relaxed">{c.description}</p>
                  <Button variant="outline" className="rounded-full text-sm border-primary text-primary hover:bg-primary hover:text-primary-foreground gap-1 transition-all">
                    იხილეთ დეტალები <ArrowRight className="w-3.5 h-3.5" />
                  </Button>
                </div>
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

export default Cases;
