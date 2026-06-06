import React from 'react';

export default function Courses({ courses, enrolledCourses, onEnrollCourse, onCancelCourseEnrollment }) {
  function isEnrolled(course) {
    return enrolledCourses.some((item) => item.id === course.id);
  }

  return (
    <section className="page-section">
      <div className="section-header"><div><p className="eyebrow">Trabalhador</p><h2>Cursos disponíveis</h2></div></div>
      <div className="grid three">
        {courses.map((course) => {
          const enrolled = isEnrolled(course);

          return (
            <article className="card" key={course.id}>
              <span className="status-badge">{course.level}</span>
              <h3>{course.title}</h3>
              <p>{course.institution}</p>
              <p>{course.duration} • {course.format}</p>
              {enrolled && <p className="success-text">✓ Inscrição confirmada</p>}
              <button
                className={enrolled ? 'danger-button' : 'primary-button'}
                type="button"
                onClick={() => enrolled ? onCancelCourseEnrollment(course) : onEnrollCourse(course)}
              >
                {enrolled ? 'Cancelar inscrição' : 'Inscrever-se'}
              </button>
            </article>
          );
        })}
      </div>
    </section>
  );
}
