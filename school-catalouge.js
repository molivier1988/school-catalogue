/* Super / Parent class  */
class School {
  constructor(name, level, numberOfStudents, testScores, schoolReview) {
    this._name = name;
    this._level = level;
    this._numberOfStudents = numberOfStudents;
    this._testScores = testScores;
    this._schoolReview = schoolReview;
  }

  get name() {
    return this._name;
  }

  get level() {
    return this._level;
  }

  get numberOfStudents() {
    return this._numberOfStudents;
  }

  get testScores() {
    return this._testScores;
  }

  get schoolReview() {
    return this._schoolReview;
  }
  /* Manually set the number of students per */
  set numberOfStudents(newNumberOfStudents) {
    if (typeof newNumberOfStudents === "string") {
      console.log("Invalid input: numberOfStudents must be set to a number");
    } else {
      this._numberOfStudents = newNumberOfStudents;
    }
  }

  /* Retrieve specific properties of school objects and print to the conole*/
  quickFacts() {
    console.log(
      `${this.name} educates ${this.numberOfStudents} students at the ${this.level} school level.\n\nThe school achieved an OFSTED Rating ${this.schoolReview}\n\nSchool Pickup Policy: ${this.pickupPolicy}\n`
    );
  }

  /* Takes schools test results and return the average score*/
  statsAverageRating() {
    let statsAverage =
      this._testScores.reduce((accumulator, value) => accumulator + value) /
      this._testScores.length;
    console.log(`${this.name} has an average STATS score of ${statsAverage}\n`);
  }

  /* Randomly select a teacher from an array of teachers*/
  static pickSubstituteTeacher(substituteTeachers) {
    let randomNumber = Math.floor(Math.random() * substituteTeachers.length);
    return substituteTeachers[randomNumber];
  }
}

/* PrimarySchool object class */
class PrimarySchool extends School {
  constructor(name, numberOfStudents, testScores, schoolReview) {
    super(name, "primary", numberOfStudents, testScores, schoolReview);
    this._pickupPolicy =
      "Students must be picked up by a parent, guardian, or a family member of the age of 13";
  }

  get pickupPolicy() {
    return this._pickupPolicy;
  }
}

/* MiddleSchool object class */
class MiddleSchool extends School {
  constructor(name, numberOfStudents, testScores, schoolReview, schoolClubs) {
    super(name, "middle", numberOfStudents, testScores, schoolReview);
    this._schoolClubs = schoolClubs;
  }

  get schoolClubs() {
    console.log(this.schoolClubs);
  }
}

/* HighSchool object class */
class HighSchool extends School {
  constructor(name, numberOfStudents, testScores, schoolReview, sportsTeams) {
    super(name, "high", numberOfStudents, testScores, schoolReview);
    this._sportsTeams = sportsTeams;
  }

  get sportsTeams() {
    return this._sportsTeams;
  }
}

class SchoolCatalog {
  constructor(level, schools) {
    this._level = level;
    this._schools = schools;
  }

  get level() {
    return this._level;
  }

  get schools() {
    return this._schools;
  }
}

// Create instances of subclasses
const lorraineHansbury = new PrimarySchool(
  "Lorraine Hansbury",
  514,
  [35, 40, 63],
  "very good"
);

lorraineHansbury.quickFacts();
lorraineHansbury.statsAverageRating();

const sub = School.pickSubstituteTeacher([
  "Jamal Crawford",
  "Lou Williams",
  "J. R. Smith",
  "James Harden",
  "Jason Terry",
  "Manu Ginobli",
]);

const alSmith = new HighSchool(
  "Al E. Smith",
  415,
  [35, 40, 63],
  "Outstanding",
  ["Baseball", "Basketball", "Volleyball", "Track and Field"]
);

// console.log(alSmith.sportsTeams);

alSmith.quickFacts();

alSmith.statsAverageRating();

/* Test SchoolCatalog class */
const primarySchools = new SchoolCatalog("primary", [
  "Lorraine Hansbury",
  "St Peters & St Pauls",
  "Holland House",
]);

console.log(primarySchools);
