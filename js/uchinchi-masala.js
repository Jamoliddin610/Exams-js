const obj = {
    arr:[15,20,12,4,-13,5],
    abs:[],
    num:0,
    str:0,
    pul: 0,
    at(index) {
        this.arr.forEach((item)=>{
             if (index == item) {
                this.abs.push(index)
                this.str = index
                
             }
             else{
                 if (this.arr.length > index) {
                     this.abs.push(this.arr[this.arr.length - index])
                     this.num = this.arr[this.arr.length - index]
                 }
                 else{
                     this.pul = undefined
                     this.abs = [undefined]
                 }
             }
            })
            if (this.abs.every((res)=> res == this.num)) {
                console.log(this.num);
            }
            else if (this.abs.some((res)=>res == this.str)) {
                console.log(this.str);
            }
             else{
                 console.log(this.pul);
             }   
            

              
    }
}
obj.at(3)