import React from 'react';

export default function AuditChecklist() {
  return (
    <section className="page-section">
      <div className="section-header"><div><p className="eyebrow">Transformação Digital</p><h2>Checklist técnico</h2></div></div>
      <div className="grid two">
        <article className="card"><h3>Acessibilidade</h3><ul className="check-list"><li>Labels em formulários</li><li>Skip link</li><li>Foco visível</li><li>Menu por perfil de usuário</li></ul></article>
        <article className="card"><h3>Qualidade e lançamento</h3><ul className="check-list"><li>ESLint</li><li>Vitest</li><li>GitHub Actions</li><li>Deploy sugerido na Vercel</li></ul></article>
        <article className="card"><h3>Performance</h3><ul className="check-list"><li>Lazy loading</li><li>useMemo nos filtros</li><li>Teste de carga com k6</li></ul></article>
        <article className="card"><h3>Usabilidade</h3><ul className="check-list"><li>Separação trabalhador/empresa</li><li>Menus específicos</li><li>Botões com feedback e ações funcionais</li></ul></article>
      </div>
    </section>
  );
}
