export const appConfig = {
  "name": "Student Academic Portal",
  "short": "CampusTrack",
  "description": "Maintain student records, course information, attendance, and academic scores.",
  "collection": "students",
  "singular": "student",
  "fields": [
    {
      "name": "studentId",
      "label": "Student ID",
      "type": "text",
      "required": true,
      "options": []
    },
    {
      "name": "name",
      "label": "Student name",
      "type": "text",
      "required": true,
      "options": []
    },
    {
      "name": "email",
      "label": "Email",
      "type": "email",
      "required": true,
      "options": []
    },
    {
      "name": "course",
      "label": "Course / programme",
      "type": "text",
      "required": true,
      "options": []
    },
    {
      "name": "attendance",
      "label": "Attendance (%)",
      "type": "number",
      "required": true,
      "options": []
    },
    {
      "name": "marks",
      "label": "Marks (%)",
      "type": "number",
      "required": true,
      "options": []
    }
  ],
  "sample": [
    {
      "studentId": "ICTAK-001",
      "name": "Neha Thomas",
      "email": "neha@example.com",
      "course": "BSc Computer Science",
      "attendance": 92,
      "marks": 86
    }
  ]
};
