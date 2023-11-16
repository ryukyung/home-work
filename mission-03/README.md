### 🔍 Preview

![gif](./images/readme-img.gif)

### 📝 Description

- header
  [logo] `<svg>` 사용: 클래스를 지정해서 색상과 사이즈 변경 <br />
  [select] `<select>`, `<option>` 사용X
  `<option>` 태그의 스타일 지정에 한계가 있어서 `<div>`, `<ul>`, `<li>` 태그를 사용해서 만들었다.
  ```html
  <div class="select-cover">
    <div class="select">
      <div class="selected-value">한국어</div>
    </div>
    <ul>
      <li class="option">한국어</li>
      <li class="option">English</li>
    </ul>
  </div>
  ```
  <br /><br /><br />
- main
  [form] 버튼은 `<a>` 태그가 아닌 `<button>` 태그 사용
  “30일 무료 이용”은 페이지로 이동하기 보다는 `<input>`에 이메일을 입력하고 전송한다고 생각했다.
  `<form>` 태그의 `width`를 지정하고 `<input>`, `<button>` 태그가 이보다 작다면 중앙에 붙어있게, 크다면 `<button>` 태그가 아래로 갈 수 있도록 만들었다.
  ```html
  <form action="#">
    <label for="email"></label>
    <input type="email" name="email" id="email" placeholder="이메일 주소" />
    <button class="button right">
      30일 무료 이용
      <img src="./images/arrow-right.svg" alt="" />
    </button>
  </form>
  ```
  ```css
  main form {
    width: clamp(245px, calc(100% - 450px), 750px);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    row-gap: 12px;
  }
  ```
  <br /><br /><br />
- footer
  ```html
  <ul>
    <li>자주 묻는 질문</li>
    ...
    <li>Netflix 오리지널</li>
  </ul>
  ```
  ```css
  footer .container:first-child ul {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    row-gap: 16px;
    column-gap: 3px;
  }
  ```
  모바일과 데스크탑 사이의 크기가 자연스럽게 이어지게 하기 위해서 `flex-wrap` 속성을 사용했다.
