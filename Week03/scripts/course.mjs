// course.mjs
const byuiCourse = {
  title: "Web Frontend Development I",
  sections: [
    { section: 1, enrolled: 88, instructor: "Brother Bingham" },
    { section: 2, enrolled: 81, instructor: "Sister Shultz" },
    { section: 3, enrolled: 95, instructor: "Sister Smith" }
  ],
  changeEnrollment(sectionNum, enroll = true) {
    const section = this.sections.find(s => s.section === sectionNum);
    if (!section) return;
    if (enroll) section.enrolled++;
    else section.enrolled--;
  }
};

export default byuiCourse;