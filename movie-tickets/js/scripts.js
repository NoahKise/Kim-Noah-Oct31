function Movie(title, rating, newRelease) {
    this.title = title;
    this.rating = rating;
    this.newRelease = newRelease;
}
//need this? use to print Ticket.
function TicketRequest(Movie, age, time) {
    this.Movie = Movie;
    this.age = age;
    this.time = time;
}

const theShining = new Movie("The Shining", "R", false);
const pawPatrol = new Movie("Paw Patrol: The Mighty Movie", "PG", true);
const theRing = new Movie("The Ring", "PG13", false);

const moviesArray = [theShining, pawPatrol, theRing];

let ratingsArray = ["R", "PG13", "PG"];

function assessAge(age) {
    if (age > 16) {
        return ratingsArray;
    } else if (age < 17 && age > 12) {
        let ratingsArray = ["PG13", "PG"];
        return ratingsArray;
    } else {
        let ratingsArray = ["PG"];
        return ratingsArray;
    }
}

function checkMovieAgainstRatingsArray(inputRating, age) {
    let ratingsArray = assessAge(age);
    if (ratingsArray.includes(inputRating)) {
        return true;
    }
}



function ticketPrice(age, time, newRelease) {
    let price = 15;
    if (age > 11 && age < 65) {
        if (time > 5) {
            if (newRelease === false) {
                let totalPrice = price - 2;
                return totalPrice;
            } else return price;
        } else if (time < 5) {
            if (newRelease === false) {
                let totalPrice = price - 5;
                return totalPrice;
            } else {
                let totalPrice = price - 3;
                return totalPrice;
            }
        }
    } else if (age > 64) {
        if (time > 5) {
            if (newRelease === false) {
                let totalPrice = price - 5;
                return totalPrice;
            } else {
                let totalPrice = price - 3;
                return totalPrice;
            }
        } else if (time < 5) {
            if (newRelease === false) {
                let totalPrice = price - 8;
                return totalPrice;
            } else {
                let totalPrice = price - 6;
                return totalPrice;
            }
        }
    } else {
        if (time > 5) {
            if (newRelease === false) {
                let totalPrice = price - 7;
                return totalPrice;
            } else {
                let totalPrice = price - 5;
                return totalPrice;
            }
        } else if (time < 5) {
            if (newRelease === false) {
                let totalPrice = price - 10;
                return totalPrice;
            } else {
                let totalPrice = price - 8;
                return totalPrice;
            }
        }
    }
}

function handleFormSubmission(e) {
    e.preventDefault();
    const inputName = document.querySelector("input#nameInput").value;
    const inputAge = parseInt(document.querySelector("input#ageInput").value);
    const inputMovie = document.querySelector("select#movieChoice").value;
    function findMovie(inputMovie) {
        if (inputMovie === "1") {
            let objectMovie = theShining;
            return objectMovie;
        } else if (inputMovie === "2") {
            let objectMovie = theRing;
            return objectMovie;
        } else {
            let objectMovie = pawPatrol;
            return objectMovie;
        }
    }
    const inputTime = parseInt(document.getElementById("timeChoice").value);
    let chosenMovie = findMovie(inputMovie);
    let inputRating = chosenMovie.rating
    checkMovieAgainstRatingsArray(inputRating, inputAge)
    if (checkMovieAgainstRatingsArray(inputRating, inputAge)) {
        ticketPrice(inputAge, inputTime, chosenMovie.newRelease);
        let totalPrice = ticketPrice(inputAge, inputTime, chosenMovie.newRelease)
        const h2 = document.createElement("h2");
        const body = document.querySelector("body");
        h2.append("Your Ticket");
        const pName = document.createElement("p");
        pName.append("Name: " + inputName);
        const pPrice = document.createElement("p");
        pPrice.append("Price: $" + totalPrice)
        const pTitle = document.createElement("p");
        pTitle.append("Movie Title: " + chosenMovie.title);
        const pShowtime = document.createElement("p");
        pShowtime.append("Showtime: " + inputTime + ":00 PM")

        body.append(h2, pName, pPrice, pTitle, pShowtime);
    } else {
        const h3 = document.createElement("h3");
        const body = document.querySelector("body");
        h3.append("You're too young!")
        body.append(h3);
    }
    //jump scare for shining selection
}

window.addEventListener("load", function () {
    document.querySelector("form#userSelect").addEventListener("submit", handleFormSubmission);
});
