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
  { id: 'f11', schoolId: 'stem', name: 'Dr. Kavitha Rajan', phone: '+919966655730', email: 'kavitha.rajan@cvv.ac.in', designation: 'Assistant Professor – Faculty of STEM', roomNo: '311', totalDutiesAllotted: 0, dutiesDone: 0, dutiesSwapped: 0 },
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
  { id: 'f35', schoolId: 'stem', name: 'Ms. Neethu Kunjappan', phone: '+917337229854', email: 'neethu.kunjappan@cvv.ac.in', designation: 'Assistant Professor – Faculty of STEM', roomNo: '335', totalDutiesAllotted: 0, dutiesDone: 0, dutiesSwapped: 0 },
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
  { id: 'f48', schoolId: 'stem', name: 'Ms. Nikitha V', phone: '+918139071268', email: 'nikitha.v@cvv.ac.in', designation: 'Assistant Professor – Faculty of STEM', roomNo: '348', totalDutiesAllotted: 0, dutiesDone: 0, dutiesSwapped: 0 },
  { id: 'f49', schoolId: 'stem', name: 'Ms. Gayathri Ashok', phone: '+917012892169', email: 'gayathri.ashok@cvv.ac.in', designation: 'Assistant Professor – Faculty of STEM', roomNo: '349', totalDutiesAllotted: 0, dutiesDone: 0, dutiesSwapped: 0 },
  { id: 'f50', schoolId: 'stem', name: 'Dr. Mohini Billore', phone: '+917337229854', email: 'mohini.b@cvv.ac.in', designation: 'Assistant Professor – Faculty of STEM', roomNo: '350', totalDutiesAllotted: 0, dutiesDone: 0, dutiesSwapped: 0 },
  { id: 'f51', schoolId: 'stem', name: 'Mr. Narayan Baban Shete', phone: '+918928786552', email: 'narayan.shete@cvv.ac.in', designation: 'Assistant Professor', roomNo: '350', totalDutiesAllotted: 0, dutiesDone: 0, dutiesSwapped: 0 },
  { id: 'f52', schoolId: 'stem', name: 'Dr. Dinta Muralidharan', phone: '+919167670629', email: 'dinta.muralidharan@cvv.ac.in', designation: 'Assistant Professor', roomNo: '350', totalDutiesAllotted: 0, dutiesDone: 0, dutiesSwapped: 0 },
  { id: 'f53', schoolId: 'stem', name: 'Ms. Suparna', phone: '+917736958422', email: 'gummalla.cvv230163@cvv.ac.in', designation: 'Assistant Professor – Faculty of STEM' , roomNo: '350', totalDutiesAllotted: 0, dutiesDone: 0, dutiesSwapped: 0 },
  { id: 'f54', schoolId: 'stem', name: 'Ms. Aparna', phone: '+919048876668', email: 'gummalla.cvv230163@cvv.ac.in', designation: 'Assistant Professor – Faculty of STEM' , roomNo: '350', totalDutiesAllotted: 0, dutiesDone: 0, dutiesSwapped: 0 },
  { id: 'f55', schoolId: 'stem', name: 'Dr. Haritha H', phone: '+919961932229', email: 'gummalla.cvv230163@cvv.ac.in', designation: 'Assistant Professor – Faculty of STEM', roomNo: '351', totalDutiesAllotted: 0, dutiesDone: 0, dutiesSwapped: 0 },
  { id: 'f56', schoolId: 'stem', name: 'Ms. Jayalakshmi', phone: '+916235494493', email: 'gummalla.cvv230163@cvv.ac.in', designation: 'Assistant Professor – Faculty of STEM', roomNo: '352', totalDutiesAllotted: 0, dutiesDone: 0, dutiesSwapped: 0 },
  { id: 'f57', schoolId: 'stem', name: 'Ms. Devika', phone: '+917337229854', email: 'gummalla.cvv230163@cvv.ac.in', designation: 'Assistant Professor – Faculty of STEM', roomNo: '353', totalDutiesAllotted: 0, dutiesDone: 0, dutiesSwapped: 0 },
  { id: 'f58', schoolId: 'stem', name: 'Ms. Anupriya', phone: '+919400308747', email: 'gummalla.cvv230163@cvv.ac.in', designation: 'Assistant Professor – Faculty of STEM', roomNo: '354', totalDutiesAllotted: 0, dutiesDone: 0, dutiesSwapped: 0 },
  { id: 'f59', schoolId: 'stem', name: 'Prof. Vivek Deshpande', phone: '+917337229854', email: 'gummalla.cvv230163@cvv.ac.in', designation: 'Professor – Faculty of STEM', roomNo: '355', totalDutiesAllotted: 0, dutiesDone: 0, dutiesSwapped: 0 },
];

