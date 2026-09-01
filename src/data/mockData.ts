import type { Announcement, Faculty, School, TimetableEntry } from '../types'

export const schools: School[] = [
  { id: 'stem', name: 'Faculty of Science, Technology, Engineering and Mathematics (STEM)' },
  { id: 'business', name: 'School of Business and Economics' },
  { id: 'education', name: 'School of Education, Governance, Culture & Social Systems' },
  { id: 'kalayoga', name: 'School of Kalayoga' },
  { id: 'languages', name: 'School of Linguistics & Literary Studies' },
  { id: 'philosophy', name: 'School of Philosophy, Psychology & Scientific Heritage' },
  { id: 'vedic', name: 'School of Vedic Knowledge Systems' },
  { id: 'physical-education', name: 'Department of Physical Education and Sports' }
]

export const faculty: Faculty[] = [
  { id: 'f1', schoolId: 'stem', name: 'Dr. Anand H. S.', phone: '+919567092300', email: 'associatedean.stem@cvv.ac.in', designation: 'Associate Dean — STEM | Head – Department of Artificial Intelligence and Emerging Technologies', roomNo: '301', totalDutiesAllotted: 0, dutiesDone: 0, dutiesSwapped: 0 },
  { id: 'f2', schoolId: 'stem', name: 'Dr. Resmi N.G.', phone: '+919633291997', email: 'resmi.ng@cvv.ac.in', designation: 'Head – Department of Computer Science and Engineering | Senior Assistant Professor', roomNo: '302', totalDutiesAllotted: 0, dutiesDone: 0, dutiesSwapped: 0 },
  { id: 'f3', schoolId: 'stem', name: 'Dr. Praveen K M', phone: '+918547674715', email: 'praveen.km@cvv.ac.in', designation: 'Assistant Dean – Research', roomNo: '303', totalDutiesAllotted: 0, dutiesDone: 0, dutiesSwapped: 0 },
  { id: 'f4', schoolId: 'stem', name: 'Dr. Raisun Mathew', phone: '+919048101997', email: 'raisun.mathew@cvv.ac.in', designation: 'Assistant Dean – Doctoral Programmes | Assistant Professor | Associate Head of School, School of Linguistics and Literary Studies (LLS)', roomNo: '304', totalDutiesAllotted: 0, dutiesDone: 0, dutiesSwapped: 0 },
  { id: 'f5', schoolId: 'stem', name: 'Ms. Pradeeba V.', phone: '+919751994860', email: 'pradeeba.v@cvv.ac.in', designation: 'Assistant Professor', roomNo: '305', totalDutiesAllotted: 0, dutiesDone: 0, dutiesSwapped: 0 },
  { id: 'f6', schoolId: 'stem', name: 'Dr. S.M. Sharma', phone: '+918126761060', email: 'savitesh.sharma@cvv.ac.in ', designation: 'Professor | Head - Robotics and Automation Research Centre', roomNo: '306', totalDutiesAllotted: 0, dutiesDone: 0, dutiesSwapped: 0 },
  { id: 'f7', schoolId: 'stem', name: 'Dr. Vidya Gopal T. V.', phone: '+917012491344', email: 'vidya.gopaltv@cvv.ac.in', designation: 'Senior Assistant Professor and Assistant Dean – Entrepreneurial Learning | Faculty of STEM', roomNo: '307' , totalDutiesAllotted: 0, dutiesDone: 0, dutiesSwapped: 0},
  { id: 'f8', schoolId: 'stem', name: 'Dr. Anupama Jims', phone: '+917034961505', email: 'anupama.jims@cvv.ac.in', designation: 'Head – Centre for  Oceanic AI | Assistant Dean- External Affairs & Internationalisation , Director in Charge Innovation and Incubation Centre, Director- AI Innovation and Research Lab. | Assistant Professor – Faculty of STEM', roomNo: '308', totalDutiesAllotted: 0, dutiesDone: 0, dutiesSwapped: 0 },
  { id: 'f9', schoolId: 'stem', name: 'Dr. Uma Narayanan', phone: '+918089541154', email: 'uma.narayanan@cvv.ac.in', designation: 'Senior Assistant Professor – Faculty of STEM', roomNo: '309' , totalDutiesAllotted: 0, dutiesDone: 0, dutiesSwapped: 0},
  { id: 'f10', schoolId: 'stem', name: 'Dr. Sreenu G', phone: '+919495264590', email: 'sreenu.g@cvv.ac.in', designation: 'Assistant Professor – Faculty of STEM', roomNo: '310', totalDutiesAllotted: 0, dutiesDone: 0, dutiesSwapped: 0 },
  { id: 'f11', schoolId: 'stem', name: 'Dr. Kavitha Rajan', phone: '+91996665730', email: 'kavitha.rajan@cvv.ac.in', designation: 'Assistant Professor – Faculty of STEM', roomNo: '311', totalDutiesAllotted: 0, dutiesDone: 0, dutiesSwapped: 0 },
  { id: 'f12', schoolId: 'stem', name: 'Dr. Merin Skariah', phone: '+918606606606', email: 'merin.skariah@cvv.ac.in', designation: 'Assistant Professor – Faculty of STEM', roomNo: '312' , totalDutiesAllotted: 0, dutiesDone: 0, dutiesSwapped: 0},
  { id: 'f13', schoolId: 'stem', name: 'Ms. Sneha Gopinath', phone: '+919074930841', email: 'sneha.gopinath@cvv.ac.in', designation: 'Assistant Professor – Faculty of STEM', roomNo: '313', totalDutiesAllotted: 0, dutiesDone: 0, dutiesSwapped: 0 },
  { id: 'f14', schoolId: 'stem', name: 'Ms. Anuja G Krishnan', phone: '+917736947442', email: 'anuja.gkrishnan@cvv.ac.in', designation: 'Assistant Professor – Faculty of STEM', roomNo: '314', totalDutiesAllotted: 0, dutiesDone: 0, dutiesSwapped: 0 },
  { id: 'f15', schoolId: 'stem', name: 'Mr. Athul Ravi', phone: '+918547941399', email: 'athul.ravi@cvv.ac.in', designation: 'Assistant Professor – Faculty of STEM', roomNo: '315', totalDutiesAllotted: 0, dutiesDone: 0, dutiesSwapped: 0 },
  { id: 'f16', schoolId: 'stem', name: 'Mr. Georgin M T', phone: '+919400730565', email: 'georgin.mt@cvv.ac.in', designation: 'Assistant Professor – Faculty of STEM', roomNo: '316', totalDutiesAllotted: 0, dutiesDone: 0, dutiesSwapped: 0 },
  { id: 'f17', schoolId: 'stem', name: 'Dr. Akhila M S', phone: '+919746305671', email: 'akhila.ms@cvv.ac.in', designation: 'Assistant Professor – Faculty of STEM', roomNo: '317', totalDutiesAllotted: 0, dutiesDone: 0, dutiesSwapped: 0 },
  { id: 'f18', schoolId: 'stem', name: 'Dr. Angita Ram V', phone: '+919515788406', email: 'angita.ram@cvv.ac.in', designation: 'Assistant Professor – Faculty of STEM', roomNo: '318', totalDutiesAllotted: 0, dutiesDone: 0, dutiesSwapped: 0 },
  { id: 'f19', schoolId: 'stem', name: 'Dr. Josna James', phone: '+918281660300', email: 'josna.james@cvv.ac.in', designation: 'Assistant Professor – Faculty of STEM', roomNo: '319', totalDutiesAllotted: 0, dutiesDone: 0, dutiesSwapped: 0 },
  { id: 'f20', schoolId: 'stem', name: 'Dr. Arya Chandran', phone: '+918089217609', email: 'arya.chandran@cvv.ac.in', designation: 'Assistant Professor – Faculty of STEM', roomNo: '320', totalDutiesAllotted: 0, dutiesDone: 0, dutiesSwapped: 0 },
  { id: 'f21', schoolId: 'stem', name: 'Dr. Arya R', phone: '+919496320854', email: 'arya.r@cvv.ac.in', designation: 'Assistant Professor – Faculty of STEM', roomNo: '321', totalDutiesAllotted: 0, dutiesDone: 0, dutiesSwapped: 0 },
  { id: 'f22', schoolId: 'stem', name: 'Dr. Reshma S', phone: '+919497273984', email: 'reshma.s@cvv.ac.in', designation: 'Assistant Professor – Faculty of STEM', roomNo: '322', totalDutiesAllotted: 0, dutiesDone: 0, dutiesSwapped: 0 },
  { id: 'f23', schoolId: 'stem', name: 'Dr. Robin George', phone: '+919446789968', email: 'robin.george@cvv.ac.in', designation: 'Assistant Professor – Faculty of STEM', roomNo: '323' , totalDutiesAllotted: 0, dutiesDone: 0, dutiesSwapped: 0},
  { id: 'f24', schoolId: 'stem', name: 'Dr. K R N Aswini', phone: '+919493952288', email: 'aswini.krn@cvv.ac.in', designation: 'Assistant Professor – Faculty of STEM', roomNo: '324', totalDutiesAllotted: 0, dutiesDone: 0, dutiesSwapped: 0 },
  { id: 'f25', schoolId: 'stem', name: 'Dr. Megha V.', phone: '+919539539830', email: 'megha.v@cvv.ac.in', designation: 'Assistant Professor – Faculty of STEM', roomNo: '325', totalDutiesAllotted: 0, dutiesDone: 0, dutiesSwapped: 0 },
  { id: 'f26', schoolId: 'stem', name: 'Dr. Saranya A. S', phone: '+919400151572', email: 'saranya.as@cvv.ac.in', designation: 'Assistant Professor – Faculty of STEM', roomNo: '326', totalDutiesAllotted: 0, dutiesDone: 0, dutiesSwapped: 0 },
  { id: 'f27', schoolId: 'stem', name: 'Dr. Neha Elizabeth Thomas', phone: '+919961237272', email: 'neha.thomas@cvv.ac.in', designation: 'Assistant Professor – Faculty of STEM', roomNo: '327', totalDutiesAllotted: 0, dutiesDone: 0, dutiesSwapped: 0 },
  { id: 'f28', schoolId: 'stem', name: 'Dr. Shyama S', phone: '+919400426707', email: 'shyama.s@cvv.ac.in', designation: 'Assistant Professor – Faculty of STEM', roomNo: '328', totalDutiesAllotted: 0, dutiesDone: 0, dutiesSwapped: 0 },
  { id: 'f29', schoolId: 'stem', name: 'Dr. Shiju E.', phone: '+919497483977', email: 'shiju.e@cvv.ac.in', designation: 'Assistant Professor – Faculty of STEM', roomNo: '329' , totalDutiesAllotted: 0, dutiesDone: 0, dutiesSwapped: 0},
  { id: 'f30', schoolId: 'stem', name: 'Dr. Smrithi M. Venugopal', phone: '+918547536318', email: 'smrithi.mv@cvv.ac.in', designation: 'Assistant Professor – Faculty of STEM', roomNo: '330', totalDutiesAllotted: 0, dutiesDone: 0, dutiesSwapped: 0 },
  { id: 'f31', schoolId: 'stem', name: 'Dr. Suvanish Kumar', phone: '+918921380928', email: 'suvanish.kumar@cvv.ac.in', designation: 'Assistant Professor – Faculty of STEM', roomNo: '331' , totalDutiesAllotted: 0, dutiesDone: 0, dutiesSwapped: 0},
  { id: 'f32', schoolId: 'stem', name: 'Dr. Archana Babu', phone: '+919947622958', email: 'archana.babu@cvv.ac.in', designation: 'Assistant Professor – Faculty of STEM', roomNo: '332', totalDutiesAllotted: 0, dutiesDone: 0, dutiesSwapped: 0 },
  { id: 'f33', schoolId: 'stem', name: 'Dr. Nitha V R', phone: '+918138085414', email: 'nitha.vr@cvv.ac.in', designation: 'Assistant Professor – Faculty of STEM', roomNo: '333', totalDutiesAllotted: 0, dutiesDone: 0, dutiesSwapped: 0 },
  { id: 'f34', schoolId: 'stem', name: 'Dr. Soumya Haridas', phone: '+918606838427', email: 'soumya.haridas@cvv.ac.in', designation: 'Assistant Professor – Faculty of STEM', roomNo: '334', totalDutiesAllotted: 0, dutiesDone: 0, dutiesSwapped: 0 },
  { id: 'f35', schoolId: 'stem', name: 'Ms. Neethu Kunjappan', phone: '', email: 'neethu.kunjappan@cvv.ac.in', designation: 'Assistant Professor – Faculty of STEM', roomNo: '335', totalDutiesAllotted: 0, dutiesDone: 0, dutiesSwapped: 0 },
  { id: 'f36', schoolId: 'stem', name: 'Ms.Archana Ajith', phone: '+919526693390', email: 'archana.ajith@cvv.ac.in', designation: 'Assistant Professor – Faculty of STEM', roomNo: '336', totalDutiesAllotted: 0, dutiesDone: 0, dutiesSwapped: 0 },
  { id: 'f37', schoolId: 'stem', name: 'Ms. Kripa Radhakrishnan', phone: '+918891697910', email: 'kripa.r@cvv.ac.in', designation: 'Assistant Professor – Faculty of STEM', roomNo: '337' , totalDutiesAllotted: 0, dutiesDone: 0, dutiesSwapped: 0},
  { id: 'f38', schoolId: 'stem', name: 'Ms. Deepa P. L.', phone: '+919495229779', email: 'deepa.pl@cvv.ac.in', designation: 'Assistant Professor – Faculty of STEM', roomNo: '338', totalDutiesAllotted: 0, dutiesDone: 0, dutiesSwapped: 0 },
  { id: 'f39', schoolId: 'stem', name: 'Mr. Sarath T. R.', phone: '+919633244735', email: 'sarath.tr@cvv.ac.in', designation: 'Assistant Professor – Faculty of STEM', roomNo: '339', totalDutiesAllotted: 0, dutiesDone: 0, dutiesSwapped: 0 },
  { id: 'f40', schoolId: 'stem', name: 'Ms. Niby Babu', phone: '+919645025088', email: 'niby.babu@cvv.ac.in', designation: 'Assistant Professor – Faculty of STEM', roomNo: '340', totalDutiesAllotted: 0, dutiesDone: 0, dutiesSwapped: 0 },
  { id: 'f41', schoolId: 'stem', name: 'Ms. Tiny Thampan', phone: '+919633418339', email: 'tiny.thampan@cvv.ac.in', designation: 'Assistant Professor – Faculty of STEM', roomNo: '341', totalDutiesAllotted: 0, dutiesDone: 0, dutiesSwapped: 0 },
  { id: 'f42', schoolId: 'stem', name: 'Ms. Athira Ashok', phone: '+919037301294', email: 'athira.ashok@cvv.ac.in', designation: 'Assistant Professor – Faculty of STEM', roomNo: '342' , totalDutiesAllotted: 0, dutiesDone: 0, dutiesSwapped: 0},
  { id: 'f43', schoolId: 'stem', name: 'Ms. Sneha Raj', phone: '+917012471059', email: 'sneha.raj@cvv.ac.in', designation: 'Assistant Professor – Faculty of STEM', roomNo: '343' , totalDutiesAllotted: 0, dutiesDone: 0, dutiesSwapped: 0},
  { id: 'f44', schoolId: 'stem', name: 'Ms. Nimina George', phone: '+919037023304', email: 'nimina.george@cvv.ac.in', designation: 'Assistant Professor – Faculty of STEM', roomNo: '344', totalDutiesAllotted: 0, dutiesDone: 0, dutiesSwapped: 0 },
  { id: 'f45', schoolId: 'stem', name: 'Ms. Lintu Sara Jose', phone: '+919947800390', email: 'lintu.sarajose@cvv.ac.in', designation: 'Assistant Professor – Faculty of STEM', roomNo: '345', totalDutiesAllotted: 0, dutiesDone: 0, dutiesSwapped: 0 },
  { id: 'f46', schoolId: 'stem', name: 'Ms. Annmary Sunny', phone: '+918590969721', email: 'annmary.sunny@cvv.ac.in', designation: 'Assistant Professor –  Faculty of STEM', roomNo: '346', totalDutiesAllotted: 0, dutiesDone: 0, dutiesSwapped: 0 },
  { id: 'f47', schoolId: 'stem', name: 'Mr. Alen T. Binu', phone: '+917558066581', email: 'alen.tbinu@cvv.ac.in', designation: 'Assistant Professor –  Faculty of STEM', roomNo: '347', totalDutiesAllotted: 0, dutiesDone: 0, dutiesSwapped: 0 },
  { id: 'f48', schoolId: 'stem', name: 'Ms. Nikitha V', phone: '+918139071268', email: 'nikitha.v@cvv.ac.in', designation: 'Assistant Professor – Faculty of STEM', roomNo: '348, totalDutiesAllotted: 0, dutiesDone: 0, dutiesSwapped: 0' },
  { id: 'f49', schoolId: 'stem', name: 'Ms. Gayathri Ashok', phone: '+917012892169', email: 'gayathri.ashok@cvv.ac.in', designation: 'Assistant Professor – Faculty of STEM', roomNo: '349', totalDutiesAllotted: 0, dutiesDone: 0, dutiesSwapped: 0 },
  { id: 'f50', schoolId: 'stem', name: 'Dr. Rajendran', phone: '', email: 'rajendran.p@cvv.ac.in', designation: 'Associate Professor | Director, Accreditation and Quality Systems | Acting Registrar', roomNo: '350', totalDutiesAllotted: 0, dutiesDone: 0, dutiesSwapped: 0 }
];

