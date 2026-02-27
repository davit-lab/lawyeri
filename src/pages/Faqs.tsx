import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Layout from "@/components/Layout";
import PageHero, { GoldDivider } from "@/components/PageHero";
import heroFaqs from "@/assets/hero-faqs.jpg";
import { Mail } from "lucide-react";

const faqs = [
  { q: "კითხვა 1", a: "პასუხი" },
  { q: "კითხვა 2", a: "პასუხი" },
  { q: "კითხვა 3", a: "პასუხი" },
  { q: "კითხვა 4", a: "პასუხი" },
  { q: "კითხვა 5", a: "პასუხი" },
  { q: "კითხვა 6", a: "პასუხი" },
  { q: "კითხვა 7", a: "პასუხი" },
  { q: "კითხვა 8", a: "პასუხი" },
  { q: "კითხვა 9", a: "პასუხი" },
];

const Faqs = () => {
  return (
    <Layout>
      <PageHero title="ხშირად დასმული კითხვები" backgroundImage={heroFaqs} subtitle="პასუხები თქვენს კითხვებზე" />

      <section className="section-padding py-24 bg-background">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-14">
            <GoldDivider />
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-3">
              ხშირად დასმული კითხვები
            </h2>
            <p className="text-muted-foreground text-sm">
              აქ არის კითხვებზე მარტივად გაცემული პასუხები რათა გაგიმარტივოთ ….
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="border border-border rounded-xl px-6 bg-card data-[state=open]:shadow-[var(--shadow-md)] transition-shadow">
                <AccordionTrigger className="font-serif text-lg hover:no-underline py-5">{faq.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-14 bg-card rounded-2xl p-8 border border-border shadow-[var(--shadow-sm)]"
          >
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <Mail className="w-5 h-5 text-primary" />
            </div>
            <p className="text-sm text-muted-foreground mb-2">ვერ იპოვე ის კითხვა რაც გაინტერესებს?</p>
            <p className="font-semibold text-sm">
              მოგვწერე აქ: <a href="mailto:lawyer@gmail.com" className="text-primary hover:underline">lawyer@gmail.com</a>
            </p>
          </motion.div>
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

export default Faqs;
