import React, { useEffect, useRef, useState } from 'react';
import { MessageCircle, Star, Camera, PhoneCall, CheckCircle2, ChevronDown, MapPin, Clock, ArrowRight, ShieldCheck, Zap } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// --- Componentes Reutilizáveis & Utilitários ---

const WhatsAppButton = ({ children, className = "", icon = true, id = "btn-whatsapp-conversion", variant = "primary" }) => {
  const baseClasses = "rounded-full flex items-center justify-center gap-3 transition-all duration-500 font-bold tracking-tight active:scale-95 group";
  const variants = {
    primary: "bg-whatsapp text-white px-10 py-5 text-xl shadow-[0_15px_35px_-5px_rgba(37,211,102,0.4)] hover:shadow-[0_20px_45px_-5px_rgba(37,211,102,0.5)] hover:-translate-y-1.5 hover:scale-[1.02]",
    outline: "border-2 border-whatsapp text-whatsapp px-8 py-4 hover:bg-whatsapp hover:text-white",
    nav: "bg-whatsapp text-white px-6 py-2.5 text-sm hover:shadow-lg hover:-translate-y-0.5"
  };

  return (
    <a
      href="https://wa.me/5527999999999"
      id={id}
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseClasses} ${variants[variant]} ${className}`}
    >
      {icon && <MessageCircle size={variant === 'primary' ? 24 : 18} className="group-hover:rotate-12 transition-transform" />}
      {children}
    </a>
  );
};

// --- Seções ---

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 py-6 px-6 md:px-16 flex justify-between items-center ${
      scrolled ? 'bg-white/80 backdrop-blur-xl shadow-sm py-4' : 'bg-transparent'
    }`}>
      <div className="flex items-center gap-2">
        <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white font-black text-xl shadow-lg">T</div>
        <div className="text-2xl font-black text-primary tracking-tighter uppercase">
          Top Clean<span className="text-accent">.ES</span>
        </div>
      </div>
      <div className="hidden lg:flex gap-8 text-sm font-bold text-primary uppercase tracking-widest opacity-80">
        <a href="#solucao" className="hover:text-accent transition-colors">Solução</a>
        <a href="#depoimentos" className="hover:text-accent transition-colors">Clientes</a>
        <a href="#faq" className="hover:text-accent transition-colors">Dúvidas</a>
      </div>
      <WhatsAppButton variant="nav">
        Orçamento Rápido
      </WhatsAppButton>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-white">
      {/* Background Shapes */}
      <div className="absolute top-0 right-0 w-[60%] h-full bg-surface skew-x-[-6deg] origin-top translate-x-20 z-0 hidden lg:block"></div>
      
      <div className="container mx-auto px-6 md:px-16 pt-32 pb-20 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
        <div className="v2-reveal">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-accent rounded-full text-xs font-black uppercase tracking-[0.2em] mb-8 animate-pulse">
             <ShieldCheck size={14} /> Especialista em Vila Velha
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-black text-primary leading-[0.95] mb-8 tracking-tighter">
            Seu sofá e tapete <span className="text-accent underline decoration-gold/40 decoration-wavy underline-offset-8">recuperados</span>:
          </h1>
          <p className="text-xl md:text-2xl text-text-muted mb-12 max-w-xl font-inter leading-relaxed">
            Limpeza profunda que devolve o aspecto de <span className="text-gold font-black italic">"novo de novo"</span>, 
            com toque macio e muito cheiroso. Atendimento em domicílio no Brisamar e região.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 items-center mb-12">
            <WhatsAppButton className="w-full sm:w-fit font-black uppercase tracking-widest text-base">
              Enviar Foto no WhatsApp
            </WhatsAppButton>
            <div className="flex flex-col items-center sm:items-start opacity-70">
              <div className="flex gap-0.5 text-gold mb-1">
                {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
              </div>
              <span className="text-[10px] uppercase font-bold tracking-tighter text-primary">Nota 5.0 no Google</span>
            </div>
          </div>

          <p className="text-sm text-text-muted/60 italic border-l-2 border-accent/20 pl-4 py-2">
            "Clientes relatam que o sofá até mudou de cor após nossa visita."
          </p>
        </div>

        <div className="relative v2-reveal-right mt-12 lg:mt-0">
          <div className="relative rounded-[3rem] overflow-hidden shadow-2xl group border-8 border-white">
            <img 
              src="/hero-v2.png" 
              alt="Limpeza Profunda" 
              className="w-full aspect-[4/5] object-cover transition-transform duration-[2s] group-hover:scale-105"
            />
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent"></div>
            
            {/* Floating Badge */}
            <div className="absolute bottom-8 left-8 right-8 bg-white/20 backdrop-blur-2xl p-6 rounded-3xl border border-white/30 text-white shadow-2xl">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-whatsapp rounded-2xl shadow-xl">
                  <CheckCircle2 size={32} />
                </div>
                <div>
                  <h3 className="font-black text-lg uppercase tracking-wider leading-none">Resultados Reais</h3>
                  <p className="text-sm opacity-90 font-medium">99% de satisfação confirmada</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Decorative Circles */}
          <div className="absolute -top-12 -right-12 w-64 h-64 bg-accent/10 rounded-full blur-[80px] -z-10 animate-pulse"></div>
          <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-gold/10 rounded-full blur-[60px] -z-10 animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>
      </div>
    </section>
  );
};