export const timetable: TimetableEntry[] = [
  { id: 'tt1', facultyId: 'f8', day: 'Mon', startTime: '10:00', endTime: '11:00', subject: 'Artificial Intelligence', class: 'B.Tech CSE 3rd Year', roomNo: '201' },
  { id: 'tt2', facultyId: 'f8', day: 'Wed', startTime: '11:15', endTime: '12:15', subject: 'Machine Learning', class: 'B.Tech CSE 3rd Year', roomNo: '201' },
  { id: 'tt3', facultyId: 'f8', day: 'Fri', startTime: '14:00', endTime: '15:00', subject: 'AI Seminar', class: 'MCA 2nd Sem', roomNo: '204' },
  { id: 'tt4', facultyId: 'f9', day: 'Tue', startTime: '09:00', endTime: '10:00', subject: 'Data Structures', class: 'B.Tech CSE 2nd Year', roomNo: '203' },
  { id: 'tt5', facultyId: 'f1', day: 'Thu', startTime: '10:00', endTime: '11:00', subject: 'Research Methods', class: 'PhD Coursework', roomNo: '205' },
  { id: 'tt6', facultyId: 'f2', day: 'Mon', startTime: '11:15', endTime: '12:15', subject: 'Programming Fundamentals', class: 'B.Tech CSE 1st Year', roomNo: '206' }
]

