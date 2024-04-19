function gradeScore(scores){
    return scores.map(element => {
        if (element >= 90 && element <= 100) {
            return "A"
        } else if (element >= 80 && element < 90) {
            return "B"
        } else if (element >= 70 && element < 80) {
            return "C"
        } else if (element >= 60 && element < 70) {
            return "D"
        } else {
            return "F"
        }
    });
}

module.exports = gradeScore;