const PainSection = () => (
  <section className="py-32 bg-primary relative overflow-hidden">
    <div className="container mx-auto px-6 max-w-5xl text-center relative z-10 v2-reveal">
      <div className="text-accent/40 font-black text-8xl md:text-[12rem] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10 select-none">PERIGO</div>
      <h2 className="text-gold font-black uppercase tracking-[0.3em] text-sm mb-8">A Dura Realidade</h2>
      <p className="text-3xl md:text-5xl font-black text-white leading-[1.1] mb-12 tracking-tight">
        A dura realidade é que <span className="text-accent italic">"só passar um pano"</span> cria apenas uma falsa sensação de higiene.
      </p>
      <div className="grid md:grid-cols-2 gap-12 text-left mt-20">
        <div className="bg-white/5 backdrop-blur-md p-10 rounded-[2.5rem] border border-white/10 hover:bg-white/10 transition-colors">
          <div className="w-12 h-12 bg-red-500/20 text-red-400 rounded-2xl flex items-center justify-center mb-6">
            <Zap size={24} />
          </div>
          <p className="text-blue-100/80 leading-relaxed font-medium">
            A sujeira profunda, os ácaros e o cheiro impregnado continuam lá. 
            Não se engane com métodos caseiros que podem estragar seu tecido.
          </p>
        </div>
        <div className="bg-white/5 backdrop-blur-md p-10 rounded-[2.5rem] border border-white/10 hover:bg-white/10 transition-colors">
          <div className="w-12 h-12 bg-accent/20 text-accent rounded-2xl flex items-center justify-center mb-6">
            <ShieldCheck size={24} />
          </div>
          <p className="text-blue-100/80 leading-relaxed font-medium">
            Nós lidamos com o que as limpezas superficiais não resolvem. 
            Técnica profissional, extração profunda e secagem inteligente.
          </p>
        </div>
      </div>
    </div>
  </section>
);

