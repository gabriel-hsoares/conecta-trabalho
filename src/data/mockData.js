export const initialJobs = [
  { id: 1, title: 'Auxiliar Administrativo', company: 'Mercadinho São José', location: 'Comunidade local', type: 'CLT', salary: 'R$ 1.600', candidates: 8, tags: ['Atendimento', 'Organização', 'Informática básica'] },
  { id: 2, title: 'Atendente de Farmácia', company: 'Farmácia Popular', location: 'Bairro vizinho', type: 'CLT', salary: 'R$ 1.550', candidates: 5, tags: ['Atendimento', 'Comunicação', 'Vendas'] },
  { id: 3, title: 'Jovem Aprendiz', company: 'Oficina AutoMais', location: 'Comunidade local', type: 'Aprendizagem', salary: 'R$ 900', candidates: 12, tags: ['Primeiro emprego', 'Capacitação', 'Rotina administrativa'] }
];

export const initialCourses = [
  { id: 1, title: 'Informática Básica', institution: 'Parceiro local', duration: '20 horas', format: 'Online', level: 'Iniciante' },
  { id: 2, title: 'Atendimento ao Cliente', institution: 'Instituição parceira', duration: '12 horas', format: 'Presencial', level: 'Iniciante' },
  { id: 3, title: 'Como montar um currículo', institution: 'Conecta Trabalho', duration: '4 horas', format: 'Online', level: 'Básico' },
  { id: 4, title: 'Introdução ao Empreendedorismo', institution: 'Conecta Trabalho', duration: '8 horas', format: 'Online', level: 'Básico' }
];

export const initialTalents = [
  { id: 1, name: 'Maria Oliveira', role: 'Costureira', neighborhood: 'Comunidade local', score: 82, education: 'Ensino Médio', phone: '(85) 90000-0001', skills: ['Costura', 'Ajustes', 'Atendimento'] },
  { id: 2, name: 'João Santos', role: 'Eletricista', neighborhood: 'Bairro vizinho', score: 76, education: 'Ensino Técnico', phone: '(85) 90000-0002', skills: ['Instalação', 'Manutenção', 'Serviços residenciais'] },
  { id: 3, name: 'Ana Beatriz', role: 'Auxiliar Administrativo', neighborhood: 'Comunidade local', score: 88, education: 'Ensino Médio', phone: '(85) 90000-0003', skills: ['Excel básico', 'Organização', 'Atendimento'] }
];

export const initialApplications = [
  { id: 1, job: 'Auxiliar Administrativo', company: 'Mercadinho São José', status: 'Em análise' },
  { id: 2, job: 'Jovem Aprendiz', company: 'Oficina AutoMais', status: 'Currículo visualizado' }
];

export const impactIndicators = [
  { label: 'Usuários cadastrados', value: '1.000', description: 'Meta para os primeiros 12 meses' },
  { label: 'Vagas divulgadas', value: '300', description: 'Oportunidades publicadas por empresas locais' },
  { label: 'Cursos concluídos', value: '500', description: 'Capacitações finalizadas pelos usuários' },
  { label: 'Contratações realizadas', value: '150', description: 'Meta de conexões bem-sucedidas' }
];

export const kpis = [
  { name: 'Taxa de cadastro', goal: '40%', reason: 'Mede adesão inicial à plataforma.' },
  { name: 'Taxa de candidatura', goal: '30%', reason: 'Mede se as vagas geram ação dos usuários.' },
  { name: 'Taxa de conclusão de cursos', goal: '50%', reason: 'Mede engajamento com qualificação.' },
  { name: 'Taxa de contratação', goal: '15%', reason: 'Mede impacto direto em empregabilidade.' },
  { name: 'NPS', goal: '70', reason: 'Mede satisfação de trabalhadores e empresas.' },
  { name: 'Tempo médio para encontrar vaga', goal: 'Até 2 minutos', reason: 'Mede eficiência da experiência.' }
];
