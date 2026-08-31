export type School = { id: string; name: string }
export type UserRole = 'admin' | 'faculty' | 'student'
export type UserProfile = { role: UserRole; facultyId?: string }
export type Faculty = {
  id: string
  schoolId: string
  name: string
  phone: string
  email: string
  designation: string
  roomNo: string
  totalDutiesAllotted: number
  dutiesDone: number
  dutiesSwapped: number
}
export type TimetableEntry = { id: string; facultyId: string; day: string; startTime: string; endTime: string; subject: string; class: string; roomNo: string }
export type AnnouncementCategory = 'Invigilation' | 'Evaluation' | 'Meeting' | 'Circular'
export type Priority = 'high' | 'med' | 'low'
export type Announcement = { id: string; schoolId: string; category: AnnouncementCategory; title: string; priority: Priority; date: string; time: string; venue: string; assignedFaculty: string[] }