const SolutionGrid = () => {
  const steps = [
    {
      icon: <Camera size={38} />,
      title: "1. Fotografe agora",
      desc: "Tire uma foto clara do estofado ou tapete e envie no WhatsApp.",
      accent: "gold"
    },
    {
      icon: <PhoneCall size={38} />,
      title: "2. Avaliação real",
      desc: "Analisamos a imagem e enviamos o orçamento com datas disponíveis.",
      accent: "accent"
    },
    {
      icon: <CheckCircle2 size={38} />,
      title: "3. Casa Nova",
      desc: "Executamos o serviço com agilidade e devolvemos o luxo ao seu lar.",
      accent: "whatsapp"
    }
  ];

  return (
    <section id="solucao" className="py-32 bg-white px-6 overflow-hidden">
      <div className="container mx-auto">
        <div className="text-center mb-24 v2-reveal">
          <h2 className="text-4xl md:text-6xl font-black text-primary mb-6 tracking-tighter underline decoration-accent/20 decoration-8 underline-offset-8">Como é a triagem?</h2>
          <p className="text-text-muted text-xl font-medium">Processo simplificado e de alto padrão</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-12 relative">
          {/* Connector Line */}
          <div className="absolute top-1/2 left-0 w-full h-1 bg-surface hidden lg:block -translate-y-1/2 -z-10 bg-gradient-to-r from-transparent via-accent/10 to-transparent"></div>
          
          {steps.map((step, idx) => (
            <div key={idx} className="bg-white p-12 rounded-[3.5rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.05)] v2-reveal-up hover:shadow-[0_40px_80px_-15px_rgba(0,0,0,0.1)] transition-all duration-500 group border border-gray-50">
              <div className={`w-20 h-20 rounded-3xl mb-10 flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 bg-surface text-${step.accent}`}>
                {step.icon}
              </div>
              <h3 className="text-2xl font-black text-primary mb-6">{step.title}</h3>
              <p className="text-text-muted leading-relaxed font-medium">{step.desc}</p>
              <div className="mt-8 pt-8 border-t border-gray-50 flex items-center gap-2 text-accent font-black uppercase tracking-widest text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                Vamos Começar <ArrowRight size={14} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const SocialProof = () => (
  <section id="depoimentos" className="py-32 bg-surface px-6 relative">
    <div className="container mx-auto relative z-10">
      <div className="flex flex-col lg:flex-row gap-16 items-center">
        <div className="lg:w-1/3 v2-reveal">
          <h2 className="text-4xl md:text-5xl font-black text-primary mb-8 tracking-tighter leading-none">Quem confia na Top Clean.</h2>
          <p className="text-text-muted text-lg mb-10 leading-relaxed font-medium">
            Nossa maior recompensa é o brilho nos olhos de cada cliente ao ver o resultado final.
          </p>
          <div className="flex gap-4 p-8 bg-white rounded-[2rem] shadow-sm">
             <div className="text-3xl font-black text-accent leading-none font-inter">5.0</div>
             <div className="flex flex-col gap-1">
                <div className="flex text-gold">
                  {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                </div>
                <div className="text-[10px] font-black uppercase tracking-widest opacity-60">Baseado em +200 avaliações</div>
             </div>
          </div>
        </div>
        
        <div className="lg:w-2/3 grid md:grid-cols-2 gap-8 v2-reveal-right">
          <div className="bg-white p-12 rounded-[3rem] shadow-xl border border-gray-100 flex flex-col gap-8 transform md:translate-y-12">
            <div className="text-accent opacity-20"><Zap size={48} fill="currentColor" /></div>
            <p className="text-xl font-bold italic text-primary leading-snug font-inter">
              "Estão de parabéns!! Serviço rápido e perfeito, os funcionários muito educados. O sofá até mudou de cor 😂"
            </p>
            <div className="flex items-center gap-4 border-t border-gray-50 pt-8 mt-auto">
              <div className="w-14 h-14 rounded-2xl bg-accent text-white font-black flex items-center justify-center text-xl">AS</div>
              <span className="font-black text-primary">Ana Dias Schneider</span>
            </div>
          </div>
          
          <div className="bg-primary p-12 rounded-[3rem] shadow-2xl flex flex-col gap-8 text-white relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 text-white opacity-10 group-hover:rotate-12 transition-transform duration-700">
               <CheckCircle2 size={120} />
            </div>
            <p className="text-xl font-bold italic leading-snug relative z-10 font-inter">
              "Achei que meu sofá não tinha jeito... Ficou novo de novo. valeu Top Clean."
            </p>
            <div className="flex items-center gap-4 border-t border-white/10 pt-8 mt-auto relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-md font-black flex items-center justify-center text-xl">BC</div>
              <span className="font-black">Bruno Crisostomo</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);

  return (
    <div className="mb-6">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full flex justify-between items-center p-8 text-left transition-all duration-300 rounded-[2rem] border-2 group ${
          isOpen ? 'bg-primary border-primary text-white shadow-xl translate-x-2' : 'bg-white border-gray-100 text-primary hover:border-accent/40'
        }`}
      >
        <span className="text-lg md:text-xl font-black tracking-tight">{question}</span>
        <div className={`p-2 rounded-xl transition-all duration-500 ${isOpen ? 'bg-white text-primary rotate-180' : 'bg-surface text-accent group-hover:bg-accent group-hover:text-white'}`}>
           <ChevronDown size={24} />
        </div>
      </button>
      <div 
        ref={contentRef}
        className="overflow-hidden transition-all duration-500 ease-in-out"
        style={{ maxHeight: isOpen ? contentRef.current?.scrollHeight : 0 }}
      >
        <div className="p-10 text-lg text-text-muted font-medium leading-relaxed bg-surface/50 rounded-b-[2rem] -mt-8 pt-16">
          {answer}
        </div>
      </div>
    </div>
  );
};

const FAQ = () => {
  const faqs = [
    {
      q: "Mandei mensagem à noite ou domingo, como funciona?",
      a: "O sistema não para. Envie a foto a qualquer momento. Assim que abrirmos nossa operação, sua foto estará na fila de prioridade."
    },
    {
      q: "Quanto tempo demora para secar?",
      a: "Nosso equipamento faz extração profunda, evitando encharcamento. Exigirá apenas algumas horas de ventilação natural para secagem total."
    },
    {
      q: "Minha mancha é velha, sai tudo?",
      a: "Aplicamos técnica, não milagres. A maioria sai, mas desgaste de fibra não é sujeira. Faremos uma análise realista da sua foto."
    }
  ];

  return (
    <section id="faq" className="py-32 bg-white px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-20 v2-reveal">
          <h2 className="text-4xl md:text-5xl font-black text-primary mb-6">Ficou com dúvida?</h2>
          <p className="text-text-muted font-medium">Estamos aqui para esclarecer tudo</p>
        </div>
        <div className="v2-reveal-up">
          {faqs.map((f, idx) => (
            <FAQItem key={idx} question={f.q} answer={f.a} />
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="bg-surface py-32 px-6 border-t border-gray-100">
    <div className="container mx-auto">
      <div className="bg-primary rounded-[4rem] p-12 md:p-24 text-center text-white mb-24 relative overflow-hidden v2-reveal">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent opacity-20 blur-[100px] -mr-48 -mt-48"></div>
        <div className="relative z-10">
          <h2 className="text-4xl md:text-7xl font-black mb-12 tracking-tighter">Pronto para revitalizar seu lar?</h2>
          <WhatsAppButton className="mx-auto scale-110 mb-8 whitespace-nowrap">
            Agendar minha triagem gratuita
          </WhatsAppButton>
          <p className="text-accent font-black uppercase tracking-[0.2em] text-sm italic">Clique acima para enviar a foto</p>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-20 pt-20 border-t border-gray-200 v2-reveal-up">
        <div className="lg:col-span-1">
          <div className="text-3xl font-black text-primary mb-8 tracking-tighter">Top Clean<span className="text-accent">.ES</span></div>
          <p className="text-text-muted font-medium leading-relaxed max-w-xs mb-10">
            Referência em estética de estofados em Vila Velha. Devolvemos a cor, o toque e o aroma de sofás novos.
          </p>
          <div className="flex gap-4">
            <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-primary shadow-sm hover:bg-primary hover:text-white transition-all cursor-pointer"><ShieldCheck /></div>
            <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-primary shadow-sm hover:bg-primary hover:text-white transition-all cursor-pointer"><CheckCircle2 /></div>
          </div>
        </div>
        
        <div className="lg:col-span-2 grid md:grid-cols-2 gap-12">
          <div className="flex flex-col gap-6">
            <h4 className="text-primary font-black uppercase tracking-widest text-xs">Onde Estamos</h4>
            <div className="flex items-start gap-4 text-text-muted font-medium leading-snug">
              <MapPin className="text-accent flex-shrink-0" />
              <span>Av. Vitória Régia, 1199 - Brisamar,<br /> Vila Velha - ES, 29109-115</span>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <h4 className="text-primary font-black uppercase tracking-widest text-xs">Horário de Operação</h4>
            <div className="flex items-start gap-4 text-text-muted font-medium">
              <Clock className="text-accent flex-shrink-0" />
              <div className="grid grid-cols-2 gap-x-8 gap-y-2">
                <span className="font-bold text-primary opacity-60">Seg-Sex:</span> <span>08-18h</span>
                <span className="font-bold text-primary opacity-60">Sábado:</span> <span>08-12h</span>
                <span className="font-bold text-primary opacity-60">Domingo:</span> <span>Plantão WhatsApp</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-32 text-center text-[10px] font-black uppercase tracking-[0.3em] opacity-30 text-primary">
        Designed for Excellence in Vila Velha · {new Date().getFullYear()}
      </div>
    </div>
  </footer>
);

// --- App Principal ---

const App = () => {
  const mainRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Reveal Up Base
      gsap.utils.toArray('.v2-reveal').forEach((elem) => {
        gsap.fromTo(elem, 
          { y: 60, opacity: 0 },
          {
            duration: 1.5, y: 0, opacity: 1, ease: 'power4.out',
            scrollTrigger: {
              trigger: elem,
              start: 'top 90%',
              toggleActions: 'play none none none',
            }
          }
        );
      });

      // Reveal Right (Hero Image etc)
      gsap.utils.toArray('.v2-reveal-right').forEach((elem) => {
        gsap.fromTo(elem, 
          { x: 100, opacity: 0, scale: 0.95 },
          {
            duration: 1.8, x: 0, opacity: 1, scale: 1, ease: 'expo.out',
            scrollTrigger: {
              trigger: elem,
              start: 'top 85%',
              toggleActions: 'play none none none',
            }
          }
        );
      });

      // Staggered Up (Cards, FAQ)
      gsap.utils.toArray('.v2-reveal-up').forEach((container) => {
        gsap.fromTo(container.children, 
          { y: 80, opacity: 0 },
          {
            duration: 1.2, y: 0, opacity: 1, ease: 'power3.out', stagger: 0.2,
            scrollTrigger: {
              trigger: container,
              start: 'top 85%',
              toggleActions: 'play none none none',
            }
          }
        );
      });
    }, mainRef);

    return () => ctx.revert();
  }, []);

  return (
    <main ref={mainRef} className="bg-white selection:bg-accent selection:text-white">
      <Navbar />
      <Hero />
      <PainSection />
      <SolutionGrid />
      <SocialProof />
      <FAQ />
      <Footer />
    </main>
  );
};

export default App;
