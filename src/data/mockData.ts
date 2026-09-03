import type { Announcement, Faculty, School, TimetableEntry } from '../types'

export const schools: School[] = [
  { id: 'stem', name: 'Science, Technology, Engineering and Mathematics (STEM)' },
  { id: 'business', name: 'School of Business and Economics' },
  { id: 'education', name: 'School of Education, Governance, Culture & Social Systems' },
  { id: 'kalayoga', name: 'School of Kalayoga' },
  { id: 'languages', name: 'School of Linguistics & Literary Studies' },
  { id: 'philosophy', name: 'School of Philosophy, Psychology & Scientific Heritage' },
  { id: 'vedic', name: 'School of Vedic Knowledge Systems' },
  { id: 'physical-education', name: 'Department of Physical Education and Sports' }
]

export const faculty: Faculty[] = [
  { id: 'f1', schoolId: 'stem', name: 'Dr. Anand H. S.', phone: '+919567092300', email: 'associatedean.stem@cvv.ac.in', designation: 'Associate Dean - STEM | Head – Department of Artificial Intelligence and Emerging Technologies', roomNo: '301', totalDutiesAllotted: 0, dutiesDone: 0, dutiesSwapped: 0 },
  { id: 'f2', schoolId: 'stem', name: 'Dr. Resmi N.G.', phone: '+919633291997', email: 'resmi.ng@cvv.ac.in', designation: 'Head – Department of Computer Science and Engineering | Senior Assistant Professor', roomNo: '302', totalDutiesAllotted: 0, dutiesDone: 0, dutiesSwapped: 0 },
  { id: 'f3', schoolId: 'stem', name: 'Dr. Praveen K M', phone: '+918547674715', email: 'praveen.km@cvv.ac.in', designation: 'Assistant Dean - Research', roomNo: '303', totalDutiesAllotted: 0, dutiesDone: 0, dutiesSwapped: 0 },
  { id: 'f4', schoolId: 'stem', name: 'Dr. Raisun Mathew', phone: '+919048101997', email: 'raisun.mathew@cvv.ac.in', designation: 'Assistant Dean - Doctoral Programmes | Assistant Professor | Associate Head of School, School of Linguistics and Literary Studies (LLS)', roomNo: '304', totalDutiesAllotted: 0, dutiesDone: 0, dutiesSwapped: 0 },
  { id: 'f5', schoolId: 'stem', name: 'Ms. Pradeeba V.', phone: '+919751994860', email: 'pradeeba.v@cvv.ac.in', designation: 'Assistant Professor – Faculty of STEM', roomNo: '305', totalDutiesAllotted: 0, dutiesDone: 0, dutiesSwapped: 0 },
  { id: 'f6', schoolId: 'stem', name: 'Dr. S.M. Sharma', phone: '+918126761060', email: 'savitesh.sharma@cvv.ac.in ', designation: 'Professor | Head - Robotics and Automation Research Centre', roomNo: '306', totalDutiesAllotted: 0, dutiesDone: 0, dutiesSwapped: 0 },
  { id: 'f7', schoolId: 'stem', name: 'Dr. Vidya Gopal T. V.', phone: '+917012491344', email: 'vidya.gopaltv@cvv.ac.in', designation: 'Senior Assistant Professor and Assistant Dean - Entrepreneurial Learning | Faculty of STEM', roomNo: '307' , totalDutiesAllotted: 0, dutiesDone: 0, dutiesSwapped: 0},
  { id: 'f8', schoolId: 'stem', name: 'Dr. Anupama Jims', phone: '+917034961505', email: 'anupama.jims@cvv.ac.in', designation: 'Head – Centre for  Oceanic AI | Assistant Dean - External Affairs & Internationalisation , Director in Charge Innovation and Incubation Centre, Director- AI Innovation and Research Lab. | Assistant Professor – Faculty of STEM', roomNo: '308', totalDutiesAllotted: 0, dutiesDone: 0, dutiesSwapped: 0 },
  { id: 'f9', schoolId: 'stem', name: 'Dr. Uma Narayanan', phone: '+918089541154', email: 'uma.narayanan@cvv.ac.in', designation: 'Senior Assistant Professor – Faculty of STEM', roomNo: '309' , totalDutiesAllotted: 0, dutiesDone: 0, dutiesSwapped: 0},
  { id: 'f10', schoolId: 'stem', name: 'Dr. Sreenu G', phone: '+919495264590', email: 'sreenu.g@cvv.ac.in', designation: 'Assistant Professor – Faculty of STEM', roomNo: '310', totalDutiesAllotted: 0, dutiesDone: 0, dutiesSwapped: 0 },
  { id: 'f11', schoolId: 'stem', name: 'Dr. Kavitha Rajan', phone: '+919966655730', email: 'kavitha.rajan@cvv.ac.in', designation: 'Assistant Professor – Faculty of STEM', roomNo: '311', totalDutiesAllotted: 0, dutiesDone: 0, dutiesSwapped: 0 },
  { id: 'f12', schoolId: 'stem', name: 'Dr. Merin Skariah', phone: '+918606606606', email: 'merin.skariah@cvv.ac.in', designation: 'Assistant Professor – Faculty of STEM', roomNo: '312' , totalDutiesAllotted: 0, dutiesDone: 0, dutiesSwapped: 0},
  { id: 'f13', schoolId: 'stem', name: 'Ms. Sneha Gopinath', phone: '+919074930841', email: 'sneha.gopinath@cvv.ac.in', designation: 'Assistant Professor – Faculty of STEM', roomNo: '313', totalDutiesAllotted: 0, dutiesDone: 0, dutiesSwapped: 0 },
  { id: 'f14', schoolId: 'stem', name: 'Ms. Anuja G Krishnan', phone: '+917736947442', email: 'anuja.gkrishnan@cvv.ac.in', designation: 'Assistant Professor – Faculty of STEM', roomNo: '314', totalDutiesAllotted: 0, dutiesDone: 0, dutiesSwapped: 0 },
  { id: 'f15', schoolId: 'stem', name: 'Mr. Athul Ravi', phone: '+918547941399', email: 'athul.ravi@cvv.ac.in', designation: 'Assistant Professor|Faculty of STEM | Head – Centre for Biomaterials and Sustainable Chemistry', roomNo: '315', totalDutiesAllotted: 0, dutiesDone: 0, dutiesSwapped: 0 },
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
  { id: 'f35', schoolId: 'stem', name: 'Ms. Neethu Kunjappan', phone: '+918075133398', email: 'neethu.kunjappan@cvv.ac.in', designation: 'Assistant Professor – Faculty of STEM', roomNo: '335', totalDutiesAllotted: 0, dutiesDone: 0, dutiesSwapped: 0 },
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
  { id: 'f60', schoolId: 'stem', name: 'Bhavesh B.', phone: '+917025736777', email: 'bhavesh.b@cvv.ac.in', designation: 'COO CVV | Joint Secretary CVV Trust', roomNo: '355', totalDutiesAllotted: 0, dutiesDone: 0, dutiesSwapped: 0 },
{ id: 'f61', schoolId: 'stem', name: 'Dr. Manosh Manoharan.', phone: '+917337229854', email:'gummalla.cvv230163@cvv.ac.in', designation: 'Assistant Professor', roomNo: '355', totalDutiesAllotted: 0, dutiesDone: 0, dutiesSwapped: 0 },
  
];

