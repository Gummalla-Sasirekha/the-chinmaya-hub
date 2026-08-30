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
  { id: 'f1', schoolId: 'stem', name: 'Dr. Praveen K M', phone: '+917337229854', email: 'praveen.km@cvv.ac.in', designation: 'Assistant Dean – Learning and Innovation | Associate Professor', roomNo: '204' },
  { id: 'f2', schoolId: 'stem', name: 'Dr. Kavitha Rajan', phone: '+917337229854', email: 'kavitha.rajan@cvv.ac.in', designation: 'Associate Professor', roomNo: '206' },
  { id: 'f3', schoolId: 'philosophy', name: 'Dr. Ramesh Pattni', phone: '+917337229854', email: 'ramesh.pattni@cvv.ac.in', designation: 'Professor of Practice', roomNo: 'B-112' },
  { id: 'f4', schoolId: 'philosophy', name: 'Dr. K. Suresh', phone: '+917337229854', email: 'suresh.k@cvv.ac.in', designation: 'Associate Professor', roomNo: 'B-114' },
  { id: 'f5', schoolId: 'business', name: 'Dr. Renju Chandran', phone: '+917337229854', email: 'renju.chandran@cvv.ac.in', designation: 'Assistant Professor', roomNo: 'C-301' },
  { id: 'f7', schoolId: 'education', name: 'Dr. Chandrasekharan Praveen', phone: '+917337229854', email: 'chandrasekharan.praveen@cvv.ac.in', designation: 'Assistant Professor', roomNo: 'D-208' },
  { id: 'f6', schoolId: 'languages', name: 'Prof. Lakshmi Raman', phone: '+917337229854', email: 'lakshmi.r@cvv.ac.in', designation: 'Professor', roomNo: 'E-105' }
]

export const announcements: Announcement[] = [
  { id: 'a1', schoolId: 'stem', category: 'Invigilation', title: 'End-semester invigilation roster', priority: 'high', date: '2026-09-04', time: '09:30 AM', venue: 'Academic Block A', assignedFaculty: ['Dr. Praveen K M', 'Dr. Kavitha Rajan'] },
  { id: 'a2', schoolId: 'stem', category: 'Evaluation', title: 'STEM paper valuation schedule', priority: 'med', date: '2026-09-08', time: '10:00 AM', venue: 'Faculty Resource Room', assignedFaculty: ['Dr. Praveen K M'] },
  { id: 'a3', schoolId: 'stem', category: 'Meeting', title: 'Academic council meeting', priority: 'med', date: '2026-09-02', time: '02:30 PM', venue: 'Seminar Hall', assignedFaculty: ['Dr. Praveen K M', 'Dr. Kavitha Rajan'] },
  { id: 'a4', schoolId: 'stem', category: 'Circular', title: 'Updated examination guidelines', priority: 'low', date: '2026-08-28', time: 'All day', venue: 'Online', assignedFaculty: [] },
  { id: 'a5', schoolId: 'philosophy', category: 'Meeting', title: 'Department planning meeting', priority: 'med', date: '2026-09-03', time: '11:00 AM', venue: 'Block B', assignedFaculty: ['Dr. K. Suresh'] }
]