export const timetable: TimetableEntry[] = [
// =========================================================
// B.Tech CSE - BATCH 1 - YEAR II
// Room: A202
// =========================================================

{ id: 'tt1', facultyId: 'f17', day: 'Mon', startTime: '09:00', endTime: '10:00', subject: 'Discrete Mathematical Structures', class: 'CSE Batch 1 Year II', roomNo: 'A202' },
{ id: 'tt2', facultyId: 'f2', day: 'Mon', startTime: '10:00', endTime: '11:00', subject: 'Introduction to Machine Learning', class: 'CSE Batch 1 Year II', roomNo: 'A202' },
{ id: 'tt3', facultyId: 'UNKNOWN', day: 'Mon', startTime: '11:10', endTime: '12:10', subject: 'Universal Human Values - 2', class: 'CSE Batch 1 Year II', roomNo: 'A202' },
{ id: 'tt4', facultyId: 'f37', day: 'Mon', startTime: '13:10', endTime: '14:00', subject: 'Object Oriented Programming', class: 'CSE Batch 1 Year II', roomNo: 'A202' },
{ id: 'tt5', facultyId: 'f12', day: 'Mon', startTime: '14:00', endTime: '16:00', subject: 'Digital Logic Design Lab', class: 'CSE Batch 1 Year II', roomNo: 'A202' },

{ id: 'tt6', facultyId: 'f6', day: 'Tue', startTime: '09:00', endTime: '11:00', subject: 'Idea Lab Workshop', class: 'CSE Batch 1 Year II', roomNo: 'A202' },
{ id: 'tt7', facultyId: 'f6', day: 'Tue', startTime: '11:10', endTime: '12:10', subject: 'Idea Lab Workshop', class: 'CSE Batch 1 Year II', roomNo: 'A202' },
{ id: 'tt8', facultyId: 'f37', day: 'Tue', startTime: '13:10', endTime: '16:00', subject: 'Object Oriented Programming Lab', class: 'CSE Batch 1 Year II', roomNo: 'A202' },

{ id: 'tt9', facultyId: 'f37', day: 'Wed', startTime: '09:00', endTime: '10:00', subject: 'Object Oriented Programming', class: 'CSE Batch 1 Year II', roomNo: 'A202' },
{ id: 'tt10', facultyId: 'UNKNOWN', day: 'Wed', startTime: '10:00', endTime: '11:00', subject: 'Universal Human Values - 2', class: 'CSE Batch 1 Year II', roomNo: 'A202' },
{ id: 'tt11', facultyId: 'f12', day: 'Wed', startTime: '11:10', endTime: '12:10', subject: 'Digital Logic Design', class: 'CSE Batch 1 Year II', roomNo: 'A202' },
{ id: 'tt12', facultyId: 'f17', day: 'Wed', startTime: '13:10', endTime: '14:00', subject: 'Discrete Mathematical Structures', class: 'CSE Batch 1 Year II', roomNo: 'A202' },

{ id: 'tt13', facultyId: 'f37', day: 'Thu', startTime: '09:00', endTime: '10:00', subject: 'Object Oriented Programming', class: 'CSE Batch 1 Year II', roomNo: 'A202' },
{ id: 'tt14', facultyId: 'f17', day: 'Thu', startTime: '10:00', endTime: '11:00', subject: 'Discrete Mathematical Structures', class: 'CSE Batch 1 Year II', roomNo: 'A202' },
{ id: 'tt15', facultyId: 'f52', day: 'Thu', startTime: '11:10', endTime: '12:10', subject: 'Indian Knowledge System: Self-Unfoldment', class: 'CSE Batch 1 Year II', roomNo: 'A202' },
{ id: 'tt16', facultyId: 'f2', day: 'Thu', startTime: '13:10', endTime: '14:00', subject: 'Introduction to Machine Learning', class: 'CSE Batch 1 Year II', roomNo: 'A202' },
{ id: 'tt17', facultyId: 'f52', day: 'Thu', startTime: '14:00', endTime: '15:00', subject: 'Indian Knowledge System: Self-Unfoldment', class: 'CSE Batch 1 Year II', roomNo: 'A202' },
{ id: 'tt18', facultyId: 'f2', day: 'Thu', startTime: '15:00', endTime: '16:00', subject: 'Introduction to Machine Learning', class: 'CSE Batch 1 Year II', roomNo: 'A202' },

{ id: 'tt19', facultyId: 'f2', day: 'Fri', startTime: '09:00', endTime: '10:00', subject: 'Introduction to Machine Learning', class: 'CSE Batch 1 Year II', roomNo: 'A202' },
{ id: 'tt20', facultyId: 'f12', day: 'Fri', startTime: '10:00', endTime: '11:00', subject: 'Digital Logic Design', class: 'CSE Batch 1 Year II', roomNo: 'A202' },
{ id: 'tt21', facultyId: 'f17', day: 'Fri', startTime: '11:10', endTime: '12:10', subject: 'Discrete Mathematical Structures', class: 'CSE Batch 1 Year II', roomNo: 'A202' },
{ id: 'tt22', facultyId: 'f12', day: 'Fri', startTime: '13:10', endTime: '14:00', subject: 'Digital Logic Design', class: 'CSE Batch 1 Year II', roomNo: 'A202' },
{ id: 'tt23', facultyId: 'UNKNOWN', day: 'Fri', startTime: '14:00', endTime: '15:00', subject: 'Universal Human Values - 2', class: 'CSE Batch 1 Year II', roomNo: 'A202' },
{ id: 'tt24', facultyId: 'f52', day: 'Fri', startTime: '15:00', endTime: '16:00', subject: 'Indian Knowledge System: Self-Unfoldment', class: 'CSE Batch 1 Year II', roomNo: 'A202' },

  // =========================================================
// B.Tech CSE AIML - YEAR II
// Room: A204
// =========================================================

{ id: 'tt25', facultyId: 'f33', day: 'Mon', startTime: '09:00', endTime: '10:00', subject: 'Introduction to Machine Learning', class: 'CSE AIML Year II', roomNo: 'A204' },
{ id: 'tt26', facultyId: 'f12', day: 'Mon', startTime: '10:00', endTime: '11:00', subject: 'Digital Logic Design', class: 'CSE AIML Year II', roomNo: 'A204' },
{ id: 'tt27', facultyId: 'f14', day: 'Mon', startTime: '11:10', endTime: '12:10', subject: 'Object Oriented Programming', class: 'CSE AIML Year II', roomNo: 'A204' },
{ id: 'tt28', facultyId: 'f13', day: 'Mon', startTime: '13:10', endTime: '14:00', subject: 'Universal Human Values - 2', class: 'CSE AIML Year II', roomNo: 'A204' },
{ id: 'tt29', facultyId: 'f33', day: 'Mon', startTime: '14:00', endTime: '15:00', subject: 'Introduction to Machine Learning', class: 'CSE AIML Year II', roomNo: 'A204' },
{ id: 'tt30', facultyId: 'f51', day: 'Mon', startTime: '15:00', endTime: '16:00', subject: 'Indian Knowledge System: Self-Unfoldment', class: 'CSE AIML Year II', roomNo: 'A204' },

{ id: 'tt31', facultyId: 'f17', day: 'Tue', startTime: '09:00', endTime: '10:00', subject: 'Discrete Mathematical Structures', class: 'CSE AIML Year II', roomNo: 'A204' },
{ id: 'tt32', facultyId: 'f13', day: 'Tue', startTime: '10:00', endTime: '11:00', subject: 'Universal Human Values - 2', class: 'CSE AIML Year II', roomNo: 'A204' },
{ id: 'tt33', facultyId: 'f12', day: 'Tue', startTime: '11:10', endTime: '12:10', subject: 'Digital Logic Design', class: 'CSE AIML Year II', roomNo: 'A204' },
{ id: 'tt34', facultyId: 'f17', day: 'Tue', startTime: '13:10', endTime: '14:00', subject: 'Discrete Mathematical Structures', class: 'CSE AIML Year II', roomNo: 'A204' },
{ id: 'tt35', facultyId: 'f51', day: 'Tue', startTime: '14:00', endTime: '15:00', subject: 'Indian Knowledge System: Self-Unfoldment', class: 'CSE AIML Year II', roomNo: 'A204' },
{ id: 'tt36', facultyId: 'f33', day: 'Tue', startTime: '15:00', endTime: '16:00', subject: 'Introduction to Machine Learning', class: 'CSE AIML Year II', roomNo: 'A204' },

{ id: 'tt37', facultyId: 'f33', day: 'Wed', startTime: '09:00', endTime: '11:00', subject: 'Machine Learning Lab', class: 'CSE AIML Year II', roomNo: 'A204' },
{ id: 'tt38', facultyId: 'f17', day: 'Wed', startTime: '11:10', endTime: '12:10', subject: 'Discrete Mathematical Structures', class: 'CSE AIML Year II', roomNo: 'A204' },
{ id: 'tt39', facultyId: 'f14', day: 'Wed', startTime: '13:10', endTime: '14:00', subject: 'Object Oriented Programming', class: 'CSE AIML Year II', roomNo: 'A204' },

{ id: 'tt40', facultyId: 'f17', day: 'Thu', startTime: '09:00', endTime: '10:00', subject: 'Discrete Mathematical Structures', class: 'CSE AIML Year II', roomNo: 'A204' },
{ id: 'tt41', facultyId: 'f12', day: 'Thu', startTime: '10:00', endTime: '11:00', subject: 'Digital Logic Design', class: 'CSE AIML Year II', roomNo: 'A204' },
{ id: 'tt42', facultyId: 'f33', day: 'Thu', startTime: '11:10', endTime: '12:10', subject: 'Introduction to Machine Learning', class: 'CSE AIML Year II', roomNo: 'A204' },
{ id: 'tt43', facultyId: 'f14', day: 'Thu', startTime: '13:10', endTime: '16:00', subject: 'Object Oriented Programming Lab', class: 'CSE AIML Year II', roomNo: 'A204' },

{ id: 'tt44', facultyId: 'f33', day: 'Fri', startTime: '09:00', endTime: '11:00', subject: 'Machine Learning Lab', class: 'CSE AIML Year II', roomNo: 'A204' },
{ id: 'tt45', facultyId: 'f51', day: 'Fri', startTime: '11:10', endTime: '12:10', subject: 'Indian Knowledge System: Self-Unfoldment', class: 'CSE AIML Year II', roomNo: 'A204' },
{ id: 'tt46', facultyId: 'f33', day: 'Fri', startTime: '13:10', endTime: '14:00', subject: 'Introduction to Machine Learning', class: 'CSE AIML Year II', roomNo: 'A204' },
{ id: 'tt47', facultyId: 'f13', day: 'Fri', startTime: '14:00', endTime: '15:00', subject: 'Universal Human Values - 2', class: 'CSE AIML Year II', roomNo: 'A204' },
{ id: 'tt48', facultyId: 'f14', day: 'Fri', startTime: '15:00', endTime: '16:00', subject: 'Object Oriented Programming', class: 'CSE AIML Year II', roomNo: 'A204' },

  // =========================================================
// B.Tech CSE - DATA SCIENCE - YEAR II
// Room: A315
// =========================================================

{ id: 'tt49', facultyId: 'f53', day: 'Mon', startTime: '09:00', endTime: '10:00', subject: 'Introduction to Data Science', class: 'CSE Data Science Year II', roomNo: 'A315' },
{ id: 'tt50', facultyId: 'f10', day: 'Mon', startTime: '10:00', endTime: '11:00', subject: 'Statistical Modelling and Numerical Methods', class: 'CSE Data Science Year II', roomNo: 'A315' },
{ id: 'tt51', facultyId: 'f22', day: 'Mon', startTime: '11:10', endTime: '12:10', subject: 'Environmental Science', class: 'CSE Data Science Year II', roomNo: 'A315' },
{ id: 'tt52', facultyId: 'f25', day: 'Mon', startTime: '13:10', endTime: '14:00', subject: 'Object Oriented Programming', class: 'CSE Data Science Year II', roomNo: 'A315' },
{ id: 'tt53', facultyId: 'f31', day: 'Mon', startTime: '14:00', endTime: '15:00', subject: 'Universal Human Values - 2', class: 'CSE Data Science Year II', roomNo: 'A315' },
{ id: 'tt54', facultyId: 'f10', day: 'Mon', startTime: '15:00', endTime: '16:00', subject: 'Statistical Modelling and Numerical Methods', class: 'CSE Data Science Year II', roomNo: 'A315' },

{ id: 'tt55', facultyId: 'f26', day: 'Tue', startTime: '09:00', endTime: '10:00', subject: 'Discrete Mathematical Structures', class: 'CSE Data Science Year II', roomNo: 'A315' },
{ id: 'tt56', facultyId: 'f22', day: 'Tue', startTime: '10:00', endTime: '11:00', subject: 'Environmental Science', class: 'CSE Data Science Year II', roomNo: 'A315' },
{ id: 'tt57', facultyId: 'f53', day: 'Tue', startTime: '11:10', endTime: '12:10', subject: 'Introduction to Data Science', class: 'CSE Data Science Year II', roomNo: 'A315' },
{ id: 'tt58', facultyId: 'f10', day: 'Tue', startTime: '13:10', endTime: '14:00', subject: 'Statistical Modelling and Numerical Methods', class: 'CSE Data Science Year II', roomNo: 'A315' },
{ id: 'tt59', facultyId: 'f26', day: 'Tue', startTime: '14:00', endTime: '15:00', subject: 'Discrete Mathematical Structures', class: 'CSE Data Science Year II', roomNo: 'A315' },
{ id: 'tt60', facultyId: 'f22', day: 'Tue', startTime: '15:00', endTime: '16:00', subject: 'Environmental Science', class: 'CSE Data Science Year II', roomNo: 'A315' },

{ id: 'tt61', facultyId: 'f25', day: 'Wed', startTime: '09:00', endTime: '10:00', subject: 'Object Oriented Programming', class: 'CSE Data Science Year II', roomNo: 'A315' },
{ id: 'tt62', facultyId: 'f10', day: 'Wed', startTime: '10:00', endTime: '11:00', subject: 'Statistical Modelling and Numerical Methods', class: 'CSE Data Science Year II', roomNo: 'A315' },
{ id: 'tt63', facultyId: 'f26', day: 'Wed', startTime: '11:10', endTime: '12:10', subject: 'Discrete Mathematical Structures', class: 'CSE Data Science Year II', roomNo: 'A315' },

{ id: 'tt64', facultyId: 'f10', day: 'Thu', startTime: '09:00', endTime: '11:00', subject: 'Python and Statistical Modelling Lab', class: 'CSE Data Science Year II', roomNo: 'A201' },
{ id: 'tt65', facultyId: 'f10', day: 'Thu', startTime: '11:10', endTime: '12:10', subject: 'Statistical Modelling and Numerical Methods', class: 'CSE Data Science Year II', roomNo: 'A315' },
{ id: 'tt66', facultyId: 'f53', day: 'Thu', startTime: '13:10', endTime: '14:00', subject: 'Introduction to Data Science', class: 'CSE Data Science Year II', roomNo: 'A315' },
{ id: 'tt67', facultyId: 'f25', day: 'Thu', startTime: '14:00', endTime: '15:00', subject: 'Object Oriented Programming', class: 'CSE Data Science Year II', roomNo: 'A315' },
{ id: 'tt68', facultyId: 'f31', day: 'Thu', startTime: '15:00', endTime: '16:00', subject: 'Universal Human Values - 2', class: 'CSE Data Science Year II', roomNo: 'A315' },

{ id: 'tt69', facultyId: 'f10', day: 'Fri', startTime: '09:00', endTime: '11:00', subject: 'Python and Statistical Modelling Lab', class: 'CSE Data Science Year II', roomNo: 'A201' },
{ id: 'tt70', facultyId: 'f31', day: 'Fri', startTime: '11:10', endTime: '12:10', subject: 'Universal Human Values - 2', class: 'CSE Data Science Year II', roomNo: 'A315' },
{ id: 'tt71', facultyId: 'f53', day: 'Fri', startTime: '13:10', endTime: '14:00', subject: 'Introduction to Data Science', class: 'CSE Data Science Year II', roomNo: 'A315' },
{ id: 'tt72', facultyId: 'f31', day: 'Fri', startTime: '14:00', endTime: '15:00', subject: 'Universal Human Values - 2', class: 'CSE Data Science Year II', roomNo: 'A315' },
{ id: 'tt73', facultyId: 'f25', day: 'Fri', startTime: '15:00', endTime: '16:00', subject: 'Object Oriented Programming', class: 'CSE Data Science Year II', roomNo: 'A315' }


// =========================================================
// B.Tech ECE - YEAR II
// Room: A314
// =========================================================

{ id: 'tt74', facultyId: 'f6', day: 'Mon', startTime: '09:00', endTime: '10:00', subject: 'Digital Logic Design', class: 'ECE Year II', roomNo: 'A314' },
{ id: 'tt75', facultyId: 'f24', day: 'Mon', startTime: '10:00', endTime: '11:00', subject: 'Electronic Devices and Circuits', class: 'ECE Year II', roomNo: 'A314' },
{ id: 'tt76', facultyId: 'f3', day: 'Mon', startTime: '11:10', endTime: '12:10', subject: 'Intellectual Property Right', class: 'ECE Year II', roomNo: 'A314' },
{ id: 'tt77', facultyId: 'f32', day: 'Mon', startTime: '13:10', endTime: '14:00', subject: 'Mathematics (Probability Theory and Stochastic Processes)', class: 'ECE Year II', roomNo: 'A314' },
{ id: 'tt78', facultyId: 'f31', day: 'Mon', startTime: '14:00', endTime: '15:00', subject: 'Universal Human Values - 2', class: 'ECE Year II', roomNo: 'A314' },
{ id: 'tt79', facultyId: 'f24', day: 'Mon', startTime: '15:00', endTime: '16:00', subject: 'Electronic Devices and Circuits', class: 'ECE Year II', roomNo: 'A314' },

{ id: 'tt80', facultyId: 'f32', day: 'Tue', startTime: '09:00', endTime: '10:00', subject: 'Mathematics (Probability Theory and Stochastic Processes)', class: 'ECE Year II', roomNo: 'A314' },
{ id: 'tt81', facultyId: 'UNKNOWN', day: 'Tue', startTime: '10:00', endTime: '11:00', subject: 'Network Theory and Analysis', class: 'ECE Year II', roomNo: 'A314' },
{ id: 'tt82', facultyId: 'f24', day: 'Tue', startTime: '11:10', endTime: '12:10', subject: 'Electronic Devices and Circuits', class: 'ECE Year II', roomNo: 'A314' },
{ id: 'tt83', facultyId: 'UNKNOWN', day: 'Tue', startTime: '13:10', endTime: '14:00', subject: 'Network Theory and Analysis', class: 'ECE Year II', roomNo: 'A314' },
{ id: 'tt84', facultyId: 'f6', day: 'Tue', startTime: '14:00', endTime: '15:00', subject: 'Digital Logic Design', class: 'ECE Year II', roomNo: 'A314' },
{ id: 'tt85', facultyId: 'f3', day: 'Tue', startTime: '15:00', endTime: '16:00', subject: 'Intellectual Property Right', class: 'ECE Year II', roomNo: 'A314' },

{ id: 'tt86', facultyId: 'f48', day: 'Wed', startTime: '09:00', endTime: '10:00', subject: 'Signals and Systems', class: 'ECE Year II', roomNo: 'A314' },
{ id: 'tt87', facultyId: 'f48', day: 'Wed', startTime: '10:00', endTime: '11:00', subject: 'Signals and Systems', class: 'ECE Year II', roomNo: 'A314' },
{ id: 'tt88', facultyId: 'f6', day: 'Wed', startTime: '11:10', endTime: '12:10', subject: 'Digital Logic Design', class: 'ECE Year II', roomNo: 'A314' },
{ id: 'tt89', facultyId: 'f50', day: 'Wed', startTime: '13:10', endTime: '14:00', subject: 'Life Skills', class: 'ECE Year II', roomNo: 'A314' },

{ id: 'tt90', facultyId: 'f48', day: 'Thu', startTime: '09:00', endTime: '10:00', subject: 'Signals and Systems', class: 'ECE Year II', roomNo: 'A314' },
{ id: 'tt91', facultyId: 'f50', day: 'Thu', startTime: '10:00', endTime: '11:00', subject: 'Life Skills', class: 'ECE Year II', roomNo: 'A314' },
{ id: 'tt92', facultyId: 'f3', day: 'Thu', startTime: '11:10', endTime: '12:10', subject: 'Intellectual Property Right', class: 'ECE Year II', roomNo: 'A314' },
{ id: 'tt93', facultyId: 'f24', day: 'Thu', startTime: '13:10', endTime: '15:00', subject: 'Electronic Devices and Circuits Lab', class: 'ECE Year II', roomNo: 'A314' },
{ id: 'tt94', facultyId: 'f31', day: 'Thu', startTime: '15:00', endTime: '16:00', subject: 'Universal Human Values - 2', class: 'ECE Year II', roomNo: 'A314' },

{ id: 'tt95', facultyId: 'UNKNOWN', day: 'Fri', startTime: '09:00', endTime: '10:00', subject: 'Network Theory and Analysis', class: 'ECE Year II', roomNo: 'A314' },
{ id: 'tt96', facultyId: 'f48', day: 'Fri', startTime: '10:00', endTime: '11:00', subject: 'Signals and Systems', class: 'ECE Year II', roomNo: 'A314' },
{ id: 'tt97', facultyId: 'f31', day: 'Fri', startTime: '11:10', endTime: '12:10', subject: 'Universal Human Values - 2', class: 'ECE Year II', roomNo: 'A314' },
{ id: 'tt98', facultyId: 'f32', day: 'Fri', startTime: '13:10', endTime: '14:00', subject: 'Mathematics (Probability Theory and Stochastic Processes)', class: 'ECE Year II', roomNo: 'A314' },
{ id: 'tt99', facultyId: 'f6', day: 'Fri', startTime: '14:00', endTime: '16:00', subject: 'Digital Logic Design Lab', class: 'ECE Year II', roomNo: 'A314' }
  
]


