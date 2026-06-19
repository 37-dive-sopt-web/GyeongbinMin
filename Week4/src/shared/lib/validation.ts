export const validateUsername = (username: string): string | null => {
  if (!username.trim()) return null;
  if (username.length > 50) return '아이디는 50글자를 넘을 수 없습니다.';
  return null;
};

export const validatePassword = (password: string): string | null => {
  if (!password) return null;
  if (password.length < 8 || password.length > 64) {
    return '비밀번호는 8~64자여야 합니다.';
  }
  if (!/[A-Z]/.test(password)) {
    return '대문자를 1자 이상 포함해야 합니다.';
  }
  if (!/[a-z]/.test(password)) {
    return '소문자를 1자 이상 포함해야 합니다.';
  }
  if (!/[0-9]/.test(password)) {
    return '숫자를 1자 이상 포함해야 합니다.';
  }
  if (!/[^A-Za-z0-9]/.test(password)) {
    return '특수문자를 1자 이상 포함해야 합니다.';
  }
  if (/\s/.test(password)) {
    return '비밀번호에 공백을 포함할 수 없습니다.';
  }
  return null;
};

export const validatePasswordMatch = (password: string, passwordConfirm: string): string | null => {
  if (!passwordConfirm) return null;
  if (password !== passwordConfirm) {
    return '비밀번호가 일치하지 않습니다.';
  }
  return null;
};

