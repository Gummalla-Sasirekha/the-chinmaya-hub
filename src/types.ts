export type School = { id: string; name: string }
export type Faculty = { id: string; schoolId: string; name: string; phone: string; email: string; designation: string }
export type AnnouncementCategory = 'Invigilation' | 'Evaluation' | 'Meeting' | 'Circular'
export type Priority = 'high' | 'med' | 'low'
export type Announcement = { id: string; schoolId: string; category: AnnouncementCategory; title: string; priority: Priority; date: string; time: string; venue: string; assignedFaculty: string[] }
