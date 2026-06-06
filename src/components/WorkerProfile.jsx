import React, { useState } from 'react';
import { jsPDF } from 'jspdf';

const initialProfile = {
  name: 'Gabriel Soares',
  phone: '(85) 90000-0000',
  email: 'gabriel@email.com',
  neighborhood: 'Comunidade local',
  area: 'Administrativo / Atendimento',
  education: 'medio',
  skills: 'Atendimento, informática básica, organização e comunicação.'
};

const educationLabels = {
  fundamental: 'Ensino Fundamental',
  medio: 'Ensino Médio',
  tecnico: 'Ensino Técnico',
  superior: 'Ensino Superior'
};

export default function WorkerProfile({ notify, enrolledCourses = [] }) {
  const [profile, setProfile] = useState(initialProfile);
  const [savedProfile, setSavedProfile] = useState(initialProfile);

  function updateField(field, value) {
    setProfile((current) => ({ ...current, [field]: value }));
  }

  function saveProfile() {
    setSavedProfile(profile);
    notify('Perfil salvo com sucesso.');
  }

  function cancelChanges() {
    setProfile(savedProfile);
    notify('Alterações do perfil canceladas.');
  }

  function downloadResume() {
    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.getWidth();
    const margin = 18;
    let y = 20;

    const employabilityScore = Math.min(100, 78 + enrolledCourses.length * 3);
    const educationText = educationLabels[profile.education] || profile.education;

    doc.setFillColor(31, 111, 235);
    doc.rect(0, 0, pageWidth, 32, 'F');

    doc.setTextColor(255, 255, 255);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(18);
    doc.text(profile.name || 'Nome do candidato', margin, 16);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(10);
    doc.text('Currículo gerado automaticamente pelo Conecta Trabalho', margin, 24);

    y = 44;
    doc.setTextColor(23, 32, 51);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(14);
    doc.text('Dados pessoais', margin, y);

    y += 9;
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(11);
    doc.text(`Telefone/WhatsApp: ${profile.phone || '-'}`, margin, y);
    y += 7;
    doc.text(`E-mail: ${profile.email || '-'}`, margin, y);
    y += 7;
    doc.text(`Bairro/Comunidade: ${profile.neighborhood || '-'}`, margin, y);

    y += 14;
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(14);
    doc.text('Objetivo profissional', margin, y);

    y += 9;
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(11);
    doc.text(`Área de interesse: ${profile.area || '-'}`, margin, y);
    y += 7;
    doc.text(`Escolaridade: ${educationText}`, margin, y);

    y += 14;
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(14);
    doc.text('Habilidades', margin, y);

    y += 9;
    doc.setFont('helvetica', 'normal');
    const skillsLines = doc.splitTextToSize(profile.skills || '-', pageWidth - margin * 2);
    doc.text(skillsLines, margin, y);
    y += skillsLines.length * 7 + 7;

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(14);
    doc.text('Cursos e capacitações', margin, y);

    y += 9;
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(11);

    if (enrolledCourses.length === 0) {
      doc.text('Nenhum curso registrado na plataforma até o momento.', margin, y);
      y += 7;
    } else {
      enrolledCourses.forEach((course) => {
        doc.text(`• ${course.title} — ${course.institution} (${course.duration})`, margin, y);
        y += 7;
      });
    }

    y += 7;
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(14);
    doc.text('Índice de empregabilidade', margin, y);

    y += 9;
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(11);
    doc.text(`${employabilityScore}%`, margin, y);
    y += 7;
    doc.text('Pontuação estimada com base no preenchimento do perfil e nos cursos iniciados na plataforma.', margin, y, {
      maxWidth: pageWidth - margin * 2
    });

    y += 18;
    doc.setDrawColor(217, 226, 239);
    doc.line(margin, y, pageWidth - margin, y);

    y += 8;
    doc.setFontSize(9);
    doc.setTextColor(98, 112, 138);
    doc.text('Documento demonstrativo gerado para o MVP do projeto Conecta Trabalho — ODS 8.', margin, y);

    const fileName = `curriculo-${(profile.name || 'candidato').toLowerCase().replace(/\s+/g, '-')}.pdf`;
    doc.save(fileName);
    notify('Currículo em PDF gerado com sucesso.');
  }

  return (
    <section className="page-section">
      <div className="section-header">
        <div>
          <p className="eyebrow">Trabalhador</p>
          <h2>Meu perfil profissional</h2>
        </div>
        <span className="status-badge">75% completo</span>
      </div>

      <div className="progress-wrapper" aria-label="Perfil 75% completo">
        <div className="progress-bar"><span style={{ width: '75%' }} /></div>
      </div>

      <div className="grid two">
        <form className="card form-card" aria-label="Cadastro do trabalhador">
          <h3>Dados do trabalhador</h3>

          <label htmlFor="worker-name">Nome completo</label>
          <input id="worker-name" value={profile.name} onChange={(e) => updateField('name', e.target.value)} />

          <label htmlFor="worker-phone">Telefone/WhatsApp</label>
          <input id="worker-phone" value={profile.phone} onChange={(e) => updateField('phone', e.target.value)} />

          <label htmlFor="worker-email">E-mail</label>
          <input id="worker-email" type="email" value={profile.email} onChange={(e) => updateField('email', e.target.value)} />

          <label htmlFor="worker-neighborhood">Bairro/Comunidade</label>
          <input id="worker-neighborhood" value={profile.neighborhood} onChange={(e) => updateField('neighborhood', e.target.value)} />

          <label htmlFor="worker-area">Área de interesse</label>
          <input id="worker-area" value={profile.area} onChange={(e) => updateField('area', e.target.value)} />

          <label htmlFor="worker-education">Escolaridade</label>
          <select id="worker-education" value={profile.education} onChange={(e) => updateField('education', e.target.value)}>
            <option value="fundamental">Ensino Fundamental</option>
            <option value="medio">Ensino Médio</option>
            <option value="tecnico">Ensino Técnico</option>
            <option value="superior">Ensino Superior</option>
          </select>

          <label htmlFor="worker-skills">Habilidades</label>
          <textarea id="worker-skills" rows="4" value={profile.skills} onChange={(e) => updateField('skills', e.target.value)} />

          <div className="button-row">
            <button className="primary-button" type="button" onClick={saveProfile}>Salvar perfil</button>
            <button className="danger-button" type="button" onClick={cancelChanges}>Cancelar alterações</button>
          </div>
        </form>

        <article className="card">
          <h3>Currículo digital</h3>
          <p>O sistema gera automaticamente um PDF com os dados do perfil, cursos inscritos e índice de empregabilidade.</p>

          <div className="resume-preview">
            <strong>{profile.name}</strong>
            <span>Contato: {profile.phone} • {profile.email}</span>
            <span>Bairro: {profile.neighborhood}</span>
            <span>Área: {profile.area}</span>
            <span>Escolaridade: {educationLabels[profile.education]}</span>
            <span>Habilidades: {profile.skills}</span>
            <span>Cursos no currículo: {enrolledCourses.length}</span>
            <span>Índice de empregabilidade: {Math.min(100, 78 + enrolledCourses.length * 3)}%</span>
          </div>

          <button className="secondary-button" type="button" onClick={downloadResume}>Baixar currículo em PDF</button>
        </article>
      </div>
    </section>
  );
}
