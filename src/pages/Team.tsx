import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import PageHero, { GoldDivider } from "@/components/PageHero";
import heroTeam from "@/assets/hero-team.jpg";
import { GraduationCap, Briefcase, ArrowRight } from "lucide-react";

const lawyers = [
  {
    name: "სახელი გვარი",
    position: "დასაქმებულია აქ აქ აქ",
    bio: "შეეგებეთ გაიცანით ეს არის ესა და ეს და იცის ეს აქ მუშაობდა და ასე შემდეგ…",
    education: ["თსუ"],
    experience: ["ადვოკატთა ასოციაციის წევრი", "სამუშაო სამუშაო"],
    initial: "ს",
  },
  {
    name: "სახელი გვარი",
    position: "დასაქმებულია აქ აქ აქ",
    bio: "შეეგებეთ გაიცანით ეს არის ესა და ეს და იცის ეს აქ მუშაობდა და ასე შემდეგ…",
    education: ["თსუ"],
    experience: ["ადვოკატთა ასოციაციის წევრი", "სამუშაო სამუშაო"],
    initial: "ს",
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const Team = () => {
  return (
    <Layout>
      <PageHero title="ადვოკატები" backgroundImage={heroTeam} subtitle="გაიცანით ჩვენი პროფესიონალი გუნდი" />

      <section className="section-padding py-24 bg-background">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <GoldDivider />
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-3">ჩვენი გუნდი</h2>
            <p className="text-muted-foreground text-sm max-w-md mx-auto">პროფესიონალი ადვოკატები თქვენს სამსახურში</p>
          </div>

          <div className="space-y-10">
            {lawyers.map((lawyer, i) => (
              <motion.div
                key={i}
                {...fadeUp}
                transition={{ delay: i * 0.1 }}
                className="bg-card rounded-2xl border border-border overflow-hidden shadow-[var(--shadow-sm)] hover:shadow-[var(--shadow-md)] transition-shadow duration-300"
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
                  <div className="md:col-span-1 bg-gradient-to-br from-muted to-card flex items-center justify-center p-10 md:p-0 md:min-h-[320px]">
                    <div className="w-32 h-32 rounded-2xl bg-background flex items-center justify-center shadow-[var(--shadow-md)]">
                      <span className="text-5xl font-serif font-bold text-accent">{lawyer.initial}</span>
                    </div>
                  </div>
                  <div className="md:col-span-2 p-8 md:p-10">
                    <div className="mb-6">
                      <h3 className="text-2xl font-serif font-bold mb-1">{lawyer.name}</h3>
                      <span className="inline-flex items-center text-xs font-semibold uppercase tracking-wider text-accent bg-accent/10 rounded-full px-3 py-1">
                        {lawyer.position}
                      </span>
                    </div>
                    <p className="text-muted-foreground leading-relaxed mb-7">{lawyer.bio}</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                      <div className="bg-background rounded-xl p-5">
                        <h4 className="font-semibold flex items-center gap-2 mb-3 text-sm">
                          <GraduationCap className="w-4 h-4 text-accent" /> განათლება
                        </h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          {lawyer.education.map((e, j) => (
                            <li key={j} className="flex items-center gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                              {e}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="bg-background rounded-xl p-5">
                        <h4 className="font-semibold flex items-center gap-2 mb-3 text-sm">
                          <Briefcase className="w-4 h-4 text-accent" /> გამოცდილება
                        </h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          {lawyer.experience.map((e, j) => (
                            <li key={j} className="flex items-center gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                              {e}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <Link to="/contact">
                      <Button className="bg-primary text-primary-foreground hover:bg-crimson-dark rounded-full px-7 shadow-[var(--shadow-crimson)] hover:shadow-[var(--shadow-lg)] transition-all duration-300 gap-2">
                        დაჯავშნეთ კონსულტაცია <ArrowRight className="w-4 h-4" />
                      </Button>
                    </Link>
                  </div>
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

export default Team;
