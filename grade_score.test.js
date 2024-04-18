let gradeScore = require("./grade_score.js")

test("Grade scores", () => {
    let score = [95, 78, 85, 60, 45, 92]
    let grade = gradeScore(score)

    expect(grade).toEqual([ 'A', 'C', 'B', 'D', 'F', 'A' ])
})