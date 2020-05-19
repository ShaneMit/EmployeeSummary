function Intern(name, id, title, school) {
  Employee.call(this, name, id, title)
  this.school = school
  this.getSchool()
}

module.exports = Intern