export const announcements: Announcement[] = [
  { id: 'a1', schoolId: 'stem', category: 'Invigilation', title: 'End-semester invigilation roster', priority: 'high', date: '2026-09-04', time: '09:30 AM', venue: 'Academic Block A', assignedFaculty: ['Dr. Praveen K M', 'Dr. Kavitha Rajan'] },
  { id: 'a2', schoolId: 'stem', category: 'Evaluation', title: 'STEM paper valuation schedule', priority: 'med', date: '2026-09-08', time: '10:00 AM', venue: 'Faculty Resource Room', assignedFaculty: ['Dr. Praveen K M'] },
  { id: 'a3', schoolId: 'stem', category: 'Meeting', title: 'Academic council meeting', priority: 'med', date: '2026-09-02', time: '02:30 PM', venue: 'Seminar Hall', assignedFaculty: ['Dr. Praveen K M', 'Dr. Kavitha Rajan'] },
  { id: 'a4', schoolId: 'stem', category: 'Circular', title: 'Updated examination guidelines', priority: 'low', date: '2026-08-28', time: 'All day', venue: 'Online', assignedFaculty: [] },
  { id: 'a5', schoolId: 'philosophy', category: 'Meeting', title: 'Department planning meeting', priority: 'med', date: '2026-09-03', time: '11:00 AM', venue: 'Block B', assignedFaculty: ['Dr. K. Suresh'] }
]
