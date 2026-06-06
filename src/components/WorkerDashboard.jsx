import React from 'react';

export default function WorkerDashboard({ jobs, courses, applications, enrolledCourses, setActivePage }) {
  return (
    <section className="page-section">
      <div className="hero-card">
        <div>
          <p className="eyebrow">Painel do trabalhador</p>
          <h2>Encontre vagas, melhore seu currículo e acompanhe sua evolução.</h2>
          <p>Este painel mostra apenas recursos úteis para quem está procurando trabalho.</p>
          <div className="hero-actions">
            <button className="primary-button" onClick={() => setActivePage('jobs')} type="button">Ver vagas</button>
            <button className="secondary-button" onClick={() => setActivePage('courses')} type="button">Ver cursos</button>
          </div>
        </div>

        <div className="hero-panel">
          <strong>Índice de Empregabilidade</strong>
          <span className="score">{78 + enrolledCourses.length * 3}%</span>
          <p>Complete seu perfil e conclua cursos para melhorar sua pontuação.</p>
        </div>
      </div>

      <div className="grid four">
        <article className="metric-card"><span>Vagas compatíveis</span><strong>{jobs.length}</strong><p>Oportunidades sugeridas.</p></article>
        <article className="metric-card"><span>Cursos disponíveis</span><strong>{courses.length}</strong><p>Capacitações cadastradas.</p></article>
        <article className="metric-card"><span>Inscrições em cursos</span><strong>{enrolledCourses.length}</strong><p>Cursos iniciados por você.</p></article>
        <article className="metric-card"><span>Candidaturas</span><strong>{applications.length}</strong><p>Processos em andamento.</p></article>
      </div>
    </section>
  );
}
