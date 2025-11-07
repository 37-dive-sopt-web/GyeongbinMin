import { members as defaultMembers } from "./members.js";

// ID 선택자 Class 선택자 목적에 맞게 혼용
const tableBody = document.querySelector("#memberTable tbody");
const selectAll = document.querySelector("#selectAll");
const deleteBtn = document.querySelector(".delete-btn");
const openModalBtn = document.getElementById("openModalBtn");
const modal = document.querySelector("#addModal");
const closeModalBtn = document.querySelector(".close-modal");
const addForm = document.querySelector("#addForm");
const applyBtn = document.querySelector(".apply-btn");
const resetBtn = document.querySelector(".reset-btn");

// 로컬스토리지 초기화 및 데이터 로드 
let members;
try {
  const stored = localStorage.getItem("membersData");
  if (stored && JSON.parse(stored).length > 0) {
    members = JSON.parse(stored);
  } else {
    members = defaultMembers;
    localStorage.setItem("membersData", JSON.stringify(defaultMembers));
  }
} catch (e) {
  console.error("파싱 오류:", e);
  members = defaultMembers;
  localStorage.setItem("membersData", JSON.stringify(defaultMembers));
}



//  필터 적용
applyBtn.addEventListener("click", (e) => {
    e.preventDefault();
  
    const filters = {
      name: document.getElementById("name").value.trim(),
      englishName: document.getElementById("ename").value.trim(),
      github: document.getElementById("github").value.trim(),
      gender: document.getElementById("gender").value,
      role: document.getElementById("role").value,
      codeReviewGroup: document.getElementById("group").value.trim(),
      age: document.getElementById("age").value.trim(),
    };
  
    const filtered = members.filter((m) => {
      return (
        (!filters.name || m.name.includes(filters.name)) &&
        (!filters.englishName || m.englishName.includes(filters.englishName)) &&
        (!filters.github || m.github.includes(filters.github)) &&
        (filters.gender === ".." || !filters.gender || m.gender === filters.gender) &&
        (filters.role === ".." || !filters.role || m.role === filters.role) &&
        (!filters.codeReviewGroup || String(m.codeReviewGroup).includes(filters.codeReviewGroup)) &&
        (!filters.age || String(m.age).includes(filters.age))
      );
    });
  
    renderTable(filtered);
  });
  
  // 필터 초기화 버튼 전체 리랜더링
  resetBtn.addEventListener("click", (e) => {
    e.preventDefault();
    renderTable();
  });
  
// 랜더링 함수 정의
function renderTable(data = members) {
  tableBody.innerHTML = data
    .map(
      (m, i) => `
      <tr>
        <td><input type="checkbox" class="row-check" data-id="${i}"></td>
        <td>${m.name}</td>
        <td>${m.englishName}</td>
        <td><a href="https://github.com/${m.github}" target="_blank">${m.github}</a></td>
        <td>${m.gender}</td>
        <td>${m.role}</td>
        <td>${m.codeReviewGroup}</td>
        <td>${m.age}</td>
      </tr>` 
    )
    .join("");
}
renderTable();

// 전체 선택 / 해제
selectAll.addEventListener("change", (e) => {
  document.querySelectorAll(".row-check").forEach((c) => (c.checked = e.target.checked));
});

// 개별 체크박스 선택 시 전체 선택 상태 업데이트
tableBody.addEventListener("change", (e) => {
  if (!e.target.classList.contains("row-check")) return;
  const allChecks = document.querySelectorAll(".row-check");
  const checked = document.querySelectorAll(".row-check:checked");
  selectAll.checked = allChecks.length === checked.length;
});

// 멤버 삭제 
deleteBtn.addEventListener("click", () => {
  const checked = document.querySelectorAll(".row-check:checked");
  if (checked.length === 0) return alert("삭제할 멤버를 선택하세요");

  const ids = Array.from(checked).map((el) => Number(el.dataset.id));
  members = members.filter((_, i) => !ids.includes(i));

  localStorage.setItem("membersData", JSON.stringify(members));
  renderTable();
  selectAll.checked = false;
});

// 모달 열기/닫기
openModalBtn.addEventListener("click", () => (modal.style.display = "flex"));
closeModalBtn.addEventListener("click", () => (modal.style.display = "none"));
window.addEventListener("click", (e) => {
  if (e.target === modal) modal.style.display = "none";
});

// 모달 내부 버튼 
addForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = addName.value.trim();
  const englishName = addEname.value.trim();
  const github = addGithub.value.trim();
  const gender = addGender.value;
  const role = addRole.value;
  const group = addGroup.value.trim();
  const age = addAge.value.trim();

  if (!name || !englishName || !github || !gender || !role || !group || !age) {
    alert("모든 항목을 입력해주세요");
    return;
  }

  const newMember = {
    id: members.length + 1,
    name,
    englishName,
    github,
    gender,
    role,
    codeReviewGroup: Number(group),
    age: Number(age),
  };

  members.push(newMember);
  localStorage.setItem("membersData", JSON.stringify(members));
  renderTable();

  modal.style.display = "none";
  addForm.reset();
});
