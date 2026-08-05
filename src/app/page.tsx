import Image from "next/image";
import { CountUpNumber } from "./CountUpNumber";
import { ScrollEffects } from "./ScrollEffects";

const NEWS_URL = "https://cgbreda.com.br/noticias";
const CLIENT_PORTAL_URL = "https://cgbreda.com.br/portal-do-cliente";

const services = [
  {
    code: "TAX",
    label: "Planejamento tributário",
    title: "Estratégia tributária com segurança e previsibilidade.",
    copy:
      "Análise de regime, enquadramento fiscal e oportunidades legais para reduzir riscos e sustentar decisões empresariais.",
  },
  {
    code: "CFO",
    label: "Assessoria contábil",
    title: "Informação contábil para orientar a gestão.",
    copy:
      "Fechamentos, demonstrativos e indicadores organizados para acompanhar margem, caixa, crescimento e obrigações.",
  },
  {
    code: "OPS",
    label: "Fiscal e pessoal",
    title: "Rotina fiscal e trabalhista conduzida com rigor.",
    copy:
      "Escrituração, notas, folha, admissões, desligamentos e obrigações acessórias com controle de prazos e conformidade.",
  },
  {
    code: "LAW",
    label: "Societário",
    title: "Governança para abertura, alteração e regularização.",
    copy:
      "Constituição de empresas, legalizações, reorganizações e documentos societários conduzidos com critério técnico.",
  },
];

const sectors = [
  "Profissionais da saúde",
  "Tecnologia e serviços",
  "Comércio e e-commerce",
  "Engenharia e arquitetura",
  "Profissionais liberais",
  "Representantes comerciais",
];

const timeline = [
  {
    step: "Diagnóstico",
    detail:
      "Entendemos o momento da empresa, regime tributário, passivos, rotina fiscal e necessidades de gestão.",
  },
  {
    step: "Plano",
    detail:
      "Definimos entregáveis, indicadores, calendário legal e prioridades para dar previsibilidade ao atendimento.",
  },
  {
    step: "Operação",
    detail:
      "Executamos as rotinas contábil, fiscal, trabalhista e societária com acompanhamento próximo e canais claros.",
  },
  {
    step: "Gestão",
    detail:
      "Apresentamos relatórios e orientações para transformar números em decisões mais seguras para o negócio.",
  },
];

const questions = [
  {
    question: "A CG Breda atende presencialmente?",
    answer:
      "Sim. O escritório possui base em Campinas e Indaiatuba e atende empresas em todo o território nacional.",
  },
  {
    question: "O cliente acompanha indicadores financeiros?",
    answer:
      "Sim. A CG Breda organiza informações contábeis e gerenciais para que o cliente acompanhe a evolução da empresa com mais clareza.",
  },
  {
    question: "A CG Breda apoia empresas em migração contábil?",
    answer:
      "Sim. O processo começa com diagnóstico, conferência documental e planejamento da transição para preservar prazos e reduzir riscos.",
  },
];

