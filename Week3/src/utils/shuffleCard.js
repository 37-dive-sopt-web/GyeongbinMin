
/**
 * Fisher–Yates 셔플 함수
 *
 * - 매개변수 array는 섞고 싶은 배열입니다.
 * - 예시: shuffle([1, 2, 3, 4])
 *
 * 원본 배열을 직접 바꾸지 않도록 얕은 복사본을 만든 뒤 섞어 반환해요.
 * 내부 로직이나 네이밍을 바꾸셔도 전혀 상관없습니다 🙂
 */
const LEVEL_TO_GRID = {
  1: [4, 4],
  2: [6, 4],
  3: [6, 6],
};

export function shuffle(array, rng = Math.random) {
  const arr = array.slice();
  for (let i = arr.length - 1; i > 0; i -= 1) {
    const j = Math.floor(rng() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export function buildDeck(level = 1) {
  const [rows, cols] = LEVEL_TO_GRID[level] ?? LEVEL_TO_GRID[1];  
  const total = rows * cols;

  if (total % 2 !== 0) {
    throw new Error("카드 개수는 짝수여야 해요.");
  }

  const pairCount = total / 2;
  const base = Array.from({ length: pairCount }, (_, index) => index + 1);

  const duplicated = [];
  for (let i = 0; i < base.length; i += 1) {
    const value = base[i];
    duplicated.push({ id: `${value}-a`, value });
    duplicated.push({ id: `${value}-b`, value });
  }

  return shuffle(duplicated);
}
