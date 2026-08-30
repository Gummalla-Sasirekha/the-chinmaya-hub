import type { Announcement, Faculty, School } from '../types'

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
  { id: 'f1', schoolId: 'stem', name: 'Dr. Anand H. S.', phone: '+919567092300', email: 'associatedean.stem@cvv.ac.in', designation: 'Associate Dean — STEM | Head – Department of Artificial Intelligence and Emerging Technologies', roomNo: '201' },
  { id: 'f2', schoolId: 'stem', name: 'Dr. Praveen K M', phone: '+917337229854', email: 'praveen.km@cvv.ac.in', designation: 'Assistant Dean – Learning and Innovation | Associate Professor', roomNo: '204' },
  { id: 'f3', schoolId: 'stem', name: 'Dr. Resmi N.G.', phone: '+919633291997', email: 'resmi.ng@cvv.ac.in', designation: 'Head – Department of Computer Science and Engineering | Senior Assistant Professor', roomNo: '203' },
  { id: 'f4', schoolId: 'stem', name: 'Dr. Raisun Mathew', phone: '+919048101997', email: 'raisun.mathew@cvv.ac.in', designation: 'Assistant Dean – Doctoral Programmes | Assistant Professor | Associate Head of School, School of Linguistics and Literary Studies (LLS)', roomNo: '207' },
  { id: 'f5', schoolId: 'stem', name: 'Ms. Pradeeba V.', phone: '+919751994860', email: 'pradeeba.v@cvv.ac.in', designation: 'Assistant Professor', roomNo: '209' },
  { id: 'f6', schoolId: 'philosophy', name: 'Dr. Ramesh Pattni', phone: '+917337229854', email: 'ramesh.pattni@cvv.ac.in', designation: 'Professor of Practice', roomNo: 'B-112' },
  { id: 'f7', schoolId: 'philosophy', name: 'Dr. K. Suresh', phone: '+917337229854', email: 'suresh.k@cvv.ac.in', designation: 'Associate Professor', roomNo: 'B-114' },
  { id: 'f8', schoolId: 'business', name: 'Mr. Bharath K', phone: '+919445701744', email: 'bharath.k@cvv.ac.in', designation: 'Assistant Professor', roomNo: 'C-301' },
  { id: 'f9', schoolId: 'education', name: 'Dr. Pramod Dinakar', phone: '+919447792228', email: 'pramod.dinakar@cvv.ac.in', designation: 'Associate Professor | Head – School of Education, Governance, Culture and Social Systems | School of Education, Governance, Culture and Social Systems', roomNo: 'D-208' },
  { id: 'f10', schoolId: 'languages', name: 'Prof. Lakshmi Raman', phone: '+917337229854', email: 'lakshmi.r@cvv.ac.in', designation: 'Professor', roomNo: 'E-105' },
  { id: 'f11', schoolId: 'business', name: 'Dr. Abha Mohan', phone: '+919895238246', email: 'abha.mohan@cvv.ac.in', designation: 'Associate Professor | Associate Dean – UG & PG Programmes, Assistant Dean – Student Activity Engagement', roomNo: 'C-301' },
  { id: 'f12', schoolId: 'business', name: 'Dr. Manjula R Iyer', phone: '+917337229854', email: 'manjula.iyer@cvv.ac.in', designation: 'Head – School of Business and Economics Studies | Professor', roomNo: 'C-301' },
  { id: 'f13', schoolId: 'education', name: 'Dr. Bindusree A. R.', phone: '+919847135577', email: 'bindusree.ar@cvv.ac.in', designation: 'Associate Professor | Associate Dean – HASSM | School of Education, Governance, Culture and Social Systems', roomNo: 'C-301' },
  { id: 'f14', schoolId: 'education', name: 'Dr. Bindu M. P.', phone: '+918547840746', email: 'bindu.mp@cvv.ac.in', designation: 'Associate Professor |  Assistant Dean – Community Engagement and Rural Development, Assistant Dean – Student Culture | HoS Education Governance Culture and Social System', roomNo: 'C-301' },
  { id: 'f14', schoolId: 'education', name: 'Dr. Nikhitha Raju.', phone: '+919747275247', email: 'nikhitha.raju@cvv.ac.in', designation: 'Associate Professor', roomNo: 'C-301' }
]

export const announcements: Announcement[] = [
  { id: 'a1', schoolId: 'stem', category: 'Invigilation', title: 'End-semester invigilation roster', priority: 'high', date: '2026-09-04', time: '09:30 AM', venue: 'Academic Block A', assignedFaculty: ['Dr. Praveen K M', 'Dr. Resmi N.G.'] },
  { id: 'a2', schoolId: 'stem', category: 'Evaluation', title: 'STEM paper valuation schedule', priority: 'med', date: '2026-09-08', time: '10:00 AM', venue: 'Faculty Resource Room', assignedFaculty: ['Dr. Praveen K M'] },
  { id: 'a3', schoolId: 'stem', category: 'Meeting', title: 'Academic council meeting', priority: 'med', date: '2026-09-02', time: '02:30 PM', venue: 'Seminar Hall', assignedFaculty: ['Dr. Praveen K M', 'Dr. Raisun Mathew'] },
  { id: 'a4', schoolId: 'stem', category: 'Circular', title: 'Updated examination guidelines', priority: 'low', date: '2026-08-28', time: 'All day', venue: 'Online', assignedFaculty: [] },
  { id: 'a5', schoolId: 'philosophy', category: 'Meeting', title: 'Department planning meeting', priority: 'med', date: '2026-09-03', time: '11:00 AM', venue: 'Block B', assignedFaculty: ['Dr. K. Suresh'] }
]
