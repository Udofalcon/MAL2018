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

canvas.width = document.body.width;
canvas.height = document.body.height;

for (var i = 0; i < difficulties.length; i++) {
  difficulties.heightData = [];
  maxHeight = Math.max(maxHeight, difficulties[i].total);
  
  for (var j = 0; j <= canvas.width; j++) {
    difficulties[i].heightData[j] = (j / canvas.width) * (difficulties[i].total / maxHeight) * canvas.height;
  }
}

// 1/8
// challenges += 6/6; 1. Time of Eve
