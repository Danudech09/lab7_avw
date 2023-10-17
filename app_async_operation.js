const func_1 = () => {
    setTimeout(() => {
        console.log('The first function done!!');
    }, 3000);
}

const func_2 = () => {
        console.log('The Second function done!!');
}

func_1();
func_2();

//Extension Code Runner
//async จะทำงานสลับกันทำงาน ฟังก์ชัน 1 มีหน่วงเวลา ฟังก์ชัน 2 เลย log ออกมาได้ก่อน