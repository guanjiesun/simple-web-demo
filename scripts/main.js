const myImage = document.querySelector("img");

myImage.addEventListener("click", function () {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "./images/js1.jpg") {
    myImage.setAttribute("src", "./images/js2.jpg");
  } else {
    myImage.setAttribute("src", "./images/js1.jpg");
  }
});

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

// 访问页面时，检查 localStorage 中是否有 "name" 键
// 如果没有，则调用 setUserName 函数
if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Welcome to JavaScript world, ${storedName}!`;
}

// 为按钮添加点击事件监听器，实现修改localStorage 中的 "name" 键的值，然后更新页面标题
myButton.addEventListener("click", function () {
  setUserName();
});

/* 下面全部都是函数定义 */
function setUserName() {
  // 通过 prompt 获取用户输入
  // 并将其存储在 localStorage 中
  // 最后更新页面标题
  const myName = prompt("Please enter your name.");
  localStorage.setItem("name", myName);
  myHeading.textContent = `Welcome to JavaScript world, ${myName}!`;
}

function multiply(num1, num2) {
  // 计算两个数字的乘积
  let result = num1 * num2;
  return result;
}
