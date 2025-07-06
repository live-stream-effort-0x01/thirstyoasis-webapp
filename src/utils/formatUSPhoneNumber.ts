const formatUSPhoneNumber = (value: string) => {
  if (!value) return value;
  const digitsOnly = value.replace(/[^\d]/g, '');
  const phoneNumberLength = digitsOnly.length;

  if (phoneNumberLength === 0) {
    return '+1 ';
  }

  if (phoneNumberLength <= 3) {
    return `+1 (${digitsOnly}`;
  } else if (phoneNumberLength <= 6) {
    return `+1 (${digitsOnly.slice(0, 3)}) ${digitsOnly.slice(3)}`;
  } else {
    return `+1 (${digitsOnly.slice(0, 3)}) ${digitsOnly.slice(
      3,
      6
    )}-${digitsOnly.slice(6, 10)}`;
  }
};

export default formatUSPhoneNumber;
