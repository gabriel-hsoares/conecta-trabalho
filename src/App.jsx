import React, { useMemo, useState, Suspense, lazy } from 'react';
import { Briefcase, GraduationCap, Home, Users, BarChart3, UserRound, ClipboardCheck, FileText } from 'lucide-react';
import Header from './components/Header.jsx';
import Sidebar from './components/Sidebar.jsx';
import Landing from './components/Landing.jsx';
import LoadingFallback from './components/LoadingFallback.jsx';
import Toast from './components/Toast.jsx';
import { initialJobs, initialApplications, initialCourses, initialTalents } from './data/mockData.js';

const WorkerDashboard = lazy(() => import('./components/WorkerDashboard.jsx'));
const CompanyDashboard = lazy(() => import('./components/CompanyDashboard.jsx'));
const WorkerProfile = lazy(() => import('./components/WorkerProfile.jsx'));
const Jobs = lazy(() => import('./components/Jobs.jsx'));
const Courses = lazy(() => import('./components/Courses.jsx'));
const Applications = lazy(() => import('./components/Applications.jsx'));
const CompanyJobs = lazy(() => import('./components/CompanyJobs.jsx'));
const Talents = lazy(() => import('./components/Talents.jsx'));
const Impact = lazy(() => import('./components/Impact.jsx'));
const AuditChecklist = lazy(() => import('./components/AuditChecklist.jsx'));

const workerMenu = [
  { id: 'worker-dashboard', label: 'Dashboard', icon: Home },
  { id: 'worker-profile', label: 'Meu perfil', icon: UserRound },
  { id: 'jobs', label: 'Vagas', icon: Briefcase },
  { id: 'courses', label: 'Cursos', icon: GraduationCap },
  { id: 'applications', label: 'Minhas candidaturas', icon: FileText },
  { id: 'impact', label: 'Impacto', icon: BarChart3 },
  { id: 'audit', label: 'Checklist técnico', icon: ClipboardCheck }
];

const companyMenu = [
  { id: 'company-dashboard', label: 'Dashboard', icon: Home },
  { id: 'company-jobs', label: 'Minhas vagas', icon: Briefcase },
  { id: 'talents', label: 'Banco de talentos', icon: Users },
  { id: 'impact', label: 'Impacto', icon: BarChart3 },
  { id: 'audit', label: 'Checklist técnico', icon: ClipboardCheck }
];

