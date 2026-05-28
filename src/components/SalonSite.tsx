import { useState } from "react";
import { Scissors, Palette, Sparkles, Droplets, Wind, Crown, Hand, Eye, MapPin, Phone, Mail, Clock, Instagram, Facebook } from "lucide-react";
import { toast } from "sonner";
import heroImg from "@/assets/hero-salon.jpg";
import portraitImg from "@/assets/portrait.jpg";

const services = [
  { icon: Scissors, title: "Taglio Capelli", desc: "Tagli su misura, studiati per valorizzare la forma del viso e lo stile personale di ogni cliente." },
  { icon: Palette, title: "Colorazione", desc: "Colori vibranti e naturali con prodotti professionali rispettosi della fibra capillare." },
  { icon: Sparkles, title: "Mèches & Balayage", desc: "Schiariture artigianali con tecniche francesi per un effetto luminoso e naturale." },
  { icon: Droplets, title: "Idratazione & Trattamenti", desc: "Rituali rigeneranti con cheratina e oli preziosi per capelli morbidi e disciplinati." },
  { icon: Wind, title: "Extension Capelli", desc: "Allungamento con capelli 100% naturali, applicazione invisibile e di lunga durata." },
  { icon: Crown, title: "Parrucche", desc: "Selezione esclusiva di parrucche artigianali in fibra naturale e sintetica premium." },
  { icon: Hand, title: "Manicure & Pedicure", desc: "Cura completa di mani e piedi con smalti semipermanenti e ricostruzione unghie." },
  { icon: Eye, title: "Ciglia & Sopracciglia", desc: "Laminazione, extension ciglia e design sopracciglia per uno sguardo intenso." },
];

