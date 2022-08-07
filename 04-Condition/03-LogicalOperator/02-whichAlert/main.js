// โค้ดด้านล่าง มีคำสั่ง alert อันไหนบ้างที่จะทำงาน

if (-1 || 0) alert('first'); // ทำงาน alert("first");
if (-1 && 0) alert('second'); // ไม่ทำงาน
if (null || (-1 && 1)) alert('third'); // ทำงาน alert("third");