export const timetable: TimetableEntry[] = [
// =========================================================
// B.Tech CSE - BATCH 1 - YEAR II
// Room: A202
// =========================================================

{ id: 'tt1', facultyId: 'f17', day: 'Mon', startTime: '09:00', endTime: '10:00', subject: 'Discrete Mathematical Structures', class: 'CSE Batch 1 Year II', roomNo: 'A202' },
{ id: 'tt2', facultyId: 'f2', day: 'Mon', startTime: '10:00', endTime: '11:00', subject: 'Introduction to Machine Learning', class: 'CSE Batch 1 Year II', roomNo: 'A202' },
{ id: 'tt3', facultyId: 'f18', day: 'Mon', startTime: '11:10', endTime: '12:10', subject: 'Universal Human Values - 2', class: 'CSE Batch 1 Year II', roomNo: 'A202' },
{ id: 'tt4', facultyId: 'f37', day: 'Mon', startTime: '13:10', endTime: '14:00', subject: 'Object Oriented Programming', class: 'CSE Batch 1 Year II', roomNo: 'A202' },
{ id: 'tt5', facultyId: 'f12', day: 'Mon', startTime: '14:00', endTime: '16:00', subject: 'Digital Logic Design Lab', class: 'CSE Batch 1 Year II', roomNo: 'A202' },

{ id: 'tt6', facultyId: 'f6', day: 'Tue', startTime: '09:00', endTime: '11:00', subject: 'Idea Lab Workshop', class: 'CSE Batch 1 Year II', roomNo: 'A202' },
{ id: 'tt7', facultyId: 'f6', day: 'Tue', startTime: '11:10', endTime: '12:10', subject: 'Idea Lab Workshop', class: 'CSE Batch 1 Year II', roomNo: 'A202' },
{ id: 'tt8', facultyId: 'f37', day: 'Tue', startTime: '13:10', endTime: '16:00', subject: 'Object Oriented Programming Lab', class: 'CSE Batch 1 Year II', roomNo: 'A202' },

{ id: 'tt9', facultyId: 'f37', day: 'Wed', startTime: '09:00', endTime: '10:00', subject: 'Object Oriented Programming', class: 'CSE Batch 1 Year II', roomNo: 'A202' },
{ id: 'tt10', facultyId: 'f18', day: 'Wed', startTime: '10:00', endTime: '11:00', subject: 'Universal Human Values - 2', class: 'CSE Batch 1 Year II', roomNo: 'A202' },
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
{ id: 'tt23', facultyId: 'f18', day: 'Fri', startTime: '14:00', endTime: '15:00', subject: 'Universal Human Values - 2', class: 'CSE Batch 1 Year II', roomNo: 'A202' },
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

{ id: 'tt49', facultyId: 'f53', day: 'Mon', startTime: '09:00', endTime: '10:00', subject: 'Introduction to Data Science', class: 'CSE Data Science Year II', roomNo: 'A418' },
{ id: 'tt50', facultyId: 'f10', day: 'Mon', startTime: '10:00', endTime: '11:00', subject: 'Statistical Modelling and Numerical Methods', class: 'CSE Data Science Year II', roomNo: 'A301' },
{ id: 'tt51', facultyId: 'f22', day: 'Mon', startTime: '11:10', endTime: '12:10', subject: 'Environmental Science', class: 'CSE Data Science Year II', roomNo: 'A315' },
{ id: 'tt52', facultyId: 'f25', day: 'Mon', startTime: '13:10', endTime: '14:00', subject: 'Object Oriented Programming', class: 'CSE Data Science Year II', roomNo: 'A315' },
{ id: 'tt53', facultyId: 'f31', day: 'Mon', startTime: '14:00', endTime: '15:00', subject: 'Universal Human Values - 2', class: 'CSE Data Science Year II', roomNo: 'A315' },
{ id: 'tt54', facultyId: 'f10', day: 'Mon', startTime: '15:00', endTime: '16:00', subject: 'Statistical Modelling and Numerical Methods', class: 'CSE Data Science Year II', roomNo: 'A301' },

{ id: 'tt55', facultyId: 'f26', day: 'Tue', startTime: '09:00', endTime: '10:00', subject: 'Discrete Mathematical Structures', class: 'CSE Data Science Year II', roomNo: 'A315' },
{ id: 'tt56', facultyId: 'f22', day: 'Tue', startTime: '10:00', endTime: '11:00', subject: 'Environmental Science', class: 'CSE Data Science Year II', roomNo: 'A315' },
{ id: 'tt57', facultyId: 'f53', day: 'Tue', startTime: '11:10', endTime: '12:10', subject: 'Introduction to Data Science', class: 'CSE Data Science Year II', roomNo: 'A418' },
{ id: 'tt58', facultyId: 'f10', day: 'Tue', startTime: '13:10', endTime: '14:00', subject: 'Statistical Modelling and Numerical Methods', class: 'CSE Data Science Year II', roomNo: 'A301' },
{ id: 'tt59', facultyId: 'f26', day: 'Tue', startTime: '14:00', endTime: '15:00', subject: 'Discrete Mathematical Structures', class: 'CSE Data Science Year II', roomNo: 'A315' },
{ id: 'tt60', facultyId: 'f22', day: 'Tue', startTime: '15:00', endTime: '16:00', subject: 'Environmental Science', class: 'CSE Data Science Year II', roomNo: 'A315' },

{ id: 'tt61', facultyId: 'f25', day: 'Wed', startTime: '09:00', endTime: '10:00', subject: 'Object Oriented Programming', class: 'CSE Data Science Year II', roomNo: 'A315' },
{ id: 'tt62', facultyId: 'f10', day: 'Wed', startTime: '10:00', endTime: '11:00', subject: 'Statistical Modelling and Numerical Methods', class: 'CSE Data Science Year II', roomNo: 'A301' },
{ id: 'tt63', facultyId: 'f26', day: 'Wed', startTime: '11:10', endTime: '12:10', subject: 'Discrete Mathematical Structures', class: 'CSE Data Science Year II', roomNo: 'A315' },
{ id: 'tt64', facultyId: 'f26', day: 'Wed', startTime: '13:10', endTime: '14:00', subject: 'Discrete Mathematical Structures', class: 'CSE Data Science Year II', roomNo: 'A315' },

{ id: 'tt65', facultyId: 'f10', day: 'Thu', startTime: '09:00', endTime: '11:00', subject: 'Python and Statistical Modelling Lab', class: 'CSE Data Science Year II', roomNo: 'A201' },
{ id: 'tt66', facultyId: 'f10', day: 'Thu', startTime: '11:10', endTime: '12:10', subject: 'Statistical Modelling and Numerical Methods', class: 'CSE Data Science Year II', roomNo: 'A301' },
{ id: 'tt67', facultyId: 'f53', day: 'Thu', startTime: '13:10', endTime: '14:00', subject: 'Introduction to Data Science', class: 'CSE Data Science Year II', roomNo: 'A418' },
{ id: 'tt68', facultyId: 'f25', day: 'Thu', startTime: '14:00', endTime: '15:00', subject: 'Object Oriented Programming', class: 'CSE Data Science Year II', roomNo: 'A315' },
{ id: 'tt69', facultyId: 'f31', day: 'Thu', startTime: '15:00', endTime: '16:00', subject: 'Universal Human Values - 2', class: 'CSE Data Science Year II', roomNo: 'A315' },

{ id: 'tt70', facultyId: 'f10', day: 'Fri', startTime: '09:00', endTime: '11:00', subject: 'Python and Statistical Modelling Lab', class: 'CSE Data Science Year II', roomNo: 'A201' },
{ id: 'tt71', facultyId: 'f31', day: 'Fri', startTime: '11:10', endTime: '12:10', subject: 'Universal Human Values - 2', class: 'CSE Data Science Year II', roomNo: 'A315' },
{ id: 'tt72', facultyId: 'f25', day: 'Fri', startTime: '13:10', endTime: '16:00', subject: 'Object Oriented Programming Lab', class: 'CSE Data Science Year II', roomNo: 'NEW LAB 2' },
  
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
{ id: 'tt81', facultyId: 'f59', day: 'Tue', startTime: '10:00', endTime: '11:00', subject: 'Network Theory and Analysis', class: 'ECE Year II', roomNo: 'A314' },
{ id: 'tt82', facultyId: 'f24', day: 'Tue', startTime: '11:10', endTime: '12:10', subject: 'Electronic Devices and Circuits', class: 'ECE Year II', roomNo: 'A314' },
{ id: 'tt83', facultyId: 'f59', day: 'Tue', startTime: '13:10', endTime: '14:00', subject: 'Network Theory and Analysis', class: 'ECE Year II', roomNo: 'A314' },
{ id: 'tt84', facultyId: 'f6', day: 'Tue', startTime: '14:00', endTime: '15:00', subject: 'Digital Logic Design', class: 'ECE Year II', roomNo: 'A314' },
{ id: 'tt85', facultyId: 'f3', day: 'Tue', startTime: '15:00', endTime: '16:00', subject: 'Intellectual Property Right', class: 'ECE Year II', roomNo: 'A314' },

{ id: 'tt86', facultyId: 'f48', day: 'Wed', startTime: '09:00', endTime: '10:00', subject: 'Signals and Systems', class: 'ECE Year II', roomNo: 'A314' },
{ id: 'tt87', facultyId: 'f48', day: 'Wed', startTime: '10:00', endTime: '11:00', subject: 'Signals and Systems', class: 'ECE Year II', roomNo: 'A314' },
{ id: 'tt88', facultyId: 'f6', day: 'Wed', startTime: '11:10', endTime: '12:10', subject: 'Digital Logic Design', class: 'ECE Year II', roomNo: 'A314' },
{ id: 'tt89', facultyId: 'f50', day: 'Wed', startTime: '13:10', endTime: '14:00', subject: 'Life Skills', class: 'ECE Year II', roomNo: 'A314' },

{ id: 'tt90', facultyId: 'f48', day: 'Thu', startTime: '09:00', endTime: '10:00', subject: 'Signals and Systems', class: 'ECE Year II', roomNo: 'A314' },
{ id: 'tt91', facultyId: 'f50', day: 'Thu', startTime: '10:00', endTime: '11:00', subject: 'Life Skills', class: 'ECE Year II', roomNo: 'A314' },
{ id: 'tt92', facultyId: 'f59', day: 'Thu', startTime: '11:10', endTime: '12:10', subject: 'Network Theory and Analysis', class: 'ECE Year II', roomNo: 'A314' },
{ id: 'tt93', facultyId: 'f24', day: 'Thu', startTime: '13:10', endTime: '15:00', subject: 'Electronic Devices and Circuits Lab', class: 'ECE Year II', roomNo: 'A314' },
{ id: 'tt94', facultyId: 'f31', day: 'Thu', startTime: '15:00', endTime: '16:00', subject: 'Universal Human Values - 2', class: 'ECE Year II', roomNo: 'A314' },

{ id: 'tt95', facultyId: 'f3', day: 'Fri', startTime: '09:00', endTime: '10:00', subject: 'Intellectual Property Right', class: 'ECE Year II', roomNo: 'A314' },
{ id: 'tt96', facultyId: 'f48', day: 'Fri', startTime: '10:00', endTime: '11:00', subject: 'Signals and Systems', class: 'ECE Year II', roomNo: 'A314' },
{ id: 'tt97', facultyId: 'f31', day: 'Fri', startTime: '11:10', endTime: '12:10', subject: 'Universal Human Values - 2', class: 'ECE Year II', roomNo: 'A314' },
{ id: 'tt98', facultyId: 'f32', day: 'Fri', startTime: '13:10', endTime: '14:00', subject: 'Mathematics (Probability Theory and Stochastic Processes)', class: 'ECE Year II', roomNo: 'A314' },
{ id: 'tt99', facultyId: 'f6', day: 'Fri', startTime: '14:00', endTime: '16:00', subject: 'Digital Logic Design Lab', class: 'ECE Year II', roomNo: 'A314' },

// =========================================================
// B.Tech CSE - CYBER SECURITY - YEAR II
// Room: A315
// =========================================================

{ id: 'tt100', facultyId: 'f12', day: 'Mon', startTime: '09:00', endTime: '10:00', subject: 'Digital Logic Design', class: 'CSE Cyber Security Year II', roomNo: 'A315' },
{ id: 'tt101', facultyId: 'f22', day: 'Mon', startTime: '11:10', endTime: '12:10', subject: 'Environmental Science', class: 'CSE Cyber Security Year II', roomNo: 'A315' },
{ id: 'tt102', facultyId: 'f25', day: 'Mon', startTime: '13:10', endTime: '14:00', subject: 'Object Oriented Programming', class: 'CSE Cyber Security Year II', roomNo: 'A315' },
{ id: 'tt103', facultyId: 'f31', day: 'Mon', startTime: '14:00', endTime: '15:00', subject: 'Universal Human Values - 2', class: 'CSE Cyber Security Year II', roomNo: 'A315' },
{ id: 'tt104', facultyId: 'f9', day: 'Mon', startTime: '15:00', endTime: '16:00', subject: 'Information Theory for Cyber Security', class: 'CSE Cyber Security Year II', roomNo: 'A315' },

{ id: 'tt105', facultyId: 'f26', day: 'Tue', startTime: '09:00', endTime: '10:00', subject: 'Discrete Mathematical Structures', class: 'CSE Cyber Security Year II', roomNo: 'A315' },
{ id: 'tt106', facultyId: 'f22', day: 'Tue', startTime: '10:00', endTime: '11:00', subject: 'Environmental Science', class: 'CSE Cyber Security Year II', roomNo: 'A315' },
{ id: 'tt107', facultyId: 'f9', day: 'Tue', startTime: '13:10', endTime: '14:00', subject: 'Information Theory for Cyber Security', class: 'CSE Cyber Security Year II', roomNo: 'A315' },
{ id: 'tt108', facultyId: 'f26', day: 'Tue', startTime: '14:00', endTime: '15:00', subject: 'Discrete Mathematical Structures', class: 'CSE Cyber Security Year II', roomNo: 'A315' },
{ id: 'tt109', facultyId: 'f22', day: 'Tue', startTime: '15:00', endTime: '16:00', subject: 'Environmental Science', class: 'CSE Cyber Security Year II', roomNo: 'A315' },

{ id: 'tt110', facultyId: 'f25', day: 'Wed', startTime: '09:00', endTime: '10:00', subject: 'Object Oriented Programming', class: 'CSE Cyber Security Year II', roomNo: 'A315' },
{ id: 'tt111', facultyId: 'f12', day: 'Wed', startTime: '10:00', endTime: '11:00', subject: 'Digital Logic Design', class: 'CSE Cyber Security Year II', roomNo: 'A315' },
{ id: 'tt112', facultyId: 'f26', day: 'Wed', startTime: '11:10', endTime: '12:10', subject: 'Discrete Mathematical Structures', class: 'CSE Cyber Security Year II', roomNo: 'A315' },
{ id: 'tt113', facultyId: 'f26', day: 'Wed', startTime: '13:10', endTime: '14:00', subject: 'Discrete Mathematical Structures', class: 'CSE Cyber Security Year II', roomNo: 'A315' },

{ id: 'tt114', facultyId: 'f54', day: 'Thu', startTime: '09:00', endTime: '11:00', subject: 'Scripting Language for Security', class: 'CSE Cyber Security Year II', roomNo: 'A101' },
{ id: 'tt115', facultyId: 'f9', day: 'Thu', startTime: '11:10', endTime: '12:10', subject: 'Information Theory for Cyber Security', class: 'CSE Cyber Security Year II', roomNo: 'A315' },
{ id: 'tt116', facultyId: 'f12', day: 'Thu', startTime: '13:10', endTime: '14:00', subject: 'Digital Logic Design', class: 'CSE Cyber Security Year II', roomNo: 'A315' },
{ id: 'tt117', facultyId: 'f25', day: 'Thu', startTime: '14:00', endTime: '15:00', subject: 'Object Oriented Programming', class: 'CSE Cyber Security Year II', roomNo: 'A315' },
{ id: 'tt118', facultyId: 'f31', day: 'Thu', startTime: '15:00', endTime: '16:00', subject: 'Universal Human Values - 2', class: 'CSE Cyber Security Year II', roomNo: 'A315' },

{ id: 'tt119', facultyId: 'f54', day: 'Fri', startTime: '09:00', endTime: '11:00', subject: 'Scripting Language for Security', class: 'CSE Cyber Security Year II', roomNo: 'A101' },
{ id: 'tt120', facultyId: 'f31', day: 'Fri', startTime: '11:10', endTime: '12:10', subject: 'Universal Human Values - 2', class: 'CSE Cyber Security Year II', roomNo: 'A315' },
{ id: 'tt121', facultyId: 'f25', day: 'Fri', startTime: '13:10', endTime: '16:00', subject: 'Object Oriented Programming Lab', class: 'CSE Cyber Security Year II', roomNo: 'NEW LAB 2' },
  
// =========================================================
// B.Tech CSE - CYBER SECURITY - YEAR III
// Room: A410
// =========================================================

{ id: 'tt122', facultyId: 'f43', day: 'Mon', startTime: '09:00', endTime: '10:00', subject: 'Design and Analysis of Algorithms', class: 'CSE Cyber Security Year III', roomNo: 'A410' },
{ id: 'tt123', facultyId: 'f25', day: 'Mon', startTime: '10:00', endTime: '11:00', subject: 'Theory of Computation', class: 'CSE Cyber Security Year III', roomNo: 'A410' },
{ id: 'tt124', facultyId: 'f54', day: 'Mon', startTime: '11:10', endTime: '12:10', subject: 'Router and Mobile Forensics', class: 'CSE Cyber Security Year III', roomNo: 'A410' },
{ id: 'tt125', facultyId: 'f38', day: 'Mon', startTime: '13:10', endTime: '14:00', subject: 'Computer Networks', class: 'CSE Cyber Security Year III', roomNo: 'A410' },
{ id: 'tt126', facultyId: 'f53', day: 'Mon', startTime: '14:00', endTime: '15:00', subject: 'Steganography and Digital Watermarking', class: 'CSE Cyber Security Year III', roomNo: 'A410' },
{ id: 'tt127', facultyId: 'f50', day: 'Mon', startTime: '15:00', endTime: '16:00', subject: 'Constitution of India', class: 'CSE Cyber Security Year III', roomNo: 'A410' },

{ id: 'tt128', facultyId: 'f54', day: 'Tue', startTime: '09:00', endTime: '10:00', subject: 'Router and Mobile Forensics', class: 'CSE Cyber Security Year III', roomNo: 'A410' },
{ id: 'tt129', facultyId: 'f38', day: 'Tue', startTime: '10:00', endTime: '11:00', subject: 'Computer Networks', class: 'CSE Cyber Security Year III', roomNo: 'A410' },
{ id: 'tt130', facultyId: 'f50', day: 'Tue', startTime: '11:10', endTime: '12:10', subject: 'Constitution of India', class: 'CSE Cyber Security Year III', roomNo: 'A410' },
{ id: 'tt131', facultyId: 'f25', day: 'Tue', startTime: '13:10', endTime: '14:00', subject: 'Theory of Computation', class: 'CSE Cyber Security Year III', roomNo: 'A410' },
{ id: 'tt132', facultyId: 'f53', day: 'Tue', startTime: '14:00', endTime: '15:00', subject: 'Steganography and Digital Watermarking', class: 'CSE Cyber Security Year III', roomNo: 'A410' },
{ id: 'tt133', facultyId: 'f43', day: 'Tue', startTime: '15:00', endTime: '16:00', subject: 'Design and Analysis of Algorithms', class: 'CSE Cyber Security Year III', roomNo: 'A410' },

{ id: 'tt134', facultyId: 'f38', day: 'Wed', startTime: '09:00', endTime: '11:00', subject: 'Computer Networks Lab', class: 'CSE Cyber Security Year III', roomNo: 'A301' },
{ id: 'tt135', facultyId: 'f38', day: 'Wed', startTime: '11:10', endTime: '12:10', subject: 'Computer Networks Lab', class: 'CSE Cyber Security Year III', roomNo: 'A301' },
{ id: 'tt136', facultyId: 'f43', day: 'Wed', startTime: '13:10', endTime: '14:00', subject: 'Design and Analysis of Algorithms', class: 'CSE Cyber Security Year III', roomNo: 'A410' },

{ id: 'tt137', facultyId: 'f25', day: 'Thu', startTime: '09:00', endTime: '10:00', subject: 'Theory of Computation', class: 'CSE Cyber Security Year III', roomNo: 'A410' },
{ id: 'tt138', facultyId: 'f38', day: 'Thu', startTime: '10:00', endTime: '11:00', subject: 'Computer Networks', class: 'CSE Cyber Security Year III', roomNo: 'A410' },
{ id: 'tt139', facultyId: 'f58', day: 'Thu', startTime: '11:10', endTime: '12:10', subject: 'Operating System Security', class: 'CSE Cyber Security Year III', roomNo: 'A410' },
{ id: 'tt140', facultyId: 'f54', day: 'Thu', startTime: '13:10', endTime: '14:00', subject: 'Router and Mobile Forensics', class: 'CSE Cyber Security Year III', roomNo: 'A410' },
{ id: 'tt141', facultyId: 'f50', day: 'Thu', startTime: '14:00', endTime: '15:00', subject: 'Constitution of India', class: 'CSE Cyber Security Year III', roomNo: 'A410' },
{ id: 'tt142', facultyId: 'f58', day: 'Thu', startTime: '15:00', endTime: '16:00', subject: 'Operating System Security', class: 'CSE Cyber Security Year III', roomNo: 'A410' },

{ id: 'tt143', facultyId: 'f43', day: 'Fri', startTime: '09:00', endTime: '10:00', subject: 'Design and Analysis of Algorithms', class: 'CSE Cyber Security Year III', roomNo: 'A410' },
{ id: 'tt144', facultyId: 'f25', day: 'Fri', startTime: '10:00', endTime: '11:00', subject: 'Theory of Computation', class: 'CSE Cyber Security Year III', roomNo: 'A410' },
{ id: 'tt145', facultyId: 'f53', day: 'Fri', startTime: '11:10', endTime: '12:10', subject: 'Steganography and Digital Watermarking', class: 'CSE Cyber Security Year III', roomNo: 'A410' },
{ id: 'tt146', facultyId: 'f58', day: 'Fri', startTime: '13:10', endTime: '14:00', subject: 'Operating System Security', class: 'CSE Cyber Security Year III', roomNo: 'A410' },
{ id: 'tt147', facultyId: 'f41', day: 'Fri', startTime: '14:00', endTime: '16:00', subject: 'Minor Project 2', class: 'CSE Cyber Security Year III', roomNo: 'A410' },
{ id: 'tt148', facultyId: 'f49', day: 'Fri', startTime: '14:00', endTime: '16:00', subject: 'Minor Project 2', class: 'CSE Cyber Security Year III', roomNo: 'A410' },

// =========================================================
// B.Tech CSE - DATA SCIENCE - YEAR III
// Room: A404
// =========================================================

{ id: 'tt149', facultyId: 'f37', day: 'Mon', startTime: '09:00', endTime: '10:00', subject: 'Computer Networks Lab', class: 'CSE Data Science Year III', roomNo: 'A101' },
{ id: 'tt150', facultyId: 'f37', day: 'Mon', startTime: '10:00', endTime: '11:00', subject: 'Computer Networks Lab', class: 'CSE Data Science Year III', roomNo: 'A101' },
{ id: 'tt151', facultyId: 'f37', day: 'Mon', startTime: '11:10', endTime: '12:10', subject: 'Computer Networks Lab', class: 'CSE Data Science Year III', roomNo: 'A101' },
{ id: 'tt152', facultyId: 'f56', day: 'Mon', startTime: '14:00', endTime: '15:00', subject: 'Big Data Processing Lab', class: 'CSE Data Science Year III', roomNo: 'NEW LAB 2' },
{ id: 'tt153', facultyId: 'f56', day: 'Mon', startTime: '15:00', endTime: '16:00', subject: 'Big Data Processing Lab', class: 'CSE Data Science Year III', roomNo: 'NEW LAB 2' },

{ id: 'tt154', facultyId: 'f25', day: 'Tue', startTime: '09:00', endTime: '10:00', subject: 'Theory of Computation', class: 'CSE Data Science Year III', roomNo: 'A404' },
{ id: 'tt155', facultyId: 'f43', day: 'Tue', startTime: '10:00', endTime: '11:00', subject: 'Design and Analysis of Algorithms', class: 'CSE Data Science Year III', roomNo: 'A404' },
{ id: 'tt156', facultyId: 'f25', day: 'Tue', startTime: '11:10', endTime: '12:10', subject: 'Theory of Computation', class: 'CSE Data Science Year III', roomNo: 'A404' },
{ id: 'tt157', facultyId: 'f43', day: 'Tue', startTime: '13:10', endTime: '14:00', subject: 'Design and Analysis of Algorithms', class: 'CSE Data Science Year III', roomNo: 'A404' },
{ id: 'tt158', facultyId: 'f56', day: 'Tue', startTime: '14:00', endTime: '15:00', subject: 'Big Data Processing', class: 'CSE Data Science Year III', roomNo: 'A404' },
{ id: 'tt159', facultyId: 'f50', day: 'Tue', startTime: '15:00', endTime: '16:00', subject: 'Constitution of India', class: 'CSE Data Science Year III', roomNo: 'A404' },

{ id: 'tt160', facultyId: 'f57', day: 'Wed', startTime: '09:00', endTime: '10:00', subject: 'Introduction to Generative AI and LLM', class: 'CSE Data Science Year III', roomNo: 'A404' },
{ id: 'tt161', facultyId: 'f43', day: 'Wed', startTime: '10:00', endTime: '11:00', subject: 'Design and Analysis of Algorithms', class: 'CSE Data Science Year III', roomNo: 'A404' },
{ id: 'tt162', facultyId: 'f25', day: 'Wed', startTime: '11:10', endTime: '12:10', subject: 'Theory of Computation', class: 'CSE Data Science Year III', roomNo: 'A404' },
{ id: 'tt163', facultyId: 'f57', day: 'Wed', startTime: '13:10', endTime: '14:00', subject: 'Introduction to Generative AI and LLM', class: 'CSE Data Science Year III', roomNo: 'A404' },

{ id: 'tt164', facultyId: 'f43', day: 'Thu', startTime: '09:00', endTime: '10:00', subject: 'Design and Analysis of Algorithms', class: 'CSE Data Science Year III', roomNo: 'A404' },
{ id: 'tt165', facultyId: 'f37', day: 'Thu', startTime: '10:00', endTime: '11:00', subject: 'Computer Networks', class: 'CSE Data Science Year III', roomNo: 'A404' },
{ id: 'tt166', facultyId: 'f25', day: 'Thu', startTime: '11:10', endTime: '12:10', subject: 'Theory of Computation', class: 'CSE Data Science Year III', roomNo: 'A404' },
{ id: 'tt167', facultyId: 'f57', day: 'Thu', startTime: '13:10', endTime: '14:00', subject: 'Introduction to Generative AI and LLM', class: 'CSE Data Science Year III', roomNo: 'A404' },
{ id: 'tt168', facultyId: 'f47', day: 'Thu', startTime: '14:00', endTime: '16:00', subject: 'Minor Project 2', class: 'CSE Data Science Year III', roomNo: 'A404' },
{ id: 'tt169', facultyId: 'f46', day: 'Thu', startTime: '14:00', endTime: '16:00', subject: 'Minor Project 2', class: 'CSE Data Science Year III', roomNo: 'A404' },

{ id: 'tt170', facultyId: 'f37', day: 'Fri', startTime: '09:00', endTime: '10:00', subject: 'Computer Networks', class: 'CSE Data Science Year III', roomNo: 'A404' },
{ id: 'tt171', facultyId: 'f56', day: 'Fri', startTime: '10:00', endTime: '11:00', subject: 'Big Data Processing', class: 'CSE Data Science Year III', roomNo: 'A404' },
{ id: 'tt172', facultyId: 'f37', day: 'Fri', startTime: '11:10', endTime: '12:10', subject: 'Computer Networks', class: 'CSE Data Science Year III', roomNo: 'A404' },
{ id: 'tt173', facultyId: 'f50', day: 'Fri', startTime: '13:10', endTime: '14:00', subject: 'Constitution of India', class: 'CSE Data Science Year III', roomNo: 'A404' },
{ id: 'tt174', facultyId: 'f56', day: 'Fri', startTime: '14:00', endTime: '15:00', subject: 'Big Data Processing', class: 'CSE Data Science Year III', roomNo: 'A404' },
{ id: 'tt175', facultyId: 'f50', day: 'Fri', startTime: '15:00', endTime: '16:00', subject: 'Constitution of India', class: 'CSE Data Science Year III', roomNo: 'A404' },

// =========================================================
// B.Tech CSE AIML - BATCH 1 - YEAR III (AIML 1)
// Room: A316
// =========================================================

{ id: 'tt176', facultyId: 'f42', day: 'Mon', startTime: '09:00', endTime: '10:00', subject: 'Design and Analysis of Algorithms', class: 'AIML 1 Year III', roomNo: 'A316' },
{ id: 'tt177', facultyId: 'f59', day: 'Mon', startTime: '10:00', endTime: '11:00', subject: 'Analog Electronic Circuits', class: 'AIML 1 Year III', roomNo: 'A316' },
{ id: 'tt178', facultyId: 'f42', day: 'Mon', startTime: '11:10', endTime: '12:10', subject: 'Design and Analysis of Algorithms', class: 'AIML 1 Year III', roomNo: 'A316' },
{ id: 'tt179', facultyId: 'f54', day: 'Mon', startTime: '13:10', endTime: '14:00', subject: 'Data Visualisation', class: 'AIML 1 Year III', roomNo: 'A316' },
{ id: 'tt180', facultyId: 'f53', day: 'Mon', startTime: '13:10', endTime: '14:00', subject: 'Big Data Analytics', class: 'AIML 1 Year III', roomNo: 'A316' },
{ id: 'tt181', facultyId: 'f10', day: 'Mon', startTime: '14:00', endTime: '15:00', subject: 'Introduction to Generative AI and LLM', class: 'AIML 1 Year III', roomNo: 'A316' },
{ id: 'tt182', facultyId: 'f38', day: 'Mon', startTime: '15:00', endTime: '16:00', subject: 'Computer Networks', class: 'AIML 1 Year III', roomNo: 'A316' },

{ id: 'tt183', facultyId: 'f10', day: 'Tue', startTime: '09:00', endTime: '10:00', subject: 'Introduction to Generative AI and LLM', class: 'AIML 1 Year III', roomNo: 'A316' },
{ id: 'tt184', facultyId: 'f55', day: 'Tue', startTime: '10:00', endTime: '11:00', subject: 'Data and Visual Analytics', class: 'AIML 1 Year III', roomNo: 'A316' },
{ id: 'tt185', facultyId: 'f38', day: 'Tue', startTime: '11:10', endTime: '12:10', subject: 'Computer Networks', class: 'AIML 1 Year III', roomNo: 'A316' },
{ id: 'tt186', facultyId: 'f38', day: 'Tue', startTime: '13:10', endTime: '14:00', subject: 'Computer Networks', class: 'AIML 1 Year III', roomNo: 'A316' },
{ id: 'tt187', facultyId: 'f5', day: 'Tue', startTime: '14:00', endTime: '15:00', subject: 'Theory of Computation', class: 'AIML 1 Year III', roomNo: 'A316' },
{ id: 'tt188', facultyId: 'f55', day: 'Tue', startTime: '15:00', endTime: '16:00', subject: 'Data and Visual Analytics', class: 'AIML 1 Year III', roomNo: 'A316' },

{ id: 'tt189', facultyId: 'f5', day: 'Wed', startTime: '09:00', endTime: '10:00', subject: 'Theory of Computation', class: 'AIML 1 Year III', roomNo: 'A316' },
{ id: 'tt190', facultyId: 'f59', day: 'Wed', startTime: '10:00', endTime: '11:00', subject: 'Analog Electronic Circuits', class: 'AIML 1 Year III', roomNo: 'A316' },
{ id: 'tt191', facultyId: 'f42', day: 'Wed', startTime: '11:10', endTime: '12:10', subject: 'Design and Analysis of Algorithms', class: 'AIML 1 Year III', roomNo: 'A316' },
{ id: 'tt192', facultyId: 'f54', day: 'Wed', startTime: '13:10', endTime: '14:00', subject: 'Data Visualisation', class: 'AIML 1 Year III', roomNo: 'A316' },
{ id: 'tt193', facultyId: 'f53', day: 'Wed', startTime: '13:10', endTime: '14:00', subject: 'Big Data Analytics', class: 'AIML 1 Year III', roomNo: 'A316' },

{ id: 'tt194', facultyId: 'f55', day: 'Thu', startTime: '09:00', endTime: '10:00', subject: 'Data and Visual Analytics', class: 'AIML 1 Year III', roomNo: 'A316' },
{ id: 'tt195', facultyId: 'f5', day: 'Thu', startTime: '10:00', endTime: '11:00', subject: 'Theory of Computation', class: 'AIML 1 Year III', roomNo: 'A316' },
{ id: 'tt196', facultyId: 'f54', day: 'Thu', startTime: '11:10', endTime: '12:10', subject: 'Data Visualisation', class: 'AIML 1 Year III', roomNo: 'A316' },
{ id: 'tt197', facultyId: 'f53', day: 'Thu', startTime: '11:10', endTime: '12:10', subject: 'Big Data Analytics', class: 'AIML 1 Year III', roomNo: 'A316' },
{ id: 'tt198', facultyId: 'f38', day: 'Thu', startTime: '13:10', endTime: '14:00', subject: 'Computer Networks Lab', class: 'AIML 1 Year III', roomNo: 'A101' },
{ id: 'tt199', facultyId: 'f38', day: 'Thu', startTime: '14:00', endTime: '15:00', subject: 'Computer Networks Lab', class: 'AIML 1 Year III', roomNo: 'A101' },
{ id: 'tt200', facultyId: 'f38', day: 'Thu', startTime: '15:00', endTime: '16:00', subject: 'Computer Networks Lab', class: 'AIML 1 Year III', roomNo: 'A101' },

{ id: 'tt201', facultyId: 'f59', day: 'Fri', startTime: '09:00', endTime: '10:00', subject: 'Analog Electronic Circuits', class: 'AIML 1 Year III', roomNo: 'A316' },
{ id: 'tt202', facultyId: 'f42', day: 'Fri', startTime: '10:00', endTime: '11:00', subject: 'Design and Analysis of Algorithms', class: 'AIML 1 Year III', roomNo: 'A316' },
{ id: 'tt203', facultyId: 'f5', day: 'Fri', startTime: '11:10', endTime: '12:10', subject: 'Theory of Computation', class: 'AIML 1 Year III', roomNo: 'A316' },
{ id: 'tt204', facultyId: 'f10', day: 'Fri', startTime: '13:10', endTime: '14:00', subject: 'Introduction to Generative AI and LLM', class: 'AIML 1 Year III', roomNo: 'A316' },
{ id: 'tt205', facultyId: 'f9', day: 'Fri', startTime: '14:00', endTime: '15:00', subject: 'Minor Project 2', class: 'AIML 1 Year III', roomNo: 'A316' },
{ id: 'tt206', facultyId: 'f9', day: 'Fri', startTime: '15:00', endTime: '16:00', subject: 'Minor Project 2', class: 'AIML 1 Year III', roomNo: 'A316' },

// =========================================================
// B.Tech CSE AIML - BATCH 2 - YEAR III (AIML 2)
// Room: A402
// =========================================================

{ id: 'tt207', facultyId: 'f38', day: 'Mon', startTime: '09:00', endTime: '10:00', subject: 'Computer Networks', class: 'AIML 2 Year III', roomNo: 'A402' },
{ id: 'tt208', facultyId: 'f33', day: 'Mon', startTime: '10:00', endTime: '11:00', subject: 'Theory of Computation', class: 'AIML 2 Year III', roomNo: 'A402' },
{ id: 'tt209', facultyId: 'f10', day: 'Mon', startTime: '11:10', endTime: '12:10', subject: 'Introduction to Generative AI and LLM', class: 'AIML 2 Year III', roomNo: 'A402' },
{ id: 'tt210', facultyId: 'f54', day: 'Mon', startTime: '13:10', endTime: '14:00', subject: 'Data Visualisation', class: 'AIML 2 Year III', roomNo: 'A402' },
{ id: 'tt211', facultyId: 'f22', day: 'Mon', startTime: '13:10', endTime: '14:00', subject: 'Big Data Analytics', class: 'AIML 2 Year III', roomNo: 'A402' },
{ id: 'tt212', facultyId: 'f55', day: 'Mon', startTime: '14:00', endTime: '15:00', subject: 'Data and Visual Analytics', class: 'AIML 2 Year III', roomNo: 'A402' },
{ id: 'tt213', facultyId: 'f59', day: 'Mon', startTime: '15:00', endTime: '16:00', subject: 'Analog Electronic Circuits', class: 'AIML 2 Year III', roomNo: 'A402' },

{ id: 'tt214', facultyId: 'f38', day: 'Tue', startTime: '09:00', endTime: '10:00', subject: 'Computer Networks', class: 'AIML 2 Year III', roomNo: 'A402' },
{ id: 'tt215', facultyId: 'f45', day: 'Tue', startTime: '10:00', endTime: '11:00', subject: 'Design and Analysis of Algorithms', class: 'AIML 2 Year III', roomNo: 'A402' },
{ id: 'tt216', facultyId: 'f59', day: 'Tue', startTime: '11:10', endTime: '12:10', subject: 'Analog Electronic Circuits', class: 'AIML 2 Year III', roomNo: 'A402' },
{ id: 'tt217', facultyId: 'f33', day: 'Tue', startTime: '13:10', endTime: '14:00', subject: 'Theory of Computation', class: 'AIML 2 Year III', roomNo: 'A402' },
{ id: 'tt218', facultyId: 'f10', day: 'Tue', startTime: '14:00', endTime: '15:00', subject: 'Introduction to Generative AI and LLM', class: 'AIML 2 Year III', roomNo: 'A402' },
{ id: 'tt219', facultyId: 'f45', day: 'Tue', startTime: '15:00', endTime: '16:00', subject: 'Design and Analysis of Algorithms', class: 'AIML 2 Year III', roomNo: 'A402' },

{ id: 'tt220', facultyId: 'f38', day: 'Wed', startTime: '09:00', endTime: '11:00', subject: 'Computer Networks Lab', class: 'AIML 2 Year III', roomNo: 'A101' },
{ id: 'tt221', facultyId: 'f38', day: 'Wed', startTime: '11:10', endTime: '12:10', subject: 'Computer Networks Lab', class: 'AIML 2 Year III', roomNo: 'A101' },
{ id: 'tt222', facultyId: 'f54', day: 'Wed', startTime: '13:10', endTime: '14:00', subject: 'Data Visualisation', class: 'AIML 2 Year III', roomNo: 'A402' },
{ id: 'tt223', facultyId: 'f22', day: 'Wed', startTime: '13:10', endTime: '14:00', subject: 'Big Data Analytics', class: 'AIML 2 Year III', roomNo: 'A402' },

{ id: 'tt224', facultyId: 'f45', day: 'Thu', startTime: '09:00', endTime: '10:00', subject: 'Design and Analysis of Algorithms', class: 'AIML 2 Year III', roomNo: 'A402' },
{ id: 'tt225', facultyId: 'f33', day: 'Thu', startTime: '10:00', endTime: '11:00', subject: 'Theory of Computation', class: 'AIML 2 Year III', roomNo: 'A402' },
{ id: 'tt226', facultyId: 'f54', day: 'Thu', startTime: '11:10', endTime: '12:10', subject: 'Data Visualisation', class: 'AIML 2 Year III', roomNo: 'A402' },
{ id: 'tt227', facultyId: 'f22', day: 'Thu', startTime: '11:10', endTime: '12:10', subject: 'Big Data Analytics', class: 'AIML 2 Year III', roomNo: 'A402' },
{ id: 'tt228', facultyId: 'f33', day: 'Thu', startTime: '13:10', endTime: '14:00', subject: 'Theory of Computation', class: 'AIML 2 Year III', roomNo: 'A402' },
{ id: 'tt229', facultyId: 'f10', day: 'Thu', startTime: '14:00', endTime: '15:00', subject: 'Introduction to Generative AI and LLM', class: 'AIML 2 Year III', roomNo: 'A402' },
{ id: 'tt230', facultyId: 'f55', day: 'Thu', startTime: '15:00', endTime: '16:00', subject: 'Data and Visual Analytics', class: 'AIML 2 Year III', roomNo: 'A402' },

{ id: 'tt231', facultyId: 'f45', day: 'Fri', startTime: '09:00', endTime: '10:00', subject: 'Design and Analysis of Algorithms', class: 'AIML 2 Year III', roomNo: 'A402' },
{ id: 'tt232', facultyId: 'f38', day: 'Fri', startTime: '10:00', endTime: '11:00', subject: 'Computer Networks', class: 'AIML 2 Year III', roomNo: 'A402' },
{ id: 'tt233', facultyId: 'f59', day: 'Fri', startTime: '11:10', endTime: '12:10', subject: 'Analog Electronic Circuits', class: 'AIML 2 Year III', roomNo: 'A402' },
{ id: 'tt234', facultyId: 'f55', day: 'Fri', startTime: '13:10', endTime: '14:00', subject: 'Data and Visual Analytics', class: 'AIML 2 Year III', roomNo: 'A402' },
{ id: 'tt235', facultyId: 'f37', day: 'Fri', startTime: '14:00', endTime: '16:00', subject: 'Minor Project 2', class: 'AIML 2 Year III', roomNo: 'A402' },

// =========================================================
// B.Tech ECE - YEAR III
// Room: A513
// =========================================================

{ id: 'tt236', facultyId: 'f23', day: 'Mon', startTime: '09:00', endTime: '11:00', subject: 'Digital Signal Processing Lab', class: 'ECE Year III', roomNo: 'A513' },
{ id: 'tt237', facultyId: 'f48', day: 'Mon', startTime: '11:10', endTime: '12:10', subject: 'Control Systems', class: 'ECE Year III', roomNo: 'A513' },
{ id: 'tt238', facultyId: 'f24', day: 'Mon', startTime: '13:10', endTime: '14:00', subject: 'Embedded Systems', class: 'ECE Year III', roomNo: 'A513' },
{ id: 'tt239', facultyId: 'f23', day: 'Mon', startTime: '14:00', endTime: '15:00', subject: 'Digital Signal Processing', class: 'ECE Year III', roomNo: 'A513' },
{ id: 'tt240', facultyId: 'f48', day: 'Mon', startTime: '15:00', endTime: '16:00', subject: 'Control Systems', class: 'ECE Year III', roomNo: 'A513' },

{ id: 'tt241', facultyId: 'f23', day: 'Tue', startTime: '09:00', endTime: '10:00', subject: 'Digital Signal Processing', class: 'ECE Year III', roomNo: 'A513' },
{ id: 'tt242', facultyId: 'f23', day: 'Tue', startTime: '10:00', endTime: '11:00', subject: 'Electromagnetic Waves and Antenna Propagation', class: 'ECE Year III', roomNo: 'A513' },
{ id: 'tt243', facultyId: 'f18', day: 'Tue', startTime: '11:10', endTime: '12:10', subject: 'Professional Ethics', class: 'ECE Year III', roomNo: 'A513' },
{ id: 'tt244', facultyId: 'f48', day: 'Tue', startTime: '13:10', endTime: '14:00', subject: 'Control Systems', class: 'ECE Year III', roomNo: 'A513' },
{ id: 'tt245', facultyId: 'f24', day: 'Tue', startTime: '14:00', endTime: '16:00', subject: 'Embedded Systems Lab', class: 'ECE Year III', roomNo: 'A513' },

{ id: 'tt246', facultyId: 'f24', day: 'Wed', startTime: '09:00', endTime: '10:00', subject: 'Information Theory and Coding', class: 'ECE Year III', roomNo: 'A513' },
{ id: 'tt247', facultyId: 'f23', day: 'Wed', startTime: '10:00', endTime: '11:00', subject: 'Digital Signal Processing', class: 'ECE Year III', roomNo: 'A513' },
{ id: 'tt248', facultyId: 'f24', day: 'Wed', startTime: '11:10', endTime: '12:10', subject: 'Information Theory and Coding', class: 'ECE Year III', roomNo: 'A513' },
{ id: 'tt249', facultyId: 'f18', day: 'Wed', startTime: '13:10', endTime: '14:00', subject: 'Professional Ethics', class: 'ECE Year III', roomNo: 'A513' },

{ id: 'tt250', facultyId: 'f23', day: 'Thu', startTime: '09:00', endTime: '10:00', subject: 'Digital Signal Processing', class: 'ECE Year III', roomNo: 'A513' },
{ id: 'tt251', facultyId: 'f24', day: 'Thu', startTime: '10:00', endTime: '11:00', subject: 'Embedded Systems', class: 'ECE Year III', roomNo: 'A513' },
{ id: 'tt252', facultyId: 'f7', day: 'Thu', startTime: '11:10', endTime: '12:10', subject: 'Entrepreneurship', class: 'ECE Year III', roomNo: 'A513' },
{ id: 'tt253', facultyId: 'f23', day: 'Thu', startTime: '13:10', endTime: '14:00', subject: 'Electromagnetic Waves and Antenna Propagation', class: 'ECE Year III', roomNo: 'A513' },
{ id: 'tt254', facultyId: 'f23', day: 'Thu', startTime: '14:00', endTime: '16:00', subject: 'Electromagnetic Waves and Antenna Propagation Lab', class: 'ECE Year III', roomNo: 'A513' },

{ id: 'tt255', facultyId: 'f23', day: 'Fri', startTime: '09:00', endTime: '10:00', subject: 'Electromagnetic Waves and Antenna Propagation', class: 'ECE Year III', roomNo: 'A513' },
{ id: 'tt256', facultyId: 'f7', day: 'Fri', startTime: '10:00', endTime: '11:00', subject: 'Entrepreneurship', class: 'ECE Year III', roomNo: 'A513' },
{ id: 'tt257', facultyId: 'f23', day: 'Fri', startTime: '11:10', endTime: '12:10', subject: 'Electromagnetic Waves and Antenna Propagation', class: 'ECE Year III', roomNo: 'A513' },
{ id: 'tt258', facultyId: 'f24', day: 'Fri', startTime: '13:10', endTime: '14:00', subject: 'Information Theory and Coding', class: 'ECE Year III', roomNo: 'A513' },
{ id: 'tt259', facultyId: 'f24', day: 'Fri', startTime: '14:00', endTime: '15:00', subject: 'Embedded Systems', class: 'ECE Year III', roomNo: 'A513' },
{ id: 'tt260', facultyId: 'f7', day: 'Fri', startTime: '15:00', endTime: '16:00', subject: 'Entrepreneurship', class: 'ECE Year III', roomNo: 'A513' },


// =========================================================
// B.Tech CSE - YEAR IV
// Electives: Human Computer Interaction / Pattern Recognition
// Room: A230
// =========================================================

{ id: 'tt261', facultyId: 'f8', day: 'Tue', startTime: '11:10', endTime: '12:10', subject: 'Human Computer Interaction', class: 'CSE Year IV', roomNo: 'A230' },

{ id: 'tt262', facultyId: 'f56', day: 'Wed', startTime: '10:00', endTime: '11:00', subject: 'Pattern Recognition', class: 'CSE Year IV', roomNo: 'A230' },
{ id: 'tt263', facultyId: 'f56', day: 'Wed', startTime: '14:00', endTime: '15:00', subject: 'Pattern Recognition', class: 'CSE Year IV', roomNo: 'A230' },
{ id: 'tt264', facultyId: 'f8', day: 'Wed', startTime: '15:00', endTime: '16:00', subject: 'Human Computer Interaction', class: 'CSE Year IV', roomNo: 'A230' },

{ id: 'tt265', facultyId: 'f56', day: 'Thu', startTime: '11:10', endTime: '12:10', subject: 'Pattern Recognition', class: 'CSE Year IV', roomNo: 'A230' },
{ id: 'tt266', facultyId: 'f8', day: 'Thu', startTime: '13:10', endTime: '14:00', subject: 'Human Computer Interaction', class: 'CSE Year IV', roomNo: 'A230' },
{ id: 'tt267', facultyId: 'f56', day: 'Thu', startTime: '14:00', endTime: '15:00', subject: 'Pattern Recognition', class: 'CSE Year IV', roomNo: 'A230' },
{ id: 'tt268', facultyId: 'f8', day: 'Thu', startTime: '15:00', endTime: '16:00', subject: 'Human Computer Interaction', class: 'CSE Year IV', roomNo: 'A230' },

{ id: 'tt269', facultyId: 'f8', day: 'Fri', startTime: '10:00', endTime: '11:00', subject: 'Human Computer Interaction', class: 'CSE Year IV', roomNo: 'A230' },
{ id: 'tt270', facultyId: 'f56', day: 'Fri', startTime: '11:10', endTime: '12:10', subject: 'Pattern Recognition', class: 'CSE Year IV', roomNo: 'A230' },
{ id: 'tt271', facultyId: 'f8', day: 'Fri', startTime: '13:10', endTime: '14:00', subject: 'Human Computer Interaction', class: 'CSE Year IV', roomNo: 'A230' },
{ id: 'tt272', facultyId: 'f56', day: 'Fri', startTime: '15:00', endTime: '16:00', subject: 'Pattern Recognition', class: 'CSE Year IV', roomNo: 'A230' },
  
  
// =========================================================
// BCA 1 Year III
// Room: A416
// =========================================================

{ id: 'tt273', facultyId: 'f11', day: 'Mon', startTime: '09:00', endTime: '10:00', subject: 'NLP', class: 'BCA Year III', roomNo: 'A416' },
{ id: 'tt274', facultyId: 'UNKNOWN', day: 'Mon', startTime: '10:00', endTime: '11:00', subject: 'CV', class: 'BCA Year III', roomNo: 'A416' },
{ id: 'tt275', facultyId: 'f35', day: 'Mon', startTime: '11:10', endTime: '12:10', subject: 'CN', class: 'BCA Year III', roomNo: 'A416' },
{ id: 'tt276', facultyId: 'f41', day: 'Mon', startTime: '12:10', endTime: '13:10', subject: 'KOTLIN', class: 'BCA Year III', roomNo: 'A416' },
{ id: 'tt277', facultyId: 'f34', day: 'Mon', startTime: '14:00', endTime: '15:00', subject: 'WT LAB', class: 'BCA Year III', roomNo: 'A416' },
{ id: 'tt278', facultyId: 'f34', day: 'Mon', startTime: '15:00', endTime: '16:00', subject: 'WT LAB', class: 'BCA Year III', roomNo: 'A416' },

{ id: 'tt279', facultyId: 'UNKNOWN', day: 'Tue', startTime: '09:00', endTime: '10:00', subject: 'CV', class: 'BCA Year III', roomNo: 'A416' },
{ id: 'tt280', facultyId: 'f11', day: 'Tue', startTime: '10:00', endTime: '11:00', subject: 'NLP', class: 'BCA Year III', roomNo: 'A416' },
{ id: 'tt281', facultyId: 'f41', day: 'Tue', startTime: '11:10', endTime: '12:10', subject: 'KOTLIN LAB', class: 'BCA Year III', roomNo: 'A416' },
{ id: 'tt282', facultyId: 'f41', day: 'Tue', startTime: '12:10', endTime: '13:10', subject: 'KOTLIN LAB', class: 'BCA Year III', roomNo: 'A416' },
{ id: 'tt283', facultyId: 'f34', day: 'Tue', startTime: '14:00', endTime: '15:00', subject: 'WT LAB', class: 'BCA Year III', roomNo: 'A416' },
{ id: 'tt284', facultyId: 'f34', day: 'Tue', startTime: '15:00', endTime: '16:00', subject: 'WT LAB', class: 'BCA Year III', roomNo: 'A416' },

{ id: 'tt285', facultyId: 'f34', day: 'Wed', startTime: '09:00', endTime: '10:00', subject: 'WT', class: 'BCA Year III', roomNo: 'A416' },
{ id: 'tt286', facultyId: 'f35', day: 'Wed', startTime: '10:00', endTime: '11:00', subject: 'CN', class: 'BCA Year III', roomNo: 'A416' },
{ id: 'tt287', facultyId: 'UNKNOWN', day: 'Wed', startTime: '11:10', endTime: '12:10', subject: 'CV', class: 'BCA Year III', roomNo: 'A416' },
{ id: 'tt288', facultyId: 'f41', day: 'Wed', startTime: '12:10', endTime: '13:10', subject: 'KOTLIN', class: 'BCA Year III', roomNo: 'A416' },

{ id: 'tt289', facultyId: 'f34', day: 'Thu', startTime: '09:00', endTime: '10:00', subject: 'WT', class: 'BCA Year III', roomNo: 'A416' },
{ id: 'tt290', facultyId: 'f35', day: 'Thu', startTime: '10:00', endTime: '11:00', subject: 'CN', class: 'BCA Year III', roomNo: 'A416' },
{ id: 'tt291', facultyId: 'f34', day: 'Thu', startTime: '11:10', endTime: '12:10', subject: 'INTERNSHIP/CAPSTONE PROJECT', class: 'BCA Year III', roomNo: 'A416' },
{ id: 'tt292', facultyId: 'f38', day: 'Thu', startTime: '12:10', endTime: '13:10', subject: 'INTERNSHIP/CAPSTONE PROJECT', class: 'BCA Year III', roomNo: 'A416' },
{ id: 'tt293', facultyId: 'f41', day: 'Thu', startTime: '14:00', endTime: '15:00', subject: 'KOTLIN', class: 'BCA Year III', roomNo: 'A416' },
{ id: 'tt294', facultyId: 'f35', day: 'Thu', startTime: '15:00', endTime: '16:00', subject: 'CN', class: 'BCA Year III', roomNo: 'A416' },

{ id: 'tt295', facultyId: 'f34', day: 'Fri', startTime: '09:00', endTime: '10:00', subject: 'WT', class: 'BCA Year III', roomNo: 'A416' },
{ id: 'tt296', facultyId: 'UNKNOWN', day: 'Fri', startTime: '10:00', endTime: '11:00', subject: 'CV', class: 'BCA Year III', roomNo: 'A416' },
{ id: 'tt297', facultyId: 'f41', day: 'Fri', startTime: '11:10', endTime: '12:10', subject: 'KOTLIN', class: 'BCA Year III', roomNo: 'A416' },
{ id: 'tt298', facultyId: 'f11', day: 'Fri', startTime: '12:10', endTime: '13:10', subject: 'NLP', class: 'BCA Year III', roomNo: 'A416' },
{ id: 'tt299', facultyId: 'f34', day: 'Fri', startTime: '14:00', endTime: '15:00', subject: 'INTERNSHIP/CAPSTONE PROJECT', class: 'BCA Year III', roomNo: 'A416' },
{ id: 'tt300', facultyId: 'f38', day: 'Fri', startTime: '15:00', endTime: '16:00', subject: 'INTERNSHIP/CAPSTONE PROJECT', class: 'BCA Year III', roomNo: 'A416' },

// =========================================================
// BCA 2 Year III
// Room: A425
// =========================================================

{ id: 'tt301', facultyId: 'f21', day: 'Mon', startTime: '09:00', endTime: '10:00', subject: 'CV', class: 'BCA Year III', roomNo: 'A425' },
{ id: 'tt302', facultyId: 'f41', day: 'Mon', startTime: '10:00', endTime: '11:00', subject: 'KOTLIN', class: 'BCA Year III', roomNo: 'A425' },
{ id: 'tt303', facultyId: 'f11', day: 'Mon', startTime: '11:10', endTime: '12:10', subject: 'NLP', class: 'BCA Year III', roomNo: 'A425' },
{ id: 'tt304', facultyId: 'f34', day: 'Mon', startTime: '12:10', endTime: '13:10', subject: 'WT', class: 'BCA Year III', roomNo: 'A425' },
{ id: 'tt305', facultyId: 'UNKNOWN', day: 'Mon', startTime: '14:00', endTime: '15:00', subject: 'INTERNSHIP/CAPSTONE PROJECT', class: 'BCA Year III', roomNo: 'A425' },
{ id: 'tt306', facultyId: 'UNKNOWN', day: 'Mon', startTime: '15:00', endTime: '16:00', subject: 'INTERNSHIP/CAPSTONE PROJECT', class: 'BCA Year III', roomNo: 'A425' },

{ id: 'tt307', facultyId: 'f41', day: 'Tue', startTime: '09:00', endTime: '10:00', subject: 'KOTLIN', class: 'BCA Year III', roomNo: 'A425' },
{ id: 'tt308', facultyId: 'f21', day: 'Tue', startTime: '10:00', endTime: '11:00', subject: 'CV', class: 'BCA Year III', roomNo: 'A425' },
{ id: 'tt309', facultyId: 'UNKNOWN', day: 'Tue', startTime: '11:10', endTime: '12:10', subject: 'INTERNSHIP/CAPSTONE PROJECT', class: 'BCA Year III', roomNo: 'A425' },
{ id: 'tt310', facultyId: 'UNKNOWN', day: 'Tue', startTime: '12:10', endTime: '13:10', subject: 'INTERNSHIP/CAPSTONE PROJECT', class: 'BCA Year III', roomNo: 'A425' },
{ id: 'tt311', facultyId: 'f35', day: 'Tue', startTime: '14:00', endTime: '15:00', subject: 'CN', class: 'BCA Year III', roomNo: 'A425' },
{ id: 'tt312', facultyId: 'f11', day: 'Tue', startTime: '15:00', endTime: '16:00', subject: 'NLP', class: 'BCA Year III', roomNo: 'A425' },

{ id: 'tt313', facultyId: 'f21', day: 'Wed', startTime: '09:00', endTime: '10:00', subject: 'CV', class: 'BCA Year III', roomNo: 'A425' },
{ id: 'tt314', facultyId: 'f41', day: 'Wed', startTime: '10:00', endTime: '11:00', subject: 'KOTLIN', class: 'BCA Year III', roomNo: 'A425' },
{ id: 'tt315', facultyId: 'f35', day: 'Wed', startTime: '11:10', endTime: '12:10', subject: 'CN', class: 'BCA Year III', roomNo: 'A425' },
{ id: 'tt316', facultyId: 'f34', day: 'Wed', startTime: '12:10', endTime: '13:10', subject: 'WT', class: 'BCA Year III', roomNo: 'A425' },

{ id: 'tt317', facultyId: 'f41', day: 'Thu', startTime: '09:00', endTime: '10:00', subject: 'KOTLIN', class: 'BCA Year III', roomNo: 'A425' },
{ id: 'tt318', facultyId: 'f11', day: 'Thu', startTime: '10:00', endTime: '11:00', subject: 'NLP', class: 'BCA Year III', roomNo: 'A425' },
{ id: 'tt319', facultyId: 'f41', day: 'Thu', startTime: '11:10', endTime: '12:10', subject: 'KOTLIN LAB', class: 'BCA Year III', roomNo: 'A301' },
{ id: 'tt320', facultyId: 'f41', day: 'Thu', startTime: '12:10', endTime: '13:10', subject: 'KOTLIN LAB', class: 'BCA Year III', roomNo: 'A301' },
{ id: 'tt321', facultyId: 'f34', day: 'Thu', startTime: '14:00', endTime: '15:00', subject: 'WT LAB', class: 'BCA Year III', roomNo: 'A201' },
{ id: 'tt322', facultyId: 'f34', day: 'Thu', startTime: '15:00', endTime: '16:00', subject: 'WT LAB', class: 'BCA Year III', roomNo: 'A201' },

{ id: 'tt323', facultyId: 'f21', day: 'Fri', startTime: '09:00', endTime: '10:00', subject: 'CV', class: 'BCA Year III', roomNo: 'A425' },
{ id: 'tt324', facultyId: 'f35', day: 'Fri', startTime: '10:00', endTime: '11:00', subject: 'CN', class: 'BCA Year III', roomNo: 'A425' },
{ id: 'tt325', facultyId: 'f35', day: 'Fri', startTime: '14:00', endTime: '15:00', subject: 'CN', class: 'BCA Year III', roomNo: 'A425' },
{ id: 'tt326', facultyId: 'f34', day: 'Fri', startTime: '15:00', endTime: '16:00', subject: 'WT', class: 'BCA Year III', roomNo: 'A425' },

// =========================================================
// BCA 3 Year III
// Room: A427
// =========================================================

{ id: 'tt327', facultyId: 'f40', day: 'Mon', startTime: '09:00', endTime: '10:00', subject: 'CN', class: 'BCA Year III', roomNo: 'A427' },
{ id: 'tt328', facultyId: 'f54', day: 'Mon', startTime: '10:00', endTime: '11:00', subject: 'MFS', class: 'BCA Year III', roomNo: 'A427' },
{ id: 'tt329', facultyId: 'f46', day: 'Mon', startTime: '11:10', endTime: '12:10', subject: 'WT LAB', class: 'BCA Year III', roomNo: 'A201' },
{ id: 'tt330', facultyId: 'f46', day: 'Mon', startTime: '12:10', endTime: '13:10', subject: 'WT LAB', class: 'BCA Year III', roomNo: 'A201' },
{ id: 'tt331', facultyId: 'f58', day: 'Mon', startTime: '14:00', endTime: '15:00', subject: 'INTERNSHIP/CAPSTONE PROJECT', class: 'BCA Year III', roomNo: 'A427' },
{ id: 'tt332', facultyId: 'f58', day: 'Mon', startTime: '15:00', endTime: '16:00', subject: 'INTERNSHIP/CAPSTONE PROJECT', class: 'BCA Year III', roomNo: 'A427' },

{ id: 'tt333', facultyId: 'f46', day: 'Tue', startTime: '09:00', endTime: '10:00', subject: 'WT', class: 'BCA Year III', roomNo: 'A427' },
{ id: 'tt334', facultyId: 'f40', day: 'Tue', startTime: '10:00', endTime: '11:00', subject: 'CN', class: 'BCA Year III', roomNo: 'A427' },
{ id: 'tt335', facultyId: 'f22', day: 'Tue', startTime: '11:10', endTime: '12:10', subject: 'BC&CRYPTO', class: 'BCA Year III', roomNo: 'A427' },
{ id: 'tt336', facultyId: 'f54', day: 'Tue', startTime: '12:10', endTime: '13:10', subject: 'MFS', class: 'BCA Year III', roomNo: 'A427' },
{ id: 'tt337', facultyId: 'f58', day: 'Tue', startTime: '14:00', endTime: '15:00', subject: 'INTERNSHIP/CAPSTONE PROJECT', class: 'BCA Year III', roomNo: 'A427' },
{ id: 'tt338', facultyId: 'f58', day: 'Tue', startTime: '15:00', endTime: '16:00', subject: 'INTERNSHIP/CAPSTONE PROJECT', class: 'BCA Year III', roomNo: 'A427' },

{ id: 'tt339', facultyId: 'f47', day: 'Wed', startTime: '09:00', endTime: '10:00', subject: 'KOTLIN', class: 'BCA Year III', roomNo: 'A427' },
{ id: 'tt340', facultyId: 'f54', day: 'Wed', startTime: '10:00', endTime: '11:00', subject: 'MFS', class: 'BCA Year III', roomNo: 'A427' },
{ id: 'tt341', facultyId: 'f46', day: 'Wed', startTime: '11:10', endTime: '12:10', subject: 'WT LAB', class: 'BCA Year III', roomNo: 'A201' },
{ id: 'tt342', facultyId: 'f46', day: 'Wed', startTime: '12:10', endTime: '13:10', subject: 'WT LAB', class: 'BCA Year III', roomNo: 'A201' },

{ id: 'tt343', facultyId: 'f46', day: 'Thu', startTime: '09:00', endTime: '10:00', subject: 'WT', class: 'BCA Year III', roomNo: 'A427' },
{ id: 'tt344', facultyId: 'f22', day: 'Thu', startTime: '10:00', endTime: '11:00', subject: 'BC&CRYPTO', class: 'BCA Year III', roomNo: 'A427' },
{ id: 'tt345', facultyId: 'f40', day: 'Thu', startTime: '11:10', endTime: '12:10', subject: 'CN', class: 'BCA Year III', roomNo: 'A427' },
{ id: 'tt346', facultyId: 'f47', day: 'Thu', startTime: '12:10', endTime: '13:10', subject: 'KOTLIN', class: 'BCA Year III', roomNo: 'A427' },
{ id: 'tt347', facultyId: 'f22', day: 'Thu', startTime: '14:00', endTime: '15:00', subject: 'BC&CRYPTO', class: 'BCA Year III', roomNo: 'A427' },
{ id: 'tt348', facultyId: 'f47', day: 'Thu', startTime: '15:00', endTime: '16:00', subject: 'KOTLIN', class: 'BCA Year III', roomNo: 'A427' },

{ id: 'tt349', facultyId: 'f47', day: 'Fri', startTime: '09:00', endTime: '10:00', subject: 'KOTLIN', class: 'BCA Year III', roomNo: 'A427' },
{ id: 'tt350', facultyId: 'f40', day: 'Fri', startTime: '10:00', endTime: '11:00', subject: 'CN', class: 'BCA Year III', roomNo: 'A427' },
{ id: 'tt351', facultyId: 'f47', day: 'Fri', startTime: '11:10', endTime: '12:10', subject: 'KOTLIN LAB', class: 'BCA Year III', roomNo: 'A301' },
{ id: 'tt352', facultyId: 'f47', day: 'Fri', startTime: '12:10', endTime: '13:10', subject: 'KOTLIN LAB', class: 'BCA Year III', roomNo: 'A301' },
{ id: 'tt353', facultyId: 'f46', day: 'Fri', startTime: '14:00', endTime: '15:00', subject: 'WT', class: 'BCA Year III', roomNo: 'A427' },
{ id: 'tt354', facultyId: 'f54', day: 'Fri', startTime: '15:00', endTime: '16:00', subject: 'MFS', class: 'BCA Year III', roomNo: 'A427' },

// =========================================================
// BCA 4 Year III
// Room: A502
// =========================================================

{ id: 'tt355', facultyId: 'f46', day: 'Mon', startTime: '09:00', endTime: '10:00', subject: 'WT', class: 'BCA Year III', roomNo: 'A502' },
{ id: 'tt356', facultyId: 'f47', day: 'Mon', startTime: '10:00', endTime: '11:00', subject: 'KOTLIN', class: 'BCA Year III', roomNo: 'A502' },
{ id: 'tt357', facultyId: 'f21', day: 'Mon', startTime: '11:10', endTime: '12:10', subject: 'CV', class: 'BCA Year III', roomNo: 'A502' },
{ id: 'tt358', facultyId: 'f40', day: 'Mon', startTime: '12:10', endTime: '13:10', subject: 'CN', class: 'BCA Year III', roomNo: 'A502' },
{ id: 'tt359', facultyId: 'f42', day: 'Mon', startTime: '14:00', endTime: '15:00', subject: 'INTERNSHIP/CAPSTONE PROJECT', class: 'BCA Year III', roomNo: 'A502' },
{ id: 'tt360', facultyId: 'f5', day: 'Mon', startTime: '15:00', endTime: '16:00', subject: 'INTERNSHIP/CAPSTONE PROJECT', class: 'BCA Year III', roomNo: 'A502' },

{ id: 'tt361', facultyId: 'f40', day: 'Tue', startTime: '09:00', endTime: '10:00', subject: 'CN', class: 'BCA Year III', roomNo: 'A502' },
{ id: 'tt362', facultyId: 'f47', day: 'Tue', startTime: '10:00', endTime: '11:00', subject: 'KOTLIN', class: 'BCA Year III', roomNo: 'A502' },
{ id: 'tt363', facultyId: 'f46', day: 'Tue', startTime: '11:10', endTime: '12:10', subject: 'WT LAB', class: 'BCA Year III', roomNo: 'A502' },
{ id: 'tt364', facultyId: 'f46', day: 'Tue', startTime: '12:10', endTime: '13:10', subject: 'WT LAB', class: 'BCA Year III', roomNo: 'A502' },
{ id: 'tt365', facultyId: 'f47', day: 'Tue', startTime: '14:00', endTime: '15:00', subject: 'KOTLIN LAB', class: 'BCA Year III', roomNo: 'A502' },
{ id: 'tt366', facultyId: 'f47', day: 'Tue', startTime: '15:00', endTime: '16:00', subject: 'KOTLIN LAB', class: 'BCA Year III', roomNo: 'A502' },

{ id: 'tt367', facultyId: 'f46', day: 'Wed', startTime: '09:00', endTime: '10:00', subject: 'WT', class: 'BCA Year III', roomNo: 'A502' },
{ id: 'tt368', facultyId: 'f47', day: 'Wed', startTime: '10:00', endTime: '11:00', subject: 'KOTLIN', class: 'BCA Year III', roomNo: 'A502' },
{ id: 'tt369', facultyId: 'f21', day: 'Wed', startTime: '11:10', endTime: '12:10', subject: 'CV', class: 'BCA Year III', roomNo: 'A502' },
{ id: 'tt370', facultyId: 'f11', day: 'Wed', startTime: '12:10', endTime: '13:10', subject: 'NLP', class: 'BCA Year III', roomNo: 'A502' },

{ id: 'tt371', facultyId: 'f47', day: 'Thu', startTime: '09:00', endTime: '10:00', subject: 'KOTLIN', class: 'BCA Year III', roomNo: 'A502' },
{ id: 'tt372', facultyId: 'f21', day: 'Thu', startTime: '10:00', endTime: '11:00', subject: 'CV', class: 'BCA Year III', roomNo: 'A502' },
{ id: 'tt373', facultyId: 'f46', day: 'Thu', startTime: '11:10', endTime: '12:10', subject: 'WT LAB', class: 'BCA Year III', roomNo: 'A502' },
{ id: 'tt374', facultyId: 'f46', day: 'Thu', startTime: '12:10', endTime: '13:10', subject: 'WT LAB', class: 'BCA Year III', roomNo: 'A502' },
{ id: 'tt375', facultyId: 'f11', day: 'Thu', startTime: '14:00', endTime: '15:00', subject: 'NLP', class: 'BCA Year III', roomNo: 'A502' },
{ id: 'tt376', facultyId: 'f40', day: 'Thu', startTime: '15:00', endTime: '16:00', subject: 'CN', class: 'BCA Year III', roomNo: 'A502' },

{ id: 'tt377', facultyId: 'f46', day: 'Fri', startTime: '09:00', endTime: '10:00', subject: 'WT', class: 'BCA Year III', roomNo: 'A502' },
{ id: 'tt378', facultyId: 'f11', day: 'Fri', startTime: '10:00', endTime: '11:00', subject: 'NLP', class: 'BCA Year III', roomNo: 'A502' },
{ id: 'tt379', facultyId: 'f40', day: 'Fri', startTime: '11:10', endTime: '12:10', subject: 'CN', class: 'BCA Year III', roomNo: 'A502' },
{ id: 'tt380', facultyId: 'f21', day: 'Fri', startTime: '12:10', endTime: '13:10', subject: 'CV', class: 'BCA Year III', roomNo: 'A502' },
{ id: 'tt381', facultyId: 'f42', day: 'Fri', startTime: '14:00', endTime: '15:00', subject: 'INTERNSHIP/CAPSTONE PROJECT', class: 'BCA Year III', roomNo: 'A502' },
{ id: 'tt382', facultyId: 'f5', day: 'Fri', startTime: '15:00', endTime: '16:00', subject: 'INTERNSHIP/CAPSTONE PROJECT', class: 'BCA Year III', roomNo: 'A502' },

// =========================================================
// BCA 1 - YEAR II
// Room: A504
// =========================================================

{ id: 'tt383', facultyId: 'f26', day: 'Mon', startTime: '09:00', endTime: '10:00', subject: 'Probability and Statistics', class: 'BCA 1 Year II', roomNo: 'A504' },
{ id: 'tt384', facultyId: 'f43', day: 'Mon', startTime: '11:10', endTime: '12:10', subject: 'Python Programming', class: 'BCA 1 Year II', roomNo: 'A504' },
{ id: 'tt385', facultyId: 'f58', day: 'Mon', startTime: '12:10', endTime: '13:10', subject: 'Digital Image Processing', class: 'BCA 1 Year II', roomNo: 'A504' },
{ id: 'tt386', facultyId: 'f60', day: 'Mon', startTime: '14:00', endTime: '15:00', subject: 'IKS: Self-Unfoldment', class: 'BCA 1 Year II', roomNo: 'A504' },
{ id: 'tt387', facultyId: 'f13', day: 'Mon', startTime: '15:00', endTime: '16:00', subject: 'Disaster Management', class: 'BCA 1 Year II', roomNo: 'A504' },

{ id: 'tt388', facultyId: 'f43', day: 'Tue', startTime: '09:00', endTime: '10:00', subject: 'Python Programming', class: 'BCA 1 Year II', roomNo: 'A504' },
{ id: 'tt389', facultyId: 'f26', day: 'Tue', startTime: '10:00', endTime: '11:00', subject: 'Probability and Statistics', class: 'BCA 1 Year II', roomNo: 'A504' },
{ id: 'tt390', facultyId: 'f58', day: 'Tue', startTime: '11:10', endTime: '12:10', subject: 'Digital Image Processing', class: 'BCA 1 Year II', roomNo: 'A504' },
{ id: 'tt391', facultyId: 'f40', day: 'Tue', startTime: '12:10', endTime: '13:10', subject: 'Software Engineering', class: 'BCA 1 Year II', roomNo: 'A504' },
{ id: 'tt392', facultyId: 'f60', day: 'Tue', startTime: '15:00', endTime: '16:00', subject: 'IKS: Self-Unfoldment', class: 'BCA 1 Year II', roomNo: 'A504' },

{ id: 'tt393', facultyId: 'f58', day: 'Wed', startTime: '09:00', endTime: '10:00', subject: 'Digital Image Processing', class: 'BCA 1 Year II', roomNo: 'A504' },
{ id: 'tt394', facultyId: 'f40', day: 'Wed', startTime: '10:00', endTime: '11:00', subject: 'Software Engineering', class: 'BCA 1 Year II', roomNo: 'A504' },
{ id: 'tt395', facultyId: 'f13', day: 'Wed', startTime: '11:10', endTime: '12:10', subject: 'Disaster Management', class: 'BCA 1 Year II', roomNo: 'A504' },
{ id: 'tt396', facultyId: 'f60', day: 'Wed', startTime: '12:10', endTime: '13:10', subject: 'IKS: Self-Unfoldment', class: 'BCA 1 Year II', roomNo: 'A504' },

{ id: 'tt397', facultyId: 'f13', day: 'Thu', startTime: '09:00', endTime: '10:00', subject: 'Disaster Management', class: 'BCA 1 Year II', roomNo: 'A504' },
{ id: 'tt398', facultyId: 'f40', day: 'Thu', startTime: '10:00', endTime: '11:00', subject: 'Software Engineering', class: 'BCA 1 Year II', roomNo: 'A504' },
{ id: 'tt399', facultyId: 'f43', day: 'Thu', startTime: '11:10', endTime: '13:10', subject: 'Python Lab', class: 'BCA 1 Year II', roomNo: 'A101' },
{ id: 'tt400', facultyId: 'f58', day: 'Thu', startTime: '14:00', endTime: '15:00', subject: 'Digital Image Processing', class: 'BCA 1 Year II', roomNo: 'A504' },
{ id: 'tt401', facultyId: 'f43', day: 'Thu', startTime: '15:00', endTime: '16:00', subject: 'Python Programming', class: 'BCA 1 Year II', roomNo: 'A504' },

{ id: 'tt402', facultyId: 'f13', day: 'Fri', startTime: '09:00', endTime: '10:00', subject: 'Disaster Management', class: 'BCA 1 Year II', roomNo: 'A504' },
{ id: 'tt403', facultyId: 'f26', day: 'Fri', startTime: '10:00', endTime: '11:00', subject: 'Probability and Statistics', class: 'BCA 1 Year II', roomNo: 'A504' },
{ id: 'tt404', facultyId: 'f43', day: 'Fri', startTime: '11:10', endTime: '13:10', subject: 'Python Lab', class: 'BCA 1 Year II', roomNo: 'A101' },
{ id: 'tt405', facultyId: 'f40', day: 'Fri', startTime: '14:00', endTime: '15:00', subject: 'Software Engineering', class: 'BCA 1 Year II', roomNo: 'A504' },
{ id: 'tt406', facultyId: 'f26', day: 'Fri', startTime: '15:00', endTime: '16:00', subject: 'Probability and Statistics', class: 'BCA 1 Year II', roomNo: 'A504' },

// =========================================================
// BCA 2 - YEAR II
// Room: A512
// =========================================================

{ id: 'tt407', facultyId: 'f44', day: 'Mon', startTime: '09:00', endTime: '11:00', subject: 'Python Lab', class: 'BCA 2 Year II', roomNo: 'A201' },
{ id: 'tt408', facultyId: 'f31', day: 'Mon', startTime: '11:10', endTime: '12:10', subject: 'Disaster Management', class: 'BCA 2 Year II', roomNo: 'A512' },
{ id: 'tt409', facultyId: 'f44', day: 'Mon', startTime: '12:10', endTime: '13:10', subject: 'Python Programming', class: 'BCA 2 Year II', roomNo: 'A512' },
{ id: 'tt410', facultyId: 'f52', day: 'Mon', startTime: '14:00', endTime: '15:00', subject: 'IKS: Self-Unfoldment', class: 'BCA 2 Year II', roomNo: 'A512' },
{ id: 'tt411', facultyId: 'f45', day: 'Mon', startTime: '15:00', endTime: '16:00', subject: 'Cryptography and Network Security', class: 'BCA 2 Year II', roomNo: 'A512' },

{ id: 'tt412', facultyId: 'f45', day: 'Tue', startTime: '09:00', endTime: '10:00', subject: 'Cryptography and Network Security', class: 'BCA 2 Year II', roomNo: 'A512' },
{ id: 'tt413', facultyId: 'f31', day: 'Tue', startTime: '10:00', endTime: '11:00', subject: 'Disaster Management', class: 'BCA 2 Year II', roomNo: 'A512' },
{ id: 'tt414', facultyId: 'f44', day: 'Tue', startTime: '11:10', endTime: '12:10', subject: 'Python Programming', class: 'BCA 2 Year II', roomNo: 'A512' },
{ id: 'tt415', facultyId: 'f28', day: 'Tue', startTime: '12:10', endTime: '13:10', subject: 'Probability and Statistics', class: 'BCA 2 Year II', roomNo: 'A512' },
{ id: 'tt416', facultyId: 'f40', day: 'Tue', startTime: '14:00', endTime: '15:00', subject: 'Software Engineering', class: 'BCA 2 Year II', roomNo: 'A512' },
{ id: 'tt417', facultyId: 'f52', day: 'Tue', startTime: '15:00', endTime: '16:00', subject: 'IKS: Self-Unfoldment', class: 'BCA 2 Year II', roomNo: 'A512' },

{ id: 'tt418', facultyId: 'f40', day: 'Wed', startTime: '09:00', endTime: '10:00', subject: 'Software Engineering', class: 'BCA 2 Year II', roomNo: 'A512' },
{ id: 'tt419', facultyId: 'f28', day: 'Wed', startTime: '10:00', endTime: '11:00', subject: 'Probability and Statistics', class: 'BCA 2 Year II', roomNo: 'A512' },
{ id: 'tt420', facultyId: 'f45', day: 'Wed', startTime: '11:10', endTime: '12:10', subject: 'Cryptography and Network Security', class: 'BCA 2 Year II', roomNo: 'A512' },
{ id: 'tt421', facultyId: 'f40', day: 'Wed', startTime: '12:10', endTime: '13:10', subject: 'Software Engineering', class: 'BCA 2 Year II', roomNo: 'A512' },

{ id: 'tt422', facultyId: 'f28', day: 'Thu', startTime: '09:00', endTime: '10:00', subject: 'Probability and Statistics', class: 'BCA 2 Year II', roomNo: 'A512' },
{ id: 'tt423', facultyId: 'f31', day: 'Thu', startTime: '10:00', endTime: '11:00', subject: 'Disaster Management', class: 'BCA 2 Year II', roomNo: 'A512' },
{ id: 'tt424', facultyId: 'f31', day: 'Thu', startTime: '11:10', endTime: '12:10', subject: 'Disaster Management', class: 'BCA 2 Year II', roomNo: 'A512' },
{ id: 'tt425', facultyId: 'f40', day: 'Thu', startTime: '14:00', endTime: '15:00', subject: 'Software Engineering', class: 'BCA 2 Year II', roomNo: 'A512' },

{ id: 'tt426', facultyId: 'f44', day: 'Fri', startTime: '09:00', endTime: '10:00', subject: 'Python Programming', class: 'BCA 2 Year II', roomNo: 'A512' },
{ id: 'tt427', facultyId: 'f45', day: 'Fri', startTime: '10:00', endTime: '11:00', subject: 'Cryptography and Network Security', class: 'BCA 2 Year II', roomNo: 'A512' },
{ id: 'tt428', facultyId: 'f28', day: 'Fri', startTime: '11:10', endTime: '12:10', subject: 'Probability and Statistics', class: 'BCA 2 Year II', roomNo: 'A512' },
{ id: 'tt429', facultyId: 'f52', day: 'Fri', startTime: '12:10', endTime: '13:10', subject: 'IKS: Self-Unfoldment', class: 'BCA 2 Year II', roomNo: 'A512' },
{ id: 'tt430', facultyId: 'f44', day: 'Fri', startTime: '14:00', endTime: '16:00', subject: 'Python Lab', class: 'BCA 2 Year II', roomNo: 'A201' },

// =========================================================
// BSc Computer Science - YEAR III
// Room: A514
// =========================================================

{ id: 'tt431', facultyId: 'f14', day: 'Mon', startTime: '09:00', endTime: '10:00', subject: 'Functional Programming', class: 'BSc Computer Science Year III', roomNo: 'A514' },
{ id: 'tt432', facultyId: 'f48', day: 'Mon', startTime: '10:00', endTime: '11:00', subject: 'Advanced Robotics Programming', class: 'BSc Computer Science Year III', roomNo: 'A514' },
{ id: 'tt433', facultyId: 'f38', day: 'Mon', startTime: '11:10', endTime: '12:10', subject: 'Design and Algorithm Analysis', class: 'BSc Computer Science Year III', roomNo: 'A514' },
{ id: 'tt434', facultyId: 'f35', day: 'Mon', startTime: '14:00', endTime: '15:00', subject: 'Computer Networks', class: 'BSc Computer Science Year III', roomNo: 'A514' },

{ id: 'tt435', facultyId: 'f48', day: 'Tue', startTime: '09:00', endTime: '10:00', subject: 'Advanced Robotics Programming', class: 'BSc Computer Science Year III', roomNo: 'A514' },
{ id: 'tt436', facultyId: 'f35', day: 'Tue', startTime: '10:00', endTime: '11:00', subject: 'Computer Networks', class: 'BSc Computer Science Year III', roomNo: 'A514' },
{ id: 'tt437', facultyId: 'f21', day: 'Tue', startTime: '11:10', endTime: '12:10', subject: 'Computer Vision', class: 'BSc Computer Science Year III', roomNo: 'A514' },
{ id: 'tt438', facultyId: 'f38', day: 'Tue', startTime: '12:10', endTime: '13:10', subject: 'Design and Algorithm Analysis', class: 'BSc Computer Science Year III', roomNo: 'A514' },
{ id: 'tt439', facultyId: 'f14', day: 'Tue', startTime: '14:00', endTime: '15:00', subject: 'Functional Programming', class: 'BSc Computer Science Year III', roomNo: 'A514' },
{ id: 'tt440', facultyId: 'f35', day: 'Tue', startTime: '15:00', endTime: '16:00', subject: 'Computer Networks', class: 'BSc Computer Science Year III', roomNo: 'A514' },

{ id: 'tt441', facultyId: 'f14', day: 'Wed', startTime: '09:00', endTime: '10:00', subject: 'Functional Programming', class: 'BSc Computer Science Year III', roomNo: 'A514' },
{ id: 'tt442', facultyId: 'f21', day: 'Wed', startTime: '10:00', endTime: '11:00', subject: 'Computer Vision', class: 'BSc Computer Science Year III', roomNo: 'A514' },
{ id: 'tt443', facultyId: 'f23', day: 'Wed', startTime: '11:10', endTime: '13:10', subject: 'Internship/Capstone Project', class: 'BSc Computer Science Year III', roomNo: 'A514' },

{ id: 'tt444', facultyId: 'f21', day: 'Thu', startTime: '09:00', endTime: '10:00', subject: 'Computer Vision', class: 'BSc Computer Science Year III', roomNo: 'A514' },
{ id: 'tt445', facultyId: 'f48', day: 'Thu', startTime: '10:00', endTime: '11:00', subject: 'Advanced Robotics Programming', class: 'BSc Computer Science Year III', roomNo: 'A514' },
{ id: 'tt446', facultyId: 'f38', day: 'Thu', startTime: '11:10', endTime: '12:10', subject: 'Design and Algorithm Analysis', class: 'BSc Computer Science Year III', roomNo: 'A514' },
{ id: 'tt447', facultyId: 'f21', day: 'Thu', startTime: '15:00', endTime: '16:00', subject: 'Computer Vision', class: 'BSc Computer Science Year III', roomNo: 'A514' },

{ id: 'tt448', facultyId: 'f48', day: 'Fri', startTime: '09:00', endTime: '10:00', subject: 'Advanced Robotics Programming', class: 'BSc Computer Science Year III', roomNo: 'A514' },
{ id: 'tt449', facultyId: 'f14', day: 'Fri', startTime: '10:00', endTime: '11:00', subject: 'Functional Programming', class: 'BSc Computer Science Year III', roomNo: 'A514' },
{ id: 'tt450', facultyId: 'f38', day: 'Fri', startTime: '11:10', endTime: '12:10', subject: 'Design and Algorithm Analysis', class: 'BSc Computer Science Year III', roomNo: 'A514' },
{ id: 'tt451', facultyId: 'f35', day: 'Fri', startTime: '12:10', endTime: '13:10', subject: 'Computer Networks', class: 'BSc Computer Science Year III', roomNo: 'A514' },
{ id: 'tt452', facultyId: 'f23', day: 'Fri', startTime: '14:00', endTime: '16:00', subject: 'Internship/Capstone Project', class: 'BSc Computer Science Year III', roomNo: 'A514' },

// =========================================================
// B.Tech CSE - BATCH 1 - YEAR III
// Room: A302
// =========================================================

{ id: 'tt453', facultyId: 'f56', day: 'Mon', startTime: '09:00', endTime: '10:00', subject: 'Deep Learning - Batch 1', class: 'CSE Batch 1 Year III' },
{ id: 'tt454', facultyId: 'f55', day: 'Mon', startTime: '09:00', endTime: '10:00', subject: 'Deep Learning - Batch 2', class: 'CSE Batch 1 Year III' },
{ id: 'tt455', facultyId: 'f35', day: 'Mon', startTime: '09:00', endTime: '10:00', subject: 'Data Encryption and Compression', class: 'CSE Batch 1 Year III' },
{ id: 'tt456', facultyId: 'f53', day: 'Mon', startTime: '09:00', endTime: '10:00', subject: 'Introduction to Data Science', class: 'CSE Batch 1 Year III' },
{ id: 'tt457', facultyId: 'f5', day: 'Mon', startTime: '10:00', endTime: '11:00', subject: 'Theory of Computation', class: 'CSE Batch 1 Year III', roomNo: 'A302' },
{ id: 'tt458', facultyId: 'f55', day: 'Mon', startTime: '11:10', endTime: '12:10', subject: 'Data and Visual Analytics', class: 'CSE Batch 1 Year III' },
{ id: 'tt459', facultyId: 'f53', day: 'Mon', startTime: '11:10', endTime: '12:10', subject: 'Steganography and Digital Watermarking', class: 'CSE Batch 1 Year III' },
{ id: 'tt460', facultyId: 'f49', day: 'Mon', startTime: '14:00', endTime: '16:00', subject: 'Computer Networks Lab', class: 'CSE Batch 1 Year III', roomNo: 'A101' },

{ id: 'tt461', facultyId: 'f55', day: 'Tue', startTime: '09:00', endTime: '10:00', subject: 'Data and Visual Analytics', class: 'CSE Batch 1 Year III' },
{ id: 'tt462', facultyId: 'f53', day: 'Tue', startTime: '09:00', endTime: '10:00', subject: 'Steganography and Digital Watermarking', class: 'CSE Batch 1 Year III' },
{ id: 'tt463', facultyId: 'f42', day: 'Tue', startTime: '10:00', endTime: '11:00', subject: 'Design and Analysis of Algorithms', class: 'CSE Batch 1 Year III', roomNo: 'A302' },
{ id: 'tt464', facultyId: 'f56', day: 'Tue', startTime: '11:10', endTime: '12:10', subject: 'Deep Learning - Batch 1', class: 'CSE Batch 1 Year III' },
{ id: 'tt465', facultyId: 'f55', day: 'Tue', startTime: '11:10', endTime: '12:10', subject: 'Deep Learning - Batch 2', class: 'CSE Batch 1 Year III' },
{ id: 'tt466', facultyId: 'f35', day: 'Tue', startTime: '11:10', endTime: '12:10', subject: 'Data Encryption and Compression', class: 'CSE Batch 1 Year III' },
{ id: 'tt467', facultyId: 'f53', day: 'Tue', startTime: '11:10', endTime: '12:10', subject: 'Introduction to Data Science', class: 'CSE Batch 1 Year III' },
{ id: 'tt468', facultyId: 'f44', day: 'Tue', startTime: '13:10', endTime: '14:00', subject: 'Software Engineering', class: 'CSE Batch 1 Year III', roomNo: 'A302' },
{ id: 'tt469', facultyId: 'f16', day: 'Tue', startTime: '14:00', endTime: '15:00', subject: 'Constitution of India', class: 'CSE Batch 1 Year III', roomNo: 'A302' },
{ id: 'tt470', facultyId: 'f44', day: 'Tue', startTime: '15:00', endTime: '16:00', subject: 'Software Engineering', class: 'CSE Batch 1 Year III', roomNo: 'A302' },

{ id: 'tt471', facultyId: 'f42', day: 'Wed', startTime: '09:00', endTime: '10:00', subject: 'Design and Analysis of Algorithms', class: 'CSE Batch 1 Year III', roomNo: 'A302' },
{ id: 'tt472', facultyId: 'f5', day: 'Wed', startTime: '10:00', endTime: '11:00', subject: 'Theory of Computation', class: 'CSE Batch 1 Year III', roomNo: 'A302' },
{ id: 'tt473', facultyId: 'f49', day: 'Wed', startTime: '11:10', endTime: '12:10', subject: 'Computer Networks', class: 'CSE Batch 1 Year III', roomNo: 'A302' },
{ id: 'tt474', facultyId: 'f49', day: 'Wed', startTime: '13:10', endTime: '14:00', subject: 'Computer Networks', class: 'CSE Batch 1 Year III', roomNo: 'A302' },

{ id: 'tt475', facultyId: 'f44', day: 'Thu', startTime: '09:00', endTime: '10:00', subject: 'Software Engineering', class: 'CSE Batch 1 Year III', roomNo: 'A302' },
{ id: 'tt476', facultyId: 'f42', day: 'Thu', startTime: '10:00', endTime: '11:00', subject: 'Design and Analysis of Algorithms', class: 'CSE Batch 1 Year III', roomNo: 'A302' },
{ id: 'tt477', facultyId: 'f56', day: 'Thu', startTime: '11:10', endTime: '12:10', subject: 'Deep Learning - Batch 1', class: 'CSE Batch 1 Year III' },
{ id: 'tt478', facultyId: 'f55', day: 'Thu', startTime: '11:10', endTime: '12:10', subject: 'Deep Learning - Batch 2', class: 'CSE Batch 1 Year III' },
{ id: 'tt479', facultyId: 'f35', day: 'Thu', startTime: '11:10', endTime: '12:10', subject: 'Data Encryption and Compression', class: 'CSE Batch 1 Year III' },
{ id: 'tt480', facultyId: 'f53', day: 'Thu', startTime: '11:10', endTime: '12:10', subject: 'Introduction to Data Science', class: 'CSE Batch 1 Year III' },
{ id: 'tt481', facultyId: 'f42', day: 'Thu', startTime: '13:10', endTime: '14:00', subject: 'Design and Analysis of Algorithms', class: 'CSE Batch 1 Year III', roomNo: 'A302' },
{ id: 'tt482', facultyId: 'f16', day: 'Thu', startTime: '14:00', endTime: '15:00', subject: 'Constitution of India', class: 'CSE Batch 1 Year III', roomNo: 'A302' },

{ id: 'tt483', facultyId: 'f49', day: 'Fri', startTime: '09:00', endTime: '10:00', subject: 'Computer Networks', class: 'CSE Batch 1 Year III', roomNo: 'A302' },
{ id: 'tt484', facultyId: 'f55', day: 'Fri', startTime: '10:00', endTime: '11:00', subject: 'Data and Visual Analytics', class: 'CSE Batch 1 Year III' },
{ id: 'tt485', facultyId: 'f53', day: 'Fri', startTime: '10:00', endTime: '11:00', subject: 'Steganography and Digital Watermarking', class: 'CSE Batch 1 Year III' },
{ id: 'tt486', facultyId: 'f5', day: 'Fri', startTime: '11:10', endTime: '12:10', subject: 'Theory of Computation', class: 'CSE Batch 1 Year III', roomNo: 'A302' },
{ id: 'tt487', facultyId: 'f5', day: 'Fri', startTime: '13:10', endTime: '14:00', subject: 'Theory of Computation', class: 'CSE Batch 1 Year III', roomNo: 'A302' },
{ id: 'tt488', facultyId: 'f48', day: 'Fri', startTime: '14:00', endTime: '16:00', subject: 'Project 1', class: 'CSE Batch 1 Year III', roomNo: 'A302' },

// =========================================================
// B.Tech CSE - BATCH 2 - YEAR III
// Room: A304
// =========================================================

{ id: 'tt489', facultyId: 'f56', day: 'Mon', startTime: '09:00', endTime: '10:00', subject: 'Deep Learning - Batch 1', class: 'CSE Batch 2 Year III' },
{ id: 'tt490', facultyId: 'f55', day: 'Mon', startTime: '09:00', endTime: '10:00', subject: 'Deep Learning - Batch 2', class: 'CSE Batch 2 Year III' },
{ id: 'tt491', facultyId: 'f35', day: 'Mon', startTime: '09:00', endTime: '10:00', subject: 'Data Encryption and Compression', class: 'CSE Batch 2 Year III' },
{ id: 'tt492', facultyId: 'f53', day: 'Mon', startTime: '09:00', endTime: '10:00', subject: 'Introduction to Data Science', class: 'CSE Batch 2 Year III' },
{ id: 'tt493', facultyId: 'f49', day: 'Mon', startTime: '10:00', endTime: '11:00', subject: 'Computer Networks', class: 'CSE Batch 2 Year III', roomNo: 'A304' },
{ id: 'tt494', facultyId: 'f55', day: 'Mon', startTime: '11:10', endTime: '12:10', subject: 'Data and Visual Analytics', class: 'CSE Batch 2 Year III' },
{ id: 'tt495', facultyId: 'f53', day: 'Mon', startTime: '11:10', endTime: '12:10', subject: 'Steganography and Digital Watermarking', class: 'CSE Batch 2 Year III' },
{ id: 'tt496', facultyId: 'f42', day: 'Mon', startTime: '14:00', endTime: '15:00', subject: 'Design and Analysis of Algorithms', class: 'CSE Batch 2 Year III', roomNo: 'A304' },
{ id: 'tt497', facultyId: 'UNKNOWN', day: 'Mon', startTime: '15:00', endTime: '16:00', subject: 'Project 1', class: 'CSE Batch 2 Year III', roomNo: 'A304' },

{ id: 'tt498', facultyId: 'f55', day: 'Tue', startTime: '09:00', endTime: '10:00', subject: 'Data and Visual Analytics', class: 'CSE Batch 2 Year III' },
{ id: 'tt499', facultyId: 'f53', day: 'Tue', startTime: '09:00', endTime: '10:00', subject: 'Steganography and Digital Watermarking', class: 'CSE Batch 2 Year III' },
{ id: 'tt500', facultyId: 'f33', day: 'Tue', startTime: '10:00', endTime: '11:00', subject: 'Theory of Computation', class: 'CSE Batch 2 Year III', roomNo: 'A304' },
{ id: 'tt501', facultyId: 'f56', day: 'Tue', startTime: '11:10', endTime: '12:10', subject: 'Deep Learning - Batch 1', class: 'CSE Batch 2 Year III' },
{ id: 'tt502', facultyId: 'f55', day: 'Tue', startTime: '11:10', endTime: '12:10', subject: 'Deep Learning - Batch 2', class: 'CSE Batch 2 Year III' },
{ id: 'tt503', facultyId: 'f35', day: 'Tue', startTime: '11:10', endTime: '12:10', subject: 'Data Encryption and Compression', class: 'CSE Batch 2 Year III' },
{ id: 'tt504', facultyId: 'f53', day: 'Tue', startTime: '11:10', endTime: '12:10', subject: 'Introduction to Data Science', class: 'CSE Batch 2 Year III' },
{ id: 'tt505', facultyId: 'f49', day: 'Tue', startTime: '13:10', endTime: '16:00', subject: 'Computer Networks Lab', class: 'CSE Batch 2 Year III', roomNo: 'A101' },

{ id: 'tt506', facultyId: 'UNKNOWN', day: 'Wed', startTime: '09:00', endTime: '10:00', subject: 'Constitution of India', class: 'CSE Batch 2 Year III', roomNo: 'A304' },
{ id: 'tt507', facultyId: 'f44', day: 'Wed', startTime: '10:00', endTime: '11:00', subject: 'Software Engineering', class: 'CSE Batch 2 Year III', roomNo: 'A304' },
{ id: 'tt508', facultyId: 'f33', day: 'Wed', startTime: '11:10', endTime: '12:10', subject: 'Theory of Computation', class: 'CSE Batch 2 Year III', roomNo: 'A304' },
{ id: 'tt509', facultyId: 'f42', day: 'Wed', startTime: '13:10', endTime: '14:00', subject: 'Design and Analysis of Algorithms', class: 'CSE Batch 2 Year III', roomNo: 'A304' },

{ id: 'tt510', facultyId: 'f33', day: 'Thu', startTime: '09:00', endTime: '10:00', subject: 'Theory of Computation', class: 'CSE Batch 2 Year III', roomNo: 'A304' },
{ id: 'tt511', facultyId: 'f49', day: 'Thu', startTime: '10:00', endTime: '11:00', subject: 'Computer Networks', class: 'CSE Batch 2 Year III', roomNo: 'A304' },
{ id: 'tt512', facultyId: 'f44', day: 'Thu', startTime: '11:10', endTime: '12:10', subject: 'Software Engineering', class: 'CSE Batch 2 Year III', roomNo: 'A304' },
{ id: 'tt513', facultyId: 'f56', day: 'Thu', startTime: '13:10', endTime: '14:00', subject: 'Deep Learning - Batch 1', class: 'CSE Batch 2 Year III' },
{ id: 'tt514', facultyId: 'f55', day: 'Thu', startTime: '13:10', endTime: '14:00', subject: 'Deep Learning - Batch 2', class: 'CSE Batch 2 Year III' },
{ id: 'tt515', facultyId: 'f35', day: 'Thu', startTime: '13:10', endTime: '14:00', subject: 'Data Encryption and Compression', class: 'CSE Batch 2 Year III' },
{ id: 'tt516', facultyId: 'f53', day: 'Thu', startTime: '13:10', endTime: '14:00', subject: 'Introduction to Data Science', class: 'CSE Batch 2 Year III' },
{ id: 'tt517', facultyId: 'UNKNOWN', day: 'Thu', startTime: '14:00', endTime: '15:00', subject: 'Constitution of India', class: 'CSE Batch 2 Year III', roomNo: 'A304' },
{ id: 'tt518', facultyId: 'f44', day: 'Thu', startTime: '15:00', endTime: '16:00', subject: 'Software Engineering', class: 'CSE Batch 2 Year III', roomNo: 'A304' },

{ id: 'tt519', facultyId: 'f42', day: 'Fri', startTime: '09:00', endTime: '10:00', subject: 'Design and Analysis of Algorithms', class: 'CSE Batch 2 Year III', roomNo: 'A304' },
{ id: 'tt520', facultyId: 'f55', day: 'Fri', startTime: '10:00', endTime: '11:00', subject: 'Data and Visual Analytics', class: 'CSE Batch 2 Year III' },
{ id: 'tt521', facultyId: 'f53', day: 'Fri', startTime: '10:00', endTime: '11:00', subject: 'Steganography and Digital Watermarking', class: 'CSE Batch 2 Year III' },
{ id: 'tt522', facultyId: 'f49', day: 'Fri', startTime: '11:10', endTime: '12:10', subject: 'Computer Networks', class: 'CSE Batch 2 Year III', roomNo: 'A304' },
{ id: 'tt523', facultyId: 'f42', day: 'Fri', startTime: '13:10', endTime: '14:00', subject: 'Design and Analysis of Algorithms', class: 'CSE Batch 2 Year III', roomNo: 'A304' },
{ id: 'tt524', facultyId: 'f33', day: 'Fri', startTime: '14:00', endTime: '15:00', subject: 'Theory of Computation', class: 'CSE Batch 2 Year III', roomNo: 'A304' },
{ id: 'tt525', facultyId: 'UNKNOWN', day: 'Fri', startTime: '15:00', endTime: '16:00', subject: 'Constitution of India', class: 'CSE Batch 2 Year III', roomNo: 'A304' },

// =========================================================
// B.Tech CSE - BATCH 3 - YEAR III
// Room: A310
// =========================================================

{ id: 'tt526', facultyId: 'f56', day: 'Mon', startTime: '09:00', endTime: '10:00', subject: 'Deep Learning - Batch 1', class: 'CSE Batch 3 Year III' },
{ id: 'tt527', facultyId: 'f55', day: 'Mon', startTime: '09:00', endTime: '10:00', subject: 'Deep Learning - Batch 2', class: 'CSE Batch 3 Year III' },
{ id: 'tt528', facultyId: 'f35', day: 'Mon', startTime: '09:00', endTime: '10:00', subject: 'Data Encryption and Compression', class: 'CSE Batch 3 Year III' },
{ id: 'tt529', facultyId: 'f53', day: 'Mon', startTime: '09:00', endTime: '10:00', subject: 'Introduction to Data Science', class: 'CSE Batch 3 Year III' },
{ id: 'tt530', facultyId: 'f45', day: 'Mon', startTime: '10:00', endTime: '11:00', subject: 'Design and Analysis of Algorithms', class: 'CSE Batch 3 Year III', roomNo: 'A310' },
{ id: 'tt531', facultyId: 'f55', day: 'Mon', startTime: '11:10', endTime: '12:10', subject: 'Data and Visual Analytics', class: 'CSE Batch 3 Year III' },
{ id: 'tt532', facultyId: 'f53', day: 'Mon', startTime: '11:10', endTime: '12:10', subject: 'Steganography and Digital Watermarking', class: 'CSE Batch 3 Year III' },
{ id: 'tt533', facultyId: 'f5', day: 'Mon', startTime: '13:10', endTime: '14:00', subject: 'Theory of Computation', class: 'CSE Batch 3 Year III', roomNo: 'A310' },
{ id: 'tt534', facultyId: 'f44', day: 'Mon', startTime: '14:00', endTime: '15:00', subject: 'Software Engineering', class: 'CSE Batch 3 Year III', roomNo: 'A310' },
{ id: 'tt535', facultyId: 'f61', day: 'Mon', startTime: '15:00', endTime: '16:00', subject: 'Constitution of India', class: 'CSE Batch 3 Year III', roomNo: 'A310' },

{ id: 'tt536', facultyId: 'f55', day: 'Tue', startTime: '09:00', endTime: '10:00', subject: 'Data and Visual Analytics', class: 'CSE Batch 3 Year III' },
{ id: 'tt537', facultyId: 'f53', day: 'Tue', startTime: '09:00', endTime: '10:00', subject: 'Steganography and Digital Watermarking', class: 'CSE Batch 3 Year III' },
{ id: 'tt538', facultyId: 'f5', day: 'Tue', startTime: '10:00', endTime: '11:00', subject: 'Theory of Computation', class: 'CSE Batch 3 Year III', roomNo: 'A310' },
{ id: 'tt539', facultyId: 'f56', day: 'Tue', startTime: '11:10', endTime: '12:10', subject: 'Deep Learning - Batch 1', class: 'CSE Batch 3 Year III' },
{ id: 'tt540', facultyId: 'f55', day: 'Tue', startTime: '11:10', endTime: '12:10', subject: 'Deep Learning - Batch 2', class: 'CSE Batch 3 Year III' },
{ id: 'tt541', facultyId: 'f35', day: 'Tue', startTime: '11:10', endTime: '12:10', subject: 'Data Encryption and Compression', class: 'CSE Batch 3 Year III' },
{ id: 'tt542', facultyId: 'f53', day: 'Tue', startTime: '11:10', endTime: '12:10', subject: 'Introduction to Data Science', class: 'CSE Batch 3 Year III' },
{ id: 'tt543', facultyId: 'f49', day: 'Tue', startTime: '13:10', endTime: '14:00', subject: 'Computer Networks', class: 'CSE Batch 3 Year III', roomNo: 'A310' },
{ id: 'tt544', facultyId: 'f27', day: 'Tue', startTime: '14:00', endTime: '16:00', subject: 'Project 1', class: 'CSE Batch 3 Year III', roomNo: 'A310' },

{ id: 'tt545', facultyId: 'f44', day: 'Wed', startTime: '09:00', endTime: '10:00', subject: 'Software Engineering', class: 'CSE Batch 3 Year III', roomNo: 'A310' },
{ id: 'tt546', facultyId: 'f45', day: 'Wed', startTime: '10:00', endTime: '11:00', subject: 'Design and Analysis of Algorithms', class: 'CSE Batch 3 Year III', roomNo: 'A310' },
{ id: 'tt547', facultyId: 'f49', day: 'Wed', startTime: '11:10', endTime: '12:10', subject: 'Computer Networks', class: 'CSE Batch 3 Year III', roomNo: 'A310' },
{ id: 'tt548', facultyId: 'f5', day: 'Wed', startTime: '13:10', endTime: '14:00', subject: 'Theory of Computation', class: 'CSE Batch 3 Year III', roomNo: 'A310' },

{ id: 'tt549', facultyId: 'f61', day: 'Thu', startTime: '09:00', endTime: '10:00', subject: 'Constitution of India', class: 'CSE Batch 3 Year III', roomNo: 'A310' },
{ id: 'tt550', facultyId: 'f49', day: 'Thu', startTime: '10:00', endTime: '11:00', subject: 'Computer Networks', class: 'CSE Batch 3 Year III', roomNo: 'A310' },
{ id: 'tt551', facultyId: 'f45', day: 'Thu', startTime: '11:10', endTime: '12:10', subject: 'Design and Analysis of Algorithms', class: 'CSE Batch 3 Year III', roomNo: 'A310' },
{ id: 'tt552', facultyId: 'f56', day: 'Thu', startTime: '13:10', endTime: '14:00', subject: 'Deep Learning - Batch 1', class: 'CSE Batch 3 Year III' },
{ id: 'tt553', facultyId: 'f55', day: 'Thu', startTime: '13:10', endTime: '14:00', subject: 'Deep Learning - Batch 2', class: 'CSE Batch 3 Year III' },
{ id: 'tt554', facultyId: 'f35', day: 'Thu', startTime: '13:10', endTime: '14:00', subject: 'Data Encryption and Compression', class: 'CSE Batch 3 Year III' },
{ id: 'tt555', facultyId: 'f53', day: 'Thu', startTime: '13:10', endTime: '14:00', subject: 'Introduction to Data Science', class: 'CSE Batch 3 Year III' },
{ id: 'tt556', facultyId: 'f45', day: 'Thu', startTime: '14:00', endTime: '15:00', subject: 'Design and Analysis of Algorithms', class: 'CSE Batch 3 Year III', roomNo: 'A310' },
{ id: 'tt557', facultyId: 'f61', day: 'Thu', startTime: '15:00', endTime: '16:00', subject: 'Constitution of India', class: 'CSE Batch 3 Year III', roomNo: 'A310' },

{ id: 'tt558', facultyId: 'f5', day: 'Fri', startTime: '09:00', endTime: '10:00', subject: 'Theory of Computation', class: 'CSE Batch 3 Year III', roomNo: 'A310' },
{ id: 'tt559', facultyId: 'f55', day: 'Fri', startTime: '10:00', endTime: '11:00', subject: 'Data and Visual Analytics', class: 'CSE Batch 3 Year III' },
{ id: 'tt560', facultyId: 'f53', day: 'Fri', startTime: '10:00', endTime: '11:00', subject: 'Steganography and Digital Watermarking', class: 'CSE Batch 3 Year III' },
{ id: 'tt561', facultyId: 'f44', day: 'Fri', startTime: '11:10', endTime: '12:10', subject: 'Software Engineering', class: 'CSE Batch 3 Year III', roomNo: 'A310' },
{ id: 'tt562', facultyId: 'f49', day: 'Fri', startTime: '13:10', endTime: '16:00', subject: 'Computer Networks Lab', class: 'CSE Batch 3 Year III', roomNo: 'A101' }

]


