var beatles = {
  name: "Beatles",
  members: ["McCartney", "Lennon", "Harrison", "Starr"],
  albums: [
    { name: "Please Please Me", year: 1963 },
    { name: "With The Beatles", year: 1974 },
    { name: "A Hard Day's Night", year: 1989 }
  ]
};
// Вывод массива albums
// function albumsView() {
//   var albumsNew;
//   albumsNew = beatles.albums;
//   console.log(albumsNew);
// }

// albumsView();

function test() {
  var currentName;
  var currentYear;
  var albumsNew;
  var number = 1;
  albumsNew = beatles.albums;
  for (var i = 0; i < albumsNew.length; i++) {
    currentName = albumsNew[i].name;
    currentYear = albumsNew[i].year;
    alert(
      "Альбом №" +
        number +
        ", название: " +
        currentName +
        ". Год выпуска альбома: " +
        currentYear
    );
    number++;
  }
}

test();
