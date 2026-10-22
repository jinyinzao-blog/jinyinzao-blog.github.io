// 生成一个跟随鼠标的发光圆球
const cursor = document.createElement('div');
cursor.style.cssText = `
  position: fixed;
  top: -15px; left: -15px;
  width: 30px; height: 30px;
  background: rgba(0, 255, 255, 0.8);
  border-radius: 50%;
  pointer-events: none;
  z-index: 99999;
  transition: transform 0.1s ease-out;
`;
document.body.appendChild(cursor);

let mouseX = 0, mouseY = 0;
let cursorX = 0, cursorY = 0;

document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

// 动画循环（带有丝滑的延迟跟随感）
function animate() {
  cursorX += (mouseX - cursorX) * 0.15;
  cursorY += (mouseY - cursorY) * 0.15;
  cursor.style.transform = `translate(${cursorX}px, ${cursorY}px)`;
  requestAnimationFrame(animate);
}
animate();