export default function App() {
  const [profileType, setProfileType] = useState(null);
  const [activePage, setActivePage] = useState('landing');
  const [jobs, setJobs] = useState(initialJobs);
  const [applications, setApplications] = useState(initialApplications);
  const [enrolledCourses, setEnrolledCourses] = useState([]);
  const [contactedTalents, setContactedTalents] = useState([]);
  const [courses] = useState(initialCourses);
  const [talents] = useState(initialTalents);
  const [toast, setToast] = useState('');

  const menuItems = profileType === 'company' ? companyMenu : workerMenu;

  const pageTitle = useMemo(() => {
    if (!profileType) return 'Conecta Trabalho';
    return menuItems.find((item) => item.id === activePage)?.label ?? 'Dashboard';
  }, [activePage, menuItems, profileType]);

  function notify(message) {
    setToast(message);
    window.clearTimeout(window.__toastTimer);
    window.__toastTimer = window.setTimeout(() => setToast(''), 2800);
  }

  function selectProfile(type) {
    setProfileType(type);
    setActivePage(type === 'company' ? 'company-dashboard' : 'worker-dashboard');
    notify(type === 'company' ? 'Acesso como empresa selecionado.' : 'Acesso como trabalhador selecionado.');
  }

  function resetAccess() {
    setProfileType(null);
    setActivePage('landing');
    notify('Tipo de acesso alterado.');
  }

  function applyToJob(job) {
    const alreadyApplied = applications.some((application) => application.job === job.title && application.company === job.company);
    if (alreadyApplied) {
      notify('Você já se candidatou para esta vaga.');
      return;
    }

    setApplications((current) => [
      ...current,
      { id: Date.now(), job: job.title, company: job.company, status: 'Candidatura enviada' }
    ]);

    setJobs((currentJobs) =>
      currentJobs.map((item) => item.id === job.id ? { ...item, candidates: item.candidates + 1 } : item)
    );

    notify(`Candidatura enviada para ${job.title}.`);
  }

  function cancelApplication(job) {
    setApplications((current) =>
      current.filter((application) => !(application.job === job.title && application.company === job.company))
    );

    setJobs((currentJobs) =>
      currentJobs.map((item) => item.id === job.id ? { ...item, candidates: Math.max(0, item.candidates - 1) } : item)
    );

    notify(`Candidatura cancelada para ${job.title}.`);
  }

  function enrollCourse(course) {
    const alreadyEnrolled = enrolledCourses.some((item) => item.id === course.id);
    if (alreadyEnrolled) {
      notify('Você já está inscrito neste curso.');
      return;
    }

    setEnrolledCourses((current) => [...current, course]);
    notify(`Inscrição realizada no curso ${course.title}.`);
  }

  function cancelCourseEnrollment(course) {
    setEnrolledCourses((current) => current.filter((item) => item.id !== course.id));
    notify(`Inscrição cancelada no curso ${course.title}.`);
  }

  function publishJob(newJob) {
    setJobs((currentJobs) => [
      { id: Date.now(), candidates: 0, tags: ['Nova vaga', newJob.type], ...newJob },
      ...currentJobs
    ]);

    notify(`Vaga ${newJob.title} publicada com sucesso.`);
  }

  function closeJob(jobId) {
    const job = jobs.find((item) => item.id === jobId);
    setJobs((currentJobs) => currentJobs.filter((item) => item.id !== jobId));
    notify(job ? `Vaga ${job.title} encerrada.` : 'Vaga encerrada.');
  }

  function contactTalent(talent) {
    const alreadyContacted = contactedTalents.some((item) => item.id === talent.id);
    if (alreadyContacted) {
      notify(`${talent.name} já foi marcado como contatado.`);
      return;
    }

    setContactedTalents((current) => [...current, talent]);
    notify(`Contato iniciado com ${talent.name}.`);
  }

  function cancelTalentContact(talent) {
    setContactedTalents((current) => current.filter((item) => item.id !== talent.id));
    notify(`Contato com ${talent.name} cancelado.`);
  }

  const sharedProps = {
    jobs,
    applications,
    courses,
    talents,
    enrolledCourses,
    contactedTalents,
    onApplyToJob: applyToJob,
    onCancelApplication: cancelApplication,
    onEnrollCourse: enrollCourse,
    onCancelCourseEnrollment: cancelCourseEnrollment,
    onPublishJob: publishJob,
    onCloseJob: closeJob,
    onContactTalent: contactTalent,
    onCancelTalentContact: cancelTalentContact,
    notify,
    setActivePage
  };

  const renderPage = () => {
    if (!profileType) return <Landing onSelectProfile={selectProfile} />;

    switch (activePage) {
      case 'worker-dashboard': return <WorkerDashboard {...sharedProps} />;
      case 'worker-profile': return <WorkerProfile notify={notify} enrolledCourses={enrolledCourses} />;
      case 'jobs': return <Jobs jobs={jobs} applications={applications} onApplyToJob={applyToJob} onCancelApplication={cancelApplication} />;
      case 'courses': return <Courses courses={courses} enrolledCourses={enrolledCourses} onEnrollCourse={enrollCourse} onCancelCourseEnrollment={cancelCourseEnrollment} />;
      case 'applications': return <Applications applications={applications} enrolledCourses={enrolledCourses} />;
      case 'company-dashboard': return <CompanyDashboard {...sharedProps} />;
      case 'company-jobs': return <CompanyJobs jobs={jobs} onPublishJob={publishJob} onCloseJob={closeJob} notify={notify} />;
      case 'talents': return <Talents talents={talents} contactedTalents={contactedTalents} onContactTalent={contactTalent} onCancelTalentContact={cancelTalentContact} />;
      case 'impact': return <Impact />;
      case 'audit': return <AuditChecklist />;
      default: return <WorkerDashboard {...sharedProps} />;
    }
  };

  return (
    <div className="app-shell">
      <a className="skip-link" href="#main-content">Pular para o conteúdo principal</a>

      {profileType && (
        <Sidebar
          menuItems={menuItems}
          activePage={activePage}
          onNavigate={setActivePage}
          profileType={profileType}
          onResetAccess={resetAccess}
        />
      )}

      <div className="main-area">
        <Header pageTitle={pageTitle} profileType={profileType} />
        <main id="main-content" className="content" tabIndex="-1">
          <Suspense fallback={<LoadingFallback />}>
            {renderPage()}
          </Suspense>
        </main>
      </div>

      <Toast message={toast} />
    </div>
  );
}
