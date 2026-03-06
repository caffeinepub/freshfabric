import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  Leaf,
  Loader2,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { useGetAllSignups, useSubmitSignup } from "./hooks/useQueries";

// ── Smooth scroll helper ─────────────────────────────────────────────────────
function scrollToForm() {
  document
    .getElementById("signup-form")
    ?.scrollIntoView({ behavior: "smooth" });
}

// ── Route detection ──────────────────────────────────────────────────────────
function useRoute() {
  const [path] = useState(() => window.location.pathname);
  return path;
}

// ── Navbar ───────────────────────────────────────────────────────────────────
function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-border shadow-xs">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2 group">
          <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-primary text-primary-foreground">
            <Leaf className="w-4 h-4" />
          </span>
          <span className="font-display font-bold text-xl text-foreground tracking-tight">
            FreshFabric
          </span>
        </a>
        <Button
          data-ocid="nav.primary_button"
          onClick={scrollToForm}
          className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-full px-6 text-sm"
        >
          Join Early Testers
        </Button>
      </div>
    </header>
  );
}

// ── Hero Section ─────────────────────────────────────────────────────────────
function HeroSection() {
  return (
    <section className="bg-white overflow-hidden">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="order-2 md:order-1"
          >
            <Badge
              variant="outline"
              className="inline-flex items-center gap-1.5 mb-5 px-3 py-1.5 border-destructive/40 text-destructive bg-destructive/5 font-semibold text-xs rounded-full"
            >
              <AlertTriangle className="w-3.5 h-3.5" />
              Common Household Problem
            </Badge>

            <h1 className="font-display font-extrabold text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight mb-5">
              Black fungus dots{" "}
              <span className="text-primary">on your clothes?</span>
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-lg">
              A new 10-minute fabric spray that helps remove black fungus stains
              and bad smell from clothes — without harsh scrubbing.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                data-ocid="hero.primary_button"
                onClick={scrollToForm}
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold rounded-full px-8 text-base shadow-glow"
              >
                Join Early Testers
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                <span>Free for first 50 testers</span>
              </div>
            </div>
          </motion.div>

          {/* Hero image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
            className="order-1 md:order-2 relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-[0_20px_60px_oklch(0.52_0.19_145_/_0.18)]">
              <img
                src="/assets/generated/hero-fungus-fabric.dim_900x600.jpg"
                alt="Black fungus dots on fabric"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-white/90 backdrop-blur rounded-xl px-4 py-2.5 flex items-center gap-2 w-fit">
                  <span className="text-lg">🦠</span>
                  <span className="text-sm font-semibold text-foreground">
                    Black fungus spots on fabric
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ── Problem Section ───────────────────────────────────────────────────────────
const problems = [
  {
    id: "fungus-dots",
    emoji: "🦠",
    title: "Fungus dots appear",
    description:
      "Black fungus dots appear on clothes kept in wardrobes or damp places — especially in monsoon season.",
  },
  {
    id: "damp-smell",
    emoji: "👃",
    title: "Damp smell won't go",
    description:
      "Even after washing, a lingering damp smell remains in clothes — making them unpleasant to wear.",
  },
  {
    id: "humid-weather",
    emoji: "🌧️",
    title: "Humid weather worsens it",
    description:
      "Rainy or humid weather makes clothes develop fungus faster, especially in hostels and small rooms.",
  },
];

function ProblemSection() {
  return (
    <section className="bg-muted/40 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-3">
            Why do clothes get black fungus dots?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            It's more common than you think — especially in India's monsoon
            season.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {problems.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.12 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 shadow-xs border border-border hover:shadow-card transition-shadow"
            >
              <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center text-3xl mb-4">
                {p.emoji}
              </div>
              <h3 className="font-display font-bold text-lg text-foreground mb-2">
                {p.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {p.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Solution Section ──────────────────────────────────────────────────────────
const steps = [
  {
    id: "spray",
    step: 1,
    emoji: "🧴",
    title: "Spray on the stain",
    description:
      "Apply FreshFabric spray directly onto the black fungus stain.",
  },
  {
    id: "wait",
    step: 2,
    emoji: "⏱️",
    title: "Wait 10 minutes",
    description: "Let the formula work its magic — no scrubbing needed.",
  },
  {
    id: "wash",
    step: 3,
    emoji: "👕",
    title: "Wash normally",
    description: "Toss it in your regular wash and enjoy fresh, clean clothes.",
  },
];

function SolutionSection() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-3">
            A simple solution for fungus stains
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Our fabric spray removes black fungus dots and bad smell in just{" "}
            <strong className="text-primary">10 minutes.</strong>
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row items-stretch gap-0 max-w-3xl mx-auto">
          {steps.map((s, i) => (
            <div
              key={s.id}
              className="flex md:flex-col items-center md:items-center flex-1"
            >
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.15 }}
                viewport={{ once: true }}
                className="flex-1 flex flex-col items-center text-center p-6 bg-secondary rounded-2xl border border-accent"
              >
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-display font-bold text-lg mb-3 shadow-glow">
                  {s.step}
                </div>
                <div className="text-3xl mb-3">{s.emoji}</div>
                <h3 className="font-display font-bold text-base text-foreground mb-1.5">
                  {s.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {s.description}
                </p>
              </motion.div>

              {i < steps.length - 1 && (
                <div className="flex md:hidden items-center justify-center my-2 text-primary mx-3">
                  <ArrowRight className="w-5 h-5 rotate-90" />
                </div>
              )}
              {i < steps.length - 1 && (
                <div className="hidden md:flex items-center justify-center self-center mx-0 text-primary">
                  <ArrowRight className="w-5 h-5 -mx-1 relative z-10" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Before/After Section ──────────────────────────────────────────────────────
function BeforeAfterSection() {
  return (
    <section className="bg-muted/40 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-3">
            See the difference
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Real results on real fabric — no filters, no tricks.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <div className="relative rounded-2xl overflow-hidden shadow-card border border-border">
            <img
              src="/assets/generated/before-after-comparison.dim_800x450.jpg"
              alt="Before and after fabric comparison"
              className="w-full h-auto object-cover"
            />
            {/* Labels */}
            <div className="absolute top-4 left-4">
              <span className="bg-destructive text-destructive-foreground text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
                Before
              </span>
            </div>
            <div className="absolute top-4 right-4">
              <span className="bg-primary text-primary-foreground text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
                After
              </span>
            </div>
            {/* Divider */}
            <div className="absolute inset-y-0 left-1/2 w-0.5 bg-white/70" />
          </div>

          <div className="mt-5 flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
            <span className="font-medium">
              Black fungus dots visibly reduced in one wash cycle.
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ── Early Access Banner ───────────────────────────────────────────────────────
function EarlyAccessBanner() {
  return (
    <section className="bg-primary py-16 md:py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 bg-white/20 text-primary-foreground rounded-full px-4 py-1.5 text-sm font-semibold mb-6">
            <span className="w-2 h-2 bg-primary-foreground rounded-full animate-pulse" />
            Limited spots available
          </div>

          <h2 className="font-display font-extrabold text-3xl md:text-5xl text-primary-foreground mb-5 leading-tight">
            We are looking for{" "}
            <span className="underline decoration-white/40 decoration-4 underline-offset-4">
              50 early testers
            </span>
          </h2>

          <p className="text-primary-foreground/85 text-lg mb-8 leading-relaxed">
            We are testing this solution and looking for people who face fungus
            problems on clothes. Be among the first 50 to try it{" "}
            <strong className="text-primary-foreground">free.</strong>
          </p>

          <Button
            data-ocid="early_access.primary_button"
            onClick={scrollToForm}
            size="lg"
            className="bg-white text-primary hover:bg-white/90 font-bold rounded-full px-10 text-base shadow-lg"
          >
            Apply for Early Access
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

// ── Form Section ──────────────────────────────────────────────────────────────
function FormSection() {
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [hasFungus, setHasFungus] = useState<boolean | null>(null);
  const [phone, setPhone] = useState("");

  const { mutate, isPending, isSuccess, isError } = useSubmitSignup();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (hasFungus === null) return;
    mutate({
      name: name.trim(),
      city: city.trim(),
      hasFungusIssue: hasFungus,
      phoneNumber: phone.trim(),
    });
  };

  return (
    <section id="signup-form" className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          viewport={{ once: true }}
          className="max-w-xl mx-auto"
        >
          <div className="text-center mb-10">
            <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-3">
              Get Early Access
            </h2>
            <p className="text-muted-foreground">
              Fill in your details and we'll reach out when we're ready for
              testers.
            </p>
          </div>

          <AnimatePresence mode="wait">
            {isSuccess ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                data-ocid="form.success_state"
                className="bg-secondary border border-accent rounded-2xl p-8 text-center"
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-display font-bold text-xl text-foreground mb-2">
                  You're on the list! 🎉
                </h3>
                <p className="text-muted-foreground">
                  Thank you! We'll contact you when we're ready for testers.
                </p>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                className="bg-white rounded-2xl border border-border shadow-card p-8 space-y-5"
              >
                {/* Name */}
                <div className="space-y-2">
                  <Label
                    htmlFor="name"
                    className="font-semibold text-sm text-foreground"
                  >
                    Your Name <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="name"
                    data-ocid="form.input"
                    placeholder="e.g. Priya Sharma"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    autoComplete="name"
                    className="rounded-lg border-border focus-visible:ring-primary/40"
                  />
                </div>

                {/* City */}
                <div className="space-y-2">
                  <Label
                    htmlFor="city"
                    className="font-semibold text-sm text-foreground"
                  >
                    City <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="city"
                    data-ocid="form.city.input"
                    placeholder="e.g. Mumbai"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    required
                    autoComplete="address-level2"
                    className="rounded-lg border-border focus-visible:ring-primary/40"
                  />
                </div>

                {/* Fungus issue */}
                <div className="space-y-3">
                  <Label className="font-semibold text-sm text-foreground">
                    Do you face fungus dots on clothes?{" "}
                    <span className="text-destructive">*</span>
                  </Label>
                  <div className="flex gap-4">
                    <label className="flex items-center gap-2 cursor-pointer group">
                      <input
                        type="radio"
                        data-ocid="form.radio"
                        name="hasFungus"
                        value="yes"
                        checked={hasFungus === true}
                        onChange={() => setHasFungus(true)}
                        className="w-4 h-4 accent-primary cursor-pointer"
                        required
                      />
                      <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                        Yes
                      </span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer group">
                      <input
                        type="radio"
                        name="hasFungus"
                        value="no"
                        checked={hasFungus === false}
                        onChange={() => setHasFungus(false)}
                        className="w-4 h-4 accent-primary cursor-pointer"
                      />
                      <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                        No
                      </span>
                    </label>
                  </div>
                </div>

                {/* Phone */}
                <div className="space-y-2">
                  <Label
                    htmlFor="phone"
                    className="font-semibold text-sm text-foreground"
                  >
                    Phone Number <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="phone"
                    data-ocid="form.phone.input"
                    type="tel"
                    placeholder="e.g. 9876543210"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                    autoComplete="tel"
                    className="rounded-lg border-border focus-visible:ring-primary/40"
                  />
                </div>

                {/* Error */}
                <AnimatePresence>
                  {isError && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      data-ocid="form.error_state"
                      className="flex items-center gap-2 text-sm text-destructive bg-destructive/5 border border-destructive/20 rounded-lg px-3 py-2.5"
                    >
                      <AlertTriangle className="w-4 h-4 flex-shrink-0" />
                      Something went wrong. Please try again.
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Submit */}
                <Button
                  type="submit"
                  data-ocid="form.submit_button"
                  disabled={isPending || hasFungus === null}
                  size="lg"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold rounded-full text-base"
                >
                  {isPending ? (
                    <span
                      data-ocid="form.loading_state"
                      className="flex items-center gap-2"
                    >
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Submitting...
                    </span>
                  ) : (
                    <>
                      I Want Early Access
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </>
                  )}
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  No spam. We'll only contact you about the testing program.
                </p>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

// ── Footer ────────────────────────────────────────────────────────────────────
function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-foreground text-primary-foreground py-8">
      <div className="container mx-auto px-4 text-center space-y-2">
        <div className="flex items-center justify-center gap-2 font-display font-bold text-lg">
          <Leaf className="w-4 h-4 text-primary" />
          FreshFabric
        </div>
        <p className="text-sm text-white/60">
          © {year} FreshFabric — Early Access Program
        </p>
        <p className="text-xs text-white/40">
          Built with love using{" "}
          <a
            href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-white/70 transition-colors"
          >
            caffeine.ai
          </a>
        </p>
      </div>
    </footer>
  );
}

// ── Admin Page ────────────────────────────────────────────────────────────────
function AdminPage() {
  const { data: signups, isLoading, isError } = useGetAllSignups();

  return (
    <div className="min-h-screen bg-muted/40">
      <div className="container mx-auto px-4 py-12">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="font-display font-bold text-2xl text-foreground">
              Admin — Early Testers
            </h1>
            <p className="text-muted-foreground text-sm mt-1">
              All signup submissions
            </p>
          </div>
          <a href="/" className="text-sm text-primary hover:underline">
            ← Back to landing page
          </a>
        </div>

        {isLoading && (
          <div
            data-ocid="form.loading_state"
            className="flex items-center gap-2 text-muted-foreground"
          >
            <Loader2 className="w-4 h-4 animate-spin" />
            Loading signups...
          </div>
        )}

        {isError && (
          <div
            data-ocid="form.error_state"
            className="text-destructive flex items-center gap-2"
          >
            <AlertTriangle className="w-4 h-4" />
            Failed to load signups.
          </div>
        )}

        {!isLoading && !isError && (
          <div className="bg-white rounded-2xl border border-border shadow-xs overflow-hidden">
            <Table data-ocid="admin.table">
              <TableHeader>
                <TableRow className="bg-secondary/50">
                  <TableHead className="font-bold text-foreground">
                    Name
                  </TableHead>
                  <TableHead className="font-bold text-foreground">
                    City
                  </TableHead>
                  <TableHead className="font-bold text-foreground">
                    Has Fungus Issue
                  </TableHead>
                  <TableHead className="font-bold text-foreground">
                    Phone
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {!signups || signups.length === 0 ? (
                  <TableRow>
                    <TableCell
                      colSpan={4}
                      className="text-center text-muted-foreground py-12"
                    >
                      No signups yet.
                    </TableCell>
                  </TableRow>
                ) : (
                  signups.map((s, i) => (
                    <TableRow key={`${s.name}-${s.phoneNumber}-${i}`}>
                      <TableCell className="font-medium">{s.name}</TableCell>
                      <TableCell>{s.city}</TableCell>
                      <TableCell>
                        {s.hasFungusIssue ? (
                          <Badge className="bg-primary/10 text-primary border-primary/20 font-semibold">
                            Yes
                          </Badge>
                        ) : (
                          <Badge
                            variant="outline"
                            className="text-muted-foreground"
                          >
                            No
                          </Badge>
                        )}
                      </TableCell>
                      <TableCell>{s.phoneNumber}</TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </div>
        )}
      </div>
    </div>
  );
}

// ── Landing Page ──────────────────────────────────────────────────────────────
function LandingPage() {
  return (
    <>
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <BeforeAfterSection />
      <EarlyAccessBanner />
      <FormSection />
      <Footer />
    </>
  );
}

// ── App Root ──────────────────────────────────────────────────────────────────
export default function App() {
  const path = useRoute();
  const isAdmin = path === "/admin";

  if (isAdmin) {
    return (
      <div className="font-body">
        <AdminPage />
      </div>
    );
  }

  return (
    <div className="font-body">
      <Navbar />
      <main>
        <LandingPage />
      </main>
    </div>
  );
}
