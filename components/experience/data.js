// Icon

// Get Job Duration
function monthDiff(d1, d2) {
    let months;
    months = (d2.getFullYear() - d1.getFullYear()) * 12;
    months -= d1.getMonth();
    months += d2.getMonth();
    return months <= 0 ? 0 : months;
}

function test(d1, d2) {
    let diff = monthDiff(d1, d2);
    return diff;
}

let today = new Date();
let dd = String(today.getDate()).padStart(1);
let mm = String(today.getMonth() + 1).padStart(1); //January is 0!
let yyyy = today.getFullYear();

today = yyyy + "," + mm + "," + dd;
console.log(today);

export const experienceData = [
    {
        id: 1,
        designation: "Frontend Developer (Intern)",
        company: "Desktop IT",
        duration: `${test(
            new Date(2022, 1, 1), // November 4th, 2008
            new Date(2022, 3, 31)  // March 12th, 2010
        ) + ' Months'}`
    },

    {
        id: 2,
        designation: "Frontend Developer",
        company: "Desktop IT",
        duration: `${test(
            new Date(2022, 3, 31), // November 4th, 2008
            new Date(today)  // March 12th, 2010
        ) + 2 + ' Months'}`
    }
]