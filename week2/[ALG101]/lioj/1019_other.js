//cat input.txt | node 1019.js
var readline = require("readline");

var lines = [];
var rl = readline.createInterface({
  input: process.stdin,
});

rl.on("line", function (line) {
  lines.push(line);
});

rl.on("close", function () {
  solve(lines);
});

function solve(lines) {
  let num = lines[0].split(" ");
  let X = Number(num[1]);
  let Y = Number(num[0]);
  let maze = buildWall(lines, X, Y);

  if (findPath(maze, 1, 1, X, Y) === "o") {
    // console.log("花費步數:");
    console.log(countStep(maze));
    // console.log("地圖如下:");
    // console.log(maze);
  } else {
    console.log(0);
  }
}

//回傳終點'o'或是'.'
function findPath(maze, x, y, sidelineX, sidelineY) {
  //是點點就做判斷
  if (maze[x][y] === ".") {
    maze[x][y] = "o";
    //如果終點不是'o'的話繼續跑遞迴
    if (maze[sidelineX][sidelineY] === ".") {
      //走 右下左上，如果終點不是'o'改成'.'
      if (
        !(
          findPath(maze, x, y + 1, sidelineX, sidelineY) === "o" ||
          findPath(maze, x + 1, y, sidelineX, sidelineY) === "o" ||
          findPath(maze, x, y - 1, sidelineX, sidelineY) === "o" ||
          findPath(maze, x - 1, y, sidelineX, sidelineY) === "o"
        )
      ) {
        maze[x][y] = ".";
      }
    }
  }

  return maze[sidelineX][sidelineY];
}

//建立圍牆防止超出範圍
function buildWall(input, x, y) {
  let maze = [""];
  for (let i = 0; i < x; i++) {
    maze.push(`#${input[i + 1]}#`.split(""));
  }
  const len = maze.length;
  maze[len] = "";
  for (let i = 0; i < y + 2; i++) {
    maze[0] += "#";
    maze[len] += "#";
  }
  maze[0] = maze[0].split("");
  maze[len] = maze[len].split("");
  return maze;
}

//算步數
function countStep(maze) {
  let counter = 0;
  //直覺的算法: 
  for (x in maze) {
    for (y in maze[x]) {
      if (maze[x][y] === "o") counter++;
    }
  }

  //用filter篩選的算法
  // for (let i = 1; i < maze.length - 1; i++) {
  //   let result = maze[i].filter((el) => el === "o");
  //   counter += result.length;
  // }

  return counter - 1;
}