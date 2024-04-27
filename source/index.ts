
let a1 = [-4,-2,0,2,4,6,8,10];
let a2 = [-7,-6,-5,-4,-3,-2,-1];
let a3 = [0,5,10,15,20,25,30,1000];

function arraySortedMerge(arrs:number[][]):number[]{
   let res : number[] = [];

   /* build some array of iterator */
   let iters: IterableIterator<number>[] = arrs.map(numArr => numArr[Symbol.iterator]()); 

   
   /* build a heap using an array and the sort method */
   let heap : number[][]= [];
   iters.forEach((iter, idx)=>{
      let tuple:number[] = [];
      tuple.push(iter.next().value,idx);
      heap.push(tuple);

      heap.sort((a,b)=> a[0]-b[0]);
   }) 
   //console.log(heap);

   /* build a loop that pushes all elements until nothing is left through the heap */
   while(heap.length>0){
      /* push smallest elt from heap into res */
      console.log(heap)
      let minIdx:number;
      let tuple:number[]|undefined = heap.shift();
      if(tuple!==undefined){
      res.push(tuple[0]);
      minIdx = tuple[1];

      let nextVal= iters[minIdx].next().value;
      if (nextVal!==undefined){
         heap.push([nextVal, minIdx]);
         heap.sort((a,b)=> a[0]-b[0]);
      }



      }
      
   }

   console.log(res);
   return res ;
};

arraySortedMerge([a1,a2,a3])    