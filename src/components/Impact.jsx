import React from 'react';
import { impactIndicators, kpis } from '../data/mockData.js';

export default function Impact() {
  return (
    <section className="page-section">
      <div className="section-header"><div><p className="eyebrow">ODS 8</p><h2>Indicadores e KPIs</h2></div></div>
      <div className="grid four">
        {impactIndicators.map((indicator) => (
          <article className="metric-card" key={indicator.label}><span>{indicator.label}</span><strong>{indicator.value}</strong><p>{indicator.description}</p></article>
        ))}
      </div>
      <article className="card">
        <h3>KPIs do produto</h3>
        <div className="table-wrapper">
          <table><thead><tr><th>KPI</th><th>Meta</th><th>Justificativa</th></tr></thead><tbody>
            {kpis.map((kpi) => <tr key={kpi.name}><td>{kpi.name}</td><td>{kpi.goal}</td><td>{kpi.reason}</td></tr>)}
          </tbody></table>
        </div>
      </article>
    </section>
  );
}
