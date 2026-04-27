import { useState } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMG = "https://cdn.poehali.dev/projects/c53c6671-4310-44c2-a454-6b05e871f911/bucket/64da7180-1199-474f-8b8a-919bf3496b3e.jpeg";
const EVENT_IMG = "https://cdn.poehali.dev/projects/c53c6671-4310-44c2-a454-6b05e871f911/bucket/d470ec43-1887-44a6-8bd3-3b244da27a62.jpeg";

const GALLERY = [
  { url: "https://cdn.poehali.dev/projects/c53c6671-4310-44c2-a454-6b05e871f911/bucket/d470ec43-1887-44a6-8bd3-3b244da27a62.jpeg", caption: "Косплей-вечеринка" },
  { url: "https://cdn.poehali.dev/projects/c53c6671-4310-44c2-a454-6b05e871f911/bucket/64da7180-1199-474f-8b8a-919bf3496b3e.jpeg", caption: "Голос поколения" },
  { url: "https://cdn.poehali.dev/projects/c53c6671-4310-44c2-a454-6b05e871f911/bucket/9db1eb82-aea7-472f-ba0c-48268b70532e.jpeg", caption: "Путешествие в мир сказок" },
  { url: "https://cdn.poehali.dev/projects/c53c6671-4310-44c2-a454-6b05e871f911/bucket/8c634609-5741-4f84-b319-c2c9fb4cb792.jpeg", caption: "Волонтёрство" },
  { url: "https://cdn.poehali.dev/projects/c53c6671-4310-44c2-a454-6b05e871f911/bucket/a2b3878e-404c-4b68-9160-918171ba6aad.jpeg", caption: "День Победы" },
  { url: "https://cdn.poehali.dev/projects/c53c6671-4310-44c2-a454-6b05e871f911/bucket/c4cfea52-a081-4506-ab69-b9369e3558bb.jpeg", caption: "Праздник для мам" },
  { url: "https://cdn.poehali.dev/projects/c53c6671-4310-44c2-a454-6b05e871f911/bucket/27f8bf40-6fc6-4c66-bc98-1f4cda2f9e54.jpeg", caption: "Новогодний праздник" },
];

const CATEGORIES = ["Все", "Мастер-классы", "Концерты", "Спорт", "Волонтёрство", "Образование"];

const EVENTS = [
  {
    id: 1,
    title: "Стендап-баттл молодых комиков",
    date: "3 мая",
    time: "19:00",
    category: "Концерты",
    color: "var(--neon-pink)",
    emoji: "🎤",
    seats: 120,
    desc: "Открытый микрофон для начинающих и опытных стендаперов города",
  },
  {
    id: 2,
    title: "Граффити-воркшоп на открытом воздухе",
    date: "5 мая",
    time: "12:00",
    category: "Мастер-классы",
    color: "var(--neon-orange)",
    emoji: "🎨",
    seats: 30,
    desc: "Научись уличному искусству с профессиональными художниками",
  },
  {
    id: 3,
    title: "Турнир по стритболу 3×3",
    date: "7 мая",
    time: "10:00",
    category: "Спорт",
    color: "var(--neon-green)",
    emoji: "🏀",
    seats: 64,
    desc: "Командный турнир по уличному баскетболу среди молодёжи города",
  },
  {
    id: 4,
    title: "Хакатон: умный город",
    date: "10 мая",
    time: "09:00",
    category: "Образование",
    color: "var(--neon-purple)",
    emoji: "💻",
    seats: 50,
    desc: "48 часов, чтобы создать проект для городской среды будущего",
  },
  {
    id: 5,
    title: "Весенний субботник — парк «Молодёжный»",
    date: "12 мая",
    time: "10:00",
    category: "Волонтёрство",
    color: "#4ADE80",
    emoji: "🌿",
    seats: 200,
    desc: "Вместе сделаем наш парк ещё красивее и уютнее",
  },
  {
    id: 6,
    title: "Open Air: живая музыка на крыше",
    date: "17 мая",
    time: "18:00",
    category: "Концерты",
    color: "var(--neon-pink)",
    emoji: "🎸",
    seats: 80,
    desc: "Лучшие молодёжные группы города — закат, музыка, атмосфера",
  },
];

const ABOUT_STATS = [
  { value: "3000+", label: "участников", color: "var(--neon-orange)" },
  { value: "150+", label: "мероприятий в год", color: "var(--neon-purple)" },
  { value: "8 лет", label: "работаем для вас", color: "var(--neon-green)" },
];

