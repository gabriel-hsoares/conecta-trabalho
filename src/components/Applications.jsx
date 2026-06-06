import React from 'react';

export default function Applications({ applications, enrolledCourses }) {
  return (
    <section className="page-section">
      <div className="section-header"><div><p className="eyebrow">Trabalhador</p><h2>Minhas candidaturas</h2></div></div>

      <div className="grid two">
        <article className="card">
          <h3>Candidaturas enviadas</h3>
          {applications.length === 0 && <p>Nenhuma candidatura enviada ainda.</p>}
          {applications.map((application) => (
            <div className="list-item" key={application.id}>
              <strong>{application.job}</strong>
              <span>{application.company} • {application.status}</span>
            </div>
          ))}
        </article>

        <article className="card">
          <h3>Cursos em andamento</h3>
          {enrolledCourses.length === 0 && <p>Nenhuma inscrição em curso ainda.</p>}
          {enrolledCourses.map((course) => (
            <div className="list-item" key={course.id}>
              <strong>{course.title}</strong>
              <span>{course.institution} • {course.duration}</span>
            </div>
          ))}
        </article>
      </div>
    </section>
  );
}