export default function SalonSite() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast.error("Compila tutti i campi del modulo.");
      return;
    }
    if (form.name.length > 100 || form.email.length > 255 || form.message.length > 1000) {
      toast.error("Uno dei campi supera la lunghezza consentita.");
      return;
    }
    toast.success("Messaggio inviato! Ti contatteremo presto.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <header className="fixed top-0 z-50 w-full backdrop-blur-md bg-background/80 border-b border-border/50">
        <nav className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
          <a href="#home" className="font-display text-2xl tracking-wide">
            Stile <span className="text-[var(--gold)]">&</span> Co.
          </a>
          <ul className="hidden md:flex items-center gap-10 text-sm">
            <li><a href="#servizi" className="hover:text-[var(--gold)] transition">Servizi</a></li>
            <li><a href="#chi-siamo" className="hover:text-[var(--gold)] transition">Chi Siamo</a></li>
            <li><a href="#contatti" className="hover:text-[var(--gold)] transition">Contatti</a></li>
          </ul>
          <a href="#contatti" className="hidden md:inline-flex items-center px-5 py-2.5 bg-primary text-primary-foreground text-sm rounded-full hover:opacity-90 transition">
            Prenota
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section id="home" className="relative min-h-screen flex items-end pt-20">
        <img src={heroImg} alt="Interno del salone Stile & Co a Roma" width={1920} height={1080} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pb-20 lg:pb-32 text-background">
          <p className="uppercase tracking-[0.3em] text-xs mb-6 text-[var(--gold)]">Salone di bellezza · Roma</p>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[0.95] max-w-4xl">
            L'arte di esaltare<br />la <em className="text-[var(--gold)]">bellezza</em> autentica.
          </h1>
          <p className="mt-8 max-w-xl text-base md:text-lg text-background/85">
            Nel cuore di Roma, Stile & Co. è il rifugio dove tecnica, eleganza e cura si fondono per regalarti un'esperienza di bellezza indimenticabile.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#contatti" className="inline-flex items-center px-8 py-4 bg-[var(--gold)] text-primary font-medium rounded-full hover:scale-105 transition-transform shadow-[var(--shadow-elegant)]">
              Prenota un appuntamento
            </a>
            <a href="#servizi" className="inline-flex items-center px-8 py-4 border border-background/40 text-background rounded-full hover:bg-background/10 transition">
              Scopri i servizi
            </a>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="servizi" className="py-24 lg:py-32 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mb-16">
            <p className="uppercase tracking-[0.3em] text-xs text-[var(--gold)] mb-4">I nostri servizi</p>
            <h2 className="font-display text-4xl md:text-6xl">Trattamenti su misura, eseguiti con maestria.</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
            {services.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-background p-8 lg:p-10 group hover:bg-secondary transition-colors">
                <Icon className="w-8 h-8 text-[var(--gold)] mb-6" strokeWidth={1.25} />
                <h3 className="font-display text-2xl mb-3">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-16 text-center">
            <a href="#contatti" className="inline-flex items-center px-8 py-4 bg-primary text-primary-foreground rounded-full hover:opacity-90 transition">
              Prenota un appuntamento
            </a>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="chi-siamo" className="py-24 lg:py-32 px-6 lg:px-10 bg-secondary/50">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <img src={portraitImg} alt="Ritratto modella - stile Stile & Co." loading="lazy" width={1024} height={1024} className="w-full h-[600px] object-cover rounded-sm shadow-[var(--shadow-elegant)]" />
            <div className="absolute -bottom-8 -right-8 bg-background p-8 max-w-xs hidden md:block shadow-[var(--shadow-soft)]">
              <p className="font-display text-5xl text-[var(--gold)]">15+</p>
              <p className="text-sm text-muted-foreground mt-2">anni di esperienza nel cuore di Roma</p>
            </div>
          </div>
          <div>
            <p className="uppercase tracking-[0.3em] text-xs text-[var(--gold)] mb-4">Chi siamo</p>
            <h2 className="font-display text-4xl md:text-5xl mb-6">Un atelier di bellezza nel cuore della Capitale.</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Stile & Co. nasce dalla passione per l'estetica italiana e dall'amore per il dettaglio. Il nostro team di hair stylist e specialist altamente qualificati ti accoglie in un ambiente raffinato, dove ogni trattamento diventa un rituale personalizzato.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Utilizziamo esclusivamente prodotti professionali di alta gamma, selezionati per garantire risultati eccellenti e duraturi, nel rispetto della salute dei tuoi capelli e della tua pelle.
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contatti" className="py-24 lg:py-32 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mb-16">
            <p className="uppercase tracking-[0.3em] text-xs text-[var(--gold)] mb-4">Contatti</p>
            <h2 className="font-display text-4xl md:text-6xl">Vieni a trovarci.</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <InfoRow icon={MapPin} title="Indirizzo" lines={["Via dei Coronari 142", "00186 Roma, Italia"]} />
              <InfoRow icon={Phone} title="Telefono" lines={["+39 06 6821 4475"]} />
              <InfoRow icon={Mail} title="Email" lines={["info@stileandco.it"]} />
              <InfoRow icon={Clock} title="Orari" lines={["Mar–Ven: 09:00 – 20:00", "Sab: 09:00 – 19:00", "Dom & Lun: chiuso"]} />
              <div className="flex gap-4 pt-4">
                <a href="#" aria-label="Instagram" className="w-11 h-11 grid place-items-center rounded-full border border-border hover:bg-primary hover:text-primary-foreground transition"><Instagram className="w-4 h-4" /></a>
                <a href="#" aria-label="Facebook" className="w-11 h-11 grid place-items-center rounded-full border border-border hover:bg-primary hover:text-primary-foreground transition"><Facebook className="w-4 h-4" /></a>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="bg-card p-8 lg:p-10 rounded-sm shadow-[var(--shadow-soft)] space-y-5">
              <h3 className="font-display text-3xl mb-2">Inviaci un messaggio</h3>
              <p className="text-sm text-muted-foreground mb-4">Ti risponderemo entro 24 ore.</p>
              <Field label="Nome" id="name" value={form.name} onChange={(v) => setForm({ ...form, name: v })} maxLength={100} />
              <Field label="Email" id="email" type="email" value={form.email} onChange={(v) => setForm({ ...form, email: v })} maxLength={255} />
              <div>
                <label htmlFor="msg" className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">Messaggio</label>
                <textarea
                  id="msg"
                  rows={5}
                  maxLength={1000}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full bg-background border border-input px-4 py-3 rounded-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                />
              </div>
              <button type="submit" className="w-full px-6 py-4 bg-primary text-primary-foreground rounded-full hover:opacity-90 transition font-medium">
                Prenota un appuntamento
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-10 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p className="font-display text-lg text-foreground">Stile <span className="text-[var(--gold)]">&</span> Co.</p>
          <p>© {new Date().getFullYear()} Stile & Co. — Tutti i diritti riservati.</p>
        </div>
      </footer>
    </div>
  );
}

function InfoRow({ icon: Icon, title, lines }: { icon: React.ElementType; title: string; lines: string[] }) {
  return (
    <div className="flex gap-5">
      <div className="w-12 h-12 shrink-0 grid place-items-center rounded-full bg-secondary text-[var(--gold)]">
        <Icon className="w-5 h-5" strokeWidth={1.5} />
      </div>
      <div>
        <p className="font-display text-xl mb-1">{title}</p>
        {lines.map((l) => <p key={l} className="text-sm text-muted-foreground">{l}</p>)}
      </div>
    </div>
  );
}

function Field({ label, id, value, onChange, type = "text", maxLength }: { label: string; id: string; value: string; onChange: (v: string) => void; type?: string; maxLength?: number }) {
  return (
    <div>
      <label htmlFor={id} className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">{label}</label>
      <input
        id={id}
        type={type}
        value={value}
        maxLength={maxLength}
        onChange={(e) => onChange(e.target.value)}
        className="w-full bg-background border border-input px-4 py-3 rounded-sm focus:outline-none focus:ring-2 focus:ring-ring"
      />
    </div>
  );
}