export const announcements: Announcement[] = [
  { id: 'a1', schoolId: 'stem', category: 'Invigilation', title: 'End-semester invigilation roster', priority: 'high', date: '2026-09-04', time: '09:30 AM', venue: 'Academic Block A', assignedFaculty: ['Dr. Praveen K M', 'Dr. Kavitha Rajan'] },
  { id: 'a2', schoolId: 'stem', category: 'Evaluation', title: 'STEM paper valuation schedule', priority: 'med', date: '2026-09-08', time: '10:00 AM', venue: 'Faculty Resource Room', assignedFaculty: ['Dr. Praveen K M'] },
  { id: 'a3', schoolId: 'stem', category: 'Meeting', title: 'Academic council meeting', priority: 'med', date: '2026-09-02', time: '02:30 PM', venue: 'Seminar Hall', assignedFaculty: ['Dr. Praveen K M', 'Dr. Kavitha Rajan'] },
  { id: 'a4', schoolId: 'stem', category: 'Circular', title: 'Updated examination guidelines', priority: 'low', date: '2026-08-28', time: 'All day', venue: 'Online', assignedFaculty: [] },
  { id: 'a5', schoolId: 'philosophy', category: 'Meeting', title: 'Department planning meeting', priority: 'med', date: '2026-09-03', time: '11:00 AM', venue: 'Block B', assignedFaculty: ['Dr. K. Suresh'] }
]
