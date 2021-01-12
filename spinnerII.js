const toPrint = "|/-\\|/-\\|";
let timer = 100;
for (const char of toPrint) {
  setTimeout(() => {
    process.stdout.write(`\r${char}   `);
  }, timer);
  timer += 200;
}