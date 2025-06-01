/* Super / Parent class  */
class School {
  constructor(name, level, numberOfStudents) {
    this._name = name;
    this._level = level;
    this._numberOfStudents = numberOfStudents;
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
    return this._averageTestScores;
  }

  get schoolReview() {
    return this._schoolReview;
  }

  set numberOfStudents(newNumberOfStudents) {
    if (typeof newNumberOfStudents === "string") {
      console.log("Invalid input: numberOfStudents must be set to a number");
    } else {
      this._numberOfStudents = newNumberOfStudents;
    }
  }

  quickFacts() {
    console.log(
      `${this.name} educates ${this.numberOfStudents} students at the ${this.level} school level.\nThe school achieved an OFSTED Rating ${this.schoolReview}`
    );
  }

  statsAverageRating() {
    let statsAverage =
      this._testScores.reduce((accumulator, value) => accumulator + value) /
      this._testScores.length;
    console.log(`${this.name} has an average STATS score of ${statsAverage}`);
  }

  static pickSubstituteTeacher(substituteTeachers) {
    let randomNumber = Math.floor(Math.random() * substituteTeachers.length);
    return substituteTeachers[randomNumber];
  }
}

/* Subclasses */
class PrimarySchool extends School {
  constructor(name, numberOfStudents, pickupPolicy) {
    super(name, "primary", numberOfStudents);
    this._pickupPolicy = pickupPolicy;
  }

  get pickupPolicy() {
    return this._pickupPolicy;
  }
}

class MiddleSchool extends School {
  constructor(name, numberOfStudents, schoolClubs) {
    super(name, "middle", numberOfStudents);
    this._schoolClubs = schoolClubs;
  }

  get schoolClubs() {
    console.log(this.schoolClubs);
  }
}

class HighSchool extends School {
  constructor(name, numberOfStudents, sportsTeams) {
    super(name, "high", numberOfStudents);
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
}

// Create instances of sublasses
// const lorraineHansbury = new PrimarySchool(
//   "Lorraine Hansbury",
//   514,
//   "Students must be picked up by a parent, guardian, or a family member of the age of 13",
//   [35, 40, 63],
//   "very good"
// );

// lorraineHansbury.quickFacts();

// lorraineHansbury.statsAverageRating();

// const sub = Shcool.pickSubstituteTeacher([
//   "Jamal Crawford",
//   "Lou Williams",
//   "J. R. Smith",
//   "James Harden",
//   "Jason Terry",
//   "Manu Ginobli",
// ]);

// const alSmith = new HighSchool("Al E. Smith", 415, [
//   "Baseball",
//   "Basketball",
//   "Volleyball",
//   "Track and Field",
// ]);

// alSmith.sportsTeams;
