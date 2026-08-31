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
  { id: 'f8', schoolId: 'stem', name: 'Dr. Anand H. S.', phone: '+917337229854', email: 'associatedean.stem@cvv.ac.in', designation: 'Associate Dean — STEM | Head – Department of Artificial Intelligence and Emerging Technologies', roomNo: '201', totalDutiesAllotted: 12, dutiesDone: 8, dutiesSwapped: 1 },
  { id: 'f9', schoolId: 'stem', name: 'Dr. Resmi N.G.', phone: '+917337229854', email: 'resmi.ng@cvv.ac.in', designation: 'Head – Department of Computer Science and Engineering | Senior Assistant Professor', roomNo: '203', totalDutiesAllotted: 10, dutiesDone: 6, dutiesSwapped: 1 },
  { id: 'f1', schoolId: 'stem', name: 'Dr. Praveen K M', phone: '+917337229854', email: 'praveen.km@cvv.ac.in', designation: 'Assistant Dean – Research', roomNo: '205', totalDutiesAllotted: 9, dutiesDone: 7, dutiesSwapped: 0 },
  { id: 'f10', schoolId: 'stem', name: 'Dr. Raisun Mathew', phone: '+917337229854', email: 'raisun.mathew@cvv.ac.in', designation: 'Assistant Dean – Doctoral Programmes | Assistant Professor | Associate Head of School, School of Linguistics and Literary Studies (LLS)', roomNo: '207', totalDutiesAllotted: 8, dutiesDone: 5, dutiesSwapped: 2 },
  { id: 'f11', schoolId: 'stem', name: 'Ms. Pradeeba V.', phone: '+917337229854', email: 'pradeeba.v@cvv.ac.in', designation: 'Assistant Professor', roomNo: '209', totalDutiesAllotted: 7, dutiesDone: 4, dutiesSwapped: 0 },
  { id: 'f2', schoolId: 'stem', name: 'Dr. Kavitha Rajan', phone: '+919811223344', email: 'kavitha.rajan@cvv.ac.in', designation: 'Associate Professor', roomNo: '206', totalDutiesAllotted: 10, dutiesDone: 9, dutiesSwapped: 1 },
  { id: 'f3', schoolId: 'philosophy', name: 'Dr. Ramesh Pattni', phone: '+919700112233', email: 'ramesh.pattni@cvv.ac.in', designation: 'Professor of Practice', roomNo: 'B-112', totalDutiesAllotted: 6, dutiesDone: 3, dutiesSwapped: 0 },
  { id: 'f4', schoolId: 'philosophy', name: 'Dr. K. Suresh', phone: '+919844556677', email: 'suresh.k@cvv.ac.in', designation: 'Associate Professor', roomNo: 'B-114', totalDutiesAllotted: 8, dutiesDone: 7, dutiesSwapped: 1 },
  { id: 'f5', schoolId: 'business', name: 'Dr. Renju Chandran', phone: '+919866778899', email: 'renju.chandran@cvv.ac.in', designation: 'Assistant Professor', roomNo: 'C-301', totalDutiesAllotted: 5, dutiesDone: 2, dutiesSwapped: 0 },
  { id: 'f7', schoolId: 'education', name: 'Dr. Chandrasekharan Praveen', phone: '+919866775511', email: 'chandrasekharan.praveen@cvv.ac.in', designation: 'Assistant Professor', roomNo: 'D-208', totalDutiesAllotted: 7, dutiesDone: 5, dutiesSwapped: 1 },
  { id: 'f6', schoolId: 'languages', name: 'Prof. Lakshmi Raman', phone: '+919811998877', email: 'lakshmi.r@cvv.ac.in', designation: 'Professor', roomNo: 'E-105', totalDutiesAllotted: 11, dutiesDone: 8, dutiesSwapped: 1 }
]

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