export const announcements: Announcement[] = [
  { id: 'a1', schoolId: 'stem', category: 'Invigilation', title: 'End-semester invigilation roster', priority: 'high', date: '2026-09-04', time: '09:30 AM', venue: 'Academic Block A', assignedFaculty: ['Dr. Praveen K M', 'Dr. Kavitha Rajan'] },
  { id: 'a2', schoolId: 'stem', category: 'Evaluation', title: 'STEM paper valuation schedule', priority: 'med', date: '2026-09-08', time: '10:00 AM', venue: 'Faculty Resource Room', assignedFaculty: ['Dr. Praveen K M'] },
  { id: 'a3', schoolId: 'stem', category: 'Meeting', title: 'Academic council meeting', priority: 'med', date: '2026-09-02', time: '02:30 PM', venue: 'Seminar Hall', assignedFaculty: ['Dr. Praveen K M', 'Dr. Kavitha Rajan'] },
  { id: 'a4', schoolId: 'stem', category: 'Circular', title: 'Updated examination guidelines', priority: 'low', date: '2026-08-28', time: 'All day', venue: 'Online', assignedFaculty: [] },
  { id: 'a5', schoolId: 'philosophy', category: 'Meeting', title: 'Department planning meeting', priority: 'med', date: '2026-09-03', time: '11:00 AM', venue: 'Block B', assignedFaculty: ['Dr. K. Suresh'] }
]
