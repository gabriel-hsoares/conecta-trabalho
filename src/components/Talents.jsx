import React, { useState } from 'react';

export default function Talents({ talents, contactedTalents, onContactTalent, onCancelTalentContact }) {
  const [selectedTalent, setSelectedTalent] = useState(null);

  function isContacted(talent) {
    return contactedTalents.some((item) => item.id === talent.id);
  }

  function contactButton(talent) {
    const contacted = isContacted(talent);

    return (
      <button
        className={contacted ? 'danger-button' : 'primary-button'}
        type="button"
        onClick={() => contacted ? onCancelTalentContact(talent) : onContactTalent(talent)}
      >
        {contacted ? 'Cancelar contato' : 'Contatar'}
      </button>
    );
  }

  return (
    <section className="page-section">
      <div className="section-header"><div><p className="eyebrow">Empresa</p><h2>Banco de talentos</h2></div></div>
      <div className="grid three">
        {talents.map((talent) => (
          <article className="card" key={talent.id}>
            <span className="status-badge">Score {talent.score}%</span>
            <h3>{talent.name}</h3>
            <p>{talent.role} • {talent.neighborhood}</p>
            {isContacted(talent) && <p className="success-text">✓ Candidato contatado</p>}
            <div className="tags">{talent.skills.map((skill) => <span key={skill}>{skill}</span>)}</div>
            <div className="button-row">
              <button className="secondary-button" type="button" onClick={() => setSelectedTalent(talent)}>Ver candidato</button>
              {contactButton(talent)}
            </div>
          </article>
        ))}
      </div>

      {selectedTalent && (
        <div className="modal-backdrop" role="presentation" onClick={() => setSelectedTalent(null)}>
          <article className="modal-card" role="dialog" aria-modal="true" aria-label={`Perfil de ${selectedTalent.name}`} onClick={(event) => event.stopPropagation()}>
            <div className="card-header">
              <h3>{selectedTalent.name}</h3>
              <button className="link-button" type="button" onClick={() => setSelectedTalent(null)}>Fechar</button>
            </div>
            <p><strong>Área:</strong> {selectedTalent.role}</p>
            <p><strong>Bairro:</strong> {selectedTalent.neighborhood}</p>
            <p><strong>Escolaridade:</strong> {selectedTalent.education}</p>
            <p><strong>Telefone:</strong> {selectedTalent.phone}</p>
            <p><strong>Índice de empregabilidade:</strong> {selectedTalent.score}%</p>
            {isContacted(selectedTalent) && <p className="success-text">✓ Candidato contatado</p>}
            <div className="tags">{selectedTalent.skills.map((skill) => <span key={skill}>{skill}</span>)}</div>
            {contactButton(selectedTalent)}
          </article>
        </div>
      )}
    </section>
  );
}
