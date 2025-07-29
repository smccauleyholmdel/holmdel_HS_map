const rooms = [
  "204", "205", "207", "208", "106", "100", "101", "143", "142", "141", "144",
  "145", "146", "147", "148", "149", "150", "151", "152", "153", "154", "303B",
  "301", "302", "Commons", "Auditorium", "Main Gym", "New Gym", "Nurse", "306",
  "307", "HIVE", "310", "313", "314", "315", "303", "MPR", "Media Center",
  "Fitness Center", "401", "402", "403", "404", "405", "406", "407", "408",
  "409", "410", "411", "412", "601", "602", "603", "604", "801", "802", "803",
  "804", "501", "502", "503", "504", "505", "506", "507", "509", "510", "511",
  "512", "Counselor Office", "702", "703", "704", "901", "902", "903", "904",
  "Upper Gym", "Upper Library"
];

const startSelect = document.getElementById("start-room");
const endSelect = document.getElementById("end-room");
rooms.forEach(room => {
  startSelect.add(new Option(room, room));
  endSelect.add(new Option(room, room));
});

function findRoute() {
  const start = startSelect.value;
  const end = endSelect.value;
  const accessible = document.getElementById("accessible-mode").checked;
  alert(`Routing from ${start} to ${end}. Accessibility mode: ${accessible}`);
}