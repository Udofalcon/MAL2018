var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var difficulties = [
  {
    name: 'Knight',
    tier1: 10,
    tier2: 8,
    tier3: 2,
    total: 20
  }, {
    name: 'Baron',
    tier1: 8,
    tier2: 12,
    tier3: 10,
    total: 30
  }, {
    name: 'Marquess',
    tier1: 8,
    tier2: 17,
    tier3: 15,
    total: 40
  }, {
    name: 'Viceroy',
    tier1: 7,
    tier2: 22,
    tier3: 21,
    total: 50
  }, {
    name: 'King',
    tier1: 7,
    tier2: 24,
    tier3: 29,
    total: 60
  }, {
    name: 'Hardcore',
    tier1: 30,
    tier2: 40,
    tier3: 30,
    total: 100
  }, {
    tier1: 33,
    tier2: 76 - 33,
    tier3: 108 - 76,
    total: 108
  }
];
var maxHeight = 108;
var challenges = [];
var days = [];
var dateCalc = new Date(2018, 0, 1);
var progress = [];
var progressIndex = 0;
var progressHeight = 0;

canvas.width = document.body.getBoundingClientRect().width;
canvas.height = document.body.getBoundingClientRect().height;

do {
  days.push(dateCalc.getTime());
  dateCalc.setDate(dateCalc.getDate() + 1);
} while (dateCalc.getFullYear() !== 2019);

for (var i = 0; i < difficulties.length; i++) {
  difficulties[i].pointData = [];
  maxHeight = Math.max(maxHeight, difficulties[i].total);
  
  for (var j = 0; j < days.length; j++) {
    difficulties[i].pointData[j] = {
      date: days[j],
      x: j / (days.length - 1),
      y: (j / (days.length - 1)) * (difficulties[i].total / maxHeight)
    };
  }
}

for (var i = 0/*difficulties.length - 1*/; i >= 0; i--) {
  ctx.fillStyle = 'rgb(' + parseInt((i + 1) / difficulties.length * 255) + ', 0, 0)';
  ctx.moveTo(difficulties[i].pointData[0].x, difficulties[i].pointData[0].y);
  
  for (var j = 1; j < difficulties[i].pointData.length; j++) {
    ctx.lineTo(difficulties[i].pointData[j].x, difficulties[i].pointData[j].y);
  }
  
  ctx.closePath();
  ctx.fill();
}

// 1/8
// 1. Time of Eve (6/6)
/*addEntry(6/6, 1, 8);

for (var i = 0; i < days.length; i++) {
  
}

function addEntry(amt, mon, day) {
  var time = (new Date(2018, mon - 1, day)).getTime();
  var index = (progress.length && progress[progress.length - 1].time === time) ? progress.length - 1 : progress.length;

  if (index === progress.length) {
    progress[index] = {
      time: time,
      amt: amt
    };
  } else {
    progress[index].amt += amt / maxHeight;
  }
}
*/
