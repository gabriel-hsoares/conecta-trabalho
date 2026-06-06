import React, { useMemo, useState } from 'react';

export default function Jobs({ jobs, applications, onApplyToJob, onCancelApplication }) {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredJobs = useMemo(() => {
    return jobs.filter((job) =>
      `${job.title} ${job.company} ${job.tags.join(' ')}`
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
    );
  }, [jobs, searchTerm]);

  function isApplied(job) {
    return applications.some((application) => application.job === job.title && application.company === job.company);
  }

  return (
    <section className="page-section">
      <div className="section-header"><div><p className="eyebrow">Trabalhador</p><h2>Vagas disponíveis</h2></div></div>
      <div className="filter-bar compact">
        <label htmlFor="search-job">Buscar vaga</label>
        <input id="search-job" type="search" placeholder="Ex.: atendimento..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
      </div>
      <p className="result-count" aria-live="polite">{filteredJobs.length} vaga(s) encontrada(s).</p>
      <div className="grid three">
        {filteredJobs.map((job) => {
          const applied = isApplied(job);

          return (
            <article className="card" key={job.id}>
              <span className="status-badge">{job.type}</span>
              <h3>{job.title}</h3>
              <p>{job.company} • {job.location}</p>
              <p>{job.salary}</p>
              <div className="tags">{job.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
              {applied && <p className="success-text">✓ Candidatura enviada</p>}
              <button
                className={applied ? 'danger-button' : 'primary-button'}
                type="button"
                onClick={() => applied ? onCancelApplication(job) : onApplyToJob(job)}
              >
                {applied ? 'Cancelar candidatura' : 'Candidatar-se'}
              </button>
            </article>
          );
        })}
      </div>
    </section>
  );
}
