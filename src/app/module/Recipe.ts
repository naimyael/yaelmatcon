export class Recipe{
    constructor(public recipeCode:string, 
        public recipeName:string,
         public categoryCode:string, 
         public preparationTime:number, 
         public level:number,
          public addTime:Date,
           public ingredients:string[], 
           public Preparation:string[],
            public userId:number,
             public imgUrl:string ,
             public nameAll?:string){
        
    }
}