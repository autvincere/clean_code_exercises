
type Size = 'xs' | 'S' | 'M' | 'XL';

class Product {
    
    constructor(
        public name: string,
        public price: number = 1000,
        public size: Size = 'xs'
    )
    {}
    toString(){
        if(this.name.length === 0) {
            console.log("Name cannot be empty");
            return "";
        }
        return `${this.name}, $${this.price}, ${this.size}`}
}

(()=>{
    const bluePants = new Product('',3000,'XL');
    console.log(bluePants.toString())
})();