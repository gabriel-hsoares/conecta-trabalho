import React from 'react';

export default function Landing({ onSelectProfile }) {
  return (
    <section className="landing">
      <div className="hero-card landing-hero">
        <div>
          <p className="eyebrow">Conecta Trabalho</p>
          <h2>Escolha como deseja acessar a plataforma</h2>
          <p>
            A experiência é separada por perfil para que trabalhadores e empresas vejam apenas as funcionalidades relevantes para seus objetivos.
          </p>
        </div>

        <div className="access-grid">
          <article className="access-card">
            <h3>Sou trabalhador</h3>
            <p>Quero buscar vagas, fazer cursos, montar currículo e acompanhar minhas candidaturas.</p>
            <button className="primary-button" type="button" onClick={() => onSelectProfile('worker')}>
              Acessar como trabalhador
            </button>
          </article>

          <article className="access-card">
            <h3>Sou empresa</h3>
            <p>Quero cadastrar vagas, visualizar candidatos e encontrar talentos da comunidade.</p>
            <button className="secondary-button" type="button" onClick={() => onSelectProfile('company')}>
              Acessar como empresa
            </button>
          </article>
        </div>
      </div>
    </section>
  );
}
