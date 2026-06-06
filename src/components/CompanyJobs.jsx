import React, { useState } from 'react';

const emptyForm = {
  title: '',
  company: '',
  location: '',
  type: 'CLT',
  salary: '',
  description: ''
};

export default function CompanyJobs({ jobs, onPublishJob, onCloseJob, notify }) {
  const [form, setForm] = useState(emptyForm);

  function updateField(field, value) {
    setForm((current) => ({ ...current, [field]: value }));
  }

  function submitJob() {
    if (!form.title || !form.company || !form.salary) {
      notify('Preencha cargo, empresa e salário antes de publicar.');
      return;
    }

    onPublishJob({
      title: form.title,
      company: form.company,
      location: form.location || 'Comunidade local',
      type: form.type,
      salary: form.salary,
      description: form.description
    });

    setForm(emptyForm);
  }

  function clearForm() {
    setForm(emptyForm);
    notify('Cadastro de vaga cancelado.');
  }

  return (
    <section className="page-section">
      <div className="section-header"><div><p className="eyebrow">Empresa</p><h2>Minhas vagas</h2></div></div>

      <div className="grid two">
        <form className="card form-card" aria-label="Formulário para publicar vaga">
          <h3>Cadastrar nova vaga</h3>
          <label htmlFor="job-title">Cargo</label>
          <input id="job-title" value={form.title} onChange={(e) => updateField('title', e.target.value)} placeholder="Ex.: Atendente" />
          <label htmlFor="job-company">Empresa</label>
          <input id="job-company" value={form.company} onChange={(e) => updateField('company', e.target.value)} placeholder="Ex.: Mercadinho São José" />
          <label htmlFor="job-location">Local</label>
          <input id="job-location" value={form.location} onChange={(e) => updateField('location', e.target.value)} placeholder="Ex.: Comunidade local" />
          <label htmlFor="job-type">Tipo de contrato</label>
          <select id="job-type" value={form.type} onChange={(e) => updateField('type', e.target.value)}>
            <option>CLT</option>
            <option>Aprendizagem</option>
            <option>Autônomo</option>
            <option>Estágio</option>
          </select>
          <label htmlFor="job-salary">Salário</label>
          <input id="job-salary" value={form.salary} onChange={(e) => updateField('salary', e.target.value)} placeholder="Ex.: R$ 1.600" />
          <label htmlFor="job-description">Descrição</label>
          <textarea id="job-description" rows="4" value={form.description} onChange={(e) => updateField('description', e.target.value)} placeholder="Descreva requisitos e atividades." />

          <div className="button-row">
            <button className="primary-button" type="button" onClick={submitJob}>Publicar vaga</button>
            <button className="danger-button" type="button" onClick={clearForm}>Cancelar cadastro</button>
          </div>
        </form>

        <article className="card">
          <h3>Vagas publicadas</h3>
          {jobs.length === 0 && <p>Nenhuma vaga publicada.</p>}
          {jobs.map((job) => (
            <div className="list-item" key={job.id}>
              <strong>{job.title}</strong>
              <span>{job.company} • {job.candidates} candidatos • {job.type}</span>
              <button className="danger-button small-button" type="button" onClick={() => onCloseJob(job.id)}>
                Encerrar vaga
              </button>
            </div>
          ))}
        </article>
      </div>
    </section>
  );
}
