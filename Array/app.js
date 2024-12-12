// // 1. Khai bao mang
// // Syntax (cu phap): Tukhoakhaibaobien tenmang = [phantu1, phantu2,...]
// // let numbers = [1, 2, 3, 4];
// // let seasons = ["Mua xuan", "Mua he", "Mua thu", "Mua dong"];
// // console.log(numbers);
// // console.log(seasons);
// // Su dung tu khoa new Array
// // let numbers_01= new Array(1,2,3,4);

// //2. Truy cap cac phan tu trong mang
// //2.1 Truy cap tung phan tu (Read one)
// // console.log("Truy cap phan tu thu 3 trong mang numbers=>",numbers[2]);
// // console.log("Truy cap phan tu mua he trong mang seasons=>",seasons[1]);
// //2.2 Truy cap tat cac cac phan tu trong mang (Read All)
// // for (let i = 0; i < seasons.length; i++) {
// //   console.log(`Lan lap thu ${i} la: `,seasons[i]);
// // }

// //3. Các phương thức cơ bản làm việc với mảng
// let numbers = [1, 2, 3, 4];
// //3.1 Thêm phần tử vào mảng (Create)
// //3.1.1 Thêm phần tử vào cuối mảng: push(value)
// numbers.push(-10);
// console.log("Them phan tu vao cuoi mang voi push()", numbers);
// //3.1.2 Thêm phần tử vào đầu mảng: unshift(value)
// numbers.unshift(32);
// console.log("Them phan tu vao dau mang voi unshift()", numbers);
// //3.1.2 Thêm phần tử vào vị trí bất kỳ: splice()
// //3.2 Câp nhật/Sửa phần tử trong mảng (Update)
// //3.2.1 Sử dung phép gán
// numbers[0]=0;
// console.log("Sua phan tu bang phep gan", numbers);
// //3.2.2 Sử dụng phương thức splice(index,deleteCount,value)
// numbers.splice(2,2,78);
// console.log("Sua phan tu bang phuogn thuc splice", numbers);
// //3.3 Xóa các phần tử trong mảng (Delete)
// //3.3.1 Xóa phần tử cuối mảng pop()
// numbers.pop()
// console.log("Xoa phan tu cuoi mang bang pop()",numbers);
// //3.3.2 Xóa phần tử đầu mảng pop()
// numbers.shift()
// console.log("Xoa phan tu dau mang bang shift()",numbers);
// //3.3.3 Xóa phần tử vị trí bất kỳ bằng splice()
// // Phương thức khác làm việc với mảng
// // sort(),filter(), map(), forEach(), findIndex(), reverse(), reduce()

// //4 Mảng 2 chiều
// // let matrix= [[1,2,3],[4,5,6],[7,8,9]]
// // let temp = matrix[2][1]
// // console.log("temp=",temp);

// Demo Bài tập
//BTVN1
// Buoc 1: Khai bao mang voi cac gia tri bat ky
// let arr = [true, "Nhat Ban", 0.5,1];
// // Buoc 2: Khoi tao mot bien check=-1 (khong tim thay so nguyen)
// let check = -1;
// // Buoc 3: Su dung vong lap for duyet qua tung phan tung phan tu cua mang
// //    - Neu nhu la so nguyen thi toi se in ra so do
// //      va thay doi gia tri cua bien check =1
// for(let i=0;i<arr.length;i++){
//   if(Number.isInteger(arr[i])){
//     console.log(`Vi tri phan tu so nguyen la ${i+1}: `,arr[i]);// Su dung template String
//     check=1;
//   }
// }
// // Buoc 4: RA NGOÀI VONG LAP FOR, kiem tra dieu kien bien check
// // - Neu nhu check =-1, in ra khong có nguyen trong mang
// if(check ==-1){
//   console.log("Khong co so nguyen trong mang");
// }

// BTTH
//Buoc 1: Khai bao mang todoList
let todoList = ["Go to school at 7am", "Read book at 12 am"];
let state = true;
// Buoc 2: Lay du lieu tu nguoi dung (C/R/U/D/E)
while (state) {
  let choice = prompt("Moi ban chọn C/R/U/D/E").toUpperCase();
  // Buoc 3: Su dung switch...case de xu ly luong thuc thi cua chuong trinh
  switch (choice) {
    // 3.1 Xu ly chuc nang C
    case "C": // Them cong viec vao todoList
      let newTodo = prompt("Moi ban nhap cong viec moi");
      todoList.push(newTodo);
      console.log("Danh sach cong viec sau khi them moi:");
      for (let i = 0; i < todoList.length; i++) {
        console.log(`${i + 1}.`, todoList[i]);
      }
      break;
    // 3.2 Xu ly chuc nang R
    case "R": // In danh sach cong vien
      console.log("Danh sach cong viec can lam:");
      for (let i = 0; i < todoList.length; i++) {
        console.log(`${i + 1}.`, todoList[i]);
      }
      break;
    // 3.3 Xu ly chuc nang U
    case "U":
      let updateIndex = Number(prompt("Moi ban nhap vi tri muon thay doi"));
      let updateTodo = prompt("Moi ban nhap noi dung muon thay doi");
      todoList[updateIndex - 1] = updateTodo;
      console.log("Danh sach cong viec can lam sau khi sua:");
      for (let i = 0; i < todoList.length; i++) {
        console.log(`${i + 1}.`, todoList[i]);
      }
      break;
    // 3.4 Xu ly chuc nang D
    case "D":
      let deleteIndex = Number(prompt("Moi ban nhap vi tri muon xoa"));
      todoList.splice(deleteIndex - 1, 1);
      console.log("Danh sach cong viec can lam sau khi xoa:");
      for (let i = 0; i < todoList.length; i++) {
        console.log(`${i + 1}.`, todoList[i]);
      }
      break;
    // 3.5 Xu ly chuc nang E
    case "E":
      state = false;
      console.log("Cam on ban da sú dung chuong trinh cua toi!!!")
      break;
    default:
      console.log("Lua chon cua ban khong hop le. Vui long thu lai");
      break;
  }
}