export default function Index() {
  const [activeCategory, setActiveCategory] = useState("Все");
  const [menuOpen, setMenuOpen] = useState(false);
  const [showPhone, setShowPhone] = useState(false);

  const filtered = activeCategory === "Все"
    ? EVENTS
    : EVENTS.filter((e) => e.category === activeCategory);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div className="noise-bg min-h-screen bg-background text-foreground overflow-x-hidden">

      {/* PHONE MODAL */}
      {showPhone && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-6"
          style={{ background: "rgba(0,0,0,0.85)", backdropFilter: "blur(12px)" }}
          onClick={() => setShowPhone(false)}>
          <div className="relative text-center rounded-3xl p-10 max-w-sm w-full"
            style={{ background: "rgba(18,18,18,0.98)", border: "1px solid rgba(255,107,0,0.3)" }}
            onClick={(e) => e.stopPropagation()}>
            <div className="text-5xl mb-4">🔥</div>
            <div className="font-display text-3xl font-bold uppercase tracking-widest mb-2 gradient-text">
              Дерзай!
            </div>
            <p className="font-body text-white/50 text-sm mb-6">Звони — мы ждём тебя!</p>
            <a href="tel:89997811526"
              className="block w-full py-4 rounded-2xl font-display text-2xl font-bold text-black tracking-wider neon-glow-orange transition-all duration-200 hover:scale-105"
              style={{ background: "var(--neon-orange)" }}>
              8 (999) 781-15-26
            </a>
            <button onClick={() => setShowPhone(false)}
              className="mt-4 font-body text-white/30 text-sm hover:text-white/60 transition-colors">
              закрыть
            </button>
          </div>
        </div>
      )}

      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4"
        style={{ background: "rgba(10,10,10,0.85)", backdropFilter: "blur(20px)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <button onClick={() => scrollTo("hero")} className="font-display text-xl font-bold tracking-widest uppercase">
          <span className="gradient-text">МП</span>
          <span className="text-white/70 ml-2 text-sm font-body font-normal tracking-wide">Молодёжка</span>
        </button>
        <div className="hidden md:flex items-center gap-8">
          {[{ label: "О нас", id: "about" }, { label: "События", id: "events" }].map((item) => (
            <button key={item.id} onClick={() => scrollTo(item.id)}
              className="text-sm font-body text-white/60 hover:text-white transition-colors duration-200 tracking-wide">
              {item.label}
            </button>
          ))}
          <button onClick={() => setShowPhone(true)}
            className="px-5 py-2 rounded-full text-sm font-semibold text-black transition-all duration-200 hover:scale-105"
            style={{ background: "var(--neon-orange)" }}>
            Записаться
          </button>
        </div>
        <button className="md:hidden text-white/70" onClick={() => setMenuOpen(!menuOpen)}>
          <Icon name={menuOpen ? "X" : "Menu"} size={24} />
        </button>
      </nav>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-8"
          style={{ background: "rgba(8,8,8,0.97)", backdropFilter: "blur(20px)" }}>
          {[{ label: "О нас", id: "about" }, { label: "События", id: "events" }].map((item) => (
            <button key={item.id} onClick={() => scrollTo(item.id)}
              className="font-display text-4xl font-bold uppercase tracking-widest gradient-text">
              {item.label}
            </button>
          ))}
        </div>
      )}

      {/* HERO */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={HERO_IMG} alt="Молодёжное пространство" className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(8,8,8,0.5) 0%, rgba(8,8,8,0.7) 60%, rgba(8,8,8,1) 100%)" }} />
        </div>

        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-20 blur-3xl animate-float"
          style={{ background: "var(--neon-orange)" }} />
        <div className="absolute bottom-1/3 right-1/4 w-72 h-72 rounded-full opacity-15 blur-3xl animate-float"
          style={{ background: "var(--neon-purple)", animationDelay: "1.5s" }} />

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto" style={{ animation: "slideUp 0.9s ease forwards" }}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 text-sm font-semibold"
            style={{ background: "rgba(255,107,0,0.15)", border: "1px solid rgba(255,107,0,0.4)", color: "var(--neon-orange)" }}>
            <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: "var(--neon-orange)" }} />
            Работаем ежедневно · 12:30 — 20:30
          </div>

          <h1 className="font-display text-6xl md:text-9xl font-bold uppercase tracking-tight leading-none mb-6">
            <span className="gradient-text">Место,</span>
            <br />
            <span className="text-white">где всё</span>
            <br />
            <span className="gradient-text">начинается</span>
          </h1>

          <p className="font-body text-white/60 text-lg md:text-xl max-w-xl mx-auto mb-10 leading-relaxed">
            Молодёжка — живой хаб для творчества, спорта, общения и крутых событий твоего города
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={() => scrollTo("events")}
              className="px-8 py-4 rounded-full font-display font-bold text-lg uppercase tracking-wider text-black transition-all duration-200 hover:scale-105 neon-glow-orange"
              style={{ background: "var(--neon-orange)" }}>
              Все события
            </button>
            <button onClick={() => scrollTo("about")}
              className="px-8 py-4 rounded-full font-display font-bold text-lg uppercase tracking-wider text-white transition-all duration-200 hover:scale-105 gradient-border">
              О нас
            </button>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <Icon name="ChevronDown" size={28} className="text-white/30" />
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24 px-6 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="text-sm font-semibold tracking-[0.3em] uppercase mb-4"
              style={{ color: "var(--neon-orange)" }}>
              О нас
            </div>
            <h2 className="font-display text-5xl md:text-6xl font-bold uppercase leading-tight mb-6 text-white">
              Энергия.<br />Свобода.<br />
              <span className="gradient-text">Движение.</span>
            </h2>
            <p className="font-body text-white/60 text-lg leading-relaxed mb-6">
              Мы — «Молодёжка»! Наше сообщество создано для тех, кто хочет изменить мир вокруг себя и найти единомышленников. Здесь ты сможешь реализовать свои идеи, заниматься спортом, творчеством и волонтёрством.
            </p>
            <p className="font-body text-white/50 text-base leading-relaxed mb-10">
              Мы верим, что молодёжь — это будущее, и вместе мы можем сделать его ярче и лучше! Присоединяйся к нам, и ты откроешь для себя новые возможности, найдёшь друзей и станешь частью большого и дружного сообщества. Вместе мы сильнее!
            </p>
            <div className="flex flex-wrap gap-3">
              {["Коворкинг", "Сцена", "Спортзал", "Мастерская", "Кино", "Кафе"].map((tag) => (
                <span key={tag} className="px-4 py-2 rounded-full text-sm font-semibold gradient-border text-white/80">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -top-6 -left-6 w-full h-full rounded-3xl opacity-30"
              style={{ background: "linear-gradient(135deg, var(--neon-orange), var(--neon-purple))" }} />
            <img src={EVENT_IMG} alt="Наши события" className="relative w-full h-80 md:h-96 object-cover rounded-3xl" />
            <div className="absolute -bottom-6 -right-6 p-5 rounded-2xl"
              style={{ background: "rgba(10,10,10,0.9)", border: "1px solid rgba(255,107,0,0.3)", backdropFilter: "blur(20px)" }}>
              <div className="font-display text-3xl font-bold" style={{ color: "var(--neon-orange)" }}>3000+</div>
              <div className="font-body text-white/60 text-sm mt-1">активных участников</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 mt-20">
          {ABOUT_STATS.map((stat) => (
            <div key={stat.label} className="gradient-border rounded-2xl p-4 text-center overflow-hidden">
              <div className="font-display text-3xl md:text-4xl font-bold mb-2 break-words" style={{ color: stat.color }}>
                {stat.value}
              </div>
              <div className="font-body text-white/50 text-xs md:text-sm leading-tight break-words">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* GALLERY */}
        <div className="mt-20">
          <div className="text-sm font-semibold tracking-[0.3em] uppercase mb-6 text-center"
            style={{ color: "var(--neon-green)" }}>
            Наши моменты
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {GALLERY.map((photo, i) => (
              <div key={i} className="group relative overflow-hidden rounded-2xl aspect-square cursor-pointer">
                <img
                  src={photo.url}
                  alt={photo.caption}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: "linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 60%)" }}>
                  <span className="font-body text-white text-sm font-semibold">{photo.caption}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EVENTS */}
      <section id="events" className="py-24 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <div className="text-sm font-semibold tracking-[0.3em] uppercase mb-4"
            style={{ color: "var(--neon-purple)" }}>
            Афиша
          </div>
          <h2 className="font-display text-5xl md:text-7xl font-bold uppercase text-white mb-4">
            События мая
          </h2>
          <p className="font-body text-white/50 text-lg">Выбери своё — и приходи</p>
        </div>

        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className="px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 hover:scale-105"
              style={activeCategory === cat
                ? { background: "var(--neon-purple)", color: "#fff" }
                : { background: "rgba(255,255,255,0.06)", color: "rgba(255,255,255,0.6)", border: "1px solid rgba(255,255,255,0.1)" }}>
              {cat}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((event) => (
            <div key={event.id}
              className="gradient-border rounded-2xl p-6 hover:scale-[1.02] transition-all duration-300 cursor-pointer group"
              style={{ background: "rgba(255,255,255,0.03)" }}>
              <div className="flex items-start justify-between mb-4">
                <div className="text-4xl">{event.emoji}</div>
                <span className="px-3 py-1 rounded-full text-xs font-semibold"
                  style={{ background: `${event.color}22`, color: event.color, border: `1px solid ${event.color}44` }}>
                  {event.category}
                </span>
              </div>

              <h3 className="font-display text-xl font-bold uppercase text-white mb-2 leading-tight">
                {event.title}
              </h3>
              <p className="font-body text-white/50 text-sm mb-5 leading-relaxed">{event.desc}</p>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1.5 text-sm" style={{ color: event.color }}>
                    <Icon name="Calendar" size={14} />
                    <span className="font-semibold">{event.date}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-sm text-white/40">
                    <Icon name="Clock" size={14} />
                    <span>{event.time}</span>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-xs text-white/30">
                  <Icon name="Users" size={12} />
                  <span>{event.seats} мест</span>
                </div>
              </div>

              <button onClick={() => setShowPhone(true)}
                className="mt-5 w-full py-3 rounded-xl text-sm font-bold uppercase tracking-wider transition-all duration-200 hover:opacity-90"
                style={{ background: `${event.color}22`, color: event.color, border: `1px solid ${event.color}44` }}>
                Записаться →
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center rounded-3xl p-12 relative overflow-hidden"
          style={{ background: "linear-gradient(135deg, rgba(255,107,0,0.15), rgba(155,89,255,0.15))", border: "1px solid rgba(255,107,0,0.2)" }}>
          <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full blur-3xl opacity-20"
            style={{ background: "var(--neon-orange)" }} />
          <div className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full blur-3xl opacity-15"
            style={{ background: "var(--neon-purple)" }} />
          <div className="relative z-10">
            <div className="text-5xl mb-4">✨</div>
            <h2 className="font-display text-4xl md:text-6xl font-bold uppercase text-white mb-4">
              Стань частью<br />
              <span className="gradient-text">движения</span>
            </h2>
            <p className="font-body text-white/50 text-lg mb-8 max-w-lg mx-auto">
              Присоединяйся к тысячам молодых людей, которые уже нашли своё место здесь
            </p>
            <button onClick={() => scrollTo("events")}
              className="px-10 py-4 rounded-full font-display font-bold text-xl uppercase tracking-wider text-black transition-all duration-200 hover:scale-105 neon-glow-orange"
              style={{ background: "var(--neon-orange)" }}>
              Выбрать событие
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t py-10 px-6"
        style={{ borderColor: "rgba(255,255,255,0.07)" }}>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="font-display text-xl font-bold gradient-text uppercase tracking-widest mb-1">
              Молодёжка
            </div>
            <div className="flex items-center gap-1.5 font-body text-white/40 text-sm mt-1">
              <Icon name="MapPin" size={13} />
              г. Суворов, ул. Садовая, 5
            </div>
            <a href="tel:89997811526" className="flex items-center gap-1.5 font-body text-white/40 hover:text-white transition-colors text-sm mt-1">
              <Icon name="Phone" size={13} />
              8 (999) 781-15-26
            </a>
            <div className="flex items-center gap-1.5 font-body text-white/40 text-sm mt-1">
              <Icon name="Clock" size={13} />
              12:30 — 20:30
            </div>
          </div>
          <div className="flex items-center gap-4">
            <a href="https://t.me/Molodezhka250" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-full font-body text-sm font-semibold transition-all duration-200 hover:scale-105"
              style={{ background: "rgba(0,136,204,0.15)", color: "#29B6F6", border: "1px solid rgba(0,136,204,0.3)" }}>
              <Icon name="Send" size={14} />
              Telegram
            </a>
          </div>
          <div className="font-body text-white/20 text-sm">
            © 2026 Все права защищены
          </div>
        </div>
      </footer>

    </div>
  );
}