export default function Home() {
  return (
    <main className="site-shell">
      <ScrollEffects />
      <section className="hero" id="inicio">
        <div className="hero__media" aria-hidden="true">
          <Image
            src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1800&q=86"
            alt=""
            fill
            priority
            sizes="100vw"
            unoptimized
          />
        </div>

        <header className="topbar" aria-label="Navegação principal">
          <a className="brand" href="#inicio" aria-label="CG Breda início">
            <Image
              src="/cg-breda-logo.png"
              alt="CG Breda"
              width={280}
              height={200}
              priority
            />
          </a>
          <nav className="nav-links" aria-label="Seções do site">
            <a href="#sobre-nos">Sobre nós</a>
            <a href="#servicos">Serviços</a>
            <a href="#metodo">Método</a>
            <a href={NEWS_URL}>Notícias</a>
            <a href={CLIENT_PORTAL_URL}>Portal do cliente</a>
            <a href="#contato">Contato</a>
          </nav>
          <a className="topbar__cta" href="https://wa.me/5519992180404">
            Conversar agora
          </a>
        </header>

        <div className="hero__content">
          <p className="eyebrow">Campinas / Indaiatuba / Brasil</p>
          <h1>
            <span className="headline-line headline-line--desktop">Números tratados</span>
            <span className="headline-line headline-line--desktop">com critério.</span>
            <span className="headline-line headline-line--desktop">Decisões tomadas</span>
            <span className="headline-line headline-line--desktop headline-line--accent">com confiança.</span>
            <span className="headline-line headline-line--mobile">Números</span>
            <span className="headline-line headline-line--mobile">tratados com</span>
            <span className="headline-line headline-line--mobile">critério.</span>
            <span className="headline-line headline-line--mobile">Decisões</span>
            <span className="headline-line headline-line--mobile">tomadas com</span>
            <span className="headline-line headline-line--mobile headline-line--accent">confiança.</span>
          </h1>
          <p className="hero__lead">
            Contabilidade consultiva para empresas que precisam de clareza,
            organização e segurança para crescer com responsabilidade.
          </p>
          <div className="hero__metrics" aria-label="Indicadores principais">
            <span>
              <strong>
                <CountUpNumber end={21} suffix="+" />
              </strong>
              anos de atuação
            </span>
            <span>
              <strong>
                BR
              </strong>
              atendimento nacional
            </span>
            <span>
              <strong>Online</strong>
              suporte consultivo
            </span>
          </div>
          <div className="hero__actions" aria-label="Ações principais">
            <a className="button button--primary" href="#contato">
              Iniciar minha contabilidade
            </a>
            <a className="button button--secondary" href="#servicos">
              Ver soluções
            </a>
          </div>
        </div>

        <aside className="ledger-panel" aria-label="Resumo de autoridade">
          <div className="ledger-panel__top">
            <span>CG BREDA</span>
            <span>Atuação consultiva</span>
          </div>
          <div className="ledger-panel__number">
            <CountUpNumber end={21} suffix="+" />
          </div>
          <p>
            anos de atuação contábil com acompanhamento próximo, responsabilidade
            técnica e compromisso com a rotina empresarial.
          </p>
          <div className="ledger-panel__grid" aria-label="Resumo ilustrativo de entregas">
            <span>Regime tributário</span>
            <span>Calendário fiscal</span>
            <span>Folha mensal</span>
            <span>Societário</span>
            <span>Indicadores</span>
            <span>Suporte</span>
          </div>
        </aside>

        <div className="hero__ticker" aria-label="Destaques">
          <span>Planejamento tributário</span>
          <span>Abertura e migração</span>
          <span>Folha e fiscal</span>
          <span>Relatórios mensais</span>
        </div>
      </section>

      <section className="authority section" id="sobre-nos">
        <div className="section__intro">
          <p className="eyebrow">Sobre nós</p>
          <h2>Uma contabilidade próxima, técnica e comprometida com a sua empresa.</h2>
        </div>
        <div className="authority__statement">
          <p>
            A CG Breda atua com seriedade, responsabilidade e acompanhamento próximo
            para organizar a vida contábil, fiscal, trabalhista e societária de empresas
            que valorizam segurança nas decisões.
          </p>
        </div>
        <div className="proof-strip" aria-label="Indicadores de confiança">
          <div>
            <strong>
              <CountUpNumber end={21} /> anos
            </strong>
            <span>de atuação contábil consultiva</span>
          </div>
          <div>
            <strong>
              <CountUpNumber end={2} /> bases
            </strong>
            <span>Campinas e Indaiatuba</span>
          </div>
          <div>
            <strong>BR</strong>
            <span>atendimento em todo o território nacional</span>
          </div>
        </div>
        <div className="section__actions">
          <a className="button button--gold" href="#contato">
            Solicitar diagnóstico
          </a>
        </div>
      </section>

      <section className="split section">
        <div className="split__image">
          <Image
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=86"
            alt="Mesa de trabalho com relatórios, notebook e documentos financeiros"
            fill
            sizes="(max-width: 1080px) 100vw, 45vw"
            unoptimized
          />
        </div>
        <div className="split__content">
          <p className="eyebrow">Atendimento consultivo</p>
          <h2>Para empresas que querem uma contabilidade presente na tomada de decisão.</h2>
          <p>
            Mais do que cumprir obrigações, nosso trabalho é manter a empresa em ordem,
            antecipar riscos e entregar informações confiáveis para decisões tributárias,
            trabalhistas, societárias e gerenciais.
          </p>
          <ul className="check-list">
            <li>Relatórios e orientações para acompanhar a evolução da empresa.</li>
            <li>Canais de atendimento claros e acompanhamento responsável.</li>
            <li>Rotinas legais organizadas com visão técnica e estratégica.</li>
          </ul>
          <div className="section__actions section__actions--compact">
            <a className="button button--gold" href="#contato">
              Quero uma análise
            </a>
          </div>
        </div>
      </section>

      <section className="services section" id="servicos">
        <div className="section__intro section__intro--wide">
          <p className="eyebrow">Soluções</p>
          <h2>Soluções contábeis para empresas que exigem precisão e compromisso.</h2>
        </div>
        <div className="service-grid">
          {services.map((service) => (
            <article className="service-card" key={service.label}>
              <div className="service-card__top">
                <span>{service.label}</span>
                <b>{service.code}</b>
              </div>
              <h3>{service.title}</h3>
              <p>{service.copy}</p>
            </article>
          ))}
        </div>
        <div className="section__actions">
          <a className="button button--gold" href="#contato">
            Falar com a CG Breda
          </a>
        </div>
      </section>

      <section className="sectors section" aria-labelledby="setores-title">
        <div className="sectors__header">
          <p className="eyebrow">Segmentos atendidos</p>
          <h2 id="setores-title">Atendimento para diferentes segmentos, com leitura da realidade de cada negócio.</h2>
        </div>
        <div className="sector-cloud">
          {sectors.map((sector) => (
            <span key={sector}>{sector}</span>
          ))}
        </div>
        <div className="section__actions">
          <a className="button button--gold" href="#contato">
            Ver atendimento para meu segmento
          </a>
        </div>
      </section>

      <section className="method section" id="metodo">
        <div className="section__intro">
          <p className="eyebrow">Método</p>
          <h2>Um processo claro para abrir, migrar ou profissionalizar a contabilidade.</h2>
        </div>
        <div className="timeline">
          {timeline.map((item) => (
            <article className="timeline__item" key={item.step}>
              <h3>{item.step}</h3>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>
        <div className="section__actions">
          <a className="button button--gold" href="#contato">
            Planejar minha migração
          </a>
        </div>
      </section>

      <section className="insight section">
        <div>
          <p className="eyebrow">Compromisso com controle</p>
          <h2>Rotinas acompanhadas com calendário, conferência e responsabilidade.</h2>
        </div>
        <div className="compliance-board" aria-label="Painel ilustrativo de conformidade">
          <div className="compliance-board__header">
            <span>Calendário fiscal</span>
            <strong>Julho 2026</strong>
          </div>
          <div className="compliance-row">
            <span>Folha</span>
            <b>Conferido</b>
          </div>
          <div className="compliance-row">
            <span>Notas fiscais</span>
            <b>Em leitura</b>
          </div>
          <div className="compliance-row">
            <span>Tributos</span>
            <b>Planejado</b>
          </div>
          <div className="compliance-row">
            <span>Societário</span>
            <b>Regular</b>
          </div>
        </div>
        <div className="section__actions">
          <a className="button button--gold" href="#contato">
            Organizar minha rotina fiscal
          </a>
        </div>
      </section>

      <section className="faq section">
        <div className="section__intro">
          <p className="eyebrow">Perguntas frequentes</p>
          <h2>Respostas objetivas para quem busca uma contabilidade confiável.</h2>
        </div>
        <div className="faq__list">
          {questions.map((item) => (
            <article key={item.question}>
              <h3>{item.question}</h3>
              <p>{item.answer}</p>
            </article>
          ))}
        </div>
        <div className="section__actions">
          <a className="button button--gold" href="#contato">
            Tirar uma dúvida
          </a>
        </div>
      </section>

      <section className="contact section" id="contato">
        <div className="contact__panel">
          <div>
            <p className="eyebrow">Fale conosco</p>
            <h2>Conte com a CG Breda para organizar a contabilidade da sua empresa.</h2>
            <p>
              Converse com nossa equipe pelo WhatsApp (19) 99218-0404, pelo e-mail
              contabil@cgbreda.com.br ou visite nosso escritório na Av. José de Souza
              Campos, 575, Nova Campinas.
            </p>
          </div>
          <form className="contact__form">
            <label>
              Nome
              <input type="text" name="name" placeholder="Seu nome" />
            </label>
            <label>
              Empresa
              <input type="text" name="company" placeholder="Nome da empresa" />
            </label>
            <label>
              Interesse
              <select name="interest" defaultValue="">
                <option value="" disabled>
                  Selecione
                </option>
                <option>Abrir empresa</option>
                <option>Migrar contabilidade</option>
                <option>Planejamento tributário</option>
              </select>
            </label>
            <button type="button">Solicitar diagnóstico</button>
          </form>
        </div>
      </section>
    </main>
  );
}
