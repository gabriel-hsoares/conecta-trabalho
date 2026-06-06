import React from 'react';

export default function CompanyDashboard({ jobs, talents, setActivePage }) {
  const totalCandidates = jobs.reduce((total, job) => total + job.candidates, 0);

  return (
    <section className="page-section">
      <div className="hero-card">
        <div>
          <p className="eyebrow">Painel da empresa</p>
          <h2>Publique vagas e encontre talentos locais com mais facilidade.</h2>
          <p>Este painel mostra apenas recursos úteis para empresas e empregadores.</p>
          <div className="hero-actions">
            <button className="primary-button" onClick={() => setActivePage('company-jobs')} type="button">Cadastrar vaga</button>
            <button className="secondary-button" onClick={() => setActivePage('talents')} type="button">Ver talentos</button>
          </div>
        </div>

        <div className="hero-panel">
          <strong>Talentos cadastrados</strong>
          <span className="score">{talents.length}</span>
          <p>Candidatos disponíveis no banco de talentos local.</p>
        </div>
      </div>

      <div className="grid three">
        <article className="metric-card"><span>Vagas publicadas</span><strong>{jobs.length}</strong><p>Oportunidades da comunidade.</p></article>
        <article className="metric-card"><span>Candidatos recebidos</span><strong>{totalCandidates}</strong><p>Soma das candidaturas simuladas.</p></article>
        <article className="metric-card"><span>Tempo médio de triagem</span><strong>2min</strong><p>Meta de usabilidade do MVP.</p></article>
      </div>
    </section>
  );
}
