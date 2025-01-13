function divide(x: number, y: number) {
	if (y === 0) {
	  throw new Error(
		`Division by zero. Tried to operate ${x} with divisor ${y}.`,
		{ cause: "Division by zero." },
	  );
	}
	return x / y